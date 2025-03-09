import { motion } from "framer-motion";

export default function AnimatedParagraphs({ texts, delay = 0 }) {
  return (
    <>

      {texts.map((text, i) => (
        <motion.p
        key={i}
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay * i }} // Delays each paragraph properly
        >
          {text.split(" ").map((word, index) => (
            <motion.span
            key={index}
            className="mr-1 inline-block"
            initial={{ opacity: 0.05, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "linear", delay: delay * i }} // Delays the words too
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      ))}
\
      </>
  );
}
