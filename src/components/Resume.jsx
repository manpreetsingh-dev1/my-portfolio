import { resumeFile } from "../assets/portfolioData";
import Reveal from "./Reveal";

function Resume() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="glass-panel overflow-hidden rounded-[2.25rem] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="theme-accent-text text-sm uppercase tracking-[0.32em]">Resume</p>
              <h2 className="theme-text-primary mt-4 text-3xl font-semibold sm:text-4xl">
                Download my resume for a quick overview of my stack and project work.
              </h2>
              <p className="theme-text-secondary mt-4 max-w-2xl text-base leading-7">
                If you are hiring for internships, entry-level roles, or freelance work, this gives a
                fast summary of my skills, tools, and current focus areas in the MERN ecosystem.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={resumeFile}
                download
                className="theme-primary-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="theme-secondary-button inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
