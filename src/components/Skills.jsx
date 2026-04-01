import { motion as Motion } from "framer-motion";
import { skillGroups } from "../assets/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Focused on the modern MERN workflow."
          description="I am building strong end-to-end fundamentals across frontend, backend, and database layers, with extra attention on interface quality and practical project structure."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.1} className="glass-panel rounded-[2rem] p-7">
              <div className="mb-8">
                <p className="theme-accent-text text-sm uppercase tracking-[0.32em]">{group.title}</p>
                <h3 className="theme-text-primary mt-3 text-2xl font-semibold">{group.title} Stack</h3>
                <p className="theme-text-muted mt-3 text-sm leading-7">{group.description}</p>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="theme-text-secondary">{skill.name}</span>
                      <span className="theme-accent-text">{skill.level}%</span>
                    </div>
                    <div className="theme-progress-track h-2 overflow-hidden rounded-full">
                      <Motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, delay: 0.1 + groupIndex * 0.1 }}
                        className="theme-progress-fill h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
