import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Database,
  Trash2,
  Loader2,
  Edit,
  Save,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const API_URL = "http://localhost:5000/api";

const ContentPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    subject: "",
  });
  const [saving, setSaving] = useState(false);
  const [deletingImages, setDeletingImages] = useState({});
  const [activeTab, setActiveTab] = useState("all"); // Default to "all" tab

  // Load all images with content data
  useEffect(() => {
    loadAllImages();
  }, []);

  const loadAllImages = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(`${API_URL}/images/my-images`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && Array.isArray(response.data)) {
        const imagesWithContent = response.data.map((img) => ({
          ...img,
          title: img.title || img.displayName,
          description: img.description || "",
          subject: img.subject || "General",
        }));

        setImages(imagesWithContent);
      } else {
        console.error("Invalid response format:", response.data);
        setImages([]);
      }
    } catch (error) {
      console.error("Error loading images:", error);
      alert("Error loading images");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // Open edit dialog
  const handleEdit = (image) => {
    setEditingImage(image);
    setEditForm({
      title: image.title || "",
      description: image.description || "",
      subject: image.subject || "General",
    });
  };

  // Close edit dialog
  const handleCloseEdit = () => {
    setEditingImage(null);
    setEditForm({ title: "", description: "", subject: "" });
  };

  // Save content changes
  const handleSaveContent = async () => {
    if (!editingImage) return;

    try {
      setSaving(true);
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/images/${editingImage._id}/content`,
        {
          title: editForm.title,
          description: editForm.description,
          subject: editForm.subject,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data) {
        // Update local state with the response data from backend
        setImages((prev) =>
          prev.map((img) =>
            img._id === editingImage._id ? { ...img, ...response.data } : img
          )
        );

        alert("Content updated successfully!");
        handleCloseEdit();
      }
    } catch (error) {
      console.error("Error updating content:", error);
      alert("Error updating content. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Delete image
  const handleDeleteImage = async (imageId) => {
    try {
      setDeletingImages((prev) => ({ ...prev, [imageId]: true }));

      const token = localStorage.getItem("token");
      const response = await axios.delete(`${API_URL}/images/${imageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setImages((prev) => prev.filter((img) => img._id !== imageId));
        alert("Image deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image. Please try again.");
    } finally {
      setDeletingImages((prev) => ({ ...prev, [imageId]: false }));
    }
  };

  // Filter images based on active tab
  const getFilteredImages = () => {
    if (activeTab === "all") {
      return images;
    }
    return images.filter((image) => image.tabName === activeTab);
  };

  // Group filtered images by subject
  const filteredImages = getFilteredImages();
  const imagesBySubject = filteredImages.reduce((acc, image) => {
    const subject = image.subject || "Uncategorized";
    if (!acc[subject]) {
      acc[subject] = [];
    }
    acc[subject].push(image);
    return acc;
  }, {});

  // Get unique tab names for tabs
  const tabNames = ["all", ...new Set(images.map((img) => img.tabName))];

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Database className="h-8 w-8 mx-auto mb-4 animate-pulse" />
          <p>Loading your content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 bg-background min-h-screen">
      <div className="pb-4 border-b">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <p className="text-muted-foreground mt-1">
          Edit and manage your uploaded images with titles, descriptions, and
          subjects.
        </p>
      </div>

      {/* Tabs Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Organize by Tabs</CardTitle>
          <CardDescription>
            Filter your images by specific tabs or view all images together.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full overflow-x-auto flex justify-start">
              {tabNames.map((tabName) => (
                <TabsTrigger
                  key={tabName}
                  value={tabName}
                  className="flex-shrink-0"
                >
                  {tabName === "all"
                    ? "All Images"
                    : `Tab ${tabName.replace("tab", "")}`}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabNames.map((tabName) => (
              <TabsContent key={tabName} value={tabName} className="space-y-6">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon size={20} />
                    <h3 className="text-lg font-semibold">
                      {tabName === "all"
                        ? "All Uploaded Images"
                        : `Images in ${tabName.replace("tab", "Tab ")}`}
                      ({filteredImages.length})
                    </h3>
                  </div>

                  {/* Content by Subject */}
                  {Object.keys(imagesBySubject).length > 0 ? (
                    Object.entries(imagesBySubject).map(
                      ([subject, subjectImages]) => (
                        <Card key={subject} className="mb-6">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText size={20} />
                              {subject} ({subjectImages.length} images)
                            </CardTitle>
                            <CardDescription>
                              Manage content for {subject.toLowerCase()} images
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="rounded-md border">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[100px]">
                                      Image
                                    </TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Tab</TableHead>
                                    <TableHead className="w-[150px]">
                                      Upload Date
                                    </TableHead>
                                    <TableHead className="w-[200px]">
                                      Actions
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {subjectImages.map((image) => (
                                    <TableRow key={image._id}>
                                      <TableCell>
                                        <img
                                          src={image.cloudinaryUrl}
                                          alt={image.title}
                                          className="w-12 h-12 object-cover rounded-md"
                                        />
                                      </TableCell>
                                      <TableCell>
                                        <div className="font-semibold">
                                          {image.title}
                                        </div>
                                        {image.displayName !== image.title && (
                                          <div className="text-xs text-muted-foreground">
                                            Display: {image.displayName}
                                          </div>
                                        )}
                                      </TableCell>
                                      <TableCell className="max-w-[300px]">
                                        <div className="text-sm text-muted-foreground line-clamp-2">
                                          {image.description ||
                                            "No description"}
                                        </div>
                                      </TableCell>
                                      <TableCell>
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                          {image.tabName}
                                        </span>
                                      </TableCell>
                                      <TableCell className="text-sm text-muted-foreground">
                                        {new Date(
                                          image.createdAt
                                        ).toLocaleDateString()}
                                      </TableCell>
                                      <TableCell>
                                        <div className="flex gap-2">
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEdit(image)}
                                          >
                                            <Edit size={14} className="mr-1" />
                                            Edit
                                          </Button>
                                          <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => {
                                              if (
                                                window.confirm(
                                                  "Are you sure you want to delete this image?"
                                                )
                                              ) {
                                                handleDeleteImage(image._id);
                                              }
                                            }}
                                            disabled={deletingImages[image._id]}
                                          >
                                            {deletingImages[image._id] ? (
                                              <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                              <Trash2 size={14} />
                                            )}
                                          </Button>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    )
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-semibold mb-2">
                          No images found
                        </h3>
                        <p className="text-muted-foreground">
                          {tabName === "all"
                            ? "Upload some images first to manage their content."
                            : `No images found in ${tabName.replace(
                                "tab",
                                "Tab "
                              )}.`}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={!!editingImage} onOpenChange={handleCloseEdit}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Image Content</DialogTitle>
          </DialogHeader>

          {editingImage && (
            <div className="space-y-6">
              {/* Image Preview */}
              <div className="flex gap-4">
                <img
                  src={editingImage.cloudinaryUrl}
                  alt={editingImage.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Display Name:</strong> {editingImage.displayName}
                  </div>
                  <div>
                    <strong>Tab:</strong> {editingImage.tabName}
                  </div>
                  <div>
                    <strong>Uploaded:</strong>{" "}
                    {new Date(editingImage.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Edit Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title *</label>
                  <Input
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Enter image title"
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Subject *</label>
                  <Input
                    value={editForm.subject}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    placeholder="e.g., Marketing, Product, Banner"
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Enter image description..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={handleCloseEdit}
              disabled={saving}
            >
              <X size={14} className="mr-1" />
              Cancel
            </Button>
            <Button
              onClick={handleSaveContent}
              disabled={
                saving || !editForm.title.trim() || !editForm.subject.trim()
              }
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin mr-1" />
              ) : (
                <Save size={14} className="mr-1" />
              )}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContentPage;
