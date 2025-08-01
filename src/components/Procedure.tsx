
import { MessageSquare, Search, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProcedureProps {
  isVisible: Record<string, boolean>;
}

export const Procedure = ({ isVisible }: ProcedureProps) => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: MessageSquare,
      title: t('procedure.consultation'),
      description: t('procedure.consultation.desc')
    },
    {
      icon: Search,
      title: t('procedure.preparation'), 
      description: t('procedure.preparation.desc')
    },
    {
      icon: Zap,
      title: t('procedure.treatment'),
      description: t('procedure.treatment.desc')
    },
    {
      icon: Heart,
      title: t('procedure.aftercare'),
      description: t('procedure.aftercare.desc')
    }
  ];

  return (
    <section 
      id="procedure" 
      data-section 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible.procedure ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('procedure.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('procedure.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-salon-cream rounded-full flex items-center justify-center mx-auto group-hover:bg-salon-teal transition-colors duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-salon-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-salon-teal text-white rounded-full flex items-center justify-center font-montserrat font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-salon-cream transform -translate-y-1/2 z-0">
                      <div className="w-0 h-full bg-salon-teal transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-3">
                  {step.title}
                </h3>
                
                <p className="font-lora text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-salon-cream/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-4">
              {t('procedure.duration.title')}
            </h3>
            <p className="font-lora text-gray-700 leading-relaxed">
              {t('procedure.duration.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
