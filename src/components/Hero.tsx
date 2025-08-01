
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
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
      
      {/* Logo background - shifted to the right */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-96 h-96 md:w-[500px] md:h-[500px] opacity-15 bg-no-repeat bg-center bg-contain transform translate-x-32 md:translate-x-48"
          style={{
            backgroundImage: `url('/lovable-uploads/72c56bed-52df-4016-b3d1-753febbcdc13.png')`,
            filter: 'grayscale(80%) contrast(110%)',
          }}
        />
      </div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-salon-teal mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.title')}
          <br />
          <span className="text-salon-teal-light">{t('hero.subtitle')}</span>
        </h1>
        
        <p className="font-lora text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {t('hero.consultation')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('about')}
            variant="outline"
            size="lg"
            className="border-salon-teal text-salon-teal hover:bg-salon-teal hover:text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300"
          >
            {t('hero.learn')}
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
