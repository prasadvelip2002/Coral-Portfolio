"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

const categories = ["All", "Web App", "Mobile", "AI", "Cloud"];

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stats: { users: "500k+", increase: "120%" },
  },
  {
    id: 2,
    title: "AI Healthcare Assistant",
    category: "AI",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stats: { accuracy: "99.9%", time: "-40%" },
  },
  {
    id: 3,
    title: "Global Supply Chain App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stats: { downloads: "1M+", rating: "4.9" },
  },
  {
    id: 4,
    title: "Enterprise Cloud Migration",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    stats: { savings: "$2M+", uptime: "99.99%" },
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Our Portfolio</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Success Stories</span>
            </motion.h2>
          </div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === category 
                    ? "bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/25" 
                    : "bg-background border-border text-muted-foreground hover:border-blue-500/50 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/2] bg-muted/50 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 text-xs font-semibold mb-3 border border-blue-500/30">
                      {project.category}
                    </span>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex gap-4 mt-6 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-white/60 text-xs uppercase tracking-wider">{key}</p>
                          <p className="text-white font-bold">{value as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
