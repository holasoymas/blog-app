'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80">
        BLOG APP
      </Link>

      <div className="flex items-center space-x-4">
        <Link
          href="/blogs"
          className="text-gray-800 dark:text-gray-200 hover:underline cursor-pointer"
        >
          Blogs
        </Link>
        <Link
          href="/blogs/add"
          className="text-gray-800 dark:text-gray-200 hover:underline cursor-pointer"
        >
          Add Blog
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

