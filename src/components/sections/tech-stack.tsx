"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: [".NET", "Node.js", "Python", "Java", "Go"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Vercel"],
  },
  {
    category: "AI & ML",
    skills: ["OpenAI", "Gemini", "LangChain", "FastAPI", "Hugging Face"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-24 relative bg-muted/50 border-y border-border overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Our Tech Stack</span>
            <span className="h-px w-8 bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modern Technologies</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-3xl glass bg-background/50 border border-border/50 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border/50 pb-2">
                {tech.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {tech.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground hover:text-cyan-500 transition-colors cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    <span className="font-medium text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
