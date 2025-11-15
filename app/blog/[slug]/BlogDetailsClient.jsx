"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function BlogDetailsClient({ blog }) {
  console.log(blog)
  if (!blog)
    return (
      <div className="text-center py-20 text-gray-500">
        Blog not found.
        <Link href="/blog" className="block text-blue-500 mt-3">
          Go back
        </Link>
      </div>
    );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-[Bai Jamjuree]"
      >
        <Link
          href="/blog"
          className="flex items-center gap-1 text-blue-600 text-sm mb-6 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 leading-tight"
        >
          {blog.title}
        </motion.h1>

        <div className="text-sm text-gray-500 mb-6">
          {blog.date} • {blog.author}
        </div>

        <motion.img
          src={blog.image}
          alt={blog.title}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md mb-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="prose prose-base sm:prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </motion.div>

    </>
  );
}



