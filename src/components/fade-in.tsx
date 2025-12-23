"use client";

import { motion } from "framer-motion";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
