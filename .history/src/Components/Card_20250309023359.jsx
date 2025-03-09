import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Card({ width = "sm:w-[18vw]", height = "sm:h-[30vh]", name, bgImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div>

    <motion.div
      ref={ref}
      initial={{ y: 40, scale: 0.8, opacity: 0 }}
      animate={isInView ? { y: 0, scale: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{  
        // height: `${height}vh`, 
        // width: `${width}vw`, 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "containe",
        backgroundPosition: "center"
      }}
      className={`relative card group bg-amber-300 bg-cover overflow-hidden rounded-lg h-[40vh] w-[85vw] ${width} ${height}  `}
      >
      {/* Name (Hidden initially, appears on hover) */}
      <h1 className="absolute top-2 left-2 text-white text-[1.9vh] sm:opacity-0 sm:-translate-y-4 transition-all sm:duration-300 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
        {name}
      </h1>

      {/* Footer (Hidden initially, appears on hover) */}
      <footer className="absolute bottom-0 left-0 right-0 flex gap-2 p-3 sm:p-2 sm:opacity-0 sm:translate-y-4 transition-all sm:duration-300 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
        <button className="px-2 py-1 backdrop-blur-xl bg-white/30 text-white text-[1.5vh]">
          Web
        </button>
        <button className="px-2 py-1 backdrop-blur-xl bg-white/30 text-white text-[1.5vh]">
          React
        </button>
      </footer>
    </motion.div>
    
    </div>
    
  );
}

export default Card;
