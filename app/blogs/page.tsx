"use client";

import BlogCard from "@/components/BlogCard";
import { getItem } from '../utils/storage';
import { Blog } from "@/types";
import { sortBlogsByDate } from "../utils/date";

const Blogs = () => {

  const blogs = getItem<Blog[]>("blogs");

  const sortedBlogs = blogs ? sortBlogsByDate(blogs) : [];
  // console.log(sortedBlogs);

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs && sortedBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}

export default Blogs;
