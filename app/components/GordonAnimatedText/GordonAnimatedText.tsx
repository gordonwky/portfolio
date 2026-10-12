import { motion } from "framer-motion";

export function GordonAnimatedText({
  sentence,
  className,
}: {
  sentence: string;
  className?: string;
}) {
  if (typeof sentence !== "string") {
    console.error("GordonAnimatedText: sentence must be a string");
    return null;
  }

  return (
    <div className="flex">
      <motion.h1
        className="flex flex-wrap font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[color:var(--heading)] md:text-7xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
      >
        {sentence.split(" ").map((text, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`mr-3 ${className ?? ""}`}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
