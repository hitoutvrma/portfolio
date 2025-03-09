import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Card({ width = "sm:h-[18vh]", height = "sm:[h-30", name, bgImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, scale: 0.8, opacity: 0 }}
      animate={isInView ? { y: 0, scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{  
        // height: `${height}vh`, 
        // width: `${width}vw`, 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
       className={`relative card group bg-amber-300 overflow-hidden rounded-lg  ${width} ${height}  `}
    >
      {/* Name (Hidden initially, appears on hover) */}
      <h1 className="absolute top-2 left-2 text-white text-[1.9vh] opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {name}
      </h1>

      {/* Footer (Hidden initially, appears on hover) */}
      <footer className="absolute bottom-0 left-0 right-0 flex gap-2 p-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <button className="px-2 py-1 backdrop-blur-xl bg-white/30 text-white text-[1.5vh]">
          Web
        </button>
        <button className="px-2 py-1 backdrop-blur-xl bg-white/30 text-white text-[1.5vh]">
          React
        </button>
      </footer>
    </motion.div>
  );
}

export default Card;
