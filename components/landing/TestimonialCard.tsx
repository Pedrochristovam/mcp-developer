"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: any; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Card className="relative bg-gray-900/80 border-gray-700/50 group-hover:border-emerald-500/50 rounded-3xl backdrop-blur-xl transition-all h-full">
        <CardContent className="p-8">
          <div className="flex items-center gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <Quote className="w-10 h-10 text-emerald-500/30 mb-4" />

          <p className="text-gray-300 leading-relaxed mb-8 text-lg italic">
            "{testimonial.content}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full border-2 border-emerald-500/50 object-cover"
            />
            <div>
              <div className="font-bold text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}