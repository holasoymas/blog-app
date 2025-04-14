'use client';

import { getItem, setItem } from "@/app/utils/storage";
import { Blog } from "@/types";
import React from "react";

export default function DeleteBlogBtn({ blog }: { blog: Blog }) {

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const con = window.confirm("Are you sure you want to delete the blog ?");
    if (!con) return;

    const { id } = blog;

    const savedBlogs = getItem<Blog[]>("blogs") || [];

    // filter out all the blogs except to be deleted blog 
    const newBlogs = savedBlogs.filter((b: Blog) => b.id !== id);

    // store to localstorage 
    setItem<Blog[]>("blogs", newBlogs);

    window.location.href = "/blogs";

  };

  return (
    <button
      onClick={handleDelete}
      title="Delete Blog"
      className="text-red-600 border-black transition text-xl"
    >
      🗑️
    </button>
  );
}
