"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-6 py-10 font-[Bai Jamjuree] mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-6"
      >
        <Newspaper className="text-blue-600 w-7 h-7" />
        <h1 className="text-2xl font-bold text-gray-800">Railway S&T Blog</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    </>
  );
}
