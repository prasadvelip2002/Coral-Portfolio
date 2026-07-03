"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Brain, Code, Shield, Smartphone, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const floatingCards = [
  { title: "Cloud Infrastructure", icon: Server, color: "text-blue-500", bg: "bg-blue-500/10", delay: 0 },
  { title: "AI Solutions", icon: Brain, color: "text-cyan-500", bg: "bg-cyan-500/10", delay: 0.2 },
  { title: "Enterprise ERP", icon: Code, color: "text-indigo-500", bg: "bg-indigo-500/10", delay: 0.4 },
  { title: "Mobile Apps", icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10", delay: 0.6 },
  { title: "Cyber Security", icon: Shield, color: "text-red-500", bg: "bg-red-500/10", delay: 0.8 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 dark:opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-0 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50 dark:opacity-20 animate-reverse-spin-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dhdqnl0q9/image/upload/v1699967657/grid-pattern_q5mew6.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium text-muted-foreground">Pioneering Next-Gen Technology</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Building the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Future of Digital
              </span> <br className="hidden md:block"/>
              Innovation
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Coral Cloud delivers cutting-edge software development, cloud solutions, enterprise applications, AI-powered systems, mobile apps, and digital transformation services that help businesses grow faster.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 h-14 px-8 text-base transition-all group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl h-14 px-8 text-base border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all">
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Right Content - 3D/Floating Elements */}
          <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Central glowing orb / globe representation */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-3xl animate-pulse"></div>
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-600/40 to-cyan-400/40 blur-2xl flex items-center justify-center">
                 <Cloud className="w-24 h-24 text-white opacity-80" />
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: card.delay + 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: card.delay }
                }}
                className={cn(
                  "absolute glass p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/10 dark:border-white/5",
                  idx === 0 && "top-[10%] right-[10%]",
                  idx === 1 && "top-[30%] left-[5%]",
                  idx === 2 && "bottom-[20%] right-[5%]",
                  idx === 3 && "bottom-[10%] left-[15%]",
                  idx === 4 && "top-[50%] right-[-5%]"
                )}
              >
                <div className={cn("p-3 rounded-xl", card.bg)}>
                  <card.icon className={cn("w-6 h-6", card.color)} />
                </div>
                <span className="font-semibold text-sm md:text-base whitespace-nowrap">{card.title}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
