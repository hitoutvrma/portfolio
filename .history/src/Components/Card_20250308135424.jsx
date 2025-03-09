import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Card({ width = 5, height = 30,name }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, scale: 0.8, opacity: 0 }}
      animate={isInView ? { y: 0, scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`bg-green-900 relative h-[${height}vh]  w-[${width}vw] card`}
    >
      <h1 className="p-2 text-[1.9vh]">{name}</h1>
      <footer className="bottom-0 transi absolute">
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
