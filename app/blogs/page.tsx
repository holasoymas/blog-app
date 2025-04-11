"use client";

import { dummyBlogs } from "@/data/dummyBlogs";
import BlogCard from "@/components/BlogCard";
import { LoginData } from '@/types';
import { getItem } from '../utils/storage';

const Blogs = () => {

  const isLoggedIn = getItem<LoginData>("authUser");
  console.log(isLoggedIn)

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}

export default Blogs;
