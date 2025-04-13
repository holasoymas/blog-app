"use client";

import Link from "next/link"
import React from "react";
import { BaseButtonProps, AuthBtn } from "@/types";
import { useRouter } from "next/navigation";

export const BaseButton: React.FC<BaseButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="app-btn"
    >
      {text}
    </Link>
  );
};

export const LoginBtn: React.FC<AuthBtn> = ({ text }) => {
  return (
    <button type="submit" className="login-btn"> {text} </button>
  );
}

export const BackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/blogs")}
      className="flex justify-center items-center gap-2  px-4 py-2 mb-2 border border-gray-300 dark:border-gray-700 rounded-md dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      <span className="text-xl">←</span>
    </button>
  );
};
