"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Cloud, Zap, Shield } from "lucide-react";

export default function FloatingElements() {
  const icons = [Code2, Cpu, Database, Cloud, Zap, Shield];
  
  return (
    <div className="hidden lg:block fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-500/8"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25 + index * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={50 + index * 8} />
        </motion.div>
      ))}
    </div>
  );
}