
import { Zap, Heart, Star, Shield, Users, Sparkles, User, Shirt, Target, Footprints, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServicesProps {
  isVisible: Record<string, boolean>;
}

export const Services = ({ isVisible }: ServicesProps) => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Мужские пакеты
  const menPackages = [
    {
      title: 'Face & Style',
      description: 'Обличчя повністю + шия',
      price: '95€',
      originalPrice: '125€',
      popular: false
    },
    {
      title: 'Fresh Start',
      description: 'Пахви + контур бороди + шия',
      price: '90€',
      originalPrice: '140€',
      popular: true
    },
    {
      title: 'Business Rücken',
      description: 'Спина повністю + потилиця + пахви',
      price: '140€',
      originalPrice: '190€',
      popular: false
    },
    {
      title: 'Oberkörper Stark',
      description: 'Груди + живіт + пахви + потилиця',
      price: '170€',
      originalPrice: '240€',
      popular: true
    },
    {
      title: 'Intim Deluxe',
      description: 'Інтим повністю + зона сідниць + пахви',
      price: '130€',
      originalPrice: '170€',
      popular: false
    },
    {
      title: 'All Inclusive Man',
      description: 'Обличчя повністю + шия + спина повністю + груди + живіт + пахви + інтим повністю + зона сідниць',
      price: '320€',
      originalPrice: '450€',
      popular: true
    }
  ];

  // Женские пакеты (временно пустой массив)
  const womenPackages = [];

  // Отдельные услуги для мужчин - сгруппированные
  const menServiceGroups = [
    {
      title: 'Обличчя',
      icon: User,
      services: [
        { name: 'Середина брів', price: '30€' },
        { name: 'Контур бороди', price: '40€' },
        { name: 'Шия', price: '40€' },
        { name: 'Борода', price: '45€' },
        { name: 'Щоки', price: '45€' },
        { name: 'Потилиця', price: '40€' },
        { name: 'Обличчя повністю', price: '85€' }
      ]
    },
    {
      title: 'Верхня частина тіла',
      icon: Shirt,
      services: [
        { name: 'Пахви', price: '60€' },
        { name: 'Передпліччя', price: '70€' },
        { name: 'Плечі', price: '70€' },
        { name: 'Руки повністю', price: '120€' },
        { name: 'Груди', price: '80€' },
        { name: 'Живіт', price: '80€' }
      ]
    },
    {
      title: 'Інтимна зона',
      icon: Target,
      services: [
        { name: 'Передня інтимна зона', price: '80€' },
        { name: 'Інтимна зона повністю', price: '100€' }
      ]
    },
    {
      title: 'Ноги',
      icon: Footprints,
      services: [
        { name: 'Стегна', price: '80€' },
        { name: 'Гомілки', price: '80€' },
        { name: 'Ноги повністю', price: '140€' }
      ]
    },
    {
      title: 'Спина',
      icon: ArrowUp,
      services: [
        { name: 'Спина повністю', price: '110€' }
      ]
    }
  ];

  // Отдельные услуги для женщин (существующие)
  const womenServices = [
    {
      icon: Zap,
      title: t('services.face'),
      description: t('services.face.desc'),
      price: `${t('services.from')} 89€`
    },
    {
      icon: Heart,
      title: t('services.armpits'),
      description: t('services.armpits.desc'),
      price: `${t('services.from')} 59€`
    },
    {
      icon: Star,
      title: t('services.legs'),
      description: t('services.legs.desc'),
      price: `${t('services.from')} 199€`
    },
    {
      icon: Shield,
      title: t('services.bikini'),
      description: t('services.bikini.desc'),
      price: `${t('services.from')} 79€`
    }
  ];

  const PackageCard = ({ pkg, index }) => (
    <div
      key={index}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group border-2 ${
        pkg.popular ? 'border-salon-teal ring-2 ring-salon-teal/20' : 'border-gray-100'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-salon-teal to-salon-teal-light text-white px-4 py-1 rounded-full text-sm font-montserrat font-medium shadow-lg">
          <Sparkles className="w-3 h-3 inline mr-1" />
          {t('services.popular')}
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-2">
          {pkg.title}
        </h3>
        <p className="font-lora text-gray-600 text-sm leading-relaxed">
          {pkg.description}
        </p>
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-salon-teal font-montserrat font-bold text-2xl">
          {pkg.price}
        </span>
        <span className="text-gray-400 line-through font-montserrat text-lg">
          {pkg.originalPrice}
        </span>
      </div>

      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
        Економія {parseInt(pkg.originalPrice) - parseInt(pkg.price)}€
      </div>
    </div>
  );

  const ServiceCard = ({ service, index }) => (
    <div
      key={index}
      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-80 hover:opacity-100"
    >
      <div className="w-10 h-10 bg-salon-teal/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-salon-teal transition-colors duration-300">
        <service.icon className="w-5 h-5 text-salon-teal" />
      </div>
      
      <h4 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
        {service.title}
      </h4>
      
      <p className="font-lora text-gray-600 mb-3 text-sm">
        {service.description}
      </p>
      
      <div className="text-salon-teal font-montserrat font-bold">
        {service.price}
      </div>
    </div>
  );

  const ServiceGroupCard = ({ group, index }) => (
    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 opacity-80">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-salon-teal/10 rounded-lg flex items-center justify-center mr-3">
          <group.icon className="w-5 h-5 text-salon-teal" />
        </div>
        <h4 className="font-montserrat font-semibold text-lg text-gray-900">
          {group.title}
        </h4>
      </div>
      
      <div className="space-y-2">
        {group.services.map((service, serviceIndex) => (
          <div key={serviceIndex} className="flex justify-between items-center py-1">
            <span className="font-lora text-gray-700 text-sm">
              {service.name}
            </span>
            <span className="font-montserrat font-semibold text-salon-teal">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

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
            {t('services.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t('services.description')}
          </p>
        </div>

        <Tabs defaultValue="women" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 bg-white shadow-lg rounded-xl">
            <TabsTrigger 
              value="women" 
              className="flex items-center gap-2 font-montserrat font-medium text-base data-[state=active]:bg-salon-teal data-[state=active]:text-white rounded-lg"
            >
              <Users className="w-4 h-4" />
              Для жінок
            </TabsTrigger>
            <TabsTrigger 
              value="men"
              className="flex items-center gap-2 font-montserrat font-medium text-base data-[state=active]:bg-salon-teal data-[state=active]:text-white rounded-lg"
            >
              <Users className="w-4 h-4" />
              Для чоловіків
            </TabsTrigger>
          </TabsList>

          <TabsContent value="women">
            <div className="space-y-12">
              {/* Женские пакеты */}
              {womenPackages.length > 0 && (
                <div>
                  <div className="text-center mb-8">
                    <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                      Популярні жіночі пакети
                    </h3>
                    <p className="text-gray-600 font-lora">Економте до 40% з нашими спеціальними пропозиціями</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {womenPackages.map((pkg, index) => (
                      <PackageCard key={index} pkg={pkg} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Отдельные женские услуги */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-semibold text-xl text-gray-700 mb-2">
                    Окремі послуги
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {womenServices.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="men">
            <div className="space-y-12">
              {/* Мужские пакеты */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                    Популярні чоловічі пакети
                  </h3>
                  <p className="text-gray-600 font-lora">Економте до 40% з нашими спеціальними пропозиціями</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {menPackages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} index={index} />
                  ))}
                </div>
              </div>

              {/* Отдельные мужские услуги - сгруппированные */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-semibold text-xl text-gray-700 mb-2">
                    Окремі послуги
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menServiceGroups.map((group, index) => (
                    <ServiceGroupCard key={index} group={group} index={index} />
                  ))}
                </div>
              </div>

              {/* Полная эпиляция тела - отдельный блок */}
              <div className="bg-gradient-to-r from-salon-teal to-salon-teal-light rounded-2xl p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-2">
                  Повна епіляція тіла
                </h3>
                <p className="font-lora mb-4 opacity-90">
                  Комплексне рішення для всього тіла
                </p>
                <div className="text-4xl font-montserrat font-bold">
                  500€
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="font-lora text-gray-600 mb-4">
            * Ціни можуть варіюватися залежно від зони обробки
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-montserrat text-salon-teal hover:text-salon-teal-light transition-colors font-medium text-lg"
          >
            {t('services.consultation.btn')}
          </button>
        </div>
      </div>
    </section>
  );
};
