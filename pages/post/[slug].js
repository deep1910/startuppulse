import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { posts } from '../../data/posts';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">{post.category}</span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          <p className="text-gray-600">{post.excerpt}</p>
          {/* Add full content here when available */}
        </article>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StartupPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;