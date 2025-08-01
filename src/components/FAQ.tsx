
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQProps {
  isVisible: Record<string, boolean>;
}

export const FAQ = ({ isVisible }: FAQProps) => {
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6')
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      data-section 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('faq.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left bg-salon-cream/30 hover:bg-salon-cream/50 rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-lg text-salon-teal pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-salon-teal transition-transform duration-300 ${
                      openQuestion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="font-lora text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-salon-cream/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-semibold text-xl text-salon-teal mb-4">
              {t('faq.more.title')}
            </h3>
            <p className="font-lora text-gray-700 mb-6">
              {t('faq.more.desc')}
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-6 py-3 rounded-full transition-all duration-300"
            >
              {t('faq.more.btn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
