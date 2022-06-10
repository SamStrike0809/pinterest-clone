import React from "react";
import "../styles.css";

export default function Card({ post }) {
  console.log("Changes using github");
  console.log("changes from phon");
  return (
    <div>
      <img src={post.largeImageURL} />
      <p>{post.user}</p>
    </div>
  );
}
