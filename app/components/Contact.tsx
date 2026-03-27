"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "bandi-siddartha",
    href: "https://www.linkedin.com/in/bandi-siddartha/",
    color: "text-blue-400 hover:text-blue-300",
    bg: "hover:bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "BandiSiddartha",
    href: "https://github.com/BandiSiddartha",
    color: "text-slate-300 hover:text-white",
    bg: "hover:bg-slate-700/50 border-slate-700",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "Available on LinkedIn",
    href: "https://www.linkedin.com/in/bandi-siddartha/",
    color: "text-emerald-400 hover:text-emerald-300",
    bg: "hover:bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative bg-[#0d1117]">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
        >
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-4">
            I&apos;m actively looking for{" "}
            <span className="text-blue-300 font-medium">
              Data Science, AI/ML Engineering, and Data Engineering
            </span>{" "}
            roles. Whether you have a position in mind or just want to connect, I&apos;d love to
            hear from you.
          </p>
          <p className="text-slate-500 text-sm">
            Internships, full-time roles, research collaborations — all welcome.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl bg-[#111827] border ${link.bg} transition-colors duration-200 group block`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`flex justify-center mb-3 ${link.color} transition-colors`}>
                {link.icon}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{link.label}</div>
              <div className="text-slate-500 text-xs font-mono">{link.value}</div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://www.linkedin.com/in/bandi-siddartha/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 glow-blue text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Say Hello on LinkedIn
        </motion.a>
      </div>
    </section>
  );
}
