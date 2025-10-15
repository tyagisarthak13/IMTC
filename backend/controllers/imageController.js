import express from "express";
import Image from "../models/Image.js";
import { uploadToCloudinary } from "../utils/uploadImage.js";
import { v2 as cloudinary } from "cloudinary";

export const getAllImages = async (req, res) => {
  try {
    const images = await Image.find({ uploadedBy: req.user._id }).sort({
      tabName: 1,
      createdAt: -1,
    });
    res.json(images);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching images", error: error.message });
  }
};

export const getTabImages = async (req, res) => {
  try {
    const images = await Image.find({
      tabName: req.params.tabName,
      uploadedBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(images);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tab images", error: error.message });
  }
};

export const uploadImage = async (req, res) => {
  try {
    const { tabName, displayName } = req.body;

    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "No image file provided" });
    }

    // Upload to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(req.files.image);

    // Create new image record in MongoDB
    const image = new Image({
      tabName,
      displayName: displayName || req.files.image.name,
      cloudinaryUrl: cloudinaryResult.secure_url,
      cloudinaryPublicId: cloudinaryResult.public_id,
      uploadedBy: req.user._id,
    });

    await image.save();

    res.status(201).json({
      message: "Image uploaded successfully",
      image: {
        id: image._id,
        tabName: image.tabName,
        displayName: image.displayName,
        cloudinaryUrl: image.cloudinaryUrl,
        timestamp: image.timestamp,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading image", error: error.message });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    await cloudinary.uploader.destroy(image.cloudinaryPublicId);

    await Image.findByIdAndDelete(req.params.id);

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting image", error: error.message });
  }
};
