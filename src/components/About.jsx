import { aboutHighlights } from "../assets/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A fresher MERN developer with a strong product mindset."
          description="I enjoy building web experiences that combine thoughtful UI, smooth interactions, and solid backend fundamentals. My goal is to grow by shipping real projects that solve practical problems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel rounded-[2rem] p-8">
            <p className="theme-text-secondary text-lg leading-8">
              I am Manpreet Singh, a MERN Stack Developer at the start of my professional journey.
              I love learning by building, refining interfaces, and connecting frontend experiences to
              dependable backend systems. I care about readability, responsiveness, and creating
              products that feel intuitive for users.
            </p>
          </Reveal>

          <div className="grid gap-6">
            {aboutHighlights.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.12}
                className="glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
              >
                <div className="flex items-start gap-4">
                  <span className="theme-highlight-soft theme-accent-text mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
                    0{index + 1}
                  </span>
                  <p className="theme-text-secondary text-sm leading-7 sm:text-base">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
