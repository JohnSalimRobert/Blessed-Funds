import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSplitText = ({ text }: { text: string }) => {
  const words = text.split(" ").filter((word) => word.length > 0);

  return (
    <motion.span
      aria-label={text}
      role="heading"
      className="flex flex-wrap justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="flex text-xs md:text-sm lg:text-md">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={child}
              aria-hidden="true"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Space between words */}
          <span className="w-1" />
        </span>
      ))}
    </motion.span>
  );
};

export default AnimatedSplitText;
