// app/posts/[id]/page.js

import { notFound } from "next/navigation";

// Example blog post data
const blogPosts = {
  "post-1": {
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  "post-2": {
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
};

export default function BlogPost({ params }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
