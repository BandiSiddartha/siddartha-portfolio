export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="font-mono">
          <span className="text-blue-400">SB</span> · Built with Next.js & Tailwind CSS
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/BandiSiddartha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bandi-siddartha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="font-mono text-xs">
          © {new Date().getFullYear()} Siddartha Bandi
        </div>
      </div>
    </footer>
  );
}
