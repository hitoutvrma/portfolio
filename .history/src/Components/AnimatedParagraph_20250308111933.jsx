import { motion } from "framer-motion";

export default function AnimatedParagraph() {
  const paragraphs = [
    "Hitesh Verma",
    "Now comes the second paragraph with a smooth transition.",
    "Here is the third paragraph making its way onto the screen.",
    "Finally, the fourth paragraph completes the animation."
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white p-10 flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.5 } }, // Each paragraph appears one after another
        }}
      >
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className="text-2xl font-semibold mb-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }, // Words inside appear with delay
            }}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="mr-1 inline-block"
                variants={{
                  hidden: { opacity: 0.05,x:-4,y:2  },
                  visible: { opacity: 1,x:0,y:0 },
                }}
                transition={{ duration: 2 }}
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
