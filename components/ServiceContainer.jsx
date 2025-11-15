
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Construction , Cuboid , Plug ,Cog , Wrench , TestTubes , NotepadText, ClipboardList } from 'lucide-react';
import { useRouter } from "next/navigation";

const ServiceContainer = () => {
  const router = useRouter()
  const items = [
    {
      id: 1,
      title: "Pre-Execution / Survey Work",
      image: <Construction />,
      border: "border-blue-400",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      bg: "bg-gradient-to-b from-blue-400 to-blue-500",
    },
    {
      id: 2,
      title: "Foundation & Civil Works",
      image: <Cuboid />,
      border: "border-green-400",
      color: "bg-gradient-to-br from-green-50 to-green-100",
      bg: "bg-gradient-to-b from-green-400 to-green-500",
    },
    {
      id: 3,
      title: "Cable Laying & Termination",
      image: <Plug />,
      border: "border-amber-400",
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      bg: "bg-gradient-to-b from-amber-400 to-amber-500",
    },
    {
      id: 4,
      title: "Equipment Installation",
      image: <Cog />,
      border: "border-purple-400",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      bg: "bg-gradient-to-b from-purple-400 to-purple-500",
    },
    {
      id: 5,
      title: "Wiring & Interlocking",
      image: <Wrench />,
      border: "border-pink-400",
      color: "bg-gradient-to-br from-pink-50 to-pink-100",
      bg: "bg-gradient-to-b from-pink-400 to-pink-500",
    },
    {
      id: 6,
      title: "Testing & Commissioning",
      image: <TestTubes />,
      border: "border-teal-400",
      color: "bg-linear-to-br from-teal-50 to-teal-100",
      bg: "bg-linear-to-b from-teal-400 to-teal-500",
    },
    {
      id: 7,
      title: "Documentation & Handover",
      image: <NotepadText />,
      border: "border-red-400",
      color: "bg-linear-to-br from-red-50 to-red-100",
      bg: "bg-gradient-to-b from-red-400 to-red-500",
    },
      {
        id: 8,
        title: "Drwaings",
        image: <ClipboardList />,
        border: "border-gray-400",
        color: "bg-linear-to-br from-gray-50 to-gray-100",
        bg: "bg-gradient-to-b from-gray-400 to-gray-500",
      }
  ];

  // Animation variants for container and child cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="hidden px-4 py-4 font-stretch-110% max-w-5xl md:max-w-2xl lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={itemVariants} onClick={()=> router.push('/services')} >
          <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
            whileTap={{ scale: 0.97 }}
            className={`${item.color} rounded-lg flex gap-2 items-center font-semibold p-3 border ${item.border} shadow-sm`}
          >
            <motion.div whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}

              className={`text-white p-2 rounded text-xl border-2 ${item.bg} rounded-lg shadow`}
            >
              {item.image}
            </motion.div>
            <div className="text-gray-800 text-sm">{item.title}</div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceContainer;
