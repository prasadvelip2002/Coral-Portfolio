"use client";

import { motion } from "framer-motion";
import { Search, PenTool, LayoutTemplate, Code2, TestTube, Rocket, HeartHandshake } from "lucide-react";
import { clsx } from "clsx";

const processSteps = [
  { title: "Discover", icon: Search },
  { title: "Planning", icon: PenTool },
  { title: "Design", icon: LayoutTemplate },
  { title: "Development", icon: Code2 },
  { title: "Testing", icon: TestTube },
  { title: "Deployment", icon: Rocket },
  { title: "Support", icon: HeartHandshake },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Our Process</span>
            <span className="h-px w-8 bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Deliver Excellence</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/50 to-blue-500/20 hidden md:block rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 text-center group"
              >
                {/* Icon Container */}
                <div className={clsx(
                  "w-24 h-24 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border-4 border-background bg-muted/50 transition-all duration-300 relative",
                  "group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/25 group-hover:scale-110"
                )}>
                  <step.icon className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 text-muted-foreground group-hover:text-white transition-colors" />
                  
                  {/* Connection dot on the line */}
                  <div className="absolute -z-10 w-full h-full bg-blue-500/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                </div>

                {/* Text content */}
                <div>
                  <h3 className="font-bold text-lg md:text-sm lg:text-base group-hover:text-cyan-500 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-sm text-muted-foreground md:hidden lg:block">
                    Step 0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
