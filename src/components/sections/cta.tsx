"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-navy to-background border border-border/50 shadow-2xl p-8 md:p-16 text-center flex flex-col items-center justify-center gap-8"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dhdqnl0q9/image/upload/v1699967657/grid-pattern_q5mew6.svg')] bg-center opacity-10"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl flex flex-col gap-6 items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Business?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's build something amazing together. Join hundreds of companies that trust Coral Cloud to drive their digital innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 h-14 px-8 text-base transition-all group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl h-14 px-8 text-base border-border/50 bg-background/20 backdrop-blur-md hover:bg-accent/50 hover:text-foreground transition-all">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
