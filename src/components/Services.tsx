import { Zap, Heart, Star, Shield, Users, Sparkles, User, Shirt, Target, Footprints, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServicesProps {
  isVisible: Record<string, boolean>;
}

export const Services = ({ isVisible }: ServicesProps) => {
  const { t, language } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePackageClick = (packageId: string) => {
    // Scroll to contact section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      
      // Trigger service selection after a short delay to ensure the contact section is visible
      setTimeout(() => {
        const event = new CustomEvent('selectService', { detail: { serviceId: packageId } });
        window.dispatchEvent(event);
      }, 500);
    }
  };
//new
  // Мужские пакеты с переводами
  const menPackages = [
    {
      title: 'Business Rücken',
      description: language === 'de' ? 'Rücken · Nacken · Achseln' : 'Спина · Потилиця · Пахви',
      price: '119€',
      popular: false
    },
    {
      title: 'Oberkörper Paket',
      description: language === 'de' ? 'Brust · Bauch · Achseln · Nacken' : 'Груди · Живіт · Пахви · Потилиця',
      price: '139€',
      popular: true
    },
    {
      title: 'Intim Deluxe',
      description: language === 'de' ? 'Intimbereich komplett · Po-Bereich' : 'Інтим повністю · Зона сідниць',
      price: '99€',
      popular: false
    },
    {
      title: 'Fresh Start',
      description: language === 'de' ? 'Achseln · Bartkontur · Hals' : 'Пахви · Контур бороди · Шия',
      price: '79€',
      popular: true
    },
    {
      title: 'Face & Style',
      description: language === 'de' ? 'Gesicht komplett · Hals' : 'Обличчя повністю · Шия',
      price: '89€',
      popular: false
    }
  ];

  // Женские пакеты с переводами
  const womenPackages = [
    {
      title: 'Baby Skin',
      description: language === 'de' ? 'Gesicht komplett + Hals' : 'Обличчя повністю + шия',
      firstPrice: '69€',
      regularPrice: '89€',
      popular: true
    },
    {
      title: 'Smooth Basic',
      description: language === 'de' ? 'Achseln + Intim komplett + Gesäßbereich' : 'Пахви + інтим повністю + зона сідниць',
      firstPrice: '89€',
      regularPrice: '129€',
      popular: false
    },
    {
      title: 'Beauty Legs',
      description: language === 'de' ? 'Unterschenkel komplett + Intim komplett + Gesäßbereich' : 'Гомілки повністю + інтим повністю + зона сідниць',
      firstPrice: '99€',
      regularPrice: '139€',
      popular: false
    },
    {
      title: 'Soft Touch',
      description: language === 'de' ? 'Arme komplett + Achseln' : 'Руки повністю + пахви',
      firstPrice: '99€',
      regularPrice: '129€',
      popular: false
    },
    {
      title: 'Smooth Premium',
      description: language === 'de' ? 'Beine komplett + Intim komplett + Achseln + Gesäßbereich' : 'Ноги повністю + інтим повністю + пахви + зона сідниць',
      firstPrice: '149€',
      regularPrice: '199€',
      popular: true
    }
  ];

  // Полное тело пакеты для женщин - отображаются отдельно большими блоками
  const womenFullBodyPackages = [
    {
      title: language === 'de' ? 'Ganzkörper' : 'Все тіло',
      subtitle: language === 'de' ? 'ohne Gesicht' : 'без обличчя',
      description: language === 'de' 
        ? 'Beine · Arme · Achseln · Bauch · Rücken · Intim komplett' 
        : 'Ноги · Руки · Пахви · Живіт · Спина · Інтим повністю',
      firstPrice: '99€',
      regularPrice: '149€',
      id: 'women-ganzkorper'
    },
    {
      title: language === 'de' ? 'Ganzkörper komplett' : 'Все тіло повністю',
      subtitle: language === 'de' ? 'inkl. Gesicht' : 'включно з обличчям',
      description: language === 'de' 
        ? 'Gesicht · Arme · Beine · Achseln · Bauch · Brust · Rücken · Intim komplett' 
        : 'Обличчя · Руки · Ноги · Пахви · Живіт · Груди · Спина · Інтим повністю',
      firstPrice: '149€',
      regularPrice: '229€',
      id: 'women-ganzkorper-komplett'
    }
  ];

  // Полное тело пакеты для мужчин - отображаются отдельно большими блоками
  const menFullBodyPackages = [
    {
      title: language === 'de' ? 'Ganzkörper' : 'Все тіло',
      subtitle: language === 'de' ? 'ohne Intimbereich' : 'без інтимної зони',
      description: language === 'de' 
        ? 'Arme · Beine · Achseln · Bauch · Rücken' 
        : 'Руки · Ноги · Пахви · Живіт · Спина',
      firstPrice: '199€',
      regularPrice: '249€',
      id: 'men-ganzkorper'
    },
    {
      title: language === 'de' ? 'Ganzkörper + Intim' : 'Все тіло + Інтим',
      subtitle: language === 'de' ? 'inkl. Gesicht & Intimbereich' : 'включно з обличчям та інтимом',
      description: language === 'de' 
        ? 'Gesicht · Arme · Beine · Achseln · Bauch · Brust · Rücken · Intimbereich komplett' 
        : 'Обличчя · Руки · Ноги · Пахви · Живіт · Груди · Спина · Інтим повністю',
      firstPrice: '249€',
      regularPrice: '299€',
      id: 'men-ganzkorper-intim'
    }
  ];

  // Отдельные услуги для мужчин - сгруппированные с переводами
  const menServiceGroups = [
    {
      title: t('men.services.face'),
      icon: User,
      services: [
        { name: t('men.services.face.eyebrow'), price: '30€' },
        { name: t('men.services.face.beard-contour'), price: '40€' },
        { name: t('men.services.face.neck'), price: '40€' },
        { name: t('men.services.face.beard'), price: '45€' },
        { name: t('men.services.face.cheeks'), price: '45€' },
        { name: t('men.services.face.nape'), price: '40€' },
        { name: t('men.services.face.complete'), price: '85€' }
      ]
    },
    {
      title: t('men.services.upper-body'),
      icon: Shirt,
      services: [
        { name: t('men.services.upper-body.armpits'), price: '60€' },
        { name: t('men.services.upper-body.forearms'), price: '70€' },
        { name: t('men.services.upper-body.shoulders'), price: '70€' },
        { name: t('men.services.upper-body.arms'), price: '120€' },
        { name: t('men.services.upper-body.chest'), price: '80€' },
        { name: t('men.services.upper-body.belly'), price: '80€' }
      ]
    },
    {
      title: t('men.services.intimate'),
      icon: Target,
      services: [
        { name: t('men.services.intimate.front'), price: '80€' },
        { name: t('men.services.intimate.complete'), price: '100€' }
      ]
    },
    {
      title: t('men.services.legs'),
      icon: Footprints,
      services: [
        { name: t('men.services.legs.thighs'), price: '80€' },
        { name: t('men.services.legs.shins'), price: '80€' },
        { name: t('men.services.legs.complete'), price: '140€' }
      ]
    },
    {
      title: t('men.services.back'),
      icon: ArrowUp,
      services: [
        { name: t('men.services.back.complete'), price: '110€' }
      ]
    }
  ];

  // Отдельные услуги для женщин - сгруппированные с переводами
  const womenServiceGroups = [
    {
      title: t('women.services.face'),
      icon: User,
      services: [
        { name: t('women.services.face.eyebrow'), price: '20€' },
        { name: t('women.services.face.upper-lip'), price: '20€' },
        { name: t('women.services.face.chin'), price: '25€' },
        { name: t('women.services.face.cheeks'), price: '30€' },
        { name: t('women.services.face.neck'), price: '30€' },
        { name: t('women.services.face.complete'), price: '60€' }
      ]
    },
    {
      title: t('women.services.upper-body'),
      icon: Shirt,
      services: [
        { name: t('women.services.upper-body.armpits'), price: '40€' },
        { name: t('women.services.upper-body.nipples'), price: '20€' },
        { name: t('women.services.upper-body.belly-stripe'), price: '20€' },
        { name: t('women.services.upper-body.belly'), price: '40€' },
        { name: t('women.services.upper-body.back'), price: '90€' },
        { name: t('women.services.upper-body.nape'), price: '30€' }
      ]
    },
    {
      title: t('women.services.arms'),
      icon: Shirt,
      services: [
        { name: t('women.services.arms.forearms'), price: '50€' },
        { name: t('women.services.arms.upper-arms'), price: '50€' },
        { name: t('women.services.arms.complete'), price: '90€' }
      ]
    },
    {
      title: t('women.services.intimate'),
      icon: Target,
      services: [
        { name: t('women.services.intimate.complete'), price: '70€' },
        { name: t('women.services.intimate.buttocks'), price: '40€' }
      ]
    },
    {
      title: t('women.services.legs'),
      icon: Footprints,
      services: [
        { name: t('women.services.legs.thighs'), price: '60€' },
        { name: t('women.services.legs.shins'), price: '60€' },
        { name: t('women.services.legs.complete'), price: '100€' }
      ]
    }
  ];

  const PackageCard = ({ pkg, index, gender }) => {
    // Check if this is the new pricing format (firstPrice/regularPrice), single price, or old discount format
    const hasNewPricing = 'firstPrice' in pkg;
    const hasSinglePrice = 'price' in pkg && !('originalPrice' in pkg);
    
    return (
      <div
        key={index}
        className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group border-2 cursor-pointer ${
          pkg.popular ? 'border-salon-teal ring-2 ring-salon-teal/20' : 'border-gray-100'
        }`}
        onClick={() => handlePackageClick(`${gender}-${pkg.title.toLowerCase().replace(/\s+/g, '-').replace(/ü/g, 'u').replace(/ä/g, 'a').replace(/ö/g, 'o')}`)}
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
        
        {hasNewPricing ? (
          // New pricing format with first appointment and regular pricing
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-lora text-sm">{t('services.first-appointment')}:</span>
              <span className="text-salon-teal font-montserrat font-bold text-xl">{pkg.firstPrice}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-lora text-sm">{t('services.regular-price')}:</span>
              <span className="text-gray-700 font-montserrat font-semibold text-lg">{pkg.regularPrice}</span>
            </div>
          </div>
        ) : hasSinglePrice ? (
          // Single price format (no discount, just one price)
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-salon-teal font-montserrat font-bold text-3xl">
              {pkg.price}
            </span>
          </div>
        ) : (
          // Old pricing format with discount
          <>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-salon-teal font-montserrat font-bold text-2xl">
                {pkg.price}
              </span>
              <span className="text-gray-400 line-through font-montserrat text-lg">
                {pkg.originalPrice}
              </span>
            </div>

            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
              {language === 'de' ? 'Ersparnis' : 'Економія'} {parseInt(pkg.originalPrice) - parseInt(pkg.price)}€
            </div>
          </>
        )}
        
        <div className="absolute inset-0 bg-salon-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
      </div>
    );
  };

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
              {language === 'de' ? 'Für Frauen' : 'Для жінок'}
            </TabsTrigger>
            <TabsTrigger 
              value="men"
              className="flex items-center gap-2 font-montserrat font-medium text-base data-[state=active]:bg-salon-teal data-[state=active]:text-white rounded-lg"
            >
              <Users className="w-4 h-4" />
              {language === 'de' ? 'Für Männer' : 'Для чоловіків'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="women">
            <div className="space-y-12">
              {/* Большие блоки Ganzkörper */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                    {language === 'de' ? 'Ganzkörper-Pakete' : 'Пакети для всього тіла'}
                  </h3>
                  <p className="text-gray-600 font-lora">
                    {language === 'de' ? 'Komplette Haarentfernung am ganzen Körper' : 'Повне видалення волосся на всьому тілі'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {womenFullBodyPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-salon-teal to-salon-teal-light rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                      onClick={() => handlePackageClick(pkg.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-montserrat font-bold text-2xl text-white mb-1">
                            {pkg.title}
                          </h3>
                          <p className="text-white/80 font-lora text-sm italic">
                            {pkg.subtitle}
                          </p>
                        </div>
                        <Sparkles className="w-8 h-8 text-white/90 group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <p className="text-white/90 font-lora text-sm mb-6 leading-relaxed">
                        {pkg.description}
                      </p>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 font-lora">{t('services.first-appointment')}:</span>
                          <span className="text-white font-montserrat font-bold text-2xl">{pkg.firstPrice}</span>
                        </div>
                        <div className="h-px bg-white/20"></div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 font-lora">{t('services.regular-price')}:</span>
                          <span className="text-white font-montserrat font-bold text-2xl">{pkg.regularPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Женские пакеты */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                    {language === 'de' ? 'Zonen-Pakete' : 'Пакети за зонами'}
                  </h3>
                  <p className="text-gray-600 font-lora">
                    {language === 'de' ? 'Sparen Sie bis zu 15% mit unseren speziellen Angeboten' : 'Економте до 15% з нашими спеціальними пропозиціями'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {womenPackages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} index={index} gender="women" />
                  ))}
                </div>
              </div>

              {/* Отдельные женские услуги - сгруппированные */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-semibold text-xl text-gray-700 mb-2">
                    {language === 'de' ? 'Einzelleistungen' : 'Окремі послуги'}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {womenServiceGroups.map((group, index) => (
                    <ServiceGroupCard key={index} group={group} index={index} />
                  ))}
                </div>
              </div>


              {/* Hinweis */}
              <div className="text-center text-gray-600 font-lora text-sm">
                <p>
                  {language === 'de' 
                    ? '* Bei starkem Haarwuchs oder größeren Flächen kann ein Aufpreis entstehen.' 
                    : '* При сильному рості волосся або обробці великих ділянок можливе додаткове націнення.'
                  }
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="men">
            <div className="space-y-12">
              {/* Большие блоки Ganzkörper для мужчин */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                    {language === 'de' ? 'Ganzkörper-Pakete' : 'Пакети для всього тіла'}
                  </h3>
                  <p className="text-gray-600 font-lora">
                    {language === 'de' ? 'Komplette Haarentfernung am ganzen Körper' : 'Повне видалення волосся на всьому тілі'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {menFullBodyPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-salon-teal to-salon-teal-light rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                      onClick={() => handlePackageClick(pkg.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-montserrat font-bold text-2xl text-white mb-1">
                            {pkg.title}
                          </h3>
                          <p className="text-white/80 font-lora text-sm italic">
                            {pkg.subtitle}
                          </p>
                        </div>
                        <Sparkles className="w-8 h-8 text-white/90 group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <p className="text-white/90 font-lora text-sm mb-6 leading-relaxed">
                        {pkg.description}
                      </p>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 font-lora">{language === 'de' ? 'Erster Termin' : 'Перший візит'}:</span>
                          <span className="text-white font-montserrat font-bold text-2xl">{pkg.firstPrice}</span>
                        </div>
                        <div className="h-px bg-white/20"></div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 font-lora">{language === 'de' ? 'Folgetermine' : 'Наступні візити'}:</span>
                          <span className="text-white font-montserrat font-bold text-2xl">{pkg.regularPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Мужские зонные пакеты */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-bold text-2xl text-salon-teal mb-2">
                    {language === 'de' ? 'Beliebte Zonen-Pakete' : 'Популярні пакети за зонами'}
                  </h3>
                  <p className="text-gray-600 font-lora">
                    {language === 'de' ? 'Gezielte Behandlung für spezifische Zonen' : 'Цілеспрямоване лікування для конкретних зон'}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {menPackages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} index={index} gender="men" />
                  ))}
                </div>
              </div>

              {/* Отдельные мужские услуги - сгруппированные */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="font-montserrat font-semibold text-xl text-gray-700 mb-2">
                    {language === 'de' ? 'Einzelleistungen' : 'Окремі послуги'}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menServiceGroups.map((group, index) => (
                    <ServiceGroupCard key={index} group={group} index={index} />
                  ))}
                </div>
              </div>

            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="font-lora text-gray-600 mb-4">
            {language === 'de' ? '* Preise können je nach Behandlungsbereich variieren' : '* Ціни можуть варіюватися залежно від зони обробки'}
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
