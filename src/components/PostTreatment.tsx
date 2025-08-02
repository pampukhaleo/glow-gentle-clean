
import { XCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PostTreatmentProps {
  isVisible: Record<string, boolean>;
}

export const PostTreatment = ({ isVisible }: PostTreatmentProps) => {
  const { t } = useLanguage();
  
  const rules = [
    t('posttreatment.rule1'),
    t('posttreatment.rule2'),
    t('posttreatment.rule3'),
    t('posttreatment.rule4'),
    t('posttreatment.rule5')
  ];

  return (
    <section 
      id="posttreatment" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.posttreatment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-6">
              {t('posttreatment.title')}
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                </div>
                <p className="font-lora text-gray-700 leading-relaxed text-lg">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-4">
                {t('posttreatment.frequency.title')}
              </h3>
              <p className="font-lora text-gray-700 leading-relaxed">
                {t('posttreatment.frequency.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
