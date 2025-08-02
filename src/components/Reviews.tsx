
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReviewsProps {
  isVisible: Record<string, boolean>;
}

export const Reviews = ({ isVisible }: ReviewsProps) => {
  const { t } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah M.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Ich bin absolut begeistert! Nach 6 Behandlungen sind meine Beine komplett haarfrei. Das Team ist sehr professionell und die Behandlung war viel angenehmer als erwartet.",
      treatment: "Beine komplett"
    },
    {
      name: "Julia K.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Endlich keine Rasur mehr! Die Achselbehandlung war schnell und schmerzfrei. Kann LaserBeauty nur weiterempfehlen - beste Investition ever!",
      treatment: "Achseln"
    },
    {
      name: "Marina L.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", 
      rating: 5,
      text: "Super Beratung und excellente Ergebnisse! Nach 5 Behandlungen im Gesicht keine eingewachsenen Haare mehr. Meine Haut ist so viel glatter geworden.",
      treatment: "Gesicht"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section 
      id="reviews" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.reviews ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('reviews.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('reviews.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <img 
                src={reviews[currentReview].image} 
                alt={reviews[currentReview].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-salon-cream"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="font-lora text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <div className="font-montserrat">
                <div className="font-semibold text-salon-teal text-lg">
                  {reviews[currentReview].name}
                </div>
                <div className="text-gray-600 text-sm mt-1">
                  Behandlung: {reviews[currentReview].treatment}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-salon-teal/10 hover:bg-salon-teal text-salon-teal hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-salon-teal/10 hover:bg-salon-teal text-salon-teal hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentReview ? 'bg-salon-teal' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
