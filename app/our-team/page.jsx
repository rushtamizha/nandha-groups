"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  HardDrive,
  Layout,
  Zap,
  Wrench,
  LayoutGrid,
  Sliders,
  Monitor,
  FileText,
  GitBranch,
  MapPin,
} from "lucide-react";
import graph from "@/public/graph.png";

const teams = [
  { id: 1, name: "Trench / Execution Team", count: 100, icon: Users },
  { id: 2, name: "Cable Laying Team", count: 160, icon: HardDrive },
  { id: 3, name: "Foundation Team", count: 50, icon: Layout },
  { id: 4, name: "Wiring Team", count: 30, icon: Zap },
  { id: 5, name: "Fitter Team", count: 30, icon: Wrench },
  { id: 6, name: "Carpentry Team", count: 15, icon: LayoutGrid },
  { id: 7, name: "OFC / Labour Joiner Team", count: 10, icon: HardDrive },
  { id: 8, name: "Skilled Labour (S&T Works)", count: 70, icon: Sliders },
  { id: 9, name: "Engineers (Technical)", count: 10, icon: Monitor },
  { id: 10, name: "Drawing Team", count: 10, icon: FileText },
  { id: 11, name: "Site Supervisors", count: 10, icon: GitBranch },
  { id: 12, name: "Horizontal Boring Team", count: 30, icon: MapPin },
];

export default function OnSiteTeamsPage() {
  const [counts, setCounts] = useState(teams.map(() => 0));

  useEffect(() => {
    // Animated count-up per team; each interval clears itself when reaching the target
    const steps = 40; // how smooth the animation feels
    const duration = 1200; // ms
    const interval = Math.max(8, Math.round(duration / steps));

    const timers = teams.map((t, idx) => {
      const stepValue = Math.max(1, Math.floor(t.count / steps));

      const id = setInterval(() => {
        setCounts((prev) => {
          const copy = [...prev];
          const next = Math.min(t.count, copy[idx] + stepValue);
          copy[idx] = next;
          return copy;
        });
      }, interval);

      return { id, idx };
    });

    // stop each interval as soon as that team's target reached
    const monitor = setInterval(() => {
      let allDone = true;
      timers.forEach(({ id, idx }) => {
        if (counts[idx] >= teams[idx].count) {
          clearInterval(id);
        } else {
          allDone = false;
        }
      });
      if (allDone) {
        clearInterval(monitor);
      }
    }, 120);

    // ensure final values set after animation duration
    const finalTimer = setTimeout(() => {
      setCounts(teams.map((t) => t.count));
      timers.forEach(({ id }) => clearInterval(id));
      clearInterval(monitor);
    }, duration + 150);

    return () => {
      timers.forEach(({ id }) => clearInterval(id));
      clearInterval(monitor);
      clearTimeout(finalTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxCapacity = Math.max(200, ...teams.map((t) => t.count));

  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-rose-500 to-orange-400",
    "from-emerald-500 to-teal-500",
    "from-sky-500 to-indigo-500",
    "from-yellow-400 to-amber-500",
    "from-fuchsia-500 to-pink-500",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight">Nandha Groups Growth</h1>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 mb-10">
        <Image src={graph} alt="Growth graph" className="w-full rounded-lg shadow-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight">On-site Execution Teams</h2>
          <p className="text-center text-gray-600 mt-2">Detailed team distribution for signalling &amp; telecommunication execution.</p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teams.map((team, idx) => {
            const Icon = team.icon;
            const grad = gradients[idx % gradients.length];
            const percent = Math.min(100, Math.round((counts[idx] / maxCapacity) * 100));

            return (
              <motion.article
                key={team.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="p-5 bg-white/70 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700">{team.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Team ID: {team.id}</p>
                    </div>

                    <div className={`rounded-xl p-3 bg-gradient-to-br ${grad} bg-opacity-90 shadow-inner`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold tracking-tight">{counts[idx] > 0 ? `${counts[idx]}+` : "0"}</p>
                      <p className="text-xs text-gray-500">members</p>
                    </div>

                    <div className="w-40">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${grad}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Capacity usage ({percent}%)</p>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 w-36 opacity-10 bg-gradient-to-l from-white/0 to-black/5"
                />
              </motion.article>
            );
          })}
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-600"
        >
          <p>
            Total teams: <span className="font-medium">{teams.length}</span> — Total members: <span className="font-medium">{teams.reduce((s, t) => s + t.count, 0)}</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
