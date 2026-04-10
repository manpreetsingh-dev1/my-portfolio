import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { contactDetails, socialLinks, whatsappNumber } from "../assets/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SocialIcon({ label }) {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.2 1.83 1.2 1.08 1.8 2.82 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.29-5.47-1.31-5.47-5.8 0-1.28.47-2.33 1.22-3.15-.12-.3-.53-1.5.12-3.13 0 0 1-.31 3.28 1.2a11.6 11.6 0 0 1 5.98 0c2.28-1.51 3.27-1.2 3.27-1.2.65 1.63.24 2.83.12 3.13.76.82 1.22 1.87 1.22 3.15 0 4.5-2.8 5.5-5.48 5.8.43.37.82 1.08.82 2.2v3.27c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V9.5H5.85V17H8.34M7.09 8.47A1.44 1.44 0 1 0 7.08 5.59A1.44 1.44 0 0 0 7.09 8.47M18.15 17V12.89C18.15 10.69 16.97 9.67 15.4 9.67C14.13 9.67 13.56 10.37 13.24 10.86V9.5H10.76C10.79 10.4 10.76 17 10.76 17H13.24V12.81C13.24 12.58 13.26 12.35 13.33 12.19C13.52 11.73 13.95 11.25 14.68 11.25C15.63 11.25 16.01 11.98 16.01 13.05V17H18.15Z" />
    </svg>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = [
      "Hello Manpreet,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something meaningful."
          description="If you have an opportunity, collaboration, or project idea, I&apos;d love to hear about it. This section is designed as a clean contact handoff for recruiters and clients."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="glass-panel rounded-[2rem] p-8">
            <h3 className="theme-text-primary text-2xl font-semibold">Reach out directly</h3>
            <div className="mt-8 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="theme-soft-panel rounded-2xl p-4">
                  <p className="theme-accent-text text-xs uppercase tracking-[0.28em]">{item.label}</p>
                  <p className="theme-text-secondary mt-2 text-sm leading-7">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-secondary-button inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm transition"
                >
                  <SocialIcon label={item.label} />
                  {item.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="glass-panel rounded-[2rem] p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="theme-text-secondary mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="theme-text-secondary mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="theme-text-secondary mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="theme-input w-full rounded-2xl px-4 py-3 outline-none transition"
                  placeholder="Briefly describe your requirement, project idea, or job role..."
                />
              </div>

              <button
                type="submit"
                className="theme-primary-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Send Message
              </button>

              <AnimatePresence>
                {submitted ? (
                  <Motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="theme-success-message rounded-2xl px-4 py-3 text-sm"
                  >
                    WhatsApp opened with your message prefilled.
                  </Motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
