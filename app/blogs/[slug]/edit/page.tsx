"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import { LoginBtn } from "@/components/Button";
import { Blog } from "@/types";
import { getItem, setItem } from "@/app/utils/storage";
import { notFound, redirect } from "next/navigation";
import { validateBlog } from "@/app/utils/validations";
import { useUserAuth } from "@/hooks/userAuth";
import AuthGuard from "@/hooks/AuthGuard";
import LoadingComponent from "@/components/LoadingComponent";

const imageOptions = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

export default function EditBlog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const { isLoading, isChecking, blogs } = useUserAuth(true);
  // console.log(blogs);

  // Initialize state with empty values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setSelectedImage] = useState("");
  const [formErrors, setFormErrors] = useState<Partial<Blog>>({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Populate form data when blogs load
  useEffect(() => {
    if (!isLoading && !isChecking && blogs && !isInitialized) {
      const blog = blogs.find(b => b.id === slug);
      if (blog) {
        setTitle(blog.title);
        setDescription(blog.description);
        setSelectedImage(blog.image);
        setIsInitialized(true);
      }
    }
  }, [isLoading, isChecking, blogs, slug, isInitialized]);

  if (isLoading || isChecking) return <LoadingComponent />;

  const blog = blogs?.find(b => b.id === slug);
  if (!blog) return notFound();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blogData: Blog = {
      id: blog.id,
      title,
      description,
      image,
      createdAt: blog.createdAt,
    };

    const blogErrors = validateBlog(blogData);

    // if there are validation error display them 
    if (Object.keys(blogErrors).length > 0) {
      console.log(blogErrors)
      setFormErrors(blogErrors);
      return;
    }

    const storedBlogs = getItem<Blog[]>("blogs");

    //  find the id and update the blog
    const updatedBlogs = storedBlogs ? storedBlogs.map(b => b.id === blogData.id ? blogData : b) : [blogData];

    // store back to localstorage 
    setItem<Blog[]>("blogs", updatedBlogs);

    // go to the currently created blog 
    redirect(`/blogs/${blog.id}`);
  };

  return (
    <AuthGuard>
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

        <LoginBtn text="Update Blog" />
      </form>
    </AuthGuard>
  );
}
