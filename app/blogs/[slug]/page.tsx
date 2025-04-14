"use client";

import Image from "next/image";
import { formatDate } from "@/app/utils/date";
import { use } from "react";
import { BackBtn } from "@/components/Button";
import { notFound } from "next/navigation";
import type { Blog } from "@/types";
import { useUserAuth } from "@/hooks/userAuth";
import AuthGuard from "@/hooks/AuthGuard";
import LoadingComponent from "@/components/LoadingComponent";

export default function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const { isLoading, isChecking, blogs } = useUserAuth(true);

  if (isLoading || isChecking || !blogs) return <LoadingComponent />;

  // console.log(blogs);

  const blog = blogs?.find(b => b.id === slug);

  // if blog not found go to 404 error page 
  if (!blog) return notFound();

  return (
    <AuthGuard>
      <div className="max-w-3xl mx-auto p-6">

        <BackBtn />

        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-md p-6">
          <Image
            src={blog.image}
            width={1200}
            height={600}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-xl"
            priority // for preloading
          />
          <h1 className="text-3xl font-bold mt-6 mb-2">{blog.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Posted on {formatDate(new Date(blog.createdAt))}
          </p>
          <p className="text-lg leading-relaxed">{blog.description}</p>
        </div>
      </div>
    </AuthGuard>
  );
}
