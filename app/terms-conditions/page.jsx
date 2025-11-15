"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-[Bai Jamjuree] mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800 text-center mb-6"
      >
        Terms & Conditions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6 text-gray-600 leading-relaxed"
      >
        <p>
          These Terms & Conditions govern the use of services provided by{" "}
          <b>NANDHA GROUPS</b>. By accessing our website or engaging our
          services, you agree to comply with and be bound by these terms.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <FileText className="w-5 h-5" /> Service Scope
        </div>
        <p>
          We specialize in design, supply, installation, testing, and
          commissioning of railway signalling & telecommunication systems,
          adhering to Indian Railways standards.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <CheckCircle className="w-5 h-5" /> Client Obligations
        </div>
        <p>
          Clients must provide accurate project details and timely approvals to
          ensure smooth execution. Any delay in communication may affect
          timelines and project costs.
        </p>

        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <AlertCircle className="w-5 h-5" /> Liability
        </div>
        <p>
          While we maintain the highest quality standards, NANDHA GROUPS is not
          liable for indirect losses or delays beyond our control, including
          those caused by force majeure events.
        </p>

        <p className="text-sm text-gray-500">
          By using our services, you acknowledge that you have read, understood,
          and agree to these Terms & Conditions. For any concerns, contact:
          <br />
          <span className="text-blue-600 font-medium">
            groupsnandha@gmail.com
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
