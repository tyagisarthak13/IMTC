import express from "express";
import {
  getAllImages,
  getTabImages,
  uploadImage,
  deleteImage,
  updateImageContent,
} from "../controllers/imageController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/my-images", auth, getAllImages);

router.get("/tab/:tabName", auth, getTabImages);

router.post("/upload", auth, uploadImage);

router.delete("/:id", auth, deleteImage);

router.put("/:id/content", auth, updateImageContent);

export default router;
