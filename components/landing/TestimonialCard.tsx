"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: any; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-8">
          <div className="flex items-center gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            ))}
          </div>

          <Quote className="w-10 h-10 text-emerald-200 mb-4" />

          <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
            "{testimonial.content}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full border-2 border-emerald-100 object-cover"
            />
            <div>
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600 font-light">{testimonial.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
