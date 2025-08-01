
import { CheckCircle, Clock, Shield, Star, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BenefitsProps {
  isVisible: Record<string, boolean>;
}

export const Benefits = ({ isVisible }: BenefitsProps) => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: CheckCircle,
      title: t('benefits.smooth'),
      description: t('benefits.smooth.desc')
    },
    {
      icon: Clock,
      title: t('benefits.time'),
      description: t('benefits.time.desc')
    },
    {
      icon: Shield,
      title: t('benefits.safe'),
      description: t('benefits.safe.desc')
    },
    {
      icon: Star,
      title: t('benefits.suitable'),
      description: t('benefits.suitable.desc')
    },
    {
      icon: Heart,
      title: t('benefits.no-irritation'),
      description: t('benefits.no-irritation.desc')
    }
  ];

  return (
    <section 
      id="benefits" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('benefits.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('benefits.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-salon-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-salon-teal transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-salon-teal group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="font-lora text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-montserrat font-semibold text-2xl text-salon-teal mb-6">
              {t('benefits.cost.title')}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="font-montserrat font-medium text-lg text-gray-700 mb-3">
                  {t('benefits.cost.traditional')}
                </h4>
                <div className="space-y-2 text-sm font-lora text-gray-600">
                  <div>{t('benefits.cost.traditional.razor')}</div>
                  <div>{t('benefits.cost.traditional.waxing')}</div>
                  <div>{t('benefits.cost.traditional.time')}</div>
                </div>
                <div className="font-montserrat font-bold text-xl text-red-500 mt-4">
                  {t('benefits.cost.traditional.total')}
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-montserrat font-medium text-lg text-salon-teal mb-3">
                  {t('benefits.cost.laser')}
                </h4>
                <div className="space-y-2 text-sm font-lora text-gray-600">
                  <div>{t('benefits.cost.laser.treatments')}</div>
                  <div>{t('benefits.cost.laser.followup')}</div>
                  <div>{t('benefits.cost.laser.result')}</div>
                </div>
                <div className="font-montserrat font-bold text-xl text-salon-teal mt-4">
                  {t('benefits.cost.laser.total')}
                </div>
              </div>
            </div>
            
            <p className="font-lora text-sm text-gray-600 mt-6">
              {t('benefits.cost.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
