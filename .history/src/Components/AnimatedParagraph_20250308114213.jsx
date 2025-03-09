import { motion } from "framer-motion";

export default function AnimatedParagraphs({ texts, delay = 0.5 }) {
  return (
    // <div className="flex justify-center items-center h-screen bg-black text-white p-10 flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { delay: delay },
          },
        }}
      >
        {texts.map((text, i) => (
          <motion.p
            key={i}
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Fully visible
            transition={{ duration: 0.5, delay: delay * i }} // Delays each paragraph based on index
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="mr-1 inline-block"
                initial={{ opacity: 0.05, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 5, ease: "linear", delay: delay * i }} // Delay applied properly
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </motion.div>
    // </div>
  );
}
