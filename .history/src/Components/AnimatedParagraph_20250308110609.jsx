import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split("");

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <motion.p
        className="text-2xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 } // Delays each word appearing
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1 inline-block" // Fixing inline-block placement
            variants={{
              hidden: { opacity: 0, y: 20 }, // Moves from below
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
