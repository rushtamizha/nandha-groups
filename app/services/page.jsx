"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Wrench,
  Cable,
  Cpu,
  Zap,
  FlaskConical,
  FileCheck,
} from "lucide-react";
const stages = [
  {
    id: 1,
    title: "Pre-Execution Stage (Planning & Preparation)",
    icon: <ClipboardList className="w-8 h-8 text-blue-500" />,
    img: "/work/1.png",
    desc: "Before starting work, all permissions and materials are arranged.",
    bg:"blue",
    activities: [
      "Site Survey & Route Inspection",
      "Identify station layout, cable routes, signal/point locations.",
      "Collect approved SIP and Cable Route Plan.",
      "Material Verification (RDSO-approved materials).",
      "Site Office & Storage Setup.",
      "Coordination Meetings with departments.",
    ],
    docs: [],
  },
   {
    id: 2,
    title: "Drwaings",
    icon: <ClipboardList className="w-8 h-8 text-pink-500" />,
    img: "/work/8.png",
    desc: "Railway technical drawings using CAD software and printed plans.",
    bg:"pink",
    activities: [
      "Signal interlocking plan",
      "Cable core plan",
      "Cable route plan",
      "Track bonding plan",
      "Point circuit diagram",
      "Key lock circuit plan",
      "Signal wiring diagram",
      "Shunt signal diagram",
      "Track circuit equipment layout",
      "Power drawing",
      "FTOT Diagram ( particulars )",
      "Location ( Particulars )",
      "Location circuit Diagram",
      "Floor plan ( Optional )",
    ],
    docs: [],
  },
  {
    id: 3,
    title: "Foundation & Civil Works",
    icon: <Wrench className="w-8 h-8 text-green-500" />,
    img: "/work/2.png",
    desc: "Civil preparation for mounting of signalling and telecom equipment.",
     bg:"green",
    activities: [
      "Signal post foundations (CC 1:2:4 / 1:3:6).",
      "Location box bases, point machine foundation with GI pipe route.",
      "Cable trench excavation and sand cushioning.",
      "Route marker stone fixing.",
    ],
    docs: ["Foundation register", "Cable route sketch"],
  },
  {
    id: 4,
    title: "Cable Laying & Termination",
    icon: <Cable className="w-8 h-8 text-yellow-500" />,
   img: "/work/3.png",
    desc: "The backbone of S&T systems — signal, point, and telecom connections.",
     bg:"amber",
    activities: [
      "Laying of Signaling Cables: 10C / 19C / 24C ",
      "Telecom Cable / OFC Laying.",
      "Cable Termination in location & relay room.",
      "Insulation & Megger Testing.",
    ],
    docs: ["Cable Megger Report", "Cable Route Documentation"],
  },
  {
    id: 5,
    title: "Installation of Equipment",
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
   img: "/work/4.png",
    desc: "Now the actual devices are installed and wired for signalling, telecom, and power.",
     bg:"purple",
    activities: [
      "Color light signals, point machines, track circuits.",
      "Relays & panels in relay room.",
      "Telecom: exchanges, PA system, block instruments.",
      "Power Supply: IPS, DC-DC converter, earthing, surge protection.",
    ],
    docs: [],
  },
  {
    id: 6,
    title: "Wiring & Interlocking",
    icon: <Zap className="w-8 h-8 text-red-500" />,
    img: "/work/5.png",
    desc: "Ensures system logic is safe and correct as per approved SIP.",
     bg:"red",
    activities: [
      "Wiring between relays, panels, and field equipment.",
      "Interlocking logic verification.",
      "Continuity and relay contact tests.",
      "Proper tag marking and documentation.",
    ],
    docs: [],
  },
  {
    id: 7,
    title: "Testing & Commissioning",
    icon: <FlaskConical className="w-8 h-8 text-pink-500" />,
    img: "/work/6.png",
    desc: "Testing is done by authorized railway S&T officials under strict supervision.",
     bg:"pink",
    activities: [
      "Signal Aspect Testing, Point Operation, Track Circuit Working.",
      "Cable IR & Continuity Check.",
      "Voltage Drop & Functional Test with Panel.",
      "Joint inspection and commissioning.",
    ],
    docs: ["Signal sighting certificate", "Provisional acceptance report"],
  },
  {
    id: 8,
    title: "Documentation & Handover",
    icon: <FileCheck className="w-8 h-8 text-teal-500" />,
   img: "/work/7.png",
    desc: "After successful testing, documents are prepared and handed over to the Railway.",
     bg:"teal",
    activities: [
      "Cable route plan (as executed).",
      "Wiring diagram (as executed).",
      "Megger & testing reports.",
      "Material utilization record.",
      "Safety & completion certificate.",
    ],
    docs: [],
  },
];

const SNTWorkflow = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 md:px-16 ">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800"
      >
        🚦 S&T Work Flow — Railway Projects
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className={`  rounded-2xl overflow-hidden border border-gray-100 transition-all bg-linear-to-br to-${stage.bg}-100`}
          >
            <img
              src={stage.img}
              alt={stage.title}
              className="w-full h-48 object-cover "
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {stage.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {stage.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-3">{stage.desc}</p>
              <h3 className="font-semibold text-gray-700 mb-1">Key Activities:</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-3">
                {stage.activities.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
              {stage.docs.length > 0 && (
                <>
                  <h3 className="font-semibold text-gray-700 mb-1">Documents:</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {stage.docs.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SNTWorkflow;
