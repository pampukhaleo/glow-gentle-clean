
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1 rounded-full text-sm font-montserrat transition-colors duration-300 ${
          language === 'de' 
            ? 'bg-salon-teal text-white' 
            : 'text-gray-600 hover:text-salon-teal'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('uk')}
        className={`px-3 py-1 rounded-full text-sm font-montserrat transition-colors duration-300 ${
          language === 'uk' 
            ? 'bg-salon-teal text-white' 
            : 'text-gray-600 hover:text-salon-teal'
        }`}
      >
        UK
      </button>
    </div>
  );
};
