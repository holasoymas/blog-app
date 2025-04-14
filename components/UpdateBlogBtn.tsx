'use client';

import { Blog } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

export default function UpdateBlogBtn({ blog }: { blog: Blog }) {

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // console.log("Update blog:", blog);
    redirect(`/blogs/${blog.id}/edit`);
  };

  return (
    <button
      onClick={handleUpdate}
      title="Update Blog"
      className="text-blue-600  border-black p-2 hover:text-blue-800 transition text-xl"
    >
      📝
    </button>
  );
}
