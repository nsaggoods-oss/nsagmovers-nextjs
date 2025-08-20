"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { blogDelete, getBlogs, getUsers } from "../lib/apiService";
import Preloader from "../elements/Preloader";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import DotLoader from "react-spinners/DotLoader";

const BlogListPage = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogLoading, setBlogLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Auth check (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login");
      }
    }
  }, [router]);

  // Fetch blogs
  const fetchBlogs = async () => {
    if (loading) {
      setLoading(true);
    } else {
      setBlogLoading(true);
    }

    try {
      const response = await getBlogs(page, debouncedSearchTerm);
      setBlogs(response.blogs);
      setTotalPages(Math.ceil(response.total / response.limit));
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

  useEffect(() => {
    fetchBlogs();
  }, [page, debouncedSearchTerm]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const handleDeleteBlog = async () => {
    try {
      const response = await blogDelete(selectedBlogId);
      if (response) {
        toast.success("Blog Deleted!");
        fetchBlogs();
        setShowModal(false);
      } else {
        toast.error("Blog Not Deleted! Please try again.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

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
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  type="button"
                  role="tab"
                >
                  <img
                    src="/assets/img/request-quote/1.png"
                    alt="snag-packers-movers"
                  />
                  BLOG LIST
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="table-container"
                        style={{ overflowX: "auto", maxHeight: "500px" }}
                      >
                        <div className="sidebar-areas">
                          <div className="widget widget_search d-flex w-100">
                            <form className="search-form w-100" onSubmit={(e) => e.preventDefault()}>
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Search blogs..."
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerm(e.target.value)}
                                />
                              </div>
                              <button className="submit-btn" type="submit">
                                <FaSearch />
                              </button>
                            </form>
                            <Link className="btn btn-base" href="/blog-create">
                              CREATE
                            </Link>
                          </div>
                        </div>

                        <table
                          className="table table-striped table-bordered align-middle"
                          style={{ minWidth: "800px" }}
                        >
                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>Title</th>
                              <th>Created By</th>
                              <th>Created At</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {blogs.map((blog, index) => (
                              <tr key={blog._id || index}>
                                <td>{index + 1 + (page - 1) * 10}</td>
                                <td>{blog.title}</td>
                                <td>
                                  {users.find(
                                    (user) => user._id === blog.blogCreatedBy
                                  )?.name || "Unknown"}
                                </td>
                                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                                <td>
                                  <Link href={`/blog-edit/${blog._id}`} className="me-2" title="Edit">
                                    <i className="bi bi-pencil-square"></i>
                                  </Link>
                                  <button
                                    className="btn btn-link p-0"
                                    title="Delete"
                                    onClick={() => {
                                      setSelectedBlogId(blog._id);
                                      setShowModal(true);
                                    }}
                                  >
                                    <i className="bi bi-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <ul className="pagination">
                    <li className={page === 1 ? "disabled" : ""}>
                      <Link href="#" className="page-numbers" onClick={(e) => {
                        e.preventDefault();
                        if (page > 1) setPage(page - 1);
                      }}>
                        <FaArrowLeft /> Prev
                      </Link>
                    </li>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className={`page-numbers ${page === index + 1 ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setPage(index + 1);
                          }}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}

                    <li className={page === totalPages ? "disabled" : ""}>
                      <Link href="#" className="page-numbers" onClick={(e) => {
                        e.preventDefault();
                        if (page < totalPages) setPage(page + 1);
                      }}>
                        NEXT <FaArrowRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this blog?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDeleteBlog}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogListPage;
