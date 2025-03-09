import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const text = "This is an example paragraph that will appear word by word.";
  const words = text.split(" ");

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <motion.p
        className="text-2xl font-semibold"
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is visible
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1 inline-block"
            variants={{
              hidden: { opacity: 0, y: 20 }, // Move words from below
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
