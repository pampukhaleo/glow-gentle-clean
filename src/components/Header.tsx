
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t('nav.about'), id: "about" },
    { label: t('nav.services'), id: "services" },
    { label: t('nav.gallery'), id: "gallery" },
    { label: t('nav.reviews'), id: "reviews" },
    { label: t('nav.contact'), id: "contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-montserrat font-bold text-2xl text-salon-teal">
            LaserBeauty
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-lora text-gray-700 hover:text-salon-teal transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-salon-teal transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('nav.booking')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-lora text-gray-700 hover:text-salon-teal transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat w-full mt-2"
              >
                {t('nav.booking')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
