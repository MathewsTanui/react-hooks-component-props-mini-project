import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log("Posts:", posts); 
  return (
    <main>
      {/* Check if posts is defined before calling map */}
      {posts && posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
