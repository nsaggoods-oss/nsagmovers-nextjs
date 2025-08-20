import React from "react";
import {
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaTags,
  FaUserAlt,
} from "react-icons/fa";
import Link from "next/link";
import DOMPurify from "dompurify";
import { slugify } from "../elements/Helpers";
import { useRouter } from 'next/router';

const getAuthorName = (authorId) => {
  if (!authorId) return "Admin";
  return authorId === "4703de92977444d7a4d1ed46" ? "Azaan" : "Waseem";
};

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${slugify(blog.title)}-${blog._id}`);
  };

  return (
    <div className="single-blog-inner style-2 mb-4" onClick={handleClick}>
      <div className="thumb blog-image-container">
        <img
          src={`${blog?.images?.[0]?.url}` || "/assets/img/default-blog.jpg"}
          alt={blog.images?.[0]?.altText || blog.title}
        />
      </div>
      <div className="details">
        <ul className="blog-meta">
          <li>
            <FaUserAlt /> by {getAuthorName(blog.blogCreatedBy)}
          </li>
          <li>
            <FaRegCalendarAlt /> {new Date(blog.createdAt).toLocaleDateString()}
          </li>
          <li>
            <FaRegCommentDots /> Comments(3)
          </li>
          {blog?.metaData?.metaKeywords?.slice(0, 3)?.map((keyword, index) => (
            <li key={index}>
              <FaTags className="me-2" /> {keyword}
            </li>
          ))}
        </ul>
        <h2>
        <Link href={`/blog/${slugify(blog.title)}-${blog._id}`}>
       

          {blog?.title}
         
        </Link>
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.shortDescription),
          }}
        />
        <Link
          className="btn btn-base"
          href={`/blog/${slugify(blog.title)}-${blog._id}`}
          query={{ blog }}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
