import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split(" ");

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <motion.p
        className="text-2xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 } // Delay between each word
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1" // Spacing between words
            variants={{
              hidden: { opacity: 0, y },
              visible: { opacity: 1 }
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
