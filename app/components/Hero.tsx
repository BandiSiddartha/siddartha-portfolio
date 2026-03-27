"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = ["Data Scientist", "AI Engineer", "ML/DL Specialist", "Data Engineer"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { label: "Years Coding", value: "4+" },
  { label: "ML Projects", value: "10+" },
  { label: "Years of Satellite Data", value: "35+" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary blue orb — left */}
        <motion.div
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary violet orb — right */}
        <motion.div
          className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full bg-violet-600/10 blur-[110px]"
          animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Subtle emerald accent */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-[260px] h-[260px] rounded-full bg-emerald-600/6 blur-[90px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28 lg:py-0">

          {/* ══ LEFT COLUMN — text ══ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-mono mb-7">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities · MS Data Science @ UND
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.08]"
            >
              Siddartha{" "}
              <span className="gradient-text glow-blue-text">Bandi</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={item}
              className="h-12 flex items-center mb-6"
            >
              <span className="text-xl sm:text-2xl font-mono text-blue-400 font-semibold">
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.85, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-400 max-w-lg mb-9 leading-relaxed"
            >
              Building intelligent systems that turn raw data into real-world impact.
              Passionate about{" "}
              <span className="text-blue-300">deep learning</span>,{" "}
              <span className="text-violet-300">satellite analytics</span>, and{" "}
              <span className="text-emerald-300">scalable ML pipelines</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 mb-12"
            >
              <motion.a
                href="https://github.com/BandiSiddartha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 glow-blue text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/bandi-siddartha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 text-slate-200 font-semibold rounded-xl transition-all duration-200 text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4.5 h-4.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>

              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all duration-200 text-sm border border-slate-700"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-6 text-sm text-slate-500 font-mono"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.4 }}
                >
                  <span className="text-blue-400 font-bold text-base">{stat.value}</span>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT COLUMN — profile photo ══ */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <div className="relative">
              {/* Outer glow ring (animated) */}
              <motion.div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/15 to-transparent blur-xl"
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.97, 1.01, 0.97] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Corner bracket decorations — tech aesthetic */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-400/70 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-blue-400/70 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-blue-400/70 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-blue-400/70 rounded-br-lg" />

              {/* Image card */}
              <motion.div
                className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-blue-500/25 cursor-pointer"
                style={{
                  boxShadow:
                    "0 0 30px rgba(59,130,246,0.35), 0 0 80px rgba(59,130,246,0.12), 0 25px 50px rgba(0,0,0,0.5)",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 0 50px rgba(59,130,246,0.55), 0 0 100px rgba(59,130,246,0.2), 0 30px 60px rgba(0,0,0,0.5)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`}
                  alt="Siddartha Bandi — Data Scientist & AI Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 380px"
                  priority
                />

                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0e1a]/70 to-transparent" />

                {/* Name tag inside image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0e1a]/80 backdrop-blur-sm border border-blue-500/20 text-xs font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    siddartha.bandi · MS Data Science
                  </div>
                </div>
              </motion.div>

              {/* Floating skill badge — top right */}
              <motion.div
                className="absolute -top-5 -right-5 px-3 py-2 rounded-xl bg-[#111827]/90 backdrop-blur-sm border border-violet-500/30 text-xs font-mono text-violet-300 shadow-lg shadow-violet-500/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                PyTorch · TensorFlow
              </motion.div>

              {/* Floating skill badge — bottom left */}
              <motion.div
                className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl bg-[#111827]/90 backdrop-blur-sm border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                AWS · Docker · SQL
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          className="w-px h-7 bg-gradient-to-b from-slate-600 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
