
'use client';

import { getItem, setItem } from "@/app/utils/storage";
import { Blog } from "@/types";
import { redirect } from "next/navigation";

export default function DeleteBlogBtn({ blog }: { blog: Blog }) {
  const handleDelete = () => {

    const con = window.confirm("Are you sure you want to delete the blog ?");
    if (!con) return;

    const { id } = blog;

    const savedBlogs = getItem<Blog[]>("blogs") || [];

    // filter out all the blogs except to be deleted blog 
    const newBlogs = savedBlogs.filter((b: Blog) => b.id !== id);

    // store to localstorage 
    setItem<Blog[]>("blogs", newBlogs);

    redirect("/blogs")

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
