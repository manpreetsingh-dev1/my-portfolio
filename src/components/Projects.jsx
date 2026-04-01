import { motion as Motion } from "framer-motion";
import { projects } from "../assets/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work built to learn, iterate, and ship."
          description="These concept projects highlight how I approach layout systems, full-stack structure, and production-minded UI design."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <Motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="project-card h-full overflow-hidden rounded-[2rem]"
              >
                <div className="overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex h-[calc(100%-13rem)] flex-col p-6">
                  <h3 className="theme-text-primary text-2xl font-semibold">{project.title}</h3>
                  <p className="theme-text-secondary mt-4 text-sm leading-7">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="theme-skill-pill rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-primary-button inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="theme-secondary-button inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
