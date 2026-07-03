"use client";

import { motion } from "framer-motion";
import { 
  Code2, MonitorSmartphone, Smartphone, Cloud, 
  Database, Brain, Workflow, Palette, 
  ShieldCheck, Lightbulb, Blocks, UploadCloud,
  ArrowRight
} from "lucide-react";

const services = [
  { title: "Custom Software Development", icon: Code2, desc: "Tailored software solutions designed to solve your unique business challenges." },
  { title: "Web Development", icon: MonitorSmartphone, desc: "High-performance, responsive web applications built with modern frameworks." },
  { title: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { title: "Cloud Solutions", icon: Cloud, desc: "Scalable cloud infrastructure and architecture optimization services." },
  { title: "Enterprise ERP", icon: Database, desc: "Integrated enterprise resource planning systems for streamlined operations." },
  { title: "AI & Machine Learning", icon: Brain, desc: "Intelligent systems and predictive analytics to automate and innovate." },
  { title: "Business Automation", icon: Workflow, desc: "Workflow automation to reduce manual tasks and increase efficiency." },
  { title: "UI/UX Design", icon: Palette, desc: "User-centric design solutions that engage and convert customers." },
  { title: "Cyber Security", icon: ShieldCheck, desc: "Robust security measures to protect your digital assets and data." },
  { title: "IT Consulting", icon: Lightbulb, desc: "Strategic technology advisory to align IT with your business goals." },
  { title: "API Integration", icon: Blocks, desc: "Seamless integration of third-party services and legacy systems." },
  { title: "Cloud Migration", icon: UploadCloud, desc: "Smooth transition of your applications and data to the cloud." },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Our Services</span>
            <span className="h-px w-8 bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We provide end-to-end technology services to help businesses innovate, scale, and achieve their digital transformation goals.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-6 rounded-3xl glass bg-background/50 hover:bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow">
                  {service.desc}
                </p>
                
                <div className="pt-4 flex items-center text-sm font-semibold text-blue-500 group-hover:text-cyan-500 transition-colors cursor-pointer">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
