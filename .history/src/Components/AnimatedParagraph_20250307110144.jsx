import { motion } from "framer-motion";

export default function AnimatedParagraph() {
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
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-md"
            variants={{
              hidden: { opacity: 0, y: 20 }, // Start invisible, slightly lower
              visible: { opacity: 1, y: 0 }  // Fade in & move up
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            This is div {index + 1}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
