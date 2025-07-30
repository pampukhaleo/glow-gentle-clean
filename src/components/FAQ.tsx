
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  isVisible: Record<string, boolean>;
}

export const FAQ = ({ isVisible }: FAQProps) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wie funktioniert Laser-Haarentfernung?",
      answer: "Der Laser sendet Lichtimpulse aus, die vom Melanin in den Haarwurzeln absorbiert werden. Die entstehende Wärme zerstört die Haarfollikel dauerhaft, ohne die umliegende Haut zu schädigen."
    },
    {
      question: "Ist die Behandlung schmerzhaft?",
      answer: "Die meisten Kunden beschreiben das Gefühl als leichtes Zwicken oder warmes Prickeln. Moderne Laser verfügen über Kühlsysteme, die den Komfort während der Behandlung erhöhen."
    },
    {
      question: "Wie viele Behandlungen sind nötig?",
      answer: "In der Regel sind 6-8 Behandlungen im Abstand von 4-6 Wochen erforderlich. Dies hängt von Ihrem Hauttyp, der Haarfarbe und dem Behandlungsbereich ab."
    },
    {
      question: "Für welche Hauttypen ist die Behandlung geeignet?",
      answer: "Moderne Laser können fast alle Hauttypen behandeln. Bei sehr heller Haut mit dunklen Haaren sind die Ergebnisse optimal. Eine individuelle Beratung klärt Ihre Eignung."
    },
    {
      question: "Was kostet eine Laser-Haarentfernung?",
      answer: "Die Kosten variieren je nach Behandlungsbereich. Einzelbehandlungen ab 59€ (Achseln) bis 199€ (Beine komplett). Pakete sind günstiger - gerne beraten wir Sie individuell."
    },
    {
      question: "Welche Nebenwirkungen können auftreten?",
      answer: "Leichte Rötungen und Schwellungen sind normal und klingen binnen weniger Stunden ab. Bei fachgerechter Anwendung sind schwere Nebenwirkungen sehr selten."
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
            Häufige Fragen
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            Alles was Sie über Laser-Haarentfernung wissen möchten
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
              Weitere Fragen?
            </h3>
            <p className="font-lora text-gray-700 mb-6">
              Unser erfahrenes Team beantwortet gerne alle Ihre Fragen in einem 
              persönlichen Beratungsgespräch.
            </p>
            <button className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-6 py-3 rounded-full transition-all duration-300">
              Kostenlose Beratung buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
