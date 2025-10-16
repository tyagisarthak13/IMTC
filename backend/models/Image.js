import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    tabName: {
      type: String,
      required: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    cloudinaryUrl: {
      type: String,
      required: true,
      trim: true,
    },
    cloudinaryPublicId: {
      type: String,
      required: true,
      trim: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    subject: { type: String, default: "" },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);
export default Image;
