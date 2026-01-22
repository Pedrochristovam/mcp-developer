"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileText, Code2, TestTube, Rocket, Headphones } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Descoberta",
      description: "Entendemos suas necessidades e objetivos de negócio."
    },
    {
      icon: FileText,
      title: "Planejamento",
      description: "Criamos estratégia e arquitetura da solução."
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Codificamos com as melhores práticas e tecnologias."
    },
    {
      icon: TestTube,
      title: "Testes",
      description: "Garantimos qualidade através de testes rigorosos."
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Lançamos seu produto no ambiente de produção."
    },
    {
      icon: Headphones,
      title: "Suporte",
      description: "Oferecemos suporte contínuo e melhorias."
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Linha conectora */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Número */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
                {index + 1}
              </div>

              {/* Ícone */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6"
              >
                <step.icon className="w-8 h-8 text-emerald-600" />
              </motion.div>

              {/* Conteúdo */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
