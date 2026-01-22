"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Clock, AlertCircle, TrendingUp, Users, FileText, Zap, Play, BarChart3, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeProcesses, setActiveProcesses] = useState(12);
  const [completedToday, setCompletedToday] = useState(47);
  const [efficiency, setEfficiency] = useState(94);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveProcesses(prev => prev + Math.floor(Math.random() * 3) - 1);
      setCompletedToday(prev => prev + Math.floor(Math.random() * 2));
      setEfficiency(prev => Math.min(100, prev + (Math.random() * 2 - 1)));
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const processes = [
    {
      id: 1,
      name: "Processamento de Notas Fiscais",
      status: "running",
      progress: 78,
      time: "2min 34s",
      documents: 156,
      color: "emerald"
    },
    {
      id: 2,
      name: "Envio Automático de E-mails",
      status: "completed",
      progress: 100,
      time: "Concluído",
      documents: 340,
      color: "green"
    },
    {
      id: 3,
      name: "Geração de Relatórios",
      status: "running",
      progress: 45,
      time: "5min 12s",
      documents: 89,
      color: "blue"
    },
    {
      id: 4,
      name: "Sincronização de Dados",
      status: "queued",
      progress: 0,
      time: "Na fila",
      documents: 234,
      color: "yellow"
    },
    {
      id: 5,
      name: "Backup Automático",
      status: "running",
      progress: 92,
      time: "1min 05s",
      documents: 523,
      color: "purple"
    }
  ];

  const recentActivities = [
    { action: "Fatura #3421 processada", time: "Há 2 min", icon: CheckCircle2, color: "text-green-400" },
    { action: "267 e-mails enviados", time: "Há 5 min", icon: Zap, color: "text-yellow-400" },
    { action: "Relatório mensal gerado", time: "Há 12 min", icon: FileText, color: "text-blue-400" },
    { action: "Backup completo realizado", time: "Há 18 min", icon: CheckCircle2, color: "text-emerald-400" },
    { action: "34 tarefas automatizadas", time: "Há 25 min", icon: Activity, color: "text-purple-400" }
  ];

  const stats = [
    { label: "Tempo Economizado", value: "234h", change: "+12%", trend: "up", icon: Clock },
    { label: "Processos Ativos", value: activeProcesses.toString(), change: "+3", trend: "up", icon: Activity },
    { label: "Taxa de Sucesso", value: `${efficiency.toFixed(1)}%`, change: "+2.3%", trend: "up", icon: TrendingUp },
    { label: "Documentos Processados", value: "1.2K", change: "+45", trend: "up", icon: FileText }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "running":
        return <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}><Activity className="w-4 h-4" /></motion.div>;
      case "completed":
        return <CheckCircle2 className="w-4 h-4" />;
      case "queued":
        return <Clock className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "running":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      case "queued":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/50";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="bg-gray-950 border-2 border-emerald-500/30 rounded-3xl shadow-2xl h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="relative border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5" />
                
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-black text-white">Sistema de Automação Empresarial</h2>
                        <p className="text-sm text-gray-400">Plataforma completa para automatizar processos</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-950">
                <div className="max-w-7xl mx-auto space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50 hover:border-emerald-500/50 transition-all">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <stat.icon className="w-5 h-5 text-emerald-400" />
                              <div className={`flex items-center gap-1 text-xs ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                {stat.change}
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Processos Ativos */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          <Activity className="w-5 h-5 text-emerald-400" />
                          Processos em Execução
                        </h3>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                          {activeProcesses} Ativos
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        {processes.map((process, index) => (
                          <motion.div
                            key={process.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50 hover:border-emerald-500/30 transition-all overflow-hidden group">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className={`w-10 h-10 rounded-xl bg-${process.color}-500/20 flex items-center justify-center border border-${process.color}-500/30`}>
                                      {getStatusIcon(process.status)}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-white text-sm">{process.name}</div>
                                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                                        <span className="flex items-center gap-1">
                                          <FileText className="w-3 h-3" />
                                          {process.documents} docs
                                        </span>
                                        <span className="flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          {process.time}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge className={`${getStatusColor(process.status)} border text-xs`}>
                                    {process.status === 'running' ? 'Em Execução' :
                                     process.status === 'completed' ? 'Concluído' :
                                     process.status === 'queued' ? 'Na Fila' : 'Pausado'}
                                  </Badge>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs text-gray-400">
                                    <span>Progresso</span>
                                    <span className="font-semibold text-emerald-400">{process.progress}%</span>
                                  </div>
                                  <div className="relative">
                                    <Progress value={process.progress} className="h-2 bg-gray-700" />
                                    {process.status === 'running' && (
                                      <motion.div
                                        className="absolute top-0 left-0 h-2 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: [-80, 400] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Atividades Recentes */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-emerald-400" />
                          Atividade Recente
                        </h3>
                      </div>

                      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 pb-4 border-b border-gray-700/50 last:border-0 last:pb-0"
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center ${activity.color}`}>
                                  <activity.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-white font-medium truncate">{activity.action}</p>
                                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Stats */}
                      <Card className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-500/30">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-400">Desempenho Hoje</div>
                              <div className="text-2xl font-bold text-white">{completedToday} tarefas</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-emerald-400">
                            <span>+23% vs. ontem</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-center"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Impressionado com as possibilidades?
                    </h3>
                    <p className="text-emerald-50 mb-4">
                      Este é apenas um exemplo do que podemos criar para automatizar seus processos empresariais.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-white text-emerald-600 hover:bg-gray-100 font-bold"
                      onClick={() => {
                        window.open('https://wa.me/5531991776441?text=Olá! Vi a demonstração do sistema e gostaria de um sistema assim!', '_blank');
                        onClose();
                      }}
                    >
                      Quero Um Sistema Assim!
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}