"use client";

import { BaseButton } from "@/components/Button";
import { getItem } from "./utils/storage";
import { SignUpData } from "@/types";

export default function Home() {

  // check if the user is authenticated of not 
  const isLoggedIn = getItem<boolean>("isLoggedIn");

  // if yes fetch the data 
  const user = isLoggedIn ? getItem<SignUpData>("authUser") : null;

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      {!isLoggedIn || !user ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome to Blog App!
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Share your thoughts, ideas, and more!
          </p>
          <div className="mt-8 space-x-4">
            <BaseButton href="/signup" text="Sign Up" />
            <BaseButton href="/login" text="Sign In" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Hello, {user.name}! 👋
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            ({user.email})
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Ready to explore the latest blogs?
          </p>
          <div className="mt-6">
            <BaseButton href="/blogs" text="Go to Blogs →" />
          </div>
        </>
      )}
    </div>
  );
}

