import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split(" "); // Splitting into words

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white p-10 flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }, // Paragraphs appear one after another
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.p
            key={i}
            className="text-2xl font-semibold mb-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0 } }, // Words inside appear with delay
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-1 inline-block"
                variants={{
                  hidden: { opacity: 0.05, y: 15,x:15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.2 }}
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
