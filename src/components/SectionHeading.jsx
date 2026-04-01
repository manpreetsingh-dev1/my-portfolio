import { motion as Motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
      className={`max-w-2xl ${alignment}`}
    >
      <span className="theme-eyebrow inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em]">
        {eyebrow}
      </span>
      <h2 className="theme-text-primary mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="theme-text-secondary mt-4 text-base leading-7 md:text-lg">{description}</p>
    </Motion.div>
  );
}

export default SectionHeading;
