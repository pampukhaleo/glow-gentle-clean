
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'uk' : 'de');
  };

  const displayText = language === 'de' ? 'Українська' : 'Deutsch';

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full text-sm font-montserrat transition-colors duration-300 text-gray-600 hover:text-salon-teal hover:bg-salon-cream"
    >
      {displayText}
    </button>
  );
};
