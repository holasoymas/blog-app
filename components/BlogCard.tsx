import { Blog } from "@/types";
import Link from "next/link";
import { formatDate } from "@/app/utils/date";
import Image from "next/image";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="rounded-2xl p-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition w-full max-w-xl mx-auto mb-6">
        <Image
          src={blog.image}
          width={600}
          height={300}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
          {blog.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 overflow-hidden text-ellipsis">
          <span className="block" style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {blog.description}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Created on: {formatDate(new Date(blog.createdAt))}
        </p>
      </div>
    </Link>
  );
}

