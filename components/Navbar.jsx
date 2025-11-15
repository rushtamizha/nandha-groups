

"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Drawer from "./Drawer";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [drawer, setDrawer] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Our Technicians", href: "/our-team" },
  ];

  return (
    <motion.div
      className="text-sm font-stretch-110% font-medium fixed top-0 z-50 w-full"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white mx-auto text-gray-800 flex px-4 py-2 justify-between border-b border-gray-100 shadow-sm">
        {/* Logo Section */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-1.5">
            <motion.div
              className="dot h-1.5 w-1.5 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <motion.div
              className="dot h-1.5 w-1.5 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            <motion.div
              className="dot h-1.5 w-1.5 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <div>
            <p className="font-bold text-lg">NANDHA GROUPS</p>
            <p className="text-xs">S&T contractor</p>
          </div>
        </motion.div>

        {/* Menu Links */}
        <motion.div
          className="md:flex text-gray-700 items-center justify-evenly gap-6 w-1/3 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {menuItems.map((item, i) => (
            <motion.p
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`cursor-pointer border-b-2 pb-1 ${
                pathname === item.href
                  ? "border-b-blue-700 text-blue-700"
                  : "border-white"
              }`}
              whileHover={{ scale: 1.1, color: "#1d4ed8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.name}
            </motion.p>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link href={"/contact"}>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1d4ed8",
                boxShadow: "0px 0px 10px rgba(29,78,216,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-800 text-sm py-2 px-6 rounded-full font-semibold hidden md:flex text-white transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <motion.div
          onClick={() => setDrawer(!drawer)}
          className="flex items-center md:hidden cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          <HiMenuAlt3 className="text-2xl" />
        </motion.div>
      </div>

      {/* Drawer Animation */}
      <AnimatePresence>
        {drawer && (
          <motion.div
           // initial={{ x: "100%" }}
            animate={{ x: 0 }}
            //exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <Drawer drawer={drawer} setDrawer={setDrawer} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
