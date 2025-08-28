import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const translations = {
    en: {
      // Hero Section
              'hero.title': 'Dussur Foundation for Conference Organization, Marketing and Advertising',
              'hero.subtitle': 'We create impactful stories that reflect your brand identity, and innovate creative solutions that enhance your presence and build effective communication bridges with your audience. With our expertise in conference organization, marketing, advertising campaigns, and visual identity and print design, we give your brand the excellence it deserves',
      'hero.startProject': 'Start Your Project',
      'hero.watchStory': 'Watch Our Story',
      'hero.stats.projects': 'Projects Completed',
      'hero.stats.experience': 'Years Experience',
      'hero.stats.clients': 'Happy Clients',

      // About Section
        about: {
          title: 'من نحن',
          titleEn: 'Who We Are',
          description1: 'تأسست دسر مطلع عام 1422هـ على يد مجموعة من الشباب الطموحين والأكاديميين الذين جمعهم حلم صناعة التميز في عالم الدعاية والإعلان. بخبرةٍ تراكمية تجاوزت 17 عامًا، انطلقت دسر لتضع بصمتها في مجال الاتصال البصري والبحوث التسويقية، مستندة إلى خبرات عالمية وكفاءات وطنية قادرة على قراءة السوق المحلية بذكاء واحترافية.',
          description1En: 'Dusr was founded in early 1422 AH by a group of ambitious young professionals and academics united by a dream of creating excellence in the world of advertising and marketing. With over 17 years of accumulated experience, Dusr set out to leave its mark in visual communication and marketing research, drawing on international expertise and national talent capable of understanding the local market with intelligence and professionalism.',
          description2: 'ومع تطور أعمالها واتساع آفاقها، أصبحت دسر علامة بارزة وشريكًا استراتيجيًا للعديد من الجهات والمؤسسات، حيث تقدم باقة متكاملة من الخدمات تشمل:',
          description2En: 'As our work grew and our horizons expanded, Dusr became a distinguished name and a strategic partner for many organizations and institutions, offering a comprehensive range of services, including:',
          services: [
            'تنظيم المعارض والمؤتمرات',
            'التسويق الذكي وحملات الدعاية والإعلان',
            'تصميم وإخراج المطبوعات والمجلات',
            'إنتاج الإعلانات المقروءة، المسموعة، والمرئية',
            'ابتكار الهويات البصرية وإعادة بنائها وتطويرها'
          ],
          servicesEn: [
            'Organizing exhibitions and conferences',
            'Smart marketing and advertising campaigns',
            'Designing and producing publications and magazines',
            'Producing print, audio, and visual advertisements',
            'Creating, rebuilding, and developing visual identities'
          ],
          description3: 'في دسر، نؤمن أن الإبداع ليس خيارًا بل هوية، وأن نجاح عملائنا هو نجاحنا الحقيقي، لذا نواصل رحلتنا لنكون الوجهة الأولى لكل من يسعى إلى التأثير والتميز في عالم الاتصال والإعلام',
          description3En: 'At Dusr, we believe that creativity is not an option but an identity, and that the success of our clients is our true success. That is why we continue our journey to be the first destination for everyone seeking influence and excellence in the world of communication and media.',
          buttonText: 'تعرف علينا أكثر',
          buttonTextEn: 'Learn More About Us'
        },

      // Services Section
      'services.title': 'Our Services',
      'services.subtitle': 'We offer comprehensive advertising and marketing solutions tailored to elevate your brand and drive results.',
      'services.values.title': 'Our Values',
      'services.values.description': 'We operate with a strict framework demanding creativity while avoiding imitation. Our approach emphasizes understanding client needs through research, study, and implementation, maintaining ethical standards that align with social guidelines.',
      'services.vision.title': 'Our Vision',
      'services.vision.description': 'To work according to international standards with precise local academic vision, delivering advertising products that anticipate the future while preserving aesthetic and creative value in everything we create.',
      'services.departments.title': 'Our Departments',
      'services.departments.subtitle': 'Dussur operates through three main parallel lines - Design, Production, and Marketing - supported by specialized departments that ensure comprehensive market analysis and competitive positioning.',
      'services.mainLines.design': 'Design',
      'services.mainLines.production': 'Production',
      'services.mainLines.marketing': 'Marketing',
      'services.specialized.title': 'Specialized Departments',

      // Team Section
      'team.title': 'Our Team',
      'team.subtitle': 'Meet the creative minds and strategic thinkers behind Dussur\'s success. Our diverse team brings together expertise from various fields to deliver exceptional results.',
      'team.description': 'Dussur is a continuous workshop, with its integrated team working according to a comprehensive system aimed at ultimately satisfying its clients.',

      // Clients Section
      'clients.title': 'Our Clients',
      'clients.subtitle': 'We are proud to have worked with leading brands and organizations across various industries, delivering exceptional results that drive business growth.',
      'clients.viewPartner': 'View Partner',
      'clients.trustTitle': 'Trusted by Industry Leaders',
      'clients.trustDescription': 'Our long-standing partnerships with these esteemed organizations reflect our commitment to excellence and our ability to deliver results that exceed expectations.',

      // Contact Section
      'contact.title': 'Let\'s Create Something Amazing',
      'contact.subtitle': 'Ready to elevate your brand? Get in touch with our team and let\'s discuss how we can bring your vision to life.',
      'contact.phone.title': 'Phone',
      'contact.phone.info': '+966 54 443 5856',
      'contact.phone.description': 'Call us during business hours',
      'contact.office.title': 'Office',
      'contact.office.info': 'بيشه - شارع إمام الدعوة',
      'contact.office.description': 'Bisha - Imam Al-Dawa Street',

      // Footer
      'footer.description': 'Transforming brands through creative excellence and strategic innovation. Your vision, our expertise, extraordinary results.',
      'footer.quickLinks.title': 'Quick Links',
      'footer.services.title': 'Services',
              'footer.copyright': '© 2024 Dussur Foundation for Conference Organization, Marketing and Advertising. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.team': 'Team',
      'nav.clients': 'Clients',
      'nav.contact': 'Contact',
      'nav.getStarted': 'Get Started',
    },
    ar: {
      // Hero Section
              'hero.title': 'مؤسسة دُسُر لتنظيم المؤتمرات والدعاية والإعلان',
              'hero.subtitle': 'نحن نصنع قصصًا مؤثرة تعكس هوية علامتك التجارية، ونبتكر حلولًا إبداعية تعزز حضورك وتبني جسور تواصل فعّالة مع جمهورك. بخبراتنا في تنظيم المؤتمرات، التسويق، الحملات الإعلانية، وتصميم الهويات البصرية والمطبوعات، نمنح علامتك التميز الذي تستحقه',
      'hero.startProject': 'ابدأ مشروعك',
      'hero.watchStory': 'شاهد قصتنا',
      'hero.stats.projects': 'مشروع مكتمل',
      'hero.stats.experience': 'سنوات خبرة',
      'hero.stats.clients': 'عميل سعيد',

      // About Section
      'about.title': 'من نحن',
      
      'about.buttonText': 'تعرف علينا أكثر',

      // Services Section
      'services.title': 'خدماتنا',
      'services.subtitle': 'نقدم حلولاً إعلانية وتسويقية شاملة مصممة لرفع علامتك التجارية وتحقيق النتائج.',
      'services.values.title': 'قيمنا',
      'services.values.description': 'تعمل دسر وفق منظومة صارمة تقتضي الإبداع وتلتزم تجنب التقليد كأساسي لأعمالها، كما تؤكد تلك المنظومة على إدراك احتياجات العميل وإنجاح منتجاته من خلال البحث والدراسة والتنفيذ.',
      'services.vision.title': 'رؤيتنا',
      'services.vision.description': 'العمل وفق معايير عالمية انطلاقاً من رؤية محلية أكاديمية ودقيقة، وتقديم منتجات إعلانية بارعة تستشرف المستقبل وتتناسق مع روح العصر دون أن نفقد القيمة الجمالية والإبداعية لجميع منتجاتنا.',
      'services.departments.title': 'أقسامنا',
      'services.departments.subtitle': 'تعمل دسر بشكل متوازٍ على ثلاثة خطوط رئيسية، ليطّلع المنتج بهيئته الأخيرة للعميل، وهي: التصميم والإنتاج والتسويق؛ ومع تلك الخطوط نجد عدة أقسام تردف عملية الإنتاج بدءاً من دراسة الحاجات التسويقية للمنتج.',
      'services.mainLines.design': 'التصميم',
      'services.mainLines.production': 'الإنتاج',
      'services.mainLines.marketing': 'التسويق',
      'services.specialized.title': 'الأقسام المتخصصة',

      // Team Section
      'team.title': 'فريقنا',
      'team.subtitle': 'تعرف على العقول الإبداعية والمفكرين الاستراتيجيين وراء نجاح دسر. يجمع فريقنا المتنوع الخبرات من مختلف المجالات لتقديم نتائج استثنائية.',
      'team.description': 'تعتبر دسر ورشة عمل دائمة، بتكامل فريقها الذي يعمل وفق منظومة متكاملة هدفها في آخر الأمر رضا عملائها، حيث يعمل في أروقة الشركة مجموعة من الموظفين الثابتين والمتعاونين.',

      // Clients Section
      'clients.title': 'عملائنا',
      'clients.subtitle': 'نحن فخورون بالعمل مع العلامات التجارية الرائدة والمؤسسات عبر مختلف الصناعات، تقديم نتائج استثنائية تدفع نمو الأعمال.',
      'clients.viewPartner': 'عرض الشريك',
      'clients.trustTitle': 'موثوق بالمتخصصين في الصناعة',
      'clients.trustDescription': 'الشراكات المستمرة التي لدينا مع هذه المؤسسات المتميزة التي تعكس تزامننا بالتميز وقدرتنا على تقديم نتائج تتجاوز التوقعات.',

      // Contact Section
      'contact.title': 'دعنا نخلق شيئاً مذهلاً',
      'contact.subtitle': 'مستعد لرفع علامتك التجارية؟ تواصل مع فريقنا ودعنا نناقش كيف يمكننا تحقيق رؤيتك.',
      'contact.phone.title': 'الهاتف',
      'contact.phone.info': '+966 54 443 5856',
      'contact.phone.description': 'اتصل بنا خلال ساعات العمل',
      'contact.office.title': 'المكتب',
      'contact.office.info': 'بيشه - شارع إمام الدعوة',
      'contact.office.description': 'Bisha - Imam Al-Dawa Street',

      // Footer
      'footer.description': 'نحول العلامات التجارية من خلال التميز الإبداعي والابتكار الاستراتيجي. رؤيتك، خبرتنا، نتائج استثنائية.',
      'footer.quickLinks.title': 'روابط سريعة',
      'footer.services.title': 'الخدمات',
              'footer.copyright': '© 2024 مؤسسة دُسُر لتنظيم المؤتمرات والدعاية والإعلان. جميع الحقوق محفوظة.',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الخدمة',

      // Navigation
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.services': 'خدماتنا',
      'nav.team': 'فريقنا',
      'nav.clients': 'عملائنا',
      'nav.contact': 'اتصل بنا',
      'nav.getStarted': 'ابدأ الآن',
    }
  };

  const t = (key: string): string | string[] => {
    // Simple test - just return a hardcoded value for now
    if (key === 'services.title') {
      return language === 'en' ? 'Our Services' : 'خدماتنا';
    }
    if (key === 'services.subtitle') {
      return language === 'en' ? 'We offer comprehensive advertising and marketing solutions tailored to elevate your brand and drive results.' : 'نقدم حلولاً إعلانية وتسويقية شاملة مصممة لرفع علامتك التجارية وتحقيق النتائج.';
    }
    if (key === 'services.values.title') {
      return language === 'en' ? 'Our Values' : 'قيمنا';
    }
    if (key === 'services.values.description') {
      return language === 'en' ? 'We operate with a strict framework demanding creativity while avoiding imitation. Our approach emphasizes understanding client needs through research, study, and implementation, maintaining ethical standards that align with social guidelines.' : 'تعمل دسر وفق منظومة صارمة تقتضي الإبداع وتلتزم تجنب التقليد كأساسي لأعمالها، كما تؤكد تلك المنظومة على إدراك احتياجات العميل وإنجاح منتجاته من خلال البحث والدراسة والتنفيذ.';
    }
    if (key === 'services.vision.title') {
      return language === 'en' ? 'Our Vision' : 'رؤيتنا';
    }
    if (key === 'services.vision.description') {
      return language === 'en' ? 'To work according to international standards with precise local academic vision, delivering advertising products that anticipate the future while preserving aesthetic and creative value in everything we create.' : 'العمل وفق معايير عالمية انطلاقاً من رؤية محلية أكاديمية ودقيقة، وتقديم منتجات إعلانية بارعة تستشرف المستقبل وتتناسق مع روح العصر دون أن نفقد القيمة الجمالية والإبداعية لجميع منتجاتنا.';
    }
    if (key === 'services.departments.title') {
      return language === 'en' ? 'Our Departments' : 'أقسامنا';
    }
    if (key === 'services.departments.subtitle') {
      return language === 'en' ? 'Dussur operates through three main parallel lines - Design, Production, and Marketing - supported by specialized departments that ensure comprehensive market analysis and competitive positioning.' : 'تعمل دسر بشكل متوازٍ على ثلاثة خطوط رئيسية، ليطّلع المنتج بهيئته الأخيرة للعميل، وهي: التصميم والإنتاج والتسويق؛ ومع تلك الخطوط نجد عدة أقسام تردف عملية الإنتاج بدءاً من دراسة الحاجات التسويقية للمنتج.';
    }
    if (key === 'services.mainLines.design') {
      return language === 'en' ? 'Design' : 'التصميم';
    }
    if (key === 'services.mainLines.production') {
      return language === 'en' ? 'Production' : 'الإنتاج';
    }
    if (key === 'services.mainLines.marketing') {
      return language === 'en' ? 'Marketing' : 'التسويق';
    }
    if (key === 'services.specialized.title') {
      return language === 'en' ? 'Specialized Departments' : 'الأقسام المتخصصة';
    }
    if (key === 'nav.home') {
      return language === 'en' ? 'Home' : 'الرئيسية';
    }
    if (key === 'nav.about') {
      return language === 'en' ? 'About' : 'من نحن';
    }
    if (key === 'nav.services') {
      return language === 'en' ? 'Services' : 'خدماتنا';
    }
    if (key === 'nav.team') {
      return language === 'en' ? 'Team' : 'فريقنا';
    }
    if (key === 'nav.clients') {
      return language === 'en' ? 'Clients' : 'عملائنا';
    }
    if (key === 'nav.contact') {
      return language === 'en' ? 'Contact' : 'اتصل بنا';
    }
    if (key === 'nav.getStarted') {
      return language === 'en' ? 'Get Started' : 'ابدأ الآن';
    }
    if (key === 'hero.title') {
      return language === 'en' ? 'Dussur Foundation for Conference Organization, Marketing and Advertising' : 'مؤسسة دُسُر لتنظيم المؤتمرات والدعاية والإعلان';
    }
    if (key === 'hero.subtitle') {
      return language === 'en' ? 'We create impactful stories that reflect your brand identity, and innovate creative solutions that enhance your presence and build effective communication bridges with your audience. With our expertise in conference organization, marketing, advertising campaigns, and visual identity and print design, we give your brand the excellence it deserves' : 'نحن نصنع قصصًا مؤثرة تعكس هوية علامتك التجارية، ونبتكر حلولًا إبداعية تعزز حضورك وتبني جسور تواصل فعّالة مع جمهورك. بخبراتنا في تنظيم المؤتمرات، التسويق، الحملات الإعلانية، وتصميم الهويات البصرية والمطبوعات، نمنح علامتك التميز الذي تستحقه';
    }
    if (key === 'hero.startProject') {
      return language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك';
    }
    if (key === 'hero.watchStory') {
      return language === 'en' ? 'Watch Our Story' : 'شاهد قصتنا';
    }
    if (key === 'about.title') {
      return language === 'en' ? 'Who We Are' : 'من نحن';
    }
    if (key === 'about.description1') {
      return language === 'en' ? 'Dusr was founded in early 1422 AH by a group of ambitious young professionals and academics united by a dream of creating excellence in the world of advertising and marketing. With over 17 years of accumulated experience, Dusr set out to leave its mark in visual communication and marketing research, drawing on international expertise and national talent capable of understanding the local market with intelligence and professionalism.' : 'تأسست دسر مطلع عام 1422هـ على يد مجموعة من الشباب الطموحين والأكاديميين الذين جمعهم حلم صناعة التميز في عالم الدعاية والإعلان. بخبرةٍ تراكمية تجاوزت 17 عامًا، انطلقت دسر لتضع بصمتها في مجال الاتصال البصري والبحوث التسويقية، مستندة إلى خبرات عالمية وكفاءات وطنية قادرة على قراءة السوق المحلية بذكاء واحترافية.';
    }
    if (key === 'about.description2') {
      return language === 'en' ? 'As our work grew and our horizons expanded, Dusr became a distinguished name and a strategic partner for many organizations and institutions, offering a comprehensive range of services, including:' : 'ومع تطور أعمالها واتساع آفاقها، أصبحت دسر علامة بارزة وشريكًا استراتيجيًا للعديد من الجهات والمؤسسات، حيث تقدم باقة متكاملة من الخدمات تشمل:';
    }
    if (key === 'about.services') {
      return language === 'en' ? [
        'Organizing exhibitions and conferences',
        'Smart marketing and advertising campaigns',
        'Designing and producing publications and magazines',
        'Producing print, audio, and visual advertisements',
        'Creating, rebuilding, and developing visual identities'
      ] : [
        'تنظيم المعارض والمؤتمرات',
        'التسويق الذكي وحملات الدعاية والإعلان',
        'تصميم وإخراج المطبوعات والمجلات',
        'إنتاج الإعلانات المقروءة، المسموعة، والمرئية',
        'ابتكار الهويات البصرية وإعادة بنائها وتطويرها'
      ];
    }
    if (key === 'about.description3') {
      return language === 'en' ? 'At Dusr, we believe that creativity is not an option but an identity, and that the success of our clients is our true success. That is why we continue our journey to be the first destination for everyone seeking influence and excellence in the world of communication and media.' : 'في دسر، نؤمن أن الإبداع ليس خيارًا بل هوية، وأن نجاح عملائنا هو نجاحنا الحقيقي، لذا نواصل رحلتنا لنكون الوجهة الأولى لكل من يسعى إلى التأثير والتميز في عالم الاتصال والإعلام';
    }
    if (key === 'about.buttonText') {
      return language === 'en' ? 'Learn More About Us' : 'تعرف علينا أكثر';
    }


    if (key === 'hero.stats.projects') {
      return language === 'en' ? 'Projects Completed' : 'مشروع مكتمل';
    }
    if (key === 'hero.stats.experience') {
      return language === 'en' ? 'Years Experience' : 'سنوات خبرة';
    }
    if (key === 'hero.stats.clients') {
      return language === 'en' ? 'Happy Clients' : 'عميل سعيد';
    }
    if (key === 'services.values.innovation') {
      return language === 'en' ? 'Innovation & Creativity' : 'الابتكار والإبداع';
    }
    if (key === 'services.values.quality') {
      return language === 'en' ? 'Quality & Excellence' : 'الجودة والتميز';
    }
    if (key === 'services.values.results') {
      return language === 'en' ? 'Results & Impact' : 'النتائج والتأثير';
    }
    if (key === 'services.process.title') {
      return language === 'en' ? 'Our Process' : 'عملنا';
    }
    if (key === 'services.process.research') {
      return language === 'en' ? 'Research' : 'البحث';
    }
    if (key === 'services.process.design') {
      return language === 'en' ? 'Design' : 'التصميم';
    }
    if (key === 'services.process.execute') {
      return language === 'en' ? 'Execute' : 'التنفيذ';
    }
    if (key === 'services.process.deliver') {
      return language === 'en' ? 'Deliver' : 'التسليم';
    }
    if (key === 'services.mainLines.title') {
      return language === 'en' ? 'Our Main Lines' : 'خطوطنا الرئيسية';
    }
    if (key === 'services.mainLines.design.title') {
      return language === 'en' ? 'Design' : 'التصميم';
    }
    if (key === 'services.mainLines.design.desc') {
      return language === 'en' ? 'Creative visualization & brand identity' : 'التصور الإبداعي وهوية العلامة التجارية';
    }
    if (key === 'services.mainLines.production.title') {
      return language === 'en' ? 'Production' : 'الإنتاج';
    }
    if (key === 'services.mainLines.production.desc') {
      return language === 'en' ? 'Quality manufacturing & execution' : 'التصنيع عالي الجودة والتنفيذ';
    }
    if (key === 'services.mainLines.marketing.title') {
      return language === 'en' ? 'Marketing' : 'التسويق';
    }
    if (key === 'services.mainLines.marketing.desc') {
      return language === 'en' ? 'Strategic positioning' : 'الموضع الاستراتيجي';
    }
    if (key === 'team.title') {
      return language === 'en' ? 'Our Team' : 'فريقنا';
    }
    if (key === 'team.subtitle') {
      return language === 'en' ? 'Meet the creative minds and strategic thinkers behind Dussur\'s success. Our diverse team brings together expertise from various fields to deliver exceptional results.' : 'تعرف على العقول الإبداعية والمفكرين الاستراتيجيين وراء نجاح دسر. يجمع فريقنا المتنوع الخبرات من مختلف المجالات لتقديم نتائج استثنائية.';
    }
    if (key === 'team.description') {
      return language === 'en' ? 'Dussur is a continuous workshop, with its integrated team working according to a comprehensive system aimed at ultimately satisfying its clients.' : 'تعتبر دسر ورشة عمل دائمة، بتكامل فريقها الذي يعمل وفق منظومة متكاملة هدفها في آخر الأمر رضا عملائها، حيث يعمل في أروقة الشركة مجموعة من الموظفين الثابتين والمتعاونين.';
    }
    if (key === 'clients.title') {
      return language === 'en' ? 'Our Clients' : 'عملائنا';
    }
    if (key === 'clients.subtitle') {
      return language === 'en' ? 'We are proud to have worked with leading brands and organizations across various industries, delivering exceptional results that drive business growth.' : 'نحن فخورون بالعمل مع العلامات التجارية الرائدة والمؤسسات عبر مختلف الصناعات، تقديم نتائج استثنائية تدفع نمو الأعمال.';
    }
    if (key === 'clients.viewPartner') {
      return language === 'en' ? 'View Partner' : 'عرض الشريك';
    }
    if (key === 'clients.trustTitle') {
      return language === 'en' ? 'Trusted by Industry Leaders' : 'موثوق بالمتخصصين في الصناعة';
    }
    if (key === 'clients.trustDescription') {
      return language === 'en' ? 'Our long-standing partnerships with these esteemed organizations reflect our commitment to excellence and our ability to deliver results that exceed expectations.' : 'الشراكات المستمرة التي لدينا مع هذه المؤسسات المتميزة التي تعكس تزامننا بالتميز وقدرتنا على تقديم نتائج تتجاوز التوقعات.';
    }
    if (key === 'contact.title') {
      return language === 'en' ? 'Let\'s Create Something Amazing' : 'دعنا نخلق شيئاً مذهلاً';
    }
    if (key === 'contact.subtitle') {
      return language === 'en' ? 'Ready to elevate your brand? Get in touch with our team and let\'s discuss how we can bring your vision to life.' : 'مستعد لرفع علامتك التجارية؟ تواصل مع فريقنا ودعنا نناقش كيف يمكننا تحقيق رؤيتك.';
    }
    if (key === 'contact.phone.title') {
      return language === 'en' ? 'Phone' : 'الهاتف';
    }
    if (key === 'contact.phone.info') {
      return language === 'en' ? '+966 54 443 5856' : '+966 54 443 5856';
    }
    if (key === 'contact.phone.description') {
      return language === 'en' ? 'Call us during business hours' : 'اتصل بنا خلال ساعات العمل';
    }
    if (key === 'contact.office.title') {
      return language === 'en' ? 'Office' : 'المكتب';
    }
    if (key === 'contact.office.info') {
      return language === 'en' ? 'بيشه - شارع إمام الدعوة' : 'بيشه - شارع إمام الدعوة';
    }
    if (key === 'contact.office.description') {
      return language === 'en' ? 'Bisha - Imam Al-Dawa Street' : 'Bisha - Imam Al-Dawa Street';
    }
    if (key === 'footer.description') {
      return language === 'en' ? 'Transforming brands through creative excellence and strategic innovation. Your vision, our expertise, extraordinary results.' : 'نحول العلامات التجارية من خلال التميز الإبداعي والابتكار الاستراتيجي. رؤيتك، خبرتنا، نتائج استثنائية.';
    }
    if (key === 'footer.quickLinks.title') {
      return language === 'en' ? 'Quick Links' : 'روابط سريعة';
    }
    if (key === 'footer.services.title') {
      return language === 'en' ? 'Services' : 'الخدمات';
    }
    if (key === 'footer.copyright') {
              return language === 'en' ? '© 2024 Dussur Foundation for Conference Organization, Marketing and Advertising. All rights reserved.' : '© 2024 مؤسسة دُسُر لتنظيم المؤتمرات والدعاية والإعلان. جميع الحقوق محفوظة.';
    }
    if (key === 'footer.privacy') {
      return language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية';
    }
    if (key === 'footer.terms') {
      return language === 'en' ? 'Terms of Service' : 'شروط الخدمة';
    }
    if (key === 'process.research') {
      return language === 'en' ? 'Research' : 'البحث';
    }
    if (key === 'process.design') {
      return language === 'en' ? 'Design' : 'التصميم';
    }
    if (key === 'process.execute') {
      return language === 'en' ? 'Execute' : 'التنفيذ';
    }
    if (key === 'process.deliver') {
      return language === 'en' ? 'Deliver' : 'التسليم';
    }
    if (key === 'dept.design.desc') {
      return language === 'en' ? 'Creative visualization & brand identity' : 'التصور الإبداعي وهوية العلامة التجارية';
    }
    if (key === 'dept.production.desc') {
      return language === 'en' ? 'Quality manufacturing & execution' : 'التصنيع عالي الجودة والتنفيذ';
    }
    if (key === 'dept.publishing.desc') {
      return language === 'en' ? 'Content creation & distribution' : 'إنشاء المحتوى والتوزيع';
    }
    if (key === 'dept.media.desc') {
      return language === 'en' ? 'Multimedia content & broadcasting' : 'المحتوى متعدد الوسائط والبث';
    }
    if (key === 'dept.marketing.desc') {
      return language === 'en' ? 'Market research & analysis' : 'البحوث التسويقية والتحليل';
    }
    if (key === 'dept.digital.desc') {
      return language === 'en' ? 'Online presence & digital campaigns' : 'الحضور الرقمي والحملات الإلكترونية';
    }
    if (key === 'dept.exhibitions.desc') {
      return language === 'en' ? 'Event planning & management' : 'تخطيط وإدارة الفعاليات';
    }
    if (key === 'dept.mainLines.design.desc') {
      return language === 'en' ? 'Creative conceptualization' : 'التصور الإبداعي';
    }
    if (key === 'dept.mainLines.production.desc') {
      return language === 'en' ? 'Quality execution' : 'التنفيذ عالي الجودة';
    }
    if (key === 'dept.mainLines.marketing.desc') {
      return language === 'en' ? 'Strategic positioning' : 'الموضع الاستراتيجي';
    }
    if (key === 'service.brandStrategy.title') {
      return language === 'en' ? 'Brand Strategy' : 'استراتيجية العلامة التجارية';
    }
    if (key === 'service.brandStrategy.description') {
      return language === 'en' ? 'Comprehensive brand positioning and strategic planning to establish your unique market presence.' : 'تحديد موضع شامل للعلامة التجارية والتخطيط الاستراتيجي لإنشاء حضورك الفريد في السوق.';
    }
    if (key === 'service.creativeDesign.title') {
      return language === 'en' ? 'Creative Design' : 'التصميم الإبداعي';
    }
    if (key === 'service.creativeDesign.description') {
      return language === 'en' ? 'Stunning visual identities, logos, and marketing materials that capture your brand essence.' : 'هويات بصرية مذهلة وشعارات ومواد تسويقية تلتقط جوهر علامتك التجارية.';
    }
    if (key === 'service.digitalMarketing.title') {
      return language === 'en' ? 'Digital Marketing' : 'التسويق الرقمي';
    }
    if (key === 'service.digitalMarketing.description') {
      return language === 'en' ? 'Data-driven digital campaigns across all platforms to maximize your online reach and engagement.' : 'حملات رقمية مدفوعة بالبيانات عبر جميع المنصات لتعظيم وصولك الإلكتروني وتفاعلك.';
    }
    if (key === 'service.socialMedia.title') {
      return language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي';
    }
    if (key === 'service.socialMedia.description') {
      return language === 'en' ? 'Engaging social media strategies that build communities and foster meaningful connections.' : 'استراتيجيات وسائل تواصل اجتماعي جذابة تبني المجتمعات وتعزز الاتصالات الهادفة.';
    }
    if (key === 'service.contentCreation.title') {
      return language === 'en' ? 'Content Creation' : 'إنشاء المحتوى';
    }
    if (key === 'service.contentCreation.description') {
      return language === 'en' ? 'High-quality video, photography, and written content that tells your story effectively.' : 'فيديو عالي الجودة وتصوير فوتوغرافي ومحتوى مكتوب يروي قصتك بفعالية.';
    }
    if (key === 'service.webDevelopment.title') {
      return language === 'en' ? 'Web Development' : 'تطوير الويب';
    }
    if (key === 'service.webDevelopment.description') {
      return language === 'en' ? 'Modern, responsive websites and digital platforms that convert visitors into customers.' : 'مواقع ويب حديثة ومتجاوبة ومنصات رقمية تحول الزوار إلى عملاء.';
    }
    if (key === 'team.collaboration.title') {
      return language === 'en' ? 'Collaboration' : 'التعاون';
    }
    if (key === 'team.collaboration.description') {
      return language === 'en' ? 'We believe in the power of teamwork and collective creativity.' : 'نؤمن بقوة العمل الجماعي والإبداع الجماعي.';
    }
    if (key === 'team.excellence.title') {
      return language === 'en' ? 'Excellence' : 'التميز';
    }
    if (key === 'team.excellence.description') {
      return language === 'en' ? 'We strive for the highest quality in every project we undertake.' : 'نسعى لتحقيق أعلى جودة في كل مشروع نقوم به.';
    }
    if (key === 'team.innovation.title') {
      return language === 'en' ? 'Innovation' : 'الابتكار';
    }
    if (key === 'team.innovation.description') {
      return language === 'en' ? 'We constantly push boundaries to deliver cutting-edge solutions.' : 'ندفع الحدود باستمرار لتقديم حلول متطورة.';
    }
    if (key === 'team.results.title') {
      return language === 'en' ? 'Results' : 'النتائج';
    }
    if (key === 'team.results.description') {
      return language === 'en' ? 'We focus on measurable outcomes that drive business growth.' : 'نركز على النتائج القابلة للقياس التي تدفع نمو الأعمال.';
    }
    if (key === 'footer.service.brandStrategy') {
      return language === 'en' ? 'Brand Strategy' : 'استراتيجية العلامة التجارية';
    }
    if (key === 'footer.service.creativeDesign') {
      return language === 'en' ? 'Creative Design' : 'التصميم الإبداعي';
    }
    if (key === 'footer.service.digitalMarketing') {
      return language === 'en' ? 'Digital Marketing' : 'التسويق الرقمي';
    }
    if (key === 'footer.service.socialMedia') {
      return language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي';
    }
    if (key === 'footer.service.contentCreation') {
      return language === 'en' ? 'Content Creation' : 'إنشاء المحتوى';
    }
    if (key === 'footer.service.webDevelopment') {
      return language === 'en' ? 'Web Development' : 'تطوير الويب';
    }
    if (key === 'whatsapp.clickText') {
      return language === 'en' ? 'Click to chat on WhatsApp' : 'انقر للدردشة على واتساب';
    }
    if (key === 'dept.name.design') {
      return language === 'en' ? 'Design Department' : 'قسم التصميم';
    }
    if (key === 'dept.name.production') {
      return language === 'en' ? 'Production Department' : 'قسم الإنتاج';
    }
    if (key === 'dept.name.publishing') {
      return language === 'en' ? 'Publishing Department' : 'قسم النشر';
    }
    if (key === 'dept.name.media') {
      return language === 'en' ? 'Media Department' : 'قسم الميديا';
    }
    if (key === 'dept.name.marketingStudies') {
      return language === 'en' ? 'Marketing Studies Department' : 'قسم الدراسات التسويقية';
    }
    if (key === 'dept.name.digitalMarketing') {
      return language === 'en' ? 'Digital Marketing Department' : 'قسم التسويق الرقمي';
    }
    if (key === 'dept.name.exhibitions') {
      return language === 'en' ? 'Exhibitions & Conferences Department' : 'قسم المعارض والمؤتمرات';
    }
    if (key === 'hero.title') {
              return language === 'en' ? 'Dussur Foundation for Conference Organization, Marketing and Advertising' : 'مؤسسة دُسُر لتنظيم المؤتمرات والدعاية والإعلان';
    }
    if (key === 'hero.subtitle') {
      return language === 'en' ? 'Modern advertising workspace' : 'مساحة عمل إعلانية حديثة';
    }
    
    if (key === 'hero.badge') {
      return language === 'en' ? 'Leading Advertising Agency' : 'وكالة إعلانية رائدة';
    }

    if (key === 'hero.stats.projects') {
      return language === 'en' ? 'Completed Projects' : 'مشروع مكتمل';
    }
    if (key === 'hero.stats.years') {
      return language === 'en' ? 'Years Experience' : 'سنوات خبرة';
    }
    if (key === 'hero.stats.clients') {
      return language === 'en' ? 'Happy Clients' : 'عميل سعيد';
    }
    
    // For other keys, try the original logic
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 