

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter()
  return (
    <motion.div
      className="px-4 mt-4 py-10 bg-linear-to-br from-amber-50 to-amber-200 font-stretch-105%"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Headings */}
      <motion.h1
        className="text-2xl font-bold text-amber-700 text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Need Custom S&T Solutions?
      </motion.h1>

      <motion.h2
        className="text-amber-600 text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Get in touch with our team of experts for customized S&T solutions
      </motion.h2>

      {/* Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
      >
        <motion.button onClick={()=> router.push('/contact') }
          className="bg-amber-600 px-6 py-2 text-white rounded-full border border-amber-300 outline outline-white shadow-md font-medium"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#d97706", // darker amber on hover
            boxShadow: "0px 4px 15px rgba(217, 119, 6, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Request Consultation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
