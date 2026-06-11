"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function AnimatedText({
  text,
  className = "",
  style,
  delay = 0,
  as: Tag = "span",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      className={className}
      style={{ ...style, perspective: 600 }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={child}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          <Tag style={{ display: "inline", font: "inherit", color: "inherit" }}>
            {word}
          </Tag>
        </motion.span>
      ))}
    </motion.div>
  );
}
