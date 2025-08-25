"use client";
import useClientValue from "../elements/useClientValue";

export default  function CommentItem(comment, index ) {
  const formattedDate = useClientValue(
    () =>
      new Date(comment.createdAt).toLocaleDateString("en-GB") +
      " " +
      new Date(comment.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    ""
  );

  return (
    <div
      className={`media ${index % 2 !== 0 ? "media-nesting" : ""}`}
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
        <span className="date">{formattedDate}</span>
        <p>{comment.commentText || "No comment message provided."}</p>
      </div>
    </div>
  );
}
