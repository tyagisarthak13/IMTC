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
import { FileText, Database, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageUploadTab from "../components/ImageUploadTab";

const API_URL = "http://localhost:5000/api";

const ImagesPage = () => {
  const initialState = {
    data: null,
    displayName: "",
    originalName: "",
    timestamp: null,
    isUploaded: false,
    cloudinaryUrl: null,
    dbId: null,
    previousUploads: [],
  };

  const [images, setImages] = useState({
    tab1: { ...initialState },
    tab2: { ...initialState },
    tab3: { ...initialState },
    tab4: { ...initialState },
    tab5: { ...initialState },
  });

  const [activeTab, setActiveTab] = useState("tab1");
  const [loading, setLoading] = useState(false);
  const [uploadingTab, setUploadingTab] = useState(null);
  const [deletingImages, setDeletingImages] = useState({});

  // Load user's images from MongoDB when component mounts
  useEffect(() => {
    const loadUserImages = async () => {
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

        const userImages = response.data;
        const updatedImages = { ...images };

        ["tab1", "tab2", "tab3", "tab4", "tab5"].forEach((tab) => {
          const tabImages = userImages.filter((img) => img.tabName === tab);
          if (tabImages.length > 0) {
            const latestImage = tabImages[0];
            updatedImages[tab] = {
              ...updatedImages[tab],
              displayName: latestImage.displayName,
              originalName: latestImage.displayName,
              isUploaded: true,
              cloudinaryUrl: latestImage.cloudinaryUrl,
              dbId: latestImage._id,
              previousUploads: tabImages,
            };
          }
        });

        setImages(updatedImages);
      } catch (error) {
        console.error("Error loading images from MongoDB:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserImages();
  }, []);

  // Load specific tab images when tab changes
  useEffect(() => {
    const loadTabImages = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`${API_URL}/images/tab/${activeTab}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const tabImages = response.data;

        setImages((prev) => ({
          ...prev,
          [activeTab]: {
            ...prev[activeTab],
            previousUploads: tabImages,
          },
        }));
      } catch (error) {
        console.error("Error loading tab images:", error);
      }
    };

    loadTabImages();
  }, [activeTab]);

  const handleImageChange = (tabKey, base64Image, fileName, timestamp) => {
    setImages((prev) => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        data: base64Image,
        displayName: "",
        originalName: fileName,
        timestamp: timestamp,
        isUploaded: false,
        cloudinaryUrl: null,
        dbId: null,
      },
    }));
  };

  const handleRename = (tabKey, newName) => {
    setImages((prev) => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        displayName: newName,
      },
    }));
  };

  const handleUploadSuccess = async (tabKey, dbImage) => {
    setImages((prev) => ({
      ...prev,
      [tabKey]: {
        ...prev[tabKey],
        data: null,
        isUploaded: true,
        cloudinaryUrl: dbImage.cloudinaryUrl,
        displayName: dbImage.displayName,
        dbId: dbImage.id,
      },
    }));

    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(`${API_URL}/images/tab/${tabKey}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const tabImages = response.data;

        setImages((prev) => ({
          ...prev,
          [tabKey]: {
            ...prev[tabKey],
            previousUploads: tabImages,
          },
        }));
      }
    } catch (error) {
      console.error("Error reloading tab images:", error);
    }
  };

  const handleRemoveImage = (tabKey) => {
    setImages((prev) => ({
      ...prev,
      [tabKey]: {
        ...initialState,
        previousUploads: prev[tabKey].previousUploads || [],
      },
    }));
  };

  const handleUploadStart = (tabKey) => {
    setUploadingTab(tabKey);
  };

  const handleUploadEnd = () => {
    setUploadingTab(null);
  };

  const handleDeleteImage = async (imageId) => {
    try {
      setDeletingImages((prev) => ({ ...prev, [imageId]: true }));

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to delete images");
        setDeletingImages((prev) => ({ ...prev, [imageId]: false }));
        return;
      }

      await axios.delete(`${API_URL}/images/${imageId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setImages((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          previousUploads: prev[activeTab].previousUploads.filter(
            (upload) => upload._id !== imageId
          ),
        },
      }));

      alert("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Error deleting image. Please try again.");
    } finally {
      setDeletingImages((prev) => ({ ...prev, [imageId]: false }));
    }
  };

  const currentSlotState = images[activeTab] || initialState;

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Database className="h-8 w-8 mx-auto mb-4 animate-pulse" />
          <p>Loading your images from database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 bg-background min-h-screen">
      <div className="pb-4 border-b">
        <p className="text-muted-foreground mt-1">
          Manage and save images. Your images are stored per tab and persist
          across login sessions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Image Management Slots</CardTitle>
          <CardDescription>
            Select a tab to upload images. Each tab stores images separately.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs
            defaultValue="tab1"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-5 h-12">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              <TabsTrigger value="tab4">Tab 4</TabsTrigger>
              <TabsTrigger value="tab5">Tab 5</TabsTrigger>
            </TabsList>

            {["tab1", "tab2", "tab3", "tab4", "tab5"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <ImageUploadTab
                  tabName={`Tab ${tab.replace("tab", "")}`}
                  tabKey={tab}
                  imageState={images[tab]}
                  onImageChange={(data, name, ts) =>
                    handleImageChange(tab, data, name, ts)
                  }
                  onRename={(name) => handleRename(tab, name)}
                  onUploadSuccess={handleUploadSuccess}
                  onRemoveImage={handleRemoveImage}
                  isUploading={uploadingTab === tab}
                  onUploadStart={() => handleUploadStart(tab)}
                  onUploadEnd={handleUploadEnd}
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText size={20} />
            All Uploaded Images for {activeTab.replace("tab", "Tab ")}
          </CardTitle>
          <CardDescription>
            This table shows all images that have been uploaded to this tab.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Cloudinary URL</TableHead>
                  <TableHead className="w-[150px]">Upload Date</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentSlotState.previousUploads &&
                currentSlotState.previousUploads.length > 0 ? (
                  currentSlotState.previousUploads.map((upload) => (
                    <TableRow key={upload._id}>
                      <TableCell>
                        <img
                          src={upload.cloudinaryUrl}
                          alt={upload.displayName}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </TableCell>
                      <TableCell className="font-semibold">
                        {upload.displayName}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        <a
                          href={upload.cloudinaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline break-all text-xs"
                        >
                          {upload.cloudinaryUrl}
                        </a>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(upload.timestamp).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this image?"
                              )
                            ) {
                              handleDeleteImage(upload._id);
                            }
                          }}
                          disabled={deletingImages[upload._id]}
                        >
                          {deletingImages[upload._id] ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 size={14} />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="h-24 text-center text-muted-foreground"
                    >
                      No images uploaded to {activeTab.replace("tab", "Tab ")}{" "}
                      yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImagesPage;
