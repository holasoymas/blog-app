'use client';

import { Blog } from "@/types";
import { useRouter } from "next/navigation";

export default function UpdateBlogBtn({ blog }: { blog: Blog }) {

  const router = useRouter();

  const handleUpdate = () => {
    console.log("Update blog:", blog);
    router.push(`/blogs/${blog.id}/edit`);
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
