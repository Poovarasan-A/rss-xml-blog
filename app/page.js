// app/page.js

export default function HomePage() {
  const blogPosts = [
    { id: "post-1", title: "First Blog Post" },
    { id: "post-2", title: "Second Blog Post" },
  ];

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
