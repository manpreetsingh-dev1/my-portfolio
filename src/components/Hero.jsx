import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { heroMetrics, profileImage } from "../assets/portfolioData"

const typingWords = ["developer-focused", "responsive", "scalable", "animated"];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = useMemo(() => typingWords[wordIndex], [wordIndex]);

  useEffect(() => {
    const isWordComplete = displayedText === currentWord;
    const isWordRemoved = displayedText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isWordComplete) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          return;
        }

        if (!isDeleting && isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isWordRemoved) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      },
      isDeleting ? 70 : displayedText === currentWord ? 1200 : 120,
    );

    return () => window.clearTimeout(timeout);
  }, [currentWord, displayedText, isDeleting]);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36"
    >
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10"
        >
          <div className="theme-status-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-[0_0_0_1px_rgba(34,211,238,0.06)]">
            <span className="theme-status-dot h-2 w-2 rounded-full" />
            Available for Building Scalable Web Apps & Collaborating on MERN Projects
          </div>

          <h1 className="theme-text-primary mt-8 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Manpreet Singh
            <span className="theme-gradient-text mt-4 block text-3xl sm:text-4xl lg:text-5xl">
              MERN Stack Developer
            </span>
          </h1>

          <p className="theme-text-secondary mt-8 max-w-2xl text-lg leading-8 sm:text-xl">
            I build modern web applications with a{" "}
            <span className="theme-text-primary">clean, minimal, and {displayedText}</span>
            <span className="theme-caret ml-1 inline-block h-6 w-px translate-y-1 animate-pulse" />
            feel.
          </p>

          <p className="theme-text-muted mt-4 max-w-2xl text-base leading-7">
            Fresher developer focused on crafting polished interfaces, reliable APIs, and user-first
            digital experiences that look sharp on every screen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="theme-primary-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(34,211,238,0.35)]"
            >
              View Projects
            </a>
            
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((item, index) => (
              <Motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="glass-panel rounded-3xl p-5"
              >
                <p className="theme-text-primary text-2xl font-semibold">{item.value}</p>
                <p className="theme-text-muted mt-2 text-sm">{item.label}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 32, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[440px]">
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-14 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.55)]">
              <img
                src={profileImage}
                alt="Stylized illustration for Manpreet Singh"
                className="theme-image-frame w-full rounded-[1.6rem]"
              />

              <Motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className="theme-floating-card absolute bottom-6 left-6 rounded-2xl px-4 py-3 backdrop-blur-lg"
              >
                <p className="theme-accent-text text-xs uppercase tracking-[0.3em]">Current Focus</p>
                <p className="theme-text-primary mt-2 text-sm">React UI, REST APIs, and portfolio-ready products</p>
              </Motion.div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;
