"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const domainCards = [
  {
    icon: "🛰️",
    title: "Environmental AI",
    desc: "NDVI/EVI analysis on 35 years of Landsat imagery",
  },
  {
    icon: "🧠",
    title: "Medical Deep Learning",
    desc: "ResNet, YOLO & U-Net for stroke, cardiac & liver",
  },
  {
    icon: "💳",
    title: "FinTech Risk Models",
    desc: "35% reduction in manual compliance workload",
  },
  {
    icon: "☁️",
    title: "Cloud & MLOps",
    desc: "AWS · Docker · reproducible pipelines",
  },
];

const quickFacts = [
  { label: "Degree", value: "MS Data Science" },
  { label: "University", value: "Univ. of North Dakota" },
  { label: "Focus", value: "ML · DL · Data Eng." },
  { label: "Location", value: "Grand Forks, ND" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        {/* Bio text — full width */}
        <motion.div
          className="space-y-5 text-slate-400 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        >
          <p>
            I&apos;m a{" "}
            <span className="text-blue-300 font-medium">Data Scientist and AI Engineer</span>{" "}
            currently pursuing my{" "}
            <span className="text-white font-medium">
              MS in Data Science at the University of North Dakota
            </span>
            . My work lives at the intersection of machine learning, computer vision, and
            large-scale data engineering.
          </p>
          <p>
            I&apos;ve engineered automated Python pipelines that process decades of satellite
            imagery, built deep learning systems for medical image analysis, and developed risk
            models that directly reduced compliance overhead at a leading financial institution.
            I love turning messy, high-dimensional data into clean, actionable intelligence.
          </p>
          <p>
            Outside of research and engineering, I&apos;m passionate about open-source,
            reproducible science, and making AI tools accessible to domain experts across
            environmental, medical, and financial fields.
          </p>

          {/* Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-2 text-sm">
                <span className="text-blue-400 mt-0.5">▹</span>
                <span>
                  <span className="text-slate-500">{fact.label}:</span>{" "}
                  <span className="text-slate-300">{fact.value}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {domainCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="p-4 rounded-xl bg-[#111827] border border-slate-800 hover:border-blue-500/30 hover:bg-[#1e2d4a]/40 transition-colors duration-200 cursor-default"
            >
              <span className="text-2xl mb-2 block">{card.icon}</span>
              <div className="text-white font-medium text-sm">{card.title}</div>
              <div className="text-slate-500 text-xs mt-1 leading-snug">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
