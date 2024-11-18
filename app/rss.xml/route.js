// app/rss.xml/route.js

import { NextResponse } from "next/server";
import RSS from "rss";

// Example blog posts data (replace this with actual data from a CMS or database)
const blogPosts = [
  {
    id: "post-1",
    title: "First Blog Post",
    description: "This is the first post on my blog.",
    date: new Date("2024-01-01"),
    url: "https://your-domain.com/posts/post-1",
  },
  {
    id: "post-2",
    title: "Second Blog Post",
    description: "This is the second post on my blog.",
    date: new Date("2024-02-01"),
    url: "https://your-domain.com/posts/post-2",
  },
];

export async function GET() {
  // Create a new RSS feed instance
  const feed = new RSS({
    title: "My Blog RSS Feed",
    description: "Stay updated with the latest posts from my blog.",
    site_url: "https://your-domain.com",
    feed_url: "https://your-domain.com/rss.xml",
    language: "en",
  });

  // Add each blog post to the feed
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.date,
    });
  });

  // Return the generated RSS XML as a response
  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
