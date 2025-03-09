import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Card() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0.2}}
      animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-green-900 relative h-90 sm:h-70 sm:w-70 w-90 card"
    >
      <h1 className="p-2 text-[1.9vh]">Honeytype</h1>
      <footer className="bottom-0 absolute">
        <button className="m-2 px-2 py-1 backdrop-blur-xl bg-white/30 text-[1.5vh]">
          Web
        </button>
        <button className="m-2 px-2 py-1 backdrop-blur-xl bg-white/30 text-[1.5vh]">
          React
        </button>
      </footer>
    </motion.div>
  );
}

export default Card;
