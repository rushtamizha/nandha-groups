

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAward } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Experience = () => {


  const items = [
    { one: "23+", two: "Projects Completed", color: "green", icon: <FiCheckCircle /> },
    { one: "11+", two: "Railway Zones Served", color: "red", icon: <MdOutlineLocationOn /> },
    { one: "9+", two: "Years of Experience", color: "purple", icon: <FiAward /> },
    { one: "21+", two: "Technical Experts", color: "blue", icon: <FaUserFriends /> },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 w-full justify-between px-4 mx-auto font-stretch-105% max-w-8xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-1"
        >
          <div
            className={`p-3 border-2 border-white rounded-xl text-white shadow-md bg-linear-to-b from-${item.color}-400 to-${item.color}-500`}
          >
            {item.icon}
          </div>
          <div className="text-xl font-bold text-gray-800">{item.one}</div>
          <div className="text-xs text-center text-gray-500">{item.two}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;


