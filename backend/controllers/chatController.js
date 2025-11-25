import Message from "../models/Message.js";
import User from "../models/User.js";

// Get all users for chat (excluding current user)
export const getChatUsers = async (req, res) => {
  try {
    const currentUserId = req.user.id;

    // Get all users except current user
    const users = await User.find({ _id: { $ne: currentUserId } })
      .select("name email avatar isOnline lastActive createdAt")
      .sort({ isOnline: -1, name: 1 });

    // Get unread message counts for each user
    const usersWithUnread = await Promise.all(
      users.map(async (user) => {
        const unreadCount = await Message.countDocuments({
          sender: user._id,
          receiver: currentUserId,
          read: false,
        });

        // Get last message between current user and this user
        const lastMessage = await Message.findOne({
          $or: [
            { sender: currentUserId, receiver: user._id },
            { sender: user._id, receiver: currentUserId },
          ],
        })
          .sort({ createdAt: -1 })
          .select("content createdAt")
          .lean();

        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          isOnline: user.isOnline,
          lastActive: user.lastActive,
          unreadCount,
          lastMessage: lastMessage || null,
        };
      })
    );

    res.json(usersWithUnread);
  } catch (error) {
    console.error("Error fetching chat users:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get messages between current user and selected user
export const getMessages = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const { userId } = req.params;

    // Validate if user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get messages between two users
    const messages = await Message.find({
      $or: [
        { sender: currentUserId, receiver: userId },
        { sender: userId, receiver: currentUserId },
      ],
    })
      .populate("sender", "name avatar")
      .populate("receiver", "name avatar")
      .sort({ createdAt: 1 })
      .lean();

    // Mark messages as read
    await Message.updateMany(
      {
        sender: userId,
        receiver: currentUserId,
        read: false,
      },
      {
        read: true,
        delivered: true,
      }
    );

    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Send a new message
export const sendMessage = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const { receiverId, content, messageType = "text" } = req.body;

    // Validate required fields
    if (!receiverId || !content) {
      return res
        .status(400)
        .json({ message: "Receiver ID and content are required" });
    }

    // Validate if receiver exists
    const receiverExists = await User.findById(receiverId);
    if (!receiverExists) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    // Create new message
    const message = new Message({
      sender: currentUserId,
      receiver: receiverId,
      content: content.trim(),
      messageType,
    });

    await message.save();

    // Populate sender and receiver info
    await message.populate("sender", "name avatar");
    await message.populate("receiver", "name avatar");

    res.status(201).json({
      success: true,
      message: message,
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Mark messages as read
export const markMessagesAsRead = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const { senderId } = req.body;

    await Message.updateMany(
      {
        sender: senderId,
        receiver: currentUserId,
        read: false,
      },
      {
        read: true,
        delivered: true,
      }
    );

    res.json({ success: true, message: "Messages marked as read" });
  } catch (error) {
    console.error("Error marking messages as read:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get unread message count
export const getUnreadCount = async (req, res) => {
  try {
    const currentUserId = req.user.id;

    const unreadCount = await Message.countDocuments({
      receiver: currentUserId,
      read: false,
    });

    res.json({ unreadCount });
  } catch (error) {
    console.error("Error getting unread count:", error);
    res.status(500).json({ message: "Server error" });
  }
};
