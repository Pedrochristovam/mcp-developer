"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { 
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Shield,
  CheckCircle2,
  ArrowRight,
  Target,
  Activity,
  CircuitBoard,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Play,
  Briefcase,
  Users,
  Code2,
  Award,
  Rocket,
  Globe,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatsCounter from "@/components/landing/StatsCounter";
import TestimonialCard from "@/components/landing/TestimonialCard";
import ProcessTimeline from "@/components/landing/ProcessTimeline";
import DemoModal from "@/components/landing/demomodal";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const services = [
    {
      icon: Monitor,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, rápidas e responsivas usando as melhores tecnologias.",
      features: ["React & Next.js", "PWA", "SEO Otimizado", "Performance"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com experiência superior.",
      features: ["React Native", "Flutter", "Push Notifications", "Offline First"]
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Arquitetura robusta, escalável e segura para seus sistemas.",
      features: ["REST APIs", "GraphQL", "Microserviços", "Cloud Native"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Infraestrutura em nuvem otimizada com deploy automatizado.",
      features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e designs modernos que encantam usuários.",
      features: ["Figma", "Prototipagem", "Design System", "Acessibilidade"]
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção completa de dados com as melhores práticas de segurança.",
      features: ["Criptografia", "LGPD", "Pen Test", "Monitoramento"]
    }
  ];

  const stats = [
    { number: 150, label: "Projetos Entregues", icon: Briefcase },
    { number: 98, label: "Clientes Satisfeitos", icon: Users, suffix: "%" },
    { number: 50, label: "Desenvolvedores", icon: Code2, suffix: "+" },
    { number: 5, label: "Anos de Experiência", icon: Award, suffix: "+" }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "CEO, TechStart",
      content: "A MCP-Developer transformou nossa ideia em um produto incrível. Equipe extremamente competente e atenciosa.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Maria Santos",
      role: "Diretora, Digital Corp",
      content: "Superaram todas as expectativas! O sistema ficou perfeito e dentro do prazo. Recomendo muito!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Oliveira",
      role: "CTO, InnovaTech",
      content: "Profissionalismo e qualidade técnica excepcionais. Parceiros de confiança para nossos projetos mais importantes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "GraphQL", icon: "◼️" },
    { name: "Redis", icon: "🔴" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "Next.js", icon: "▲" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 text-gray-900">
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-100 backdrop-blur-xl bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  <span className="text-gray-900">MCP</span>
                  <span className="text-emerald-600">-Developer</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#servicos" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#depoimentos" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                Contato
              </a>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-full shadow-sm"
                onClick={() => window.open('https://wa.me/5531991776441?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A sua imaginação
              <br />
              <span className="text-emerald-600">
                transformada
              </span>
              <br />
              em sistema
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light mb-12 max-w-4xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Desenvolvemos soluções tecnológicas de ponta que transformam 
              suas ideias em produtos digitais extraordinários.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 text-lg rounded-full shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://wa.me/5531991776441?text=Olá! Gostaria de começar um projeto.', '_blank')}
              >
                Começar Projeto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsDemoOpen(true)}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-7 text-lg rounded-full transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-8 mt-16 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-gray-600 font-medium">150+ Projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span className="text-gray-600 font-medium">4.9/5 Avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="text-gray-600 font-medium">5+ Anos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatsCounter
                key={stat.label}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 px-4 py-2 rounded-full">
              <Target className="w-4 h-4 mr-2" />
              O que fazemos
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Nossos <span className="text-emerald-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Soluções completas em desenvolvimento de software para transformar seu negócio digitalmente.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 font-light mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 px-4 py-2 rounded-full">
              <Activity className="w-4 h-4 mr-2" />
              Processo
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Como <span className="text-emerald-600">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Metodologia ágil e eficiente para entregar resultados excepcionais.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Technologies */}
      <section id="tecnologias" className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 px-4 py-2 rounded-full">
              <CircuitBoard className="w-4 h-4 mr-2" />
              Stack Tecnológico
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-emerald-600">Tecnologias</span> de Ponta
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Utilizamos as melhores e mais modernas tecnologias do mercado.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-gray-900 font-medium">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-2 border-emerald-200 px-4 py-2 rounded-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Depoimentos
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              O que nossos <span className="text-emerald-600">clientes dizem</span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Histórias de sucesso de quem confiou em nosso trabalho.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-600 rounded-[3rem] p-16 md:p-24"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 mb-8"
              >
                <Rocket className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Vamos começar seu projeto!</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Pronto para transformar
                <br />
                sua ideia em realidade?
              </h2>
              
              <p className="text-emerald-50 text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Entre em contato conosco e receba um orçamento personalizado.
                Nossa equipe está pronta para tirar seu projeto do papel!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-7 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5531991776441?text=Olá! Vim pelo site e gostaria de conversar sobre um projeto.', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Orçamento gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="font-bold text-xl mb-2">
                  <span className="text-gray-900">MCP</span>
                  <span className="text-emerald-600">-Developer</span>
                </h3>
                <p className="text-gray-600 text-sm font-light">A sua imaginação transformada em sistema</p>
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Transformamos ideias em soluções digitais de alto impacto. 
                Especialistas em desenvolvimento de software sob medida.
              </p>
              <div className="flex gap-3">
                {[Globe, Mail, Phone].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg flex items-center justify-center text-emerald-600 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {['Serviços', 'Sobre', 'Portfólio', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors font-light flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>mcpdeveloper@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>+55 (31) 99177-6441</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Belo Horizonte - MG, Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm font-light">
              © {new Date().getFullYear()} MCP-Developer. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 font-light">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Termos</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
