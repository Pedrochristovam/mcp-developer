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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-3xl p-8 text-center transition-all duration-300 shadow-sm hover:shadow-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 mx-auto mb-4 bg-emerald-50 rounded-2xl flex items-center justify-center"
        >
          <Icon className="w-8 h-8 text-emerald-600" />
        </motion.div>
        
        <motion.div 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        >
          {count}{suffix}
        </motion.div>
        
        <div className="text-gray-600 font-light">{label}</div>
      </div>
    </motion.div>
  );
}
