import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split(" ");

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <motion.p
        className="text-2xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 } // Delay between each word
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1" // Spacing between words
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.  }} // Delay between each word
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
