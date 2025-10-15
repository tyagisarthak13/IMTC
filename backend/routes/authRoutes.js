import express from "express";
import {
  signup,
  signin,
  forgotPassword,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/forgot-password", forgotPassword);

export default router;
