import { motion } from "framer-motion";

export default function AnimatedParagraphs() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center space-y-10 p-10">
      {/* First Paragraph */}
      <motion.p
        className="text-2xl font-semibold first-para"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0 } }, // First appears immediately
        }}
      >
        {splitText("This is the first paragraph appearing first.")}
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        className="text-2xl font-semibold second-para"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } }, // Appears after first
        }}
      >
        {splitText("Now the second paragraph appears after the first.")}
      </motion.p>

      {/* Third Paragraph (Appears Third) */}
      <motion.p
        className="text-2xl font-semibold third-para"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 2 } }, // Appears after second
        }}
      >
        {splitText("This third paragraph appears next in sequence.")}
      </motion.p>

      {/* Fourth Paragraph (Appears Fourth) */}
      <motion.p
        className="text-2xl font-semibold fourth-para"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 3 } }, // Appears last
        }}
      >
        {splitText("Finally, the fourth paragraph appears last.")}
      </motion.p>
    </div>
  );
}

// Function to split text into animated words
const splitText = (text) => {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      className="mr-1 inline-block"
      variants={{
        hidden: { opacity: 0.05, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {word}
    </motion.span>
  ));
};
