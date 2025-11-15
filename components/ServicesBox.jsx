

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Construction , Cuboid , Plug ,Cog , Wrench , TestTubes , NotepadText, ClipboardList } from 'lucide-react';
import { useRouter } from "next/navigation";

const ServicesBox = () => {
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full lg:hidden px-4 font-stretch-105%"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div
        className="text-2xl font-semibold text-center"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        Our Services
      </motion.div>

      <motion.div
        className="text-center text-sm text-gray-700 mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Comprehensive S&T solutions for modern railway infrastructure
      </motion.div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={1000}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.id} onClick={()=> router.push('/services')}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
              className={`${item.color} rounded-lg flex gap-2 items-center font-semibold p-2 border ${item.border}`}
            >
              <motion.div
                className={`text-white p-2 rounded text-xl shadow-blue-900 shadow-3xl border-2 ${item.bg} rounded-lg`}
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.image}
              </motion.div>
              <div className="text-black text-xs">{item.title}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ServicesBox;
