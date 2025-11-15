"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white"
    >
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{blog.date}</div>
        <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-blue-600 text-sm font-medium flex items-center gap-1 mt-2"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
