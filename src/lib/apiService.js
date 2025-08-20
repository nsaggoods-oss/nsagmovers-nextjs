import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,

  timeout: 10000, // 10 seconds timeout
  // headers: {
  //   "Content-Type": "application/json",
  // },//
});

export const sendEmail = async (mailData) => {
  try {
    const response = await apiClient.post("/api/sendEmail", mailData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendQuote = async (quoteData) => {
  try {
    const response = await apiClient.post("/api/sendQuote", quoteData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const InsertBlog = async (blogs) => {
  try {
    const response = await apiClient.post("/api/blogs", blogs);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateBlog = async (blogId,quoteData) => {
  try {
    const response = await apiClient.put(`/api/blogs?id=${blogId}`, quoteData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getBlogs = async (page,debouncedSearchTerm='') => {
  try {
    const response = await apiClient.get(`/api/blogs?page=${page}&title=${debouncedSearchTerm}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email,password) => {
  try {
    const response = await apiClient.post(`/api/login`,{
       email,
    password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

  export const getBlogById = async (blogId) => {
    try {
      const response = await apiClient.get(`/api/blogs/byId?id=${blogId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const blogDelete = async (selectedBlogId) => {
  try {
    const response = await apiClient.delete(`/api/blogs/?id=${selectedBlogId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getImageById = async (blogId) => {
  try {
    const response = await apiClient.get(`/api/images?id=${blogId}`);
    return response.data.Images;
  } catch (error) {
    throw error;
  }
};

export const getBlogsWithPagination = async () => {
  try {
    const response = await apiClient.get("/api/blogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCommentsByBlogId = async (blogId) => {
  try {
    const response = await apiClient.get(`/api/comments/${blogId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addComments = async (commentData) => {
  try {
    const response = await apiClient.post("/api/comments", commentData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get("/api/users");
    return response.data.Users;
  } catch (error) {
    throw error;
  }
};