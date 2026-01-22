"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsCounter({ number, label, icon: Icon, suffix = "", delay = 0 }: { number: number; label: string; icon: any; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = number;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 group-hover:border-emerald-500/50 rounded-3xl p-8 text-center transition-all">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2"
        >
          {count}{suffix}
        </motion.div>
        
        <div className="text-gray-400 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}