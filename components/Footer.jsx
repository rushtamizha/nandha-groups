

"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-linear-to-bl from-gray-900 via-gray-800 to-gray-900"
    >
      <footer className="text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Top Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
          >
            {/* Logo + Info */}
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex flex-col gap-1.5">
                  <div className="dot h-1.5 w-1.5 bg-red-500 rounded-full"></div>
                  <div className="dot h-1.5 w-1.5 bg-yellow-500 rounded-full"></div>
                  <div className="dot h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-lg">NANDHA GROUPS</p>
                  <p className="text-xs">S&T contractor</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading provider of advanced signaling and telecommunication
                solutions for Indian Railways. Committed to safety, innovation,
                and operational excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MdOutlineLocationOn className="text-xl text-amber-400" />
                  <span className="text-gray-400 text-sm">
                    Flat No: 210, Alagar Nagar, Vadamadurai, Dindigul, Tamil Nadu - 624802
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <IoCallOutline className="text-xl text-amber-400" />
                  <span className="text-gray-400 text-sm">+917010557050</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BiMessageSquareDetail className="text-xl text-amber-400" />
                  <span className="text-gray-400 text-sm">
                    groupsnandha@gmail.com
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Columns */}
            {[
              {
                title: "company",
                links: [
                  ["About Us", "/about"],
                  ["Our Team", "/about"],
                  ["Careers", "/"],
                  ["News", "/blog"],
                ],
              },
              {
                title: "services",
                links: [
                  ["Signaling Systems", "/services"],
                  ["Telecommunications", "/services"],
                  ["SCADA Solutions", "/services"],
                  ["Maintenance", "/services"],
                ],
              },
              {
                title: "resources",
                links: [
                  ["Blog", "/blog"],
                  ["Case Studies", "/"],
                  ["Technical Docs", "/"],
                  ["Support", "/contact"],
                ],
              },
            ].map((section, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1}>
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(([label, href], j) => (
                    <li key={j}>
                      <Link
                        href={href}
                        className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 Nandha Groups . All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link
                  className="hover:text-amber-400 transition-colors"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:text-amber-400 transition-colors"
                  href="/terms-conditions"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-7 pt-8 border-t border-gray-800"
          >
            <div className="flex justify-center">
              <div className="text-gray-500 text-sm hover:text-amber-400 transition-colors">
                Developed by <Link href="https://wepzite.in">Wepzite.in</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
