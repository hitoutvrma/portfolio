import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split(" "); // Splitting into words

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white p-10">
      <motion.p
        className="text-2xl font-semibold"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 1 } // Delays each word slightly
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1 inline-block"
            variants={{
              hidden: { opacity: 0.0, y: 8 }, // Starts with slight opacity
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, delay: index * 0.05 }} // Some words appear slightly ahead
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
