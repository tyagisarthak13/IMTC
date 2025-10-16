import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Image as ImageIcon,
  Database,
  Loader2,
  Trash2,
} from "lucide-react";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Helper: Convert base64 Data URL to File object for Axios upload
const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

// Component for a single Image Upload Tab Content
const ImageUploadTab = ({
  tabName,
  tabKey,
  imageState,
  onImageChange,
  onRename,
  onUploadSuccess,
  onRemoveImage,
  isUploading,
  onUploadStart,
  onUploadEnd,
}) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const timestamp = new Date().toLocaleString();
        onImageChange(reader.result, file.name, timestamp);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSlotUpload = async () => {
    if (!imageState.data) {
      alert(`Error: No image loaded in ${tabName} to send.`);
      return;
    }

    try {
      onUploadStart(); // Start loading
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to upload images");
        onUploadEnd(); // End loading
        return;
      }

      const formData = new FormData();
      formData.append(
        "image",
        dataURLtoFile(
          imageState.data,
          imageState.displayName || imageState.originalName
        )
      );
      formData.append("tabName", tabKey);
      formData.append(
        "displayName",
        imageState.displayName || imageState.originalName
      );

      const res = await axios.post(`${API_URL}/images/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.image) {
        alert(`✅ ${tabName} uploaded successfully to MongoDB!`);
        onUploadSuccess(tabKey, res.data.image);
      } else {
        alert("Upload failed: " + res.data.message);
      }
    } catch (error) {
      console.error("Upload error:", error);
      if (error.response?.status === 401) {
        alert("Please login to upload images");
      } else {
        alert("Error uploading image. Please try again.");
      }
    } finally {
      onUploadEnd(); // End loading whether success or error
    }
  };

  const handleRemoveImage = async () => {
    if (
      window.confirm(
        `Are you sure you want to remove the image from ${tabName}?`
      )
    ) {
      if (imageState.dbId) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`${API_URL}/images/${imageState.dbId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          console.error("Error deleting from database:", error);
        }
      }
      onRemoveImage(tabKey);
    }
  };

  const inputId = tabName.replace(/\s/g, "-").toLowerCase();
  const isImageLoaded = !!imageState.data;
  const isUploaded = imageState.isUploaded;

  return (
    <div className="space-y-4 p-4 border border-t-0 rounded-b-lg">
      <h3 className="text-lg font-semibold">{tabName} Management</h3>

      {/* Upload and Preview Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Preview Area - ALWAYS shows the same initial state after upload */}
        <div className="flex flex-col items-center justify-center p-4 border rounded-md bg-gray-50 dark:bg-gray-900 w-full md:w-1/3 min-h-[150px] relative">
          <p className="text-sm text-muted-foreground mb-2">Image Preview:</p>

          {/* Show only when image is loaded locally (before upload) */}
          {isImageLoaded && !isUploaded ? (
            <>
              <img
                src={imageState.data}
                alt={`${tabName} Preview`}
                className="max-w-full max-h-[150px] h-auto rounded-md object-contain"
              />
              <Button
                onClick={handleRemoveImage}
                variant="destructive"
                size="sm"
                className="mt-2 gap-1 cursor-pointer"
              >
                <Trash2 size={14} />
                Remove Photo
              </Button>
            </>
          ) : (
            /* Show initial state (empty) - both before any image and after successful upload */
            <div className="text-center text-muted-foreground space-y-1">
              <ImageIcon className="h-6 w-6 mx-auto" />
              <p className="text-xs">No Image Loaded</p>
            </div>
          )}
        </div>

        {/* Upload + Rename Section - ALWAYS shows the same initial state after upload */}
        <div className="flex flex-col justify-center w-full md:w-2/3 space-y-4">
          {/* File Select Button - Always enabled */}
          <label htmlFor={inputId} className="cursor-pointer block">
            <Input
              id={inputId}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              disabled={isUploading} // Disable during upload
            />
            <Button asChild className="w-full" disabled={isUploading}>
              <span className="flex items-center justify-center gap-2">
                <Upload size={16} />
                {isImageLoaded && !isUploaded
                  ? "Change Loaded Image"
                  : `Select Image for ${tabName}`}
              </span>
            </Button>
          </label>

          {/* Rename Section - Only show when image is loaded locally */}
          {isImageLoaded && !isUploaded && (
            <div className="space-y-2">
              <label
                htmlFor={`rename-input-${inputId}`}
                className="text-sm font-medium block"
              >
                Rename Image:
              </label>
              <Input
                id={`rename-input-${inputId}`}
                placeholder={
                  imageState.originalName || "Enter new file name..."
                }
                value={imageState.displayName}
                onChange={(e) => onRename(e.target.value)}
                className="w-full"
                disabled={isUploading} // Disable during upload
              />
            </div>
          )}

          {/* Upload to MongoDB Button - Only show when image is loaded locally */}
          {isImageLoaded && !isUploaded && (
            <Button
              onClick={handleSlotUpload}
              className="w-full h-10 text-base gap-2 cursor-pointer"
              variant="secondary"
              disabled={isUploading} // Disable during upload
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Database size={18} />
                  Upload Image
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadTab;
