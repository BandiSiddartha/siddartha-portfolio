"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    icon: "⌨️",
    skills: [
      { name: "Python", level: 95, color: "bg-blue-500" },
      { name: "R", level: 80, color: "bg-violet-500" },
      { name: "SQL", level: 85, color: "bg-cyan-500" },
    ],
  },
  {
    category: "ML / DL Frameworks",
    icon: "🧠",
    skills: [
      { name: "PyTorch", level: 90, color: "bg-orange-500" },
      { name: "TensorFlow", level: 82, color: "bg-yellow-500" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 78, color: "bg-amber-500" },
      { name: "Docker", level: 80, color: "bg-sky-500" },
    ],
  },
  {
    category: "Data & Viz",
    icon: "📊",
    skills: [
      { name: "Tableau", level: 85, color: "bg-teal-500" },
    ],
  },
];

const techBadges = [
  { name: "Python", bg: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
  { name: "PyTorch", bg: "bg-orange-500/15 border-orange-500/30 text-orange-300" },
  { name: "TensorFlow", bg: "bg-yellow-500/15 border-yellow-500/30 text-yellow-300" },
  { name: "AWS", bg: "bg-amber-500/15 border-amber-500/30 text-amber-300" },
  { name: "Docker", bg: "bg-sky-500/15 border-sky-500/30 text-sky-300" },
  { name: "SQL", bg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" },
  { name: "R", bg: "bg-violet-500/15 border-violet-500/30 text-violet-300" },
  { name: "Tableau", bg: "bg-teal-500/15 border-teal-500/30 text-teal-300" },
  { name: "NDVI / EVI", bg: "bg-green-500/15 border-green-500/30 text-green-300" },
  { name: "ResNet", bg: "bg-pink-500/15 border-pink-500/30 text-pink-300" },
  { name: "U-Net", bg: "bg-red-500/15 border-red-500/30 text-red-300" },
  { name: "YOLO", bg: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300" },
  { name: "Pandas", bg: "bg-blue-400/15 border-blue-400/30 text-blue-200" },
  { name: "scikit-learn", bg: "bg-orange-400/15 border-orange-400/30 text-orange-200" },
  { name: "Git", bg: "bg-slate-500/15 border-slate-400/30 text-slate-300" },
  { name: "Next.js", bg: "bg-white/10 border-white/20 text-white" },
];

function SkillBar({
  name,
  level,
  color,
  inView,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default function SkillsMatrix() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 relative bg-[#0d1117]">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        {/* Proficiency bars */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/20 transition-colors"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: catIdx * 0.12 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    inView={inView}
                    delay={catIdx * 0.12 + skillIdx * 0.15 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          className="p-8 rounded-2xl bg-[#111827] border border-slate-800"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h3 className="text-slate-400 text-sm font-mono mb-6 text-center">
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge.name}
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium ${badge.bg} cursor-default`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {badge.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
