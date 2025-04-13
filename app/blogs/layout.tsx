"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";
import { getItem } from "../utils/storage";
import { redirect } from "next/navigation";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {

  const isLoggedIn = getItem<boolean>("isLoggedIn");
  // console.log(isLoggedIn);
  if (!isLoggedIn) redirect("/login");


  return (
    <div className="min-h-screen flex flex-col bg-white  dark:bg-black transition">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
