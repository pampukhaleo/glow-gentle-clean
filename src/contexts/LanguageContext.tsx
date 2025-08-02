import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Header
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen', 
    'nav.gallery': 'Galerie',
    'nav.reviews': 'Bewertungen',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Termin buchen',
    
    // Hero
    'hero.title': 'Professionelle',
    'hero.subtitle': 'Laser-Haarentfernung',
    'hero.description': 'Dauerhaft glatte Haut mit modernster Laser-Technologie. Sicher, effektiv und schmerzarm.',
    'hero.consultation': 'Termin buchen',
    'hero.learn': 'Mehr erfahren',
    
    // About
    'about.title': 'Über uns',
    'about.description': 'Wir sind Ihr vertrauensvoller Partner für professionelle Laser-Haarentfernung. Unser Team aus qualifizierten Kosmetikerinnen verwendet ausschließlich modernste Laser-Technologie für optimale Ergebnisse bei maximaler Sicherheit. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.',
    'about.certified': 'Qualifiziert',
    'about.certified.desc': 'Alle Behandlungen werden von qualifizierten Fachkräften durchgeführt',
    'about.clients': 'Zuverlässig',
    'about.clients.desc': 'Verlassen Sie sich auf unsere Professionalität und Expertise',
    'about.experience': 'Modern',
    'about.experience.desc': 'Neueste Technologien für beste Behandlungsresultate',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.description': 'Professionelle Laser-Haarentfernung für alle Körperbereiche mit modernster IPL- und Dioden-Laser Technologie',
    'services.face': 'Gesicht & Hals',
    'services.face.desc': 'Präzise Behandlung für empfindliche Gesichtsbereiche',
    'services.armpits': 'Achseln',
    'services.armpits.desc': 'Schnelle und effektive Behandlung für glatte Achseln',
    'services.legs': 'Beine komplett',
    'services.legs.desc': 'Vollständige Beinbehandlung für dauerhaft glatte Haut',
    'services.bikini': 'Bikinizone',
    'services.bikini.desc': 'Diskrete und schonende Behandlung sensibler Bereiche',
    'services.popular': 'Beliebt',
    'services.from': 'Ab',
    'services.consultation.btn': 'Termin buchen →',
    
    // Men's services
    'men.services.face': 'Gesicht',
    'men.services.face.eyebrow': 'Augenbrauenmitte',
    'men.services.face.beard-contour': 'Bartkontur',
    'men.services.face.neck': 'Hals',
    'men.services.face.beard': 'Bart',
    'men.services.face.cheeks': 'Wangen',
    'men.services.face.nape': 'Nacken',
    'men.services.face.complete': 'Gesicht komplett',
    
    'men.services.upper-body': 'Oberkörper',
    'men.services.upper-body.armpits': 'Achseln',
    'men.services.upper-body.forearms': 'Unterarme',
    'men.services.upper-body.shoulders': 'Oberarme',
    'men.services.upper-body.arms': 'Arme komplett',
    'men.services.upper-body.chest': 'Brust',
    'men.services.upper-body.belly': 'Bauch',
    
    'men.services.intimate': 'Intimzone',
    'men.services.intimate.front': 'Intimzone vorne',
    'men.services.intimate.complete': 'Intim komplett',
    
    'men.services.legs': 'Beine',
    'men.services.legs.thighs': 'Oberschenkel',
    'men.services.legs.shins': 'Unterschenkel',
    'men.services.legs.complete': 'Beine komplett',
    
    'men.services.back': 'Rücken',
    'men.services.back.complete': 'Rücken komplett',
    
    'men.services.full-body': 'Ganzer Körper',
    'men.services.full-body.complete': 'Ganzkörper',
    
    // Procedure  
    'procedure.title': 'Behandlungsablauf',
    'procedure.description': 'In vier einfachen Schritten zu dauerhaft glatter Haut',
    'procedure.consultation': 'Beratung',
    'procedure.consultation.desc': 'Persönliches Beratungsgespräch und Hautanalyse zur optimalen Behandlungsplanung',
    'procedure.preparation': 'Vorbereitung',
    'procedure.preparation.desc': 'Professionelle Vorbereitung der Haut und Einstellung der Laser-Parameter',
    'procedure.treatment': 'Behandlung',
    'procedure.treatment.desc': 'Schonende Laser-Behandlung mit modernster IPL-Technologie',
    'procedure.aftercare': 'Nachsorge',
    'procedure.aftercare.desc': 'Pflegeempfehlungen und Terminplanung für optimale Ergebnisse',
    'procedure.duration.title': 'Behandlungsdauer & Ergebnisse',
    'procedure.duration.desc': 'Eine Sitzung dauert je nach Behandlungsbereich 15-90 Minuten. Für optimale Ergebnisse sind 6-8 Behandlungen im Abstand von 4-6 Wochen empfohlen. Erste Ergebnisse sind bereits nach der 2. Behandlung sichtbar.',
    
    // Benefits
    'benefits.title': 'Ihre Vorteile',
    'benefits.description': 'Warum sich immer mehr Menschen für professionelle Laser-Haarentfernung entscheiden',
    'benefits.smooth': 'Dauerhaft glatte Haut',
    'benefits.smooth.desc': 'Bis zu 95% weniger Haare nach vollständiger Behandlungsserie',
    'benefits.time': 'Zeitersparnis',
    'benefits.time.desc': 'Keine tägliche Rasur oder regelmäßige Waxing-Termine mehr nötig',
    'benefits.safe': 'Schonend & sicher',
    'benefits.safe.desc': 'Modernste Laser-Technologie für maximalen Komfort bei der Behandlung',
    'benefits.suitable': 'Für alle Hauttypen',
    'benefits.suitable.desc': 'Geeignet für verschiedene Haut- und Haartypen dank anpassbarer Parameter',
    'benefits.no-irritation': 'Keine Hautreizungen',
    'benefits.no-irritation.desc': 'Vermeidung von Rasurbrand, eingewachsenen Haaren und Hautirritationen',
    
    // Benefits - Cost comparison
    'benefits.cost.title': 'Kostenvergleich über 5 Jahre',
    'benefits.cost.traditional': 'Herkömmliche Methoden',
    'benefits.cost.traditional.razor': 'Rasierer & Schaum: ~600€',
    'benefits.cost.traditional.waxing': 'Waxing alle 6 Wochen: ~1.300€',
    'benefits.cost.traditional.time': 'Zeit & Aufwand: unbezahlbar',
    'benefits.cost.traditional.total': '~1.900€+',
    'benefits.cost.laser': 'Laser-Haarentfernung',
    'benefits.cost.laser.treatments': '8 Behandlungen: ~800€',
    'benefits.cost.laser.followup': 'Nachbehandlungen: ~200€',
    'benefits.cost.laser.result': 'Dauerhaft glatte Haut',
    'benefits.cost.laser.total': '~1.000€',
    'benefits.cost.note': '* Beispielrechnung für Beine komplett. Individuelle Preise nach Beratung.',
    
    // Gallery
    'gallery.title': 'Vorher & Nachher',
    'gallery.description': 'Überzeugen Sie sich von den beeindruckenden Ergebnissen unserer Behandlungen',
    'gallery.legs': 'Beine',
    'gallery.armpits': 'Achseln',
    'gallery.face': 'Gesicht',
    'gallery.before': 'Vorher',
    'gallery.after': 'Nachher',
    'gallery.after-treatments': 'Nach 6 Behandlungen',
    'gallery.cta': 'Termin buchen',
    
    // Reviews
    'reviews.title': 'Kundenbewertungen',
    'reviews.description': 'Was unsere zufriedenen Kundinnen über ihre Erfahrungen sagen',
    
    // FAQ
    'faq.title': 'Häufige Fragen',
    'faq.description': 'Alles was Sie über Laser-Haarentfernung wissen möchten',
    'faq.q1': 'Wie funktioniert Laser-Haarentfernung?',
    'faq.a1': 'Der Laser sendet Lichtimpulse aus, die vom Melanin in den Haarwurzeln absorbiert werden. Die entstehende Wärme zerstört die Haarfollikel dauerhaft, ohne die umliegende Haut zu schädigen.',
    'faq.q2': 'Ist die Behandlung schmerzhaft?',
    'faq.a2': 'Die meisten Kunden beschreiben das Gefühl als leichtes Zwicken oder warmes Prickeln. Moderne Laser verfügen über Kühlsysteme, die den Komfort während der Behandlung erhöhen.',
    'faq.q3': 'Wie viele Behandlungen sind nötig?',
    'faq.a3': 'In der Regel sind 6-8 Behandlungen im Abstand von 4-6 Wochen erforderlich. Dies hängt von Ihrem Hauttyp, der Haarfarbe und dem Behandlungsbereich ab.',
    'faq.q4': 'Für welche Hauttypen ist die Behandlung geeignet?',
    'faq.a4': 'Moderne Laser können fast alle Hauttypen behandeln. Bei sehr heller Haut mit dunklen Haaren sind die Ergebnisse optimal. Eine individuelle Beratung klärt Ihre Eignung.',
    'faq.q5': 'Was kostet eine Laser-Haarentfernung?',
    'faq.a5': 'Die Kosten variieren je nach Behandlungsbereich. Einzelbehandlungen ab 59€ (Achseln) bis 199€ (Beine komplett). Pakete sind günstiger - gerne beraten wir Sie individuell.',
    'faq.q6': 'Welche Nebenwirkungen können auftreten?',
    'faq.a6': 'Leichte Rötungen und Schwellungen sind normal und klingen binnen weniger Stunden ab. Bei fachgerechter Anwendung sind schwere Nebenwirkungen sehr selten.',
    'faq.more.title': 'Weitere Fragen?',
    'faq.more.desc': 'Unser erfahrenes Team beantwortet gerne alle Ihre Fragen in einem persönlichen Beratungsgespräch.',
    'faq.more.btn': 'Termin buchen',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.description': 'Vereinbaren Sie noch heute Ihren Termin',
    'contact.form.title': 'Beratungstermin vereinbaren',
    'contact.name': 'Name',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.service': 'Behandlungsbereich',
    'contact.service.placeholder': 'Bitte wählen',
    'contact.service.face': 'Gesicht & Hals',
    'contact.service.armpits': 'Achseln',
    'contact.service.legs': 'Beine komplett',
    'contact.service.bikini': 'Bikinizone',
    'contact.service.full': 'Komplettbehandlung',
    'contact.date': 'Wunschtermin',
    'contact.message': 'Nachricht',
    'contact.submit': 'Termin anfragen',
    'contact.info.title': 'Kontakt Informationen',
    'contact.address': 'Adresse',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.detail': 'Mo-Fr: 9:00 - 19:00\nSa: 9:00 - 16:00\nSo: Geschlossen',
    'contact.footer.tagline': 'Professionelle Laser-Haarentfernung in Berlin',
    'contact.footer.privacy': 'Datenschutz',
    'contact.footer.imprint': 'Impressum',
    'contact.footer.terms': 'AGB',
    'contact.footer.copyright': '© 2024 LaserBeauty Salon. Alle Rechte vorbehalten.'
  },
  uk: {
    // Header
    'nav.about': 'Про нас',
    'nav.services': 'Послуги',
    'nav.gallery': 'Галерея', 
    'nav.reviews': 'Відгуки',
    'nav.contact': 'Контакти',
    'nav.booking': 'Записатися',
    
    // Hero
    'hero.title': 'Професійна',
    'hero.subtitle': 'лазерна епіляція',
    'hero.description': 'Назавжди гладенька шкіра з найсучаснішими лазерними технологіями. Безпечно, ефективно та безболісно.',
    'hero.consultation': 'Записатися',
    'hero.learn': 'Дізнатися більше',
    
    // About
    'about.title': 'Про нас',
    'about.description': 'Ми є вашим надійним партнером у сфері професійної лазерної епіляції. Наша команда кваліфікованих косметологинь використовує виключно найсучасніші лазерні технології для оптимальних результатів з максимальною безпекою. Якість та задоволеність клієнтів є нашим пріоритетом.',
    'about.certified': 'Кваліфіковано',
    'about.certified.desc': 'Всі процедури виконуються кваліфікованими фахівцями',
    'about.clients': 'Надійно',
    'about.clients.desc': 'Покладайтеся на нашу професійність та експертизу',
    'about.experience': 'Сучасно',
    'about.experience.desc': 'Найновіші технології для найкращих результатів',
    
    // Services
    'services.title': 'Наші послуги',
    'services.description': 'Професійна лазерна епіляція для всіх частин тіла з найсучаснішими IPL та діодними лазерними технологіями',
    'services.face': 'Обличчя та шия',
    'services.face.desc': 'Точна обробка чутливих ділянок обличчя',
    'services.armpits': 'Пахви',
    'services.armpits.desc': 'Швидка та ефективна обробка для гладенькх пахв',
    'services.legs': 'Ноги повністю',
    'services.legs.desc': 'Повна обробка ніг для назавжди гладенької шкіри',
    'services.bikini': 'Зона бікіні',
    'services.bikini.desc': 'Дискретна та делікатна обробка чутливих зон',
    'services.popular': 'Популярно',
    'services.from': 'Від',
    'services.consultation.btn': 'Записатися →',
    
    // Men's services
    'men.services.face': 'Обличчя',
    'men.services.face.eyebrow': 'Середина брів',
    'men.services.face.beard-contour': 'Контур бороди',
    'men.services.face.neck': 'Шия',
    'men.services.face.beard': 'Борода',
    'men.services.face.cheeks': 'Щоки',
    'men.services.face.nape': 'Потилиця',
    'men.services.face.complete': 'Обличчя повністю',
    
    'men.services.upper-body': 'Верхня частина тіла',
    'men.services.upper-body.armpits': 'Пахви',
    'men.services.upper-body.forearms': 'Передпліччя',
    'men.services.upper-body.shoulders': 'Плечі',
    'men.services.upper-body.arms': 'Руки повністю',
    'men.services.upper-body.chest': 'Груди',
    'men.services.upper-body.belly': 'Живіт',
    
    'men.services.intimate': 'Інтимна зона',
    'men.services.intimate.front': 'Передня інтимна зона',
    'men.services.intimate.complete': 'Інтимна зона повністю',
    
    'men.services.legs': 'Ноги',
    'men.services.legs.thighs': 'Стегна',
    'men.services.legs.shins': 'Гомілки',
    'men.services.legs.complete': 'Ноги повністю',
    
    'men.services.back': 'Спина',
    'men.services.back.complete': 'Спина повністю',
    
    'men.services.full-body': 'Все тіло',
    'men.services.full-body.complete': 'Повна епіляція тіла',
    
    // Procedure
    'procedure.title': 'Процес процедури',
    'procedure.description': 'У чотири простих кроки до назавжди гладенької шкіри',
    'procedure.consultation': 'Консультація',
    'procedure.consultation.desc': 'Персональна консультація та аналіз шкіри для оптимального планування процедур',
    'procedure.preparation': 'Підготовка',
    'procedure.preparation.desc': 'Професійна підготовка шкіри та налаштування параметрів лазера',
    'procedure.treatment': 'Процедура',
    'procedure.treatment.desc': 'Делікатна лазерна процедура з найсучаснішими IPL-технологіями',
    'procedure.aftercare': 'Післядогляд',
    'procedure.aftercare.desc': 'Рекомендації з догляду та планування візитів для оптимальних результатів',
    'procedure.duration.title': 'Тривалість та результати',
    'procedure.duration.desc': 'Одна сесія триває від 15 до 90 хвилин залежно від зони обробки. Для оптимальних результатів рекомендується 6-8 процедур з інтервалом 4-6 тижнів. Перші результати помітні вже після 2-ї процедури.',
    
    // Benefits
    'benefits.title': 'Ваші переваги',
    'benefits.description': 'Чому все більше людей обирають професійну лазерну епіляцію',
    'benefits.smooth': 'Назавжди гладенька шкіра',
    'benefits.smooth.desc': 'До 95% менше волосся після повного курсу процедур',
    'benefits.time': 'Економія часу',
    'benefits.time.desc': 'Більше немає потреби в щоденному голінні або регулярних процедурах воску',
    'benefits.safe': 'Делікатно та безпечно',
    'benefits.safe.desc': 'Найсучасніші лазерні технології для максимального комфорту під час процедури',
    'benefits.suitable': 'Для всіх типів шкіри',
    'benefits.suitable.desc': 'Підходить для різних типів шкіри та волосся завдяки регульованим параметрам',
    'benefits.no-irritation': 'Без подразнень шкіри',
    'benefits.no-irritation.desc': 'Уникнення подразнень від гоління, вростаючого волосся та роздратувань шкіри',
    
    // Benefits - Cost comparison
    'benefits.cost.title': 'Порівняння вартості за 5 років',
    'benefits.cost.traditional': 'Традиційні методи',
    'benefits.cost.traditional.razor': 'Бритва та піна: ~600€',
    'benefits.cost.traditional.waxing': 'Воскова епіляція кожні 6 тижнів: ~1.300€',
    'benefits.cost.traditional.time': 'Час і зусилля: безцінні',
    'benefits.cost.traditional.total': '~1.900€+',
    'benefits.cost.laser': 'Лазерна епіляція',
    'benefits.cost.laser.treatments': '8 процедур: ~800€',
    'benefits.cost.laser.followup': 'Підтримуючі процедури: ~200€',
    'benefits.cost.laser.result': 'Назавжди гладенька шкіра',
    'benefits.cost.laser.total': '~1.000€',
    'benefits.cost.note': '* Приклад розрахунку для ніг повністю. Індивідуальні ціни після консультації.',
    
    // Gallery
    'gallery.title': 'До та після',
    'gallery.description': 'Переконайтеся у вражаючих результатах наших процедур',
    'gallery.legs': 'Ноги',
    'gallery.armpits': 'Пахви',
    'gallery.face': 'Обличчя',
    'gallery.before': 'До',
    'gallery.after': 'Після',
    'gallery.after-treatments': 'Після 6 процедур',
    'gallery.cta': 'Записатися',
    
    // Reviews
    'reviews.title': 'Відгуки клієнтів',
    'reviews.description': 'Що наші задоволені клієнтки кажуть про свій досвід',
    
    // FAQ
    'faq.title': 'Часті питання',
    'faq.description': 'Все, що ви хотіли знати про лазерну епіляцію',
    'faq.q1': 'Як працює лазерна епіляція?',
    'faq.a1': 'Лазер випромінює світлові імпульси, які поглинаються меланіном у волосяних цибулинах. Виникаюче тепло назавжди руйнує волосяні фолікули, не пошкоджуючи навколишню шкіру.',
    'faq.q2': 'Чи болюча процедура?',
    'faq.a2': 'Більшість клієнтів описують відчуття як легке поколювання або тепле поколювання. Сучасні лазери мають системи охолодження, які підвищують комфорт під час процедури.',
    'faq.q3': 'Скільки процедур потрібно?',
    'faq.a3': 'Зазвичай потрібно 6-8 процедур з інтервалом 4-6 тижнів. Це залежить від вашого типу шкіри, кольору волосся та зони обробки.',
    'faq.q4': 'Для яких типів шкіри підходить процедура?',
    'faq.a4': 'Сучасні лазери можуть обробляти майже всі типи шкіри. Найкращі результати у людей з дуже світлою шкірою та темним волоссям. Індивідуальна консультація визначить вашу придатність.',
    'faq.q5': 'Скільки коштує лазерна епіляція?',
    'faq.a5': 'Вартість залежить від зони обробки. Окремі процедури від 59€ (пахви) до 199€ (ноги повністю). Пакети дешевші - з радістю проконсультуємо вас індивідуально.',
    'faq.q6': 'Які побічні ефекти можуть виникнути?',
    'faq.a6': 'Легкі почервоніння та набряки є нормальними і зникають протягом кількох годин. При правильному застосуванні серйозні побічні ефекти дуже рідкісні.',
    'faq.more.title': 'Ще питання?',
    'faq.more.desc': 'Наша команда професіоналів з радістю відповість на всі ваші питання під час персональної консультації.',
    'faq.more.btn': 'Записатися',
    
    // Contact
    'contact.title': 'Контакти',
    'contact.description': 'Запишіться на прийом вже сьогодні',
    'contact.form.title': 'Записатися на консультацію',
    'contact.name': 'Ім\'я',
    'contact.phone': 'Телефон',
    'contact.email': 'Електронна пошта',
    'contact.service': 'Зона обробки',
    'contact.service.placeholder': 'Оберіть, будь ласка',
    'contact.service.face': 'Обличчя та шия',
    'contact.service.armpits': 'Пахви',
    'contact.service.legs': 'Ноги повністю',
    'contact.service.bikini': 'Зона бікіні',
    'contact.service.full': 'Повна обробка',
    'contact.date': 'Бажана дата',
    'contact.message': 'Повідомлення',
    'contact.submit': 'Записатися',
    'contact.info.title': 'Контактна інформація',
    'contact.address': 'Адреса',
    'contact.hours': 'Години роботи',
    'contact.hours.detail': 'Пн-Пт: 9:00 - 19:00\nСб: 9:00 - 16:00\nНд: Зачинено',
    'contact.footer.tagline': 'Професійна лазерна епіляція в Берліні',
    'contact.footer.privacy': 'Конфіденційність',
    'contact.footer.imprint': 'Імпресум',
    'contact.footer.terms': 'Умови',
    'contact.footer.copyright': '© 2024 LaserBeauty Salon. Всі права захищені.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
