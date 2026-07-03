"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Landmark, 
  ShoppingBag, 
  Factory, 
  GraduationCap, 
  Truck, 
  HardHat, 
  Tractor, 
  Landmark as GovtIcon, 
  Utensils 
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Construction", icon: HardHat },
  { name: "Agriculture", icon: Tractor },
  { name: "Government", icon: GovtIcon },
  { name: "Hospitality", icon: Utensils },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 relative bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Industries We Serve</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Every Sector</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-md md:text-right"
          >
            We build specialized technology solutions tailored to the unique challenges of diverse industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl glass bg-background/50 border border-border/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <industry.icon className="w-10 h-10 mb-4 text-blue-500 group-hover:text-white transition-colors duration-300" />
              <h3 className="font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
