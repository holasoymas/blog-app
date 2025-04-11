"use client";

import { dummyBlogs } from "@/data/dummyBlogs";
import { use } from "react";
import { formatDate } from "@/app/utils/date";
import Image from "next/image";

export default function Blog({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = use(params)

  console.log("Parmas", params);
  const blog = dummyBlogs.find(b => b.id === slug);
  console.log(blog)

  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found</p>;

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow">
        <Image
          src={blog.image}
          width={1200}
          height={600}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h1 className="text-3xl font-bold mt-6 mb-2">{blog.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Posted on {formatDate(new Date(blog.createdAt))}
        </p>
        <p className="text-lg leading-relaxed">
          {blog.description}
        </p>
      </div>
    </>
  )
}

