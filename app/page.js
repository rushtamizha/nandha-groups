
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import About from "@/components/About";
import ServicesBox from "@/components/ServicesBox";
import ServiceContainer from "@/components/ServiceContainer";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const Home = () => {
  const slides = ["/banners/1.png", "/banners/2.png", "/banners/3.png", "/banners/4.png", "/banners/5.png", "/banners/6.png", "/banners/7.png", "/banners/8.png", "/banners/9.png"];
  const router = useRouter()

  return (
    <motion.div
      className="h-screen bg-white pt-10 overflow-x-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* ✅ Main Banner Section */}
      <div className="relative h-100 md:h-[500px] w-full overflow-hidden">
        {/* Swiper (Background Image Layer) */}
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="absolute inset-0 w-full h-full z-0"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Blue Overlay (Blur Layer) */}
        <motion.div
          className="absolute inset-0 backdrop-blur-3xl bg-blue-950/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        {/* ✅ Banner Text Content */}
        <motion.div
          className="absolute inset-0 z-20 flex justify-center items-center flex-col px-4 gap-2 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0.2}
            className="md:text-1xl border border-white text-white py-1 px-4 rounded-full backdrop-blur-2xl"
          >
            Powering safe railway operation
          </motion.h3>

          <motion.h1
            variants={fadeInUp}
            custom={0.4}
            className="text-white text-3xl md:text-6xl font-bold"
          >
            Railway Signal & Telecommunication
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={0.6}
            className="text-white md:text-xl max-w-3xl"
          >
            Advanced signaling and telecommunication solutions ensuring safety,
            efficiency, and innovation for Indian Railways
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.8}
            className="flex gap-3 md:gap-10 w-full justify-center md:mt-10 flex-wrap"
          >
            <motion.button onClick={()=> router.push('/services') }
              whileHover={{
                scale: 1.05,
                backgroundColor: "#d97706",
                boxShadow: "0px 0px 10px rgba(217, 119, 6, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 py-2 px-6 rounded-full md:text-xl w-100 bg-amber-600 border-amber-500"
            >
              Explore services
            </motion.button>

            <motion.button onClick={()=> router.push('/products') }
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "0px 0px 10px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-amber-500 py-2 px-6 rounded-full text-xl w-100 backdrop-blur-2xl"
            >
              View supplies
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Sections with Fade-in on Scroll */}
      <motion.div
        className="flex flex-wrap lg:flex-nowrap justify-evenly mt-4"
        variants={fadeInUp}
        custom={1.2}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <About />
        <ServicesBox />
        <ServiceContainer />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={1.5}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={1.8}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Products />
      </motion.div>

      {/* View All Products Button */}
      <motion.div
        className="flex justify-center w-full my-5"
        variants={fadeInUp}
        custom={2.0}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button onClick={()=> router.push('/products') }
          whileHover={{
            scale: 1.05,
            backgroundColor: "#e0f2fe",
            boxShadow: "0px 0px 10px rgba(59,130,246,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="text-center text-blue-500 font-medium bg-blue-100 py-1 px-6 rounded-full border-blue-200 border outline outline-blue-100"
        >
          View All Products
        </motion.button>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={2.2}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        custom={2.5}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Home;
