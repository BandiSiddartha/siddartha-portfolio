"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  number: string;
  title: string;
  tagline: string;
  description: string;
  impact: string[];
  tags: string[];
  icon: string;
  accent: string;
  github?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Satellite Imagery Analysis Pipeline",
    tagline: "35 Years of Landsat, Automated",
    description:
      "Built automated Python pipelines to process 35 years of Landsat satellite imagery as a Graduate Research Assistant at UND, computing NDVI and EVI vegetation indices to reveal long-term vegetation density trends for regional land-use planning. Applied Mann-Kendall trend tests to establish statistical significance across large geospatial datasets.",
    impact: [
      "Automated processing of 35 years of Landsat imagery",
      "Mann-Kendall significance testing at scale (SciPy)",
      "Automated water-body masking and preprocessing",
    ],
    tags: ["Python", "NumPy", "SciPy", "GeoPandas", "Landsat", "NDVI/EVI", "Remote Sensing"],
    icon: "🛰️",
    accent: "blue",
  },
  {
    number: "02",
    title: "Deep Learning for Medical Image Analysis",
    tagline: "ResNet · YOLO · U-Net: A Comparative Review",
    description:
      "A literature review comparing deep learning approaches for medical imaging: ResNet for classification, YOLO for object detection, and U-Net for pixel-level segmentation, across stroke, cardiac and liver-tumor studies. Assessed how transfer learning and data augmentation address scarce annotations and class imbalance, summarizing comparative performance to guide diagnostic model selection.",
    impact: [
      "Compared 3 architecture families across 3 clinical domains",
      "Analyzed transfer learning under limited labeled data",
      "Synthesized model-selection guidance for diagnostic AI",
    ],
    tags: ["Deep Learning", "Computer Vision", "ResNet", "YOLO", "U-Net", "Medical Imaging"],
    icon: "🧬",
    accent: "violet",
    github: "https://github.com/BandiSiddartha/medical-image-analysis-dl-review",
  },
  {
    number: "03",
    title: "Mashreq Bank Transaction Risk Models",
    tagline: "35% Reduction in Manual Compliance Workload",
    description:
      "Developed predictive risk models at Mashreq Bank using Python (scikit-learn, Random Forest) and SQL to flag high-risk transactions, reducing manual compliance review workload by 35%. Automated financial reporting pipelines with optimized ETL and built Power BI and Tableau dashboards that cut reporting cycle time by 40%.",
    impact: [
      "35% reduction in manual compliance review",
      "40% faster reporting cycles",
      "Automated ETL reporting pipelines",
    ],
    tags: ["Python", "SQL", "scikit-learn", "Random Forest", "Power BI", "Tableau"],
    icon: "💳",
    accent: "emerald",
  },
  {
    number: "04",
    title: "Multi-Level Fraud Detection",
    tagline: "90% Fraud Capture at 0.08% False-Positive Rate",
    description:
      "A hierarchical two-stage fraud detection pipeline comparing five ML/DL architectures (Random Forest, XGBoost, Isolation Forest, Autoencoder, LSTM) on 284,807 transactions with 577:1 class imbalance. Reached AUPRC 0.869 after tuning 150 configurations, and validated in a 30-day deployment simulation with SHAP explanations for regulatory interpretability.",
    impact: [
      "AUPRC 0.869 across 150 tuned configurations",
      "Risk tiers cut analyst review by two-thirds at >95% capture",
      "90% daily capture, 0.08% FPR in 30-day simulation",
    ],
    tags: ["Python", "XGBoost", "TensorFlow", "LSTM", "Autoencoder", "SHAP"],
    icon: "🔍",
    accent: "blue",
    github: "https://github.com/BandiSiddartha/Multi-Level-Anomaly-Detection-in-Financial-Transactions",
  },
];

const accentMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  blue: {
    border: "border-blue-500/30 hover:border-blue-400/50",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "bg-blue-500/15 border-blue-500/30 text-blue-300",
  },
  violet: {
    border: "border-violet-500/30 hover:border-violet-400/50",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    badge: "bg-violet-500/15 border-violet-500/30 text-violet-300",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400/50",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => {
            const colors = accentMap[project.accent];
            return (
              <motion.div
                key={project.number}
                className={`group p-8 rounded-2xl bg-[#111827] border ${colors.border} transition-colors duration-300`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(59,130,246,0.12)" }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Number + Icon */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:w-24 flex-shrink-0">
                    <span className={`font-mono text-4xl font-bold ${colors.text} opacity-30`}>
                      {project.number}
                    </span>
                    <span className="text-3xl">{project.icon}</span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className={`text-sm font-mono ${colors.text}`}>{project.tagline}</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Impact bullets */}
                    <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border} mb-5`}>
                      <p
                        className={`text-xs font-mono font-semibold ${colors.text} mb-2 uppercase tracking-wider`}
                      >
                        Key Outcomes
                      </p>
                      <ul className="space-y-1.5">
                        {project.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <span className={`${colors.text} mt-0.5 font-bold`}>▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags + Link */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-md border text-xs font-mono ${colors.badge}`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors font-mono"
                          whileHover={{ x: 3 }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/BandiSiddartha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-mono text-sm transition-colors group"
            whileHover={{ x: 4 }}
          >
            View all repositories on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
