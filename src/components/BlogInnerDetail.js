"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaFacebookF,
  FaTwitter,
  FaUserAlt,
  FaLinkedinIn,
  FaPinterest,
  FaTags,
  FaRegEnvelope,
  FaPencilAlt,
  FaGlobe,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import {
  getCommentsByBlogId,
  addComments,
  getBlogById,
} from "../lib/apiService";
import { toast, Toaster } from "react-hot-toast";
import Preloader from "../elements/Preloader";
import DotLoader from "react-spinners/DotLoader";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const getAuthorName = (authorId) => {
  if (!authorId) return "Admin";
  return authorId === "4703de92977444d7a4d1ed46" ? "Azaan" : "Waseem";
};

const BlogInnerDetail = () => {
  const router = useRouter();
  const formRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState([]);
  const [blogId, setBlogId] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const parts = id.split("-");
     const  blogId=parts[parts.length - 1];
     setBlogId(blogId)

      getBlogById(blogId)
        .then(setBlog)
        .catch((err) => {
          console.error("Failed to fetch blog:", err);
        });
    }
  }, []);

  useEffect(() => {
    console.log('-------')

    console.log(blogId)
    const fetchComments = async () => {
      try {
        const response = await getCommentsByBlogId(blogId);
        setComments(response?.data || []);
      } catch (err) {
        setError("Failed to fetch comments.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchComments();
    }
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) setLoading(true);
    else setBlogLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      blogId,
      name: data.name || "",
      email: data.email || "",
      website: data.website || "",
      commentText: data.commentText || "",
    };

    try {
      const response = await addComments(payload);
      if (response.status === 200 || response.status === 201) {
        toast.success("Message Sent Successfully!");
        formRef.current.reset();
        const updatedComments = await getCommentsByBlogId(blogId);
        setComments(updatedComments?.data || []);
      } else {
        toast.error("Message Not Sent! Please try again.");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        toast.error(err.response.data.message || "Server error occurred.");
      } else if (err.request) {
        toast.error("Unable to connect to the server.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
      setBlogLoading(false);
    }
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
      <div className="blog-details-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="single-blog-inner style-2">
                <div className="thumb blog-images-container">
                  {blog.images &&
                  Array.isArray(blog.images) &&
                  blog.images.length > 0 ? (
                    blog.images.map((img, index) => (
                      <img
                        key={index}
                        src={img.url}
                        alt={img.altText || `Image ${index + 1}`}
                        style={{
                          width: "100%",
                          marginBottom: "10px",
                          objectFit: "cover",
                        }}
                      />
                    ))
                  ) : (
                    <img
                      src="/assets/img/default-blog.jpg"
                      alt="Default Blog"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>

                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> by {getAuthorName(blog.blogCreatedBy)}
                    </li>
                    <li>
                      <FaRegCalendarAlt />{" "}
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </li>
                    <li>
                      <FaRegCommentDots /> Comments ({comments.length})
                    </li>
                    {(blog.metaData?.metaKeywords ?? []).map(
                      (keyword, index) => (
                        <li key={index}>
                          <FaTags className="me-2" /> {keyword}
                        </li>
                      )
                    )}
                  </ul>

                  <h2>{blog.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.description),
                    }}
                  />

                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-lg-6 text-start">
                        <strong>Share:</strong>
                        <ul className="social-media gap-2">
                          <li className="ms-1">
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebookF />
                            </a>
                          </li>
                          <li className="ms-1">
                            <a
                              href={`https://twitter.com/share?url=${window.location.href}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter />
                            </a>
                          </li>
                          <li className="ms-1">
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li className="ms-1">
                            <a
                              href={`http://pinterest.com/pin/create/link/?url=${window.location.href}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaPinterest />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="XM6kTQPzzpQ"
                  onClose={() => setOpen(false)}
                />
              </div>

              {/* Comments by SEO */}

              <div className="blog-comment">
              <h4>COMMENTS ({comments.length})</h4>
              {comments.map((comment, index) => (
                <div
                  className={`media ${
                    index % 2 !== 0 ? "media-nesting" : ""
                  }`}
                  key={comment._id}
                >
                  <a href="#">
                    <img
                      src="/assets/img/blog/blog-comment.png"
                      alt="comment"
                    />
                  </a>
                  <div className="media-body">
                    <h6>{comment.name || "Anonymous"}</h6>
                    <a href="#">{comment.email}</a>
                    <span className="date">
                      {new Date(comment.createdAt).toLocaleDateString(
                        "en-GB"
                      )}{" "}
                      {new Date(comment.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <p>
                      {comment.commentText || "No comment message provided."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

               <form
              className="blog-comment-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <h4>LEAVE A COMMENT</h4>
              <p>
                Your email address will not be published. Required fields are
                marked
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="single-input-inner">
                    <label>
                      <FaUserAlt />
                    </label>
                    <input type="text" name="name" placeholder="Your name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-input-inner">
                    <label>
                      <FaRegEnvelope />
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <label>
                      <FaGlobe />
                    </label>
                    <input type="text" name="website" placeholder="Website" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-inner">
                    <label>
                      <FaPencilAlt />
                    </label>
                    <textarea
                      name="commentText"
                      placeholder="Write message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-base" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form> 

              {/* End Comments by SEO */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInnerDetail;
