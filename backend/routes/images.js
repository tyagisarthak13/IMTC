import express from "express";
import {
  getAllImages,
  getTabImages,
  uploadImage,
  deleteImage,
} from "../controllers/imageController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/my-images", auth, getAllImages);

router.get("/tab/:tabName", auth, getTabImages);

router.post("/upload", auth, uploadImage);

router.delete("/:id", auth, deleteImage);

export default router;
