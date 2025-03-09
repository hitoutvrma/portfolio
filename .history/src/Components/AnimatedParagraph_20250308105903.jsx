import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const p = "Hello world this i Lorem ipsum";
  const words = p.split("");
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <motion.div
        className="space-y-4" // Adds spacing between divs
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 } // Delay between each div
          }
        }}
      >
        {}
          <motion.div

            className="p-4 "
            variants={{
              hidden: { opacity: 0, y: 40 }, // Start invisible, slightly lower
              visible: { opacity: 1, y: 0 }  // Fade in & move up
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
              Hello world this i Lorem ipsum 
          </motion.div>

      </motion.div>
    </div>
  );
}
