
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuRef = useRef<HTMLElement | null>(null);        // сам выпадающий <nav>
  const menuButtonRef = useRef<HTMLButtonElement | null>(null); // кнопка-бургер

  useEffect(() => {
    // Закрыть по клику вне меню
    const onPointer = (e: PointerEvent) => {
      if (!isMenuOpen) return;
      const t = e.target as Node;
      const insideMenu = menuRef.current?.contains(t);
      const onBurger  = menuButtonRef.current?.contains(t);
      if (!insideMenu && !onBurger) setIsMenuOpen(false);
    };

    // Закрыть по Esc
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    // Закрыть при ресайзе на ≥ lg (1024px)
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    // Блокируем прокрутку фона при открытом меню
    document.documentElement.classList.toggle("overflow-hidden", isMenuOpen);

    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

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
    { label: t('nav.reviews'), id: "reviews" },
    { label: t('nav.contact'), id: "contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between min-h-[60px]">
          <div className="flex items-center space-x-2" onClick={scrollToTop}>
            <img
              src="lovable-uploads/acf6dbb0-10a0-4c86-b2a5-5e3a5ecc43b8.png"
              alt="LaserBeauty Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="font-montserrat font-bold text-lg md:text-2xl text-salon-teal">
              <span className="text-[#F772C1]">Laser</span>Beauty
            </div>
          </div>

          {/* Desktop Navigation */ }
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-lora text-gray-700 hover:text-salon-teal transition-colors duration-300 relative group text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-salon-teal transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-4 lg:px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              {t('nav.booking')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-salon-teal" /> : <Menu size={24} className="text-salon-teal" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav ref={menuRef}
               id="mobile-menu"
               role="dialog"
               aria-modal="true"
               className="lg:hidden absolute left-0 right-0 top-full bg-white backdrop-blur-md shadow-lg border-t border-gray-100">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-lora text-gray-700 hover:text-salon-teal transition-colors text-left py-3 text-lg border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
              <div className="py-2 border-b border-gray-100">
                <LanguageSwitcher />
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat w-full py-3 text-lg"
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
