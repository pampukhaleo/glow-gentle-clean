
import { useState, useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PreTreatment } from "@/components/PreTreatment";
import { Procedure } from "@/components/Procedure";
import { PostTreatment } from "@/components/PostTreatment";
import { Benefits } from "@/components/Benefits";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const IndexContent = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero/>
        <About isVisible={ isVisible }/>
        <Services isVisible={ isVisible }/>
        <PreTreatment isVisible={ isVisible }/>
        <Procedure isVisible={ isVisible }/>
        <PostTreatment isVisible={ isVisible }/>
        <Benefits isVisible={ isVisible }/>
        <Reviews isVisible={ isVisible }/>
        <FAQ isVisible={ isVisible }/>
        <Contact isVisible={ isVisible }/>
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
