import { motion as Motion } from "framer-motion";

const offsets = {
  up: { y: 36 },
  down: { y: -36 },
  left: { x: 36 },
  right: { x: -36 },
};

function Reveal({ children, className = "", direction = "up", delay = 0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

export default Reveal;
