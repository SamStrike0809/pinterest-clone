import React from "react";
import "../styles.css";

export default function Card({ post }) {
  console.log("Changes using gitpod");
  return (
    <div>
      <img src={post.largeImageURL} />
      <p>{post.user}</p>
    </div>
  );
}
