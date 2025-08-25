"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
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
import useClientValue from "../elements/useClientValue";
import CommentItem from "../elements/CommentItem";
import DotLoader from "react-spinners/DotLoader";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const getAuthorName = (authorId) => {
  if (!authorId) return "Admin";
  return authorId === "4703de92977444d7a4d1ed46" ? "Azaan" : "Waseem";
};

const BlogInnerDetail = ({ blog: initialBlog }) => {
  const router = useRouter();
  const formRef = useRef();

  // State
  const [isOpen, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false); // form loading
  const [blogLoading, setBlogLoading] = useState(false); // page spinner
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState(initialBlog || {});
  const [safeHTML, setSafeHTML] = useState("");
  const [blogId, setBlogId] = useState(initialBlog?._id || null);

  const currentUrl = useClientValue(() => window.location.href, "");
  const { id } = router.query;

  // Blog createdAt formatting
  const createdAt = useMemo(() => {
    if (!blog?.createdAt) return "";
    return new Date(blog.createdAt).toLocaleDateString("en-GB");
  }, [blog?.createdAt]);

  // Sanitize blog description
  useEffect(() => {
    if (blog?.description) {
      setSafeHTML(DOMPurify.sanitize(blog.description));
    }
  }, [blog?.description]);

  // Fetch blog if not passed via props
  useEffect(() => {
    if (id && !initialBlog) {
      const parts = id.split("-");
      const bId = parts[parts.length - 1];
      setBlogId(bId);

      setBlogLoading(true);
      getBlogById(bId)
        .then(setBlog)
        .catch((err) => {
          console.error("Failed to fetch blog:", err);
          setError("Failed to fetch blog");
        })
        .finally(() => setBlogLoading(false));
    }
  }, [id, initialBlog]);

  // Fetch comments when blogId is ready
  useEffect(() => {
    if (!blogId) return;

    const fetchComments = async () => {
      try {
        const response = await getCommentsByBlogId(blogId);
        setComments(response?.data || []);
      } catch (err) {
        setError("Failed to fetch comments.");
        console.error(err);
      }
    };

    fetchComments();
  }, [blogId]);

  // Handle comment form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  if (blogLoading) return <Preloader />;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      {loading && (
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
                {/* Blog Images */}
                <div className="thumb blog-images-container">
                  {blog.images?.length > 0 ? (
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

                {/* Blog Details */}
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <FaUserAlt /> by {getAuthorName(blog.blogCreatedBy)}
                    </li>
                    <li>
                      <FaRegCalendarAlt /> {createdAt}
                    </li>
                    <li>
                      <FaRegCommentDots /> Comments ({comments.length})
                    </li>
                    {blog.metaData?.metaKeywords?.map((keyword, i) => (
                      <li key={i}>
                        <FaTags className="me-2" /> {keyword}
                      </li>
                    ))}
                  </ul>

                  <h2>{blog.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: safeHTML }} />

                  {/* Share Buttons */}
                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-lg-6 text-start">
                        <strong>Share:</strong>
                        <ul className="social-media gap-2">
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://twitter.com/share?url=${currentUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`http://pinterest.com/pin/create/link/?url=${currentUrl}`}
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

                {/* Video Modal */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="XM6kTQPzzpQ"
                  onClose={() => setOpen(false)}
                />
              </div>

              {/* Comments Section */}
              <div className="blog-comment">
                <h4>COMMENTS ({comments.length})</h4>
                {comments.map((comment, index) => (
                  <CommentItem key={comment._id || index} comment={comment} />
                ))}
              </div>

              {/* Comment Form */}
              <form
                className="blog-comment-form"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <h4>LEAVE A COMMENT</h4>
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
                      <input type="email" name="email" placeholder="Your email" />
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
              {/* End Comments Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInnerDetail;
