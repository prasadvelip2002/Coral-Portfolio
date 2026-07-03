import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { AboutSection } from "@/components/sections/about";
import { LeadershipSection } from "@/components/sections/leadership";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process";
import { IndustriesSection } from "@/components/sections/industries";
import { PortfolioSection } from "@/components/sections/portfolio";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <LeadershipSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TechStackSection />
      <ProcessSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
