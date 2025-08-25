"use client";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { getBlogs } from "../lib/apiService";
import Preloader from "../elements/Preloader";
import { slugify } from "../elements/Helpers";
import DOMPurify from "dompurify";

const BlogTwo = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlogs();
        setBlogs(response.blogs || []);
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // run once on mount

  if (loading) return <Preloader />;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <div className="blog-area pd-top-115 pd-bottom-90">
      <div className="container p-sm-0">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-title">
              <h4 className="subtitle">LATEST BLOG</h4>
              <h2 className="title">Moving Tips & Industry Insights</h2>
              <p className="content">
                Stay informed with expert advice, helpful guides, and the latest
                news from Pakistan’s trusted movers. Discover ways to make your
                next move smooth, secure, and stress-free.
              </p>
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div className="row justify-content-center">
          {blogs.map((blog) => {
            const authorName =
              blog.blogCreatedBy === "4703de92977444d7a4d1ed46"
                ? "Azaan"
                : blog.blogCreatedBy
                ? "Waseem"
                : "Admin";

            const blogImage =
              blog.images?.[0]?.url || "assets/img/default-blog.jpg";
            const altText = blog.images?.[0]?.altText || blog.title;

            const safeHTML = DOMPurify.sanitize(blog.shortDescription || "");

            return (
              <div key={blog._id} className="col-lg-4 col-md-6">
                <div className="single-blog-inners">
                  <div className="thumb">
                    <img src={blogImage} alt={altText} />
                  </div>
                  <div className="details">
                    <h4>
                      <Link
                        href={`/blog/${slugify(blog.title)}-${blog._id}`}
                        query={{ blog }}
                      >
                        {blog.title}
                      </Link>
                    </h4>

                    <ul className="blog-meta">
                      <li>
                        <FaUserAlt /> By{" "}
                        <span className="ms-1">{authorName}</span>
                      </li>
                      <li>
                        <FaRegCalendarAlt />{" "}
                        {new Date(blog.updatedAt).toLocaleDateString()}
                      </li>
                    </ul>

                    {/* Short description safely injected */}
                    <div
                      className="blog-description"
                      dangerouslySetInnerHTML={{ __html: safeHTML }}
                    />

                    <Link
                      className="read-more-text"
                      href={`/blog/${slugify(blog.title)}-${blog._id}`}
                      query={{ blog }}
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
