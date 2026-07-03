"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechNova Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    feedback: "Coral Cloud completely transformed our digital infrastructure. Their scalable solutions and attention to security gave us the confidence to expand globally.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, GrowthMasters",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    feedback: "The team's expertise in AI and machine learning helped us automate core processes, saving us thousands of hours and significantly boosting our bottom line.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director of IT, HealthPlus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    feedback: "Exceptional service from start to finish. They built a custom healthcare portal that is both secure and incredibly user-friendly. Highly recommended.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-muted/30 border-y border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase">Client Testimonials</span>
            <span className="h-px w-8 bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Industry Leaders</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-8 rounded-3xl glass bg-background/50 border border-border/50 hover:border-blue-500/30 transition-colors flex flex-col gap-6">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Feedback */}
                    <p className="text-lg text-muted-foreground flex-grow italic leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-sm">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="left-[-3rem] xl:left-[-4rem] bg-background/50 hover:bg-background border-border/50" />
              <CarouselNext className="right-[-3rem] xl:right-[-4rem] bg-background/50 hover:bg-background border-border/50" />
            </div>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
