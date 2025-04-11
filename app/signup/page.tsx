"use client";

import React, { useState } from "react";
import * as Storage from "@/app/utils/storage"
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter();

  interface FormProps {
    name: string,
    email: string,
    password: string,
  }

  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    Storage.setItem("user", formData);

    router.push("/login");
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center h-screen  p-8" onSubmit={handleSubmit}>
        <h1 className="form-title">Sign Up</h1>

        <div className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none 
                 focus:border-blue-500 placeholder-gray-500 dark:placeholder-gray-400
                 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="label-name">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none 
                 focus:border-blue-500 placeholder-gray-500 dark:placeholder-gray-400
                 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="label-name">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none 
                 focus:border-blue-500 placeholder-gray-500 dark:placeholder-gray-400
                 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-black text-black font-medium py-3 px-7 rounded-lg
            transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white 
            dark:hover:bg-white dark:hover:text-black focus:outline-none"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
