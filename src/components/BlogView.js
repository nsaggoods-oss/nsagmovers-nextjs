"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaSearch,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import { getBlogs } from "../lib/apiService";
import BlogCard from "../components/BlogCard";
import Preloader from "../elements/Preloader";
import DotLoader from "react-spinners/DotLoader";
import { slugify } from "../elements/Helpers";

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogLoading, setBlogLoading] = useState(false);

  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
  });
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPagination((prev) => ({ ...prev, page: 1 }));
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (loading) {
        setLoading(true);
      } else {
        setBlogLoading(true);
      }

      try {
        const { blogs, total, page, limit } = await getBlogs(
          pagination.page,
          debouncedSearchTerm
        );
        setBlogs(blogs);

        setPagination({ total, page, limit });
        setTotalPages(Math.ceil(total / limit));
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        if (loading) {
          setLoading(false);
        } else {
          setBlogLoading(false);
        }
      }
    };

    fetchBlogs();
  }, [pagination.page, debouncedSearchTerm, loading]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  if (loading) return <Preloader />;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <>
      {blogLoading && (
        <div className="loader-overlay">
          <DotLoader
            color="#FF5722"
            size={60}
            cssOverride={{ display: "block", margin: "0 auto" }}
          />
        </div>
      )}

      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            {/* Blog List Section */}
            <div className="col-lg-8">
              <div className="single-blog-inner style-2">
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
 
              <ul className="pagination">
                <li className={pagination.page === 1 ? "disabled" : ""}>
                  <Link
                    href="#/"
                    className="page-numbers"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pagination.page - 1);
                    }}
                  >
                    <FaArrowLeft /> Prev
                  </Link>
                </li>

                {Array.from({ length: totalPages }, (_, idx) => (
                  <li key={idx}>
                    <Link
                      href="#/"
                      className={`page-numbers ${
                        pagination.page === idx + 1 ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(idx + 1);
                      }}
                    >
                      {idx + 1}
                    </Link>
                  </li>
                ))}

                <li
                  className={pagination.page === totalPages ? "disabled" : ""}
                >
                  <Link
                    href="#/"
                    className="page-numbers"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pagination.page + 1);
                    }}
                  >
                    NEXT <FaArrowRight />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="sidebar-area">
                {/* Search Widget */}
                <div className="widget widget_search">
                  <form
                    className="search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Search here..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <button className="submit-btn" type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>

                {/* Recent Posts */}
                <div className="widget widget-recent-post">
                  <h4 className="widget-title">
                    RECENT POST <span className="dot" />
                  </h4>
                  <ul>
                    {blogs
                      .sort(
                        (a, b) => new Date(b.blogDate) - new Date(a.blogDate)
                      )
                      .slice(0, 3)
                      .map((blog) => (
                        <li key={blog?._id}>
                          <div className="single-recent-post">
                            <div className="thumb">
                              <img
                                className="blog-image"
                                src={
                                  blog?.images?.[0]?.url
                                    ? `${blog?.images?.[0].url}`
                                    : "/assets/img/widget/1.png"
                                }
                                alt={blog?.images?.[0]?.altText || blog?.title}
                              />
                            </div>
                            <div className="details">
                              <h6>
                                <Link
                                 href={`/blog/${slugify(blog.title)}-${blog._id}`}
                                  query={{ blog }}
                                >
                                  {blog?.title}
                                </Link>
                              </h6>
                              <p>
                                <FaCalendarAlt className="me-1" />
                                {new Date(blog?.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Tag Widget */}
                <div className="widget widget_tags">
                  <h4 className="widget-title">
                    POPULAR TAGS <span className="dot" />
                  </h4>
                  <div className="tagcloud">
                    {[
                      ...new Set(blogs.flatMap((b) => b?.metaData?.metaKeywords)),
                    ].map((tag, index) => (
                      <Link href="#/" key={index}>
                        {tag?.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
