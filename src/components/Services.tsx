
import { Zap, Heart, Star, Shield } from "lucide-react";

interface ServicesProps {
  isVisible: Record<string, boolean>;
}

export const Services = ({ isVisible }: ServicesProps) => {
  const services = [
    {
      icon: Zap,
      title: "Gesicht & Hals",
      description: "Präzise Behandlung für empfindliche Gesichtsbereiche",
      price: "Ab 89€",
      popular: false
    },
    {
      icon: Heart,
      title: "Achseln",
      description: "Schnelle und effektive Behandlung für glatte Achseln",
      price: "Ab 59€",
      popular: true
    },
    {
      icon: Star,
      title: "Beine komplett",
      description: "Vollständige Beinbehandlung für dauerhaft glatte Haut",
      price: "Ab 199€",
      popular: true
    },
    {
      icon: Shield,
      title: "Bikinizone",
      description: "Diskrete und schonende Behandlung sensibler Bereiche",
      price: "Ab 79€",
      popular: false
    }
  ];

  return (
    <section 
      id="services" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            Unsere Leistungen
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            Professionelle Laser-Haarentfernung für alle Körperbereiche mit 
            modernster IPL- und Dioden-Laser Technologie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group ${
                service.popular ? 'ring-2 ring-salon-teal' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-salon-teal text-white px-4 py-1 rounded-full text-sm font-montserrat font-medium">
                  Beliebt
                </div>
              )}
              
              <div className="w-12 h-12 bg-salon-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-salon-teal transition-colors duration-300">
                <service.icon className="w-6 h-6 text-salon-teal group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="font-lora text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="text-salon-teal font-montserrat font-bold text-lg">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-lora text-gray-600 mb-4">
            * Preise können je nach Behandlungsbereich variieren
          </p>
          <button className="font-montserrat text-salon-teal hover:text-salon-teal-light transition-colors font-medium">
            Kostenlose Beratung vereinbaren →
          </button>
        </div>
      </div>
    </section>
  );
};
