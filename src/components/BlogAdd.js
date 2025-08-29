"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { toast, Toaster } from "react-hot-toast";
import {
  getBlogById,
  getImageById,
  InsertBlog,
  updateBlog,
} from "../lib/apiService";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Preloader from "../elements/Preloader";
import DotLoader from "react-spinners/DotLoader";

const BlogAdd = () => {

  const router = useRouter(); // Get router from Next.js
  const { id } = router.query; // Retrieve ID from query params

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [detailedDesc, setDetailedDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogLoading, setBlogLoading] = useState(false);
  const [error, setError] = useState(null);

  const form = useRef();

  // Fetch blog data if editing (id exists)
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        setBlogLoading(true);
        const blog = await getBlogById(id);

        setTitle(blog.title || "");
        setShortDesc(blog.shortDescription || "");
        setDetailedDesc(blog.description || "");
        setTags(blog?.metaData?.metaKeywords || []);

        await fetchImages(blog._id);
      } catch (err) {
        toast.error("Failed to load blog data.");
        setError("Failed to load blog data.");
        console.error(err);
      } finally {
        setBlogLoading(false);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Fetch images by blog ID
  const fetchImages = async (blogId) => {
    try {
      const images = await getImageById(blogId);
      const urls = images.map((img) => img.url);
      setSelectedImages(urls);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) setLoading(true);
    else setBlogLoading(true);

    try {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      const formData = new FormData();
      formData.append("title", title);
      formData.append("shortDesc", shortDesc);
      formData.append("detailedDesc", detailedDesc);
      formData.append("blogCreatedBy", currentUser?.id);

      tags.forEach((tag, idx) => formData.append(`tags[${idx}]`, tag));

      selectedImages.forEach((file) => formData.append("images", file));

      // Log formData keys and values (files show filename)
      console.log("FormData contents:");
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}: ${value.name}`);
        } else {
          console.log(`${key}: ${value}`);
        }
      }

      const response = id
        ? await updateBlog(id, formData)
        : await InsertBlog(formData);

      if (response.status === 200 || response.status === 201) {
        toast.success(
          id ? "Blog updated successfully!" : "Blog created successfully!"
        );
        router.push("/blog-list"); // Using router.push instead of navigate
      } else {
        toast.error(id ? "Failed to update blog." : "Failed to create blog.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setBlogLoading(false);
    }
  };

  // Add tag on Enter
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  // Remove tag by index
  const handleTagRemove = (indexToRemove) => {
    setTags((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Add images from input
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prev) => [...prev, ...files]);
  };

  // Delete selected image by index
  const handleDeleteImage = (indexToDelete) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  if (loading) return <Preloader />;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      {blogLoading && (
        <div className="loader-overlay">
          <DotLoader
            color="#FF5722"
            size={60}
            cssOverride={{ display: "block", margin: "0 auto" }}
          />
        </div>
      )}

      <div className="request-quote-area">
        <div className="container">
          <div className="request-quote-inner">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <img
                    src="/assets/img/request-quote/1.png"
                    alt="snag-packers-movers"
                  />
                  BLOG Edit
                </button>
              </li>
            </ul>

            <form ref={form} onSubmit={handleSubmit}>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <h6 className="subtitle">Title:</h6>
                        <div className="col-lg-12">
                          <div className="single-input-inner style-border">
                            <label>
                              <span className="text-danger">*</span>
                            </label>

                            <input
                              type="text"
                              name="title"
                              placeholder="Enter blog title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <h6 className="subtitle">Attachments:</h6>
                        <div className="col-lg-12 mb-4">
                          <input
                            type="file"
                            className="d-none"
                            id="bookingFiles"
                            onChange={handleImageChange}
                            accept=".jpg,.jpeg,.png,.webp,.gif,.bmp,.tiff,.svg"
                            multiple
                          />
                          <label className="dragAndDrop" htmlFor="bookingFiles">
                            <img
                              src="/assets/img/icon/upload-file.png"
                              alt=""
                            />
                            <p>
                              <span>Click to upload</span>
                            </p>
                            <span>PNG, JPG (max. 800x400px)</span>
                          </label>

                          {selectedImages.map((img, i) => {
                            const isFile = img instanceof File;
                            const src = isFile
                              ? URL.createObjectURL(img)
                              : `${img}`;

                            return (
                              <div
                                key={i}
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  marginRight: 8,
                                  marginBottom: 8,
                                  marginTop: 5,
                                }}
                              >
                                <div
                                  onClick={() => handleDeleteImage(i)}
                                  style={{
                                    position: "absolute",
                                    top: -5,
                                    right: -5,
                                    background: "#ff4d4d",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: 20,
                                    height: 20,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    fontSize: 14,
                                    boxShadow: "0 0 3px rgba(0,0,0,0.3)",
                                    zIndex: 1,
                                  }}
                                >
                                  ×
                                </div>

                                <img
                                  src={src}
                                  alt={`blog-${i}`}
                                  style={{
                                    width: 100,
                                    height: 100,
                                    objectFit: "cover",
                                    borderRadius: 8,
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <h6 className="subtitle">Short Description :</h6>
                        <div className="col-lg-12 mb-4">
                          <div className="single-input-inner style-border">
                            <label>
                              <span className="text-danger">*</span>
                            </label>
                            <ReactQuill
                              theme="snow"
                              value={shortDesc}
                              onChange={setShortDesc}
                              placeholder="Write a short summary..."
                              className="short-desc-editor"
                            />
                          </div>
                        </div>
                        <h6 className="subtitle">Detail Description :</h6>
                        <div className="col-lg-12 mb-4">
                          <div className="single-input-inner style-border">
                            <ReactQuill
                              theme="snow"
                              value={detailedDesc}
                              onChange={setDetailedDesc}
                              placeholder="Write full content..."
                              className="short-desc-editor"
                            />
                          </div>
                        </div>
                        <h6 className="subtitle">Meta Tags :</h6>
                        <div className="col-lg-12 mb-4">
                          <div className="single-input-inner style-border">
                            <input
                              type="text"
                              placeholder="Type and press enter to add a tag"
                              value={tagInput}
                              onChange={(e) => setTagInput(e.target.value)}
                              onKeyDown={handleTagKeyDown}
                            />
                          </div>
                          <div
                            className="mb-2"
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                            }}
                          >
                            {tags.map((tag, index) => (
                              <div className="widget widget_tags" key={index}>
                                <div className="tagcloud">
                                  {/* <Link>{tag}</Link> */}
                                  <Link href={`/tags/${encodeURIComponent(tag)}`}>{tag}</Link>

                                  <button
                                    type="button"
                                    onClick={() => handleTagRemove(index)}
                                    style={{
                                      marginLeft: "8px",
                                      background: "transparent",
                                      border: "none",
                                      fontWeight: "bold",
                                      cursor: "pointer",
                                    }}
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button className="btn btn-base" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAdd;
