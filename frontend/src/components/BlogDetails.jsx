import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '/src/components/ui/skeleton';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/posts/${slug}/`); // ✅ direct slug-based lookup
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        <Skeleton className="h-10 w-1/2 mb-4" />
        <Skeleton className="h-5 w-1/3 mb-6" />
        <Skeleton className="h-80 w-full mb-8" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-11/12 mb-2" />
        <Skeleton className="h-5 w-10/12" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-zinc-900 border-zinc-800 rounded-2xl shadow-lg">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
          )}
          <CardContent className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            <p className="text-gray-400 text-sm mb-6">
              By {post.author} · {format(new Date(post.created_at), 'MMMM d, yyyy')} · {post.category?.name}
            </p>
            <div className="prose prose-invert max-w-none text-white leading-relaxed">
              {post.content.split('\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
