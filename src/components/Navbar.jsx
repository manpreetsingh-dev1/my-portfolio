import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { navLinks } from "../assets/portfolioData";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="theme-nav mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-5 py-3 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="theme-brand-badge flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
            MS
          </span>
          <div>
            <p className="theme-text-primary text-sm font-semibold tracking-wide">Manpreet Singh</p>
            <p className="theme-text-muted text-xs">MERN Stack Developer</p>
          </div>
        </a>

        <div className="hidden items-center justify-center gap-2 md:flex">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "theme-chip-active"
                    : "theme-chip-idle"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="src/assets/Manpreet Singh Resume !.pdf"
            download
            className="theme-secondary-button rounded-full px-4 py-2 text-sm font-medium transition"
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="theme-icon-button flex h-11 w-11 items-center justify-center rounded-full md:hidden!"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="theme-nav mx-auto mt-3 max-w-7xl rounded-3xl p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 md:hidden">
              <div className="mb-2 flex items-center justify-between gap-3">
                <ThemeToggle />
                <a
                  href="src/assets/Manpreet Singh Resume !.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="theme-secondary-button rounded-full px-4 py-2 text-sm font-medium transition"
                >
                  Resume
                </a>
              </div>

              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    activeSection === item.href ? "theme-chip-active" : "theme-chip-idle"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
