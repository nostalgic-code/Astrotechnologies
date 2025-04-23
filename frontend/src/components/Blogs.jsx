import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/"); // 👈 make sure this matches your Django backend
        if (!res.ok) {
          const errorText = await res.text(); // In case response is HTML
          throw new Error(`Failed to load: ${res.status}\n${errorText}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading)
    return <div className="text-center py-10 text-lg font-medium">Loading blog posts…</div>;
  if (error)
    return <div className="text-center py-10 text-red-500 font-semibold">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Latest Insights</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full shadow-md rounded-2xl overflow-hidden">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
            )}
            <CardContent className="flex-grow p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                By {post.author} in {post.category?.name || "General"} ·{" "}
                {format(new Date(post.created_at), "MMMM d, yyyy")}
              </p>
              <p className="text-base leading-relaxed line-clamp-3">{post.content}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
             <Link to={`/post/${post.slug}`} >
              <Button variant="link" className="px-0">
                Read More
              </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
