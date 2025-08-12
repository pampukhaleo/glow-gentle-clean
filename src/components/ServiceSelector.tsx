import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ServiceSelectorProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

export const ServiceSelector = ({ selectedServices, onServicesChange }: ServiceSelectorProps) => {
  const { language } = useLanguage();

  // Women's packages
  const womenPackages = [
    {
      id: 'women-smooth-basic',
      name: language === 'de' ? 'Smooth Basic' : 'Smooth Basic',
      description: language === 'de' ? 'Achseln + Intim komplett + Gesäßbereich' : 'Пахви + інтим повністю + зона сідниць',
      price: '100€'
    },
    {
      id: 'women-beauty-legs',
      name: language === 'de' ? 'Beauty Legs' : 'Beauty Legs',
      description: language === 'de' ? 'Unterschenkel + Intim komplett + Gesäßbereich' : 'Гомілки + інтим повністю + зона сідниць',
      price: '120€'
    },
    {
      id: 'women-soft-touch',
      name: language === 'de' ? 'Soft Touch' : 'Soft Touch',
      description: language === 'de' ? 'Arme komplett + Achseln' : 'Руки повністю + пахви',
      price: '120€'
    },
    {
      id: 'women-baby-skin',
      name: language === 'de' ? 'Baby Skin' : 'Baby Skin',
      description: language === 'de' ? 'Gesicht komplett + Hals' : 'Обличчя повністю + шия',
      price: '80€'
    },
    {
      id: 'women-smooth-premium',
      name: language === 'de' ? 'Smooth Premium' : 'Smooth Premium',
      description: language === 'de' ? 'Beine komplett + Intim komplett + Gesäßbereich + Achseln' : 'Ноги повністю + інтим повністю + зона сідниць + пахви',
      price: '180€'
    }
  ];

  // Men's packages
  const menPackages = [
    {
      id: 'men-face-style',
      name: 'Face & Style',
      description: language === 'de' ? 'Gesicht komplett + Hals' : 'Обличчя повністю + шия',
      price: '95€'
    },
    {
      id: 'men-fresh-start',
      name: 'Fresh Start',
      description: language === 'de' ? 'Achseln + Bartkontur + Hals' : 'Пахви + контур бороди + шия',
      price: '90€'
    },
    {
      id: 'men-business-back',
      name: 'Business Rücken',
      description: language === 'de' ? 'Rücken komplett + Nacken + Achseln' : 'Спина повністю + потилиця + пахви',
      price: '140€'
    },
    {
      id: 'men-upper-strong',
      name: 'Oberkörper Stark',
      description: language === 'de' ? 'Brust + Bauch + Achseln + Nacken' : 'Груди + живіт + пахви + потилиця',
      price: '170€'
    },
    {
      id: 'men-intimate-deluxe',
      name: 'Intim Deluxe',
      description: language === 'de' ? 'Intim komplett + Gesäßbereich + Achseln' : 'Інтим повністю + зона сідниць + пахви',
      price: '130€'
    },
    {
      id: 'men-all-inclusive',
      name: 'All Inclusive Man',
      description: language === 'de' ? 'Gesicht + Hals + Rücken + Brust + Bauch + Achseln + Intim + Gesäßbereich' : 'Обличчя + шия + спина + груди + живіт + пахви + інтим + зона сідниць',
      price: '320€'
    }
  ];

  // Individual services for women
  const womenIndividualServices = [
    // Face
    { id: 'women-eyebrow', name: language === 'de' ? 'Augenbrauenmitte' : 'Середина брів', price: '20€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'women-upper-lip', name: language === 'de' ? 'Oberlippe' : 'Верхня губа', price: '20€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'women-chin', name: language === 'de' ? 'Kinn' : 'Підборіддя', price: '25€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'women-cheeks', name: language === 'de' ? 'Wangen' : 'Щоки', price: '30€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'women-neck', name: language === 'de' ? 'Hals' : 'Шия', price: '30€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'women-face-complete', name: language === 'de' ? 'Gesicht komplett' : 'Обличчя повністю', price: '60€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    
    // Upper body
    { id: 'women-armpits', name: language === 'de' ? 'Achseln' : 'Пахви', price: '40€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    { id: 'women-nipples', name: language === 'de' ? 'Brustwarzen' : 'Соски', price: '20€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    { id: 'women-belly-stripe', name: language === 'de' ? 'Bauchstreifen' : 'Смужка на животі', price: '20€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    { id: 'women-belly', name: language === 'de' ? 'Bauch komplett' : 'Живіт повністю', price: '40€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    { id: 'women-back', name: language === 'de' ? 'Rücken komplett' : 'Спина повністю', price: '90€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    { id: 'women-nape', name: language === 'de' ? 'Nacken' : 'Потилиця', price: '30€', category: language === 'de' ? 'Oberkörper' : 'Тулуб' },
    
    // Arms
    { id: 'women-forearms', name: language === 'de' ? 'Unterarme' : 'Підпліччя', price: '50€', category: language === 'de' ? 'Arme' : 'Руки' },
    { id: 'women-upper-arms', name: language === 'de' ? 'Oberarme' : 'Плечі', price: '50€', category: language === 'de' ? 'Arme' : 'Руки' },
    { id: 'women-arms-complete', name: language === 'de' ? 'Arme komplett' : 'Руки повністю', price: '90€', category: language === 'de' ? 'Arme' : 'Руки' },
    
    // Intimate
    { id: 'women-intimate', name: language === 'de' ? 'Intim komplett' : 'Інтим повністю', price: '70€', category: language === 'de' ? 'Intimzone' : 'Інтимна зона' },
    { id: 'women-buttocks', name: language === 'de' ? 'Gesäßbereich' : 'Зона сідниць', price: '40€', category: language === 'de' ? 'Intimzone' : 'Інтимна зона' },
    
    // Legs
    { id: 'women-thighs', name: language === 'de' ? 'Oberschenkel' : 'Стегна', price: '60€', category: language === 'de' ? 'Beine' : 'Ноги' },
    { id: 'women-shins', name: language === 'de' ? 'Unterschenkel' : 'Гомілки', price: '60€', category: language === 'de' ? 'Beine' : 'Ноги' },
    { id: 'women-legs-complete', name: language === 'de' ? 'Beine komplett' : 'Ноги повністю', price: '100€', category: language === 'de' ? 'Beine' : 'Ноги' }
  ];

  // Individual services for men
  const menIndividualServices = [
    // Face
    { id: 'men-eyebrow', name: language === 'de' ? 'Augenbrauenmitte' : 'Середина брів', price: '30€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-beard-contour', name: language === 'de' ? 'Bartkontur' : 'Контур бороди', price: '40€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-neck', name: language === 'de' ? 'Hals' : 'Шия', price: '40€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-beard', name: language === 'de' ? 'Bart' : 'Борода', price: '45€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-cheeks', name: language === 'de' ? 'Wangen' : 'Щоки', price: '45€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-nape', name: language === 'de' ? 'Nacken' : 'Потилиця', price: '40€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    { id: 'men-face-complete', name: language === 'de' ? 'Gesicht komplett' : 'Обличчя повністю', price: '85€', category: language === 'de' ? 'Gesicht' : 'Обличчя' },
    
    // Upper body
    { id: 'men-armpits', name: language === 'de' ? 'Achseln' : 'Пахви', price: '60€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    { id: 'men-forearms', name: language === 'de' ? 'Unterarme' : 'Передпліччя', price: '70€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    { id: 'men-shoulders', name: language === 'de' ? 'Schultern' : 'Плечі', price: '70€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    { id: 'men-arms', name: language === 'de' ? 'Arme komplett' : 'Руки повністю', price: '120€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    { id: 'men-chest', name: language === 'de' ? 'Brust' : 'Груди', price: '80€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    { id: 'men-belly', name: language === 'de' ? 'Bauch' : 'Живіт', price: '80€', category: language === 'de' ? 'Oberkörper' : 'Верхня частина тіла' },
    
    // Back
    { id: 'men-back', name: language === 'de' ? 'Rücken komplett' : 'Спина повністю', price: '110€', category: language === 'de' ? 'Rücken' : 'Спина' },
    
    // Intimate
    { id: 'men-intimate-front', name: language === 'de' ? 'Intim vorn' : 'Інтим спереду', price: '80€', category: language === 'de' ? 'Intimzone' : 'Інтимна зона' },
    { id: 'men-intimate-complete', name: language === 'de' ? 'Intim komplett' : 'Інтим повністю', price: '100€', category: language === 'de' ? 'Intimzone' : 'Інтимна зона' },
    
    // Legs
    { id: 'men-thighs', name: language === 'de' ? 'Oberschenkel' : 'Стегна', price: '80€', category: language === 'de' ? 'Beine' : 'Ноги' },
    { id: 'men-shins', name: language === 'de' ? 'Unterschenkel' : 'Гомілки', price: '80€', category: language === 'de' ? 'Beine' : 'Ноги' },
    { id: 'men-legs-complete', name: language === 'de' ? 'Beine komplett' : 'Ноги повністю', price: '140€', category: language === 'de' ? 'Beine' : 'Ноги' }
  ];

  const serviceIdToPackageMap = {
    // Women packages
    'women-smooth-basic': 'women-smooth-basic',
    'women-beauty-legs': 'women-beauty-legs', 
    'women-soft-touch': 'women-soft-touch',
    'women-baby-skin': 'women-baby-skin',
    'women-smooth-premium': 'women-smooth-premium',
    'women-full-body-complete': 'women-full-body-complete',
    
    // Men packages
    'men-face-&-style': 'men-face-style',
    'men-fresh-start': 'men-fresh-start',
    'men-business-rucken': 'men-business-back',
    'men-oberkorper-stark': 'men-upper-strong',
    'men-intim-deluxe': 'men-intimate-deluxe',
    'men-all-inclusive-man': 'men-all-inclusive',
    'men-full-body-complete': 'men-full-body-complete'
  };

  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceId } = event.detail;
      const mappedServiceId = serviceIdToPackageMap[serviceId] || serviceId;
      
      if (mappedServiceId && !selectedServices.includes(mappedServiceId)) {
        onServicesChange([...selectedServices, mappedServiceId]);
      }
    };

    window.addEventListener('selectService', handleServiceSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectService', handleServiceSelection as EventListener);
    };
  }, [selectedServices, onServicesChange]);

  const toggleService = (serviceId: string) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    onServicesChange(newServices);
  };

  const removeService = (serviceId: string) => {
    onServicesChange(selectedServices.filter(id => id !== serviceId));
  };

  const getServiceName = (serviceId: string) => {
    const allServices = [
      ...womenPackages,
      ...menPackages,
      ...womenIndividualServices,
      ...menIndividualServices
    ];
    const service = allServices.find(s => s.id === serviceId);
    return service?.name || serviceId;
  };

  const groupServicesByCategory = (services: any[]) => {
    const grouped = services.reduce((acc, service) => {
      const category = service.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {});
    return grouped;
  };

  return (
    <div className="space-y-4">
      {/* Selected services display */}
      {selectedServices.length > 0 && (
        <div className="space-y-2">
          <label className="font-lora text-gray-700 text-sm">
            {language === 'de' ? 'Ausgewählte Leistungen:' : 'Обрані послуги:'}
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedServices.map(serviceId => (
              <Badge key={serviceId} variant="secondary" className="flex items-center gap-1">
                {getServiceName(serviceId)}
                <button
                  type="button"
                  onClick={() => removeService(serviceId)}
                  className="ml-1 hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Tabs defaultValue="women-packages" className="w-full">
        <TabsList className="!grid w-full grid-cols-2 sm:grid-cols-4 gap-2 !h-auto p-2 rounded-xl bg-muted/60 mb-4">
          <TabsTrigger value="women-packages" className="text-xs">
            {language === 'de' ? 'Frauen Pakete' : 'Жіночі пакети'}
          </TabsTrigger>
          <TabsTrigger value="women-individual" className="text-xs">
            {language === 'de' ? 'Frauen Einzeln' : 'Жіночі окремо'}
          </TabsTrigger>
          <TabsTrigger value="men-packages" className="text-xs">
            {language === 'de' ? 'Männer Pakete' : 'Чоловічі пакети'}
          </TabsTrigger>
          <TabsTrigger value="men-individual" className="text-xs">
            {language === 'de' ? 'Männer Einzeln' : 'Чоловічі окремо'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="women-packages" className="space-y-3">
          {womenPackages.map(pkg => (
            <div key={pkg.id} className="flex items-start space-x-3 p-3 border rounded-lg">
              <Checkbox
                id={pkg.id}
                checked={selectedServices.includes(pkg.id)}
                onCheckedChange={() => toggleService(pkg.id)}
              />
              <label htmlFor={pkg.id} className="flex-1 cursor-pointer">
                <div className="font-medium">{pkg.name} - {pkg.price}</div>
                <div className="text-sm text-gray-600">{pkg.description}</div>
              </label>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="women-individual" className="space-y-4">
          {Object.entries(groupServicesByCategory(womenIndividualServices)).map(([category, services]) => (
            <div key={category} className="space-y-2">
              <h4 className="font-medium text-gray-800">{category}</h4>
              <div className="space-y-2 ml-4">
                {(services as any[]).map(service => (
                  <div key={service.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                    />
                    <label htmlFor={service.id} className="flex-1 cursor-pointer text-sm">
                      {service.name} - {service.price}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="men-packages" className="space-y-3">
          {menPackages.map(pkg => (
            <div key={pkg.id} className="flex items-start space-x-3 p-3 border rounded-lg">
              <Checkbox
                id={pkg.id}
                checked={selectedServices.includes(pkg.id)}
                onCheckedChange={() => toggleService(pkg.id)}
              />
              <label htmlFor={pkg.id} className="flex-1 cursor-pointer">
                <div className="font-medium">{pkg.name} - {pkg.price}</div>
                <div className="text-sm text-gray-600">{pkg.description}</div>
              </label>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="men-individual" className="space-y-4">
          {Object.entries(groupServicesByCategory(menIndividualServices)).map(([category, services]) => (
            <div key={category} className="space-y-2">
              <h4 className="font-medium text-gray-800">{category}</h4>
              <div className="space-y-2 ml-4">
                {(services as any[]).map(service => (
                  <div key={service.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => toggleService(service.id)}
                    />
                    <label htmlFor={service.id} className="flex-1 cursor-pointer text-sm">
                      {service.name} - {service.price}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
