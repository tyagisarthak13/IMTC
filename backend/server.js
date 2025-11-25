import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

// Routes & Models
import authRoutes from "./routes/authRoutes.js";
import contactMail from "./utils/contactmail.js";
import imageRoutes from "./routes/images.js";
import chatRoutes from "./routes/chatRoutes.js";
import fileUpload from "express-fileupload";
import User from "./models/User.js";
import Message from "./models/Message.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
const onlineUsers = new Map();

// Middleware & DB
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactMail);
app.use("/api/images", imageRoutes);
app.use("/api/chat", chatRoutes);

// Socket.io Auth
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (user) {
      socket.userId = user._id.toString();
      socket.user = user;
      next();
    } else {
      next(new Error("Authentication failed"));
    }
  } catch (error) {
    next(new Error("Authentication failed"));
  }
});

// Socket.io Events
io.on("connection", async (socket) => {
  console.log("✅ User connected:", socket.user.name, "ID:", socket.userId);

  try {
    // Update user's online status in database
    await User.findByIdAndUpdate(socket.userId, {
      isOnline: true,
      lastActive: new Date(),
    });
    console.log(`✅ Updated ${socket.user.name} to online status`);
  } catch (error) {
    console.error("❌ Error updating user online status:", error);
  }

  // Add to online users map
  onlineUsers.set(socket.userId, socket.id);

  // Get current online users list
  const onlineUsersList = Array.from(onlineUsers.keys());
  console.log("📢 Online users:", onlineUsersList);

  // Broadcast to ALL connected clients
  io.emit("onlineUsers", onlineUsersList);

  socket.on("sendMessage", async (data, callback) => {
    try {
      console.log(
        "📤 Sending message from",
        socket.user.name,
        "to:",
        data.receiverId
      );

      const message = new Message({
        sender: socket.userId,
        receiver: data.receiverId,
        content: data.content,
      });

      await message.save();

      // Populate sender and receiver data
      await message.populate("sender", "name avatar");
      await message.populate("receiver", "name avatar");

      // Convert to plain object for socket emission
      const messageData = {
        _id: message._id,
        sender: {
          _id: message.sender._id.toString(),
          name: message.sender.name,
          avatar: message.sender.avatar,
        },
        receiver: {
          _id: message.receiver._id.toString(),
          name: message.receiver.name,
          avatar: message.receiver.avatar,
        },
        content: message.content,
        createdAt: message.createdAt,
        read: false,
      };

      console.log("💾 Message saved:", messageData);

      // Send to receiver if online
      const receiverSocketId = onlineUsers.get(data.receiverId);
      console.log("🎯 Receiver socket ID:", receiverSocketId);

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", messageData);
        console.log(
          `📨 Message delivered to receiver (${data.receiverId}) via socket`
        );
      } else {
        console.log(
          `❌ Receiver (${data.receiverId}) is offline, message saved to database`
        );
      }

      // Send confirmation to sender with the same message data structure
      callback({
        success: true,
        message: messageData,
      });

      console.log(`✅ Message sent successfully from ${socket.user.name}`);
    } catch (error) {
      console.error("❌ Error sending message:", error);
      callback({ success: false, error: "Failed to send message" });
    }
  });

  // Handle newMessage event for testing
  socket.on("testMessage", (data, callback) => {
    console.log("🧪 Test message received from:", socket.user.name);
    const testMessage = {
      _id: Date.now().toString(),
      sender: {
        _id: socket.userId,
        name: socket.user.name,
        avatar: socket.user.avatar,
      },
      receiver: {
        _id: data.receiverId,
        name: "Test User",
        avatar: "",
      },
      content: "This is a test message",
      createdAt: new Date(),
      read: false,
    };

    // Send test message to receiver
    const receiverSocketId = onlineUsers.get(data.receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", testMessage);
      console.log("🧪 Test message sent to receiver");
    }

    callback({ success: true, message: testMessage });
  });

  // Handle marking messages as read
  socket.on("markMessagesRead", async (data) => {
    try {
      const { userId } = data;
      await Message.updateMany(
        {
          sender: userId,
          receiver: socket.userId,
          read: false,
        },
        { read: true }
      );
      console.log(
        `✅ Messages from ${userId} marked as read by ${socket.user.name}`
      );
    } catch (error) {
      console.error("❌ Error marking messages as read:", error);
    }
  });

  socket.on("disconnect", async (reason) => {
    console.log("❌ User disconnected:", socket.user.name, "Reason:", reason);

    // Remove from online users
    onlineUsers.delete(socket.userId);

    try {
      // Update user's offline status
      await User.findByIdAndUpdate(socket.userId, {
        isOnline: false,
        lastActive: new Date(),
      });
      console.log(`✅ Updated ${socket.user.name} to offline status`);
    } catch (error) {
      console.error("❌ Error updating user offline status:", error);
    }

    // Broadcast updated online users list
    const updatedOnlineUsers = Array.from(onlineUsers.keys());
    console.log(
      "📢 Updated online users after disconnect:",
      updatedOnlineUsers
    );
    io.emit("onlineUsers", updatedOnlineUsers);
  });

  // Handle errors
  socket.on("error", (error) => {
    console.error("❌ Socket error for user:", socket.user.name, error);
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    onlineUsers: onlineUsers.size,
  });
});

// Debug endpoint to check online status
app.get("/api/debug/online-status", async (req, res) => {
  try {
    const users = await User.find().select("name email isOnline lastActive");
    const onlineUsersList = Array.from(onlineUsers.keys());

    res.json({
      onlineUsersInMemory: onlineUsersList,
      usersFromDatabase: users,
      onlineUsersCount: onlineUsers.size,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Debug endpoint to check messages
app.get("/api/debug/messages", async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("sender", "name avatar")
      .populate("receiver", "name avatar")
      .sort({ createdAt: -1 })
      .limit(10);

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
