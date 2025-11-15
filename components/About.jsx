// import React from 'react'

// const About = () => {
//   return (
//     <div className='max-w-500 lg:max-w-2xl  px-4 py-4 font-stretch-110%'>
//         <div className='text-xl font-semibold'>About NANDHA GROUPS</div>
//         <div className='text-sm text-gray-700'>With years of experience in Railway S&T works, NANDHA GROUPS provides design, supply, installation, testing & commissioning services for signalling and telecommunication systems. deliver high-quality, on-time solutions that meet Indian Railways standards and customer We requirements.</div>
//     </div>
//   )
// }

// export default About

"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <motion.div
      className="max-w-500 lg:max-w-2xl px-4 py-4 font-stretch-110%"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="text-xl font-semibold"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        About NANDHA GROUPS
      </motion.div>

      <motion.div
        className="text-sm text-gray-700 mt-2 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        With years of experience in Railway S&T works, NANDHA GROUPS provides
        design, supply, installation, testing & commissioning services for
        signalling and telecommunication systems. We deliver high-quality,
        on-time solutions that meet Indian Railways standards and customer
        requirements.
      </motion.div>
    </motion.div>
  );
};

export default About;
