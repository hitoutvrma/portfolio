import { motion } from "framer-motion";

export default function AnimatedParagraphs({ texts, delay = 0.5 }) {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white p-10 flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: delay } }, // Custom delay for each paragraph
        }}
      >
        {texts.map((text, i) => (
          <motion.p
            key={i}
            className="text-2xl font-semibold mb-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }, // Words appear with delay
            }}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="mr-1 inline-block"
                variants={{
                  hidden: { opacity: 0.05, x: -4 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 5, ease: "linear" }} // Smooth effect
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
