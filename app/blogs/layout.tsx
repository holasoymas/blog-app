import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col bg-white  dark:bg-black transition">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
