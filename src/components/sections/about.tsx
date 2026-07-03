"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Innovative Software Solutions",
  "Enterprise Applications",
  "Cloud Infrastructure",
  "Artificial Intelligence",
  "Mobile Development",
  "Digital Transformation",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square lg:aspect-[4/3] border border-border/50 shadow-2xl group">
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                alt="Modern office with developers working"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Intelligent Technology</span>
            </h2>
            
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>
                Coral Cloud is a technology company focused on delivering innovative software solutions, enterprise applications, cloud infrastructure, artificial intelligence, mobile development, and digital transformation services.
              </p>
              <p>
                Our mission is to empower businesses with scalable, secure, and intelligent technology solutions that drive growth and ensure long-term success in a rapidly evolving digital landscape.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
