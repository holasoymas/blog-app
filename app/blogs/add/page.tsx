"use client";

import { useState } from "react";
import Image from "next/image";
import { LoginBtn } from "@/components/Button";
import { generateRamdomBytes } from "@/app/utils/randomBytes";
import { Blog } from "@/types";
import { getItem, setItem } from "@/app/utils/storage";
import { useRouter } from "next/navigation";
import { validateBlog } from "@/app/utils/validations";

const imageOptions = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

export default function BlogForm() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setSelectedImage] = useState("");

  const [formErrors, setFormErrors] = useState<Partial<Blog>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const id = generateRamdomBytes();

    const blogData: Blog = {
      id,
      title,
      description,
      image,
      createdAt: new Date(),
    };

    const blogErrors = validateBlog(blogData);

    // if there are validation error display them 
    if (Object.keys(blogErrors).length > 0) {
      console.log(blogErrors)
      setFormErrors(blogErrors);
      return;
    }

    const storedBlogs = getItem<Blog[]>("blogs");

    // if there are stored blogs append newblog else , store the new blogs on empty array
    const updatedBlogs = storedBlogs ? [...storedBlogs, blogData] : [blogData];

    // store back to localstorage 
    setItem<Blog[]>("blogs", updatedBlogs);

    // go to the currently created blog 
    router.push(`/blogs/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6  shadow-lg max-w-2xl mx-auto mt-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create a New Blog</h2>

      <div>
        <label className="block text-gray-800 dark:text-gray-200 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
          placeholder="Enter blog title"
          required
        />
        {formErrors.title && <p className="field-error">{formErrors.title}</p>}
      </div>

      <div>
        <label className="block text-gray-800 dark:text-gray-200 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
          placeholder="Enter blog description"
          rows={4}
          required
        />
        {formErrors.description && <p className="field-error">{formErrors.description}</p>}
      </div>

      <label className="block text-gray-800 dark:text-gray-200 mb-1">Choose an Image</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {imageOptions.map((src) => (
          <div
            key={src}
            onClick={() => setSelectedImage(src)}
            className={`cursor-pointer border-4 rounded-xl overflow-hidden ${image === src
              ? "border-blue-300 shadow-md"
              : "border-transparent"
              }`}
          >
            <Image
              src={src}
              alt="blog image option"
              width={300}
              height={200}
              className="object-cover w-full h-28"
            />
          </div>
        ))}
      </div>
      {formErrors.image && <p className="field-error mb-1">{formErrors.image}</p>}

      <LoginBtn text="Submit Blog" />
    </form>
  );
}
