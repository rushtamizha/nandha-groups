"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Building2, Hammer, MapPin, Train, Clock } from "lucide-react";


const ongoingProjects = [
  {
    title: "Tirunelveli Yard — Electronic Interlocking & MSDAC",
    image:"/projects/1.jpg",
    division: "Madurai Division",
    start: "Sep 19, 2024",
    siteImage : ["/projects/1.jpg", "/projects/2.jpg", "/projects/3.jpg", "/projects/4.jpg"],
    tasks: ["Electronic Interlocking (MSDAC)", "Signal installation", "Cable routing & testing"],
  },
  {
    title: "SHU – CTRE – MDVE – SVUR Signalling Work",
    division: "Chennai Division",
    image:"/projects/1.jpg",
    start: "Apr 18, 2025",
    siteImage:["/projects/5.jpg", "/projects/6.jpg", "/projects/7.jpg", "/projects/8.jpg", "/projects/9.jpg"],
    tasks: ["Electronic Interlocking modifications", "Point machines", "Route proving & commissioning"],
  },
];

const completedProjects = [
  {
    title: "NCJ Station — RRI Alteration",
    division: "TVC Division",
    year: "2024",
    summary: "RRI modernization, signalling alterations and testing.",
  },
  {
    title: "Pamban Bridge — Cable Diversion",
    division: "Madurai Division",
    year: "2023",
    summary: "Specialized cable diversion works across bridge span.",
  },
  {
    title: "Dharmavaram–Pakala Electrification",
    division: "South Central Railway",
    year: "2023",
    summary: "Electrification signalling integration & commissioning.",
  },
  {
    title: "MDU–JN / MEJ–NCJ Doubling",
    division: "Madurai Division",
    year: "2019-2020",
    summary: "RVNL continuation",
  },
  {
    title: "NPK Station Doubling",
    division: "Trichy Division",
    year: "2019-2020",
    summary: "Segment-specific",
  },
  {
    title: "Doubling Work (multi-phase)",
    division: "Madurai Division",
    year: "2014-2020",
    summary: "Overlapping work",
  },
  {
    title: "Doubling Project (short)",
    division: "South Central Railway",
    year: "2019",
    summary: "Short SCR project",
  },
  {
    title: "Railway Electrification",
    division: "Trichy Division",
    year: "2017-2019",
    summary: "Followed doubling completion.",
  },
  {
    title: "Doubling Project",
    division: "Madurai Division",
    year: "2015-2017",
    summary: "First recorded project",
  },,
  {
    title: "Drawing Work For INDIAN RAILWAYS",
    division: "",
    year: "2025",
    summary: "drawaing work",
  }
];


const logos = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/KEC_International_logo.svg/1200px-KEC_International_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrx0jXZlxI-oCRNUjHMal9P5lJX0lUSAf1Q&s",
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/RvnlLOGO.png",
    "https://kiraninfratech.com/wp-content/themes/kiraninfratech/images/logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-0_ltx1u00Fgib0RjQLfzdUcwtP8T21983A7g-Q1TVHBC4sBuGzdSUzVoUt57m9JaA&usqp=CAU",
    "https://sensedgetss.com/admin/photo/img-14.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Indian_Railways.svg/1200px-Indian_Railways.svg.png"
  ];

export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Projects — Signalling & Telecommunication
        </motion.h1>
        <p className="text-center text-gray-600 mb-10">Detailed record of signalling projects, electrification works, cable diversions and RRI alterations.</p>

        {/* Ongoing Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-amber-500"><Hammer className="w-5 h-5 " /> Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {ongoingProjects.map((p, i) => (
             <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }} className="bg-white rounded-2xl  shadow-sm hover:shadow-md" >
              <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="  inset-0 w-full h-full z-0"
        >
          {p.siteImage.map((img, index) => (
            < SwiperSlide className="relative " key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-150 object-cover rounded-2xl"
              />
              <motion.article className="p-6 absolute z-99  bottom-0  bg-linear-to-t from-white from-20% h-full w-full rounded-b-2xl flex flex-col justify-end" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.08 }} viewport={{ once: true }} >
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> {p.division}</p>
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-2"><Clock className="w-4 h-4" /> Started: {p.start}</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {p.tasks.map((t, j) => (<li key={j}>{t}</li>))}
                </ul>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
              
              </motion.div>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-emerald-600"><Train className="w-5 h-5 " /> Completed Projects</h2>
          <Swiper 

          modules={[Autoplay]}
               slidesPerView={2}
               spaceBetween={10}
               loop={true}
               autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
               }}
           speed={2000}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          
          className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
            {completedProjects.map((p, i) => (
              <SwiperSlide 
           className=" rounded-2xl p-5 shadow-sm hover:shadow-md  bg-white ">
                <h4 className="text-md font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{p.division}</p>
                <p className="text-sm font-medium text-gray-700 mt-3">{p.year}</p>
                <p className="text-sm text-gray-600 mt-2">{p.summary}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Clients slider */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Building2 className="w-5 h-5" /> Clients </h2>
          <div className="bg-white p-4 ">
            <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="flex items-center"
        >
          {logos.map((logo, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition"
            >
              <img
                src={logo}
                alt={`Client ${i + 1}`}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all"
              />
            </SwiperSlide>
          ))}
        </Swiper>
          </div>
        </section>

      </div>
    </div>
  );
}

