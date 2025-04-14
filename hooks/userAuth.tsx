"use client";

import { useState, useEffect } from "react";
import { getItem } from "@/app/utils/storage";
import type { Blog, SignUpData } from "@/types";
import { sortBlogsByDate } from "@/app/utils/date";

export function useUserAuth(blogs = false) {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // not yet checked state
  const [user, setUser] = useState<SignUpData | null>(null);
  const [userBlogs, setUserBlogs] = useState<Blog[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loggedIn = getItem<boolean>("isLoggedIn");
    const authUser = getItem<SignUpData>("authUser");

    if (blogs) {
      const blogs = getItem<Blog[]>("blogs");
      const sortedBlogs = blogs ? sortBlogsByDate(blogs) : [];
      setUserBlogs(sortedBlogs);
    }

    setIsLoggedIn(!!loggedIn);
    setUser(authUser);
    setIsLoading(false); //after getting user stop loading
  }, []);

  // for checking if the user checking(if logged in or not) completes or not
  const isChecking = isLoggedIn === null;

  return {
    isLoggedIn,
    user,
    isLoading,
    isChecking,
    ...(blogs && { blogs: userBlogs }), // only set if blogs parameter is passed
  };
}

