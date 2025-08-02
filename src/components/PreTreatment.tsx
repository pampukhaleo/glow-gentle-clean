
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PreTreatmentProps {
  isVisible: Record<string, boolean>;
}

export const PreTreatment = ({ isVisible }: PreTreatmentProps) => {
  const { t } = useLanguage();
  
  const rules = [
    t('pretreatment.rule1'),
    t('pretreatment.rule2'),
    t('pretreatment.rule3'),
    t('pretreatment.rule4'),
    t('pretreatment.rule5'),
    t('pretreatment.rule6')
  ];

  return (
    <section 
      id="pretreatment" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.pretreatment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-6">
              {t('pretreatment.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-salon-teal rounded-full flex items-center justify-center text-white font-montserrat font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <p className="font-lora text-gray-700 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
