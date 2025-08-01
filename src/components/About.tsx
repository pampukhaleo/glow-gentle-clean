
import { Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AboutProps {
  isVisible: Record<string, boolean>;
}

export const About = ({ isVisible }: AboutProps) => {
  const { t } = useLanguage();

  return (
    <section 
      id="about" 
      data-section 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('about.title')}
          </h2>
          
          <p className="font-lora text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            {t('about.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-salon-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-salon-teal transition-colors duration-300">
                <Award className="w-8 h-8 text-salon-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-2">
                {t('about.certified')}
              </h3>
              <p className="font-lora text-gray-600">
                {t('about.certified.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-salon-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-salon-teal transition-colors duration-300">
                <Users className="w-8 h-8 text-salon-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-2">
                {t('about.clients')}
              </h3>
              <p className="font-lora text-gray-600">
                {t('about.clients.desc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-salon-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-salon-teal transition-colors duration-300">
                <Clock className="w-8 h-8 text-salon-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-2">
                {t('about.experience')}
              </h3>
              <p className="font-lora text-gray-600">
                {t('about.experience.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
