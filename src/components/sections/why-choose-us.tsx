"use client";

import { motion } from "framer-motion";
import { Users, Scaling, Cpu, ShieldCheck, RefreshCw, Headset, DollarSign, Zap } from "lucide-react";

const reasons = [
  { title: "Experienced Engineers", icon: Users, desc: "Our team consists of top-tier talent with years of industry experience." },
  { title: "Scalable Architecture", icon: Scaling, desc: "We build systems designed to grow seamlessly with your business." },
  { title: "Latest Technologies", icon: Cpu, desc: "Leveraging cutting-edge tech to keep you ahead of the competition." },
  { title: "Secure Development", icon: ShieldCheck, desc: "Security is embedded in every phase of our development lifecycle." },
  { title: "Agile Process", icon: RefreshCw, desc: "Iterative delivery ensures flexibility and rapid time-to-market." },
  { title: "24/7 Support", icon: Headset, desc: "Round-the-clock maintenance and support for peace of mind." },
  { title: "Cost Effective", icon: DollarSign, desc: "Optimized solutions that deliver maximum ROI without compromising quality." },
  { title: "High Performance", icon: Zap, desc: "Lightning-fast applications optimized for the best user experience." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Sticky Header */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-32 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2"
              >
                <span className="h-px w-8 bg-blue-500"></span>
                <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Why Choose Us</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
              >
                The Coral Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Advantage</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                We don't just write code; we build strategic partnerships to ensure your digital success.
              </motion.p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="md:w-2/3 lg:w-3/4 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-3xl bg-muted/30 border border-border/50 hover:bg-background hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
