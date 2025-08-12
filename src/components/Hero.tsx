
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
    <section className="relative flex items-center justify-center py-20 overflow-hidden">
      {/* Static background without any scroll effects */ }
      <div className="absolute inset-0 bg-gradient-to-br from-salon-cream via-salon-beige to-salon-muted"/>

      {/* Content */ }
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-8">
        {/* Logo */ }
        <div className="mb-6 md:mb-8 animate-fade-in">
          <img
            src="logo_anastasiya.webp"
            alt="LaserBeauty Logo"
            className="
              h-48 w-48           /* 10rem × 10rem вместо 8rem */
              md:h-56 md:w-56     /* 14rem на средних экранах */
              lg:h-80 lg:w-80     /* 20rem на больших */
              xl:h-96 xl:w-96     /* 24rem на очень больших */
              mx-auto object-contain drop-shadow-lg
            "
          />
        </div>

        <h1
          className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-salon-teal mb-4 md:mb-6 animate-fade-in leading-tight"
          style={ { animationDelay: '0.1s' } }>
          <span className="block">{ t('hero.title') }</span>
          <span className="block text-salon-teal-light mt-2">{ t('hero.subtitle') }</span>
        </h1>

        <p
          className="font-lora text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in px-2"
          style={ { animationDelay: '0.3s' } }>
          { t('hero.description') }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in px-4"
             style={ { animationDelay: '0.5s' } }>
          <Button
            onClick={ () => scrollToSection('contact') }
            size="lg"
            className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl group w-full sm:w-auto"
          >
            { t('hero.consultation') }
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"/>
          </Button>

          <Button
            onClick={ () => scrollToSection('about') }
            variant="outline"
            size="lg"
            className="border-salon-teal text-salon-teal hover:bg-salon-teal hover:text-white font-montserrat px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            { t('hero.learn') }
          </Button>
        </div>
      </div>

      {/* Scroll indicator - только на больших экранах */ }
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-salon-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-salon-teal rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
