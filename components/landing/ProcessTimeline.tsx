"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileText, Code2, TestTube, Rocket, Headphones } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Descoberta",
      description: "Entendemos suas necessidades e objetivos de negócio.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "Planejamento",
      description: "Criamos estratégia e arquitetura da solução.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Codificamos com as melhores práticas e tecnologias.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: TestTube,
      title: "Testes",
      description: "Garantimos qualidade através de testes rigorosos.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Lançamos seu produto no ambiente de produção.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Headphones,
      title: "Suporte",
      description: "Oferecemos suporte contínuo e melhorias.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Linha conectora */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 opacity-20" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-emerald-500/50 rounded-3xl p-8 transition-all">
              {/* Número */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/50">
                {index + 1}
              </div>

              {/* Ícone */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Conteúdo */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}