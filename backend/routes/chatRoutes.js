import express from "express";
import {
  getChatUsers,
  getMessages,
  sendMessage,
  markMessagesAsRead,
  getUnreadCount,
} from "../controllers/chatController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/users", auth, getChatUsers);
router.get("/messages/:userId", auth, getMessages);
router.post("/messages", auth, sendMessage);
router.post("/messages/read", auth, markMessagesAsRead);
router.get("/unread-count", auth, getUnreadCount);

export default router;
