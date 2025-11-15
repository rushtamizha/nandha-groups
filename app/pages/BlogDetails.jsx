"use client";
import { useParams, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="text-center py-20 text-gray-500">
        Blog not found.
        <Link to="/blogs" className="block text-blue-500 mt-3">
          Go back
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-[Bai Jamjuree]">
      <Link to="/blogs" className="flex items-center gap-1 text-blue-600 text-sm mb-4">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold text-gray-900 mb-3"
      >
        {blog.title}
      </motion.h1>
      <div className="text-sm text-gray-500 mb-6">{blog.date} • {blog.author}</div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="prose prose-sm text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br/>") }}
      />
    </div>
  );
};

export default BlogDetails;
