
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  useEffect(() => {
    document.title = "ផលប័ត្រ - Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
      <Preloader />
      <ParticlesBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <CustomCursor />
    </div>
  );
};

export default Index;
