
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-salon-cream via-salon-beige to-salon-muted animate-parallax"
        style={{
          backgroundImage: `linear-gradient(135deg, #EDE1CF 0%, #D9C5BC 50%, #B6ADAF 100%)`,
        }}
      />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-salon-teal mb-6 animate-fade-in">
          Professionelle
          <br />
          <span className="text-salon-teal-light">Laser-Haarentfernung</span>
        </h1>
        
        <p className="font-lora text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Dauerhaft glatte Haut mit modernster Laser-Technologie. 
          Sicher, effektiv und schmerzarm.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Kostenlose Beratung
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('about')}
            variant="outline"
            size="lg"
            className="border-salon-teal text-salon-teal hover:bg-salon-teal hover:text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300"
          >
            Mehr erfahren
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-salon-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-salon-teal rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
