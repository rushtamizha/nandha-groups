"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Signal, Clock, Wrench } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-6 py-10 font-[Bai Jamjuree] mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800 text-center mb-6"
      >
        About <span className="text-blue-600">NANDHA GROUPS</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-10"
      >
        With years of expertise in <b>Railway Signalling & Telecommunication (S&T) works</b>, 
        <span className="text-gray-800 font-medium"> NANDHA GROUPS </span> provides 
        comprehensive services in design, supply, installation, testing, and commissioning 
        of signalling and telecommunication systems. We are committed to delivering 
        <b>high-quality, reliable, and on-time solutions</b> that align with Indian Railways standards 
        and our clients' operational excellence goals.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          {
            icon: <Building2 className="w-8 h-8 text-blue-600" />,
            title: "Expertise",
            desc: "Specialized in Railway S&T works with a proven record of precision and compliance.",
          },
          {
            icon: <Signal className="w-8 h-8 text-blue-600" />,
            title: "Innovation",
            desc: "Utilizing modern technology to enhance signalling safety and communication reliability.",
          },
          {
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            title: "On-Time Delivery",
            desc: "Efficient project execution ensuring timely completion and quality assurance.",
          },
          {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            title: "Comprehensive Service",
            desc: "From design to commissioning, we handle complete end-to-end railway S&T projects.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              {card.icon}
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
