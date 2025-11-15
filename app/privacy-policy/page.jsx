"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-[Bai Jamjuree] mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800 text-center mb-6"
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6 text-gray-600 leading-relaxed"
      >
        <p>
          At <b>NANDHA GROUPS</b>, we value your privacy and are committed to
          protecting your personal information. This policy explains how we
          collect, use, and safeguard your data when you interact with our
          website and services.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <Eye className="w-5 h-5" /> Information Collection
        </div>
        <p>
          We collect information such as your name, contact details, and project
          requirements solely to provide efficient service and support. Your
          data will never be shared or sold to third parties without consent.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <Shield className="w-5 h-5" /> Data Usage
        </div>
        <p>
          The information you provide helps us improve communication, deliver
          project updates, and ensure quality customer experience.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <Lock className="w-5 h-5" /> Data Security
        </div>
        <p>
          We employ secure systems and encryption methods to protect user data
          from unauthorized access, disclosure, or modification.
        </p>

        <p className="text-sm text-gray-500">
          For any privacy-related queries, please contact us at:
          <br />
          <span className="text-blue-600 font-medium">
            groupsnandha@gmail.com
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
