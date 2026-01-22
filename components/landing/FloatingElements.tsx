"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Cloud, Zap, Shield } from "lucide-react";

export default function FloatingElements() {
  const icons = [Code2, Cpu, Database, Cloud, Zap, Shield];
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  
  useEffect(() => {
    // Set dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="hidden lg:block fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-emerald-500/8"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
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