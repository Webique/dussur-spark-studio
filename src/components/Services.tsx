import { Card } from "@/components/ui/card";
import { Megaphone, Palette, TrendingUp, Users, Camera, Globe, Paintbrush, Factory, BookOpen, Radio, BarChart3, Smartphone, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: t('service.brandStrategy.title'),
      description: t('service.brandStrategy.description'),
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: t('service.creativeDesign.title'),
      description: t('service.creativeDesign.description'),
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('service.digitalMarketing.title'),
      description: t('service.digitalMarketing.description'),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('service.socialMedia.title'),
      description: t('service.socialMedia.description'),
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: t('service.contentCreation.title'),
      description: t('service.contentCreation.description'),
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('service.webDevelopment.title'),
      description: t('service.webDevelopment.description'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {t('services.subtitle')}
          </p>
          
          {/* Values & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-primary/5 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">{t('services.values.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.values.description')}
              </p>
            </div>
            <div className="bg-accent/30 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">{t('services.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('services.vision.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Our Departments */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('services.departments.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              {t('services.departments.subtitle')}
            </p>
            
            {/* Three Main Lines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">{t('services.mainLines.design')}</h4>
                <p className="text-sm opacity-90">{t('dept.mainLines.design.desc')}</p>
              </div>
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">{t('services.mainLines.production')}</h4>
                <p className="text-sm opacity-90">{t('dept.mainLines.production.desc')}</p>
              </div>
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">{t('services.mainLines.marketing')}</h4>
                <p className="text-sm opacity-90">{t('dept.mainLines.marketing.desc')}</p>
              </div>
            </div>
          </div>

          {/* Specialized Departments */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-muted/10 rounded-2xl"></div>
            <div className="relative p-8">
              <h4 className="text-xl font-semibold text-center text-foreground mb-8">
                {t('services.specialized.title')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { 
                    name: t('dept.name.design'), 
                    icon: <Paintbrush className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.design.desc')
                  },
                  { 
                    name: t('dept.name.production'), 
                    icon: <Factory className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.production.desc')
                  }, 
                  { 
                    name: t('dept.name.publishing'), 
                    icon: <BookOpen className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.publishing.desc')
                  },
                  { 
                    name: t('dept.name.media'), 
                    icon: <Radio className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.media.desc')
                  },
                  { 
                    name: t('dept.name.marketingStudies'), 
                    icon: <BarChart3 className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.marketing.desc')
                  },
                  { 
                    name: t('dept.name.digitalMarketing'), 
                    icon: <Smartphone className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.digital.desc')
                  },
                  { 
                    name: t('dept.name.exhibitions'), 
                    icon: <Calendar className="h-6 w-6 text-gray-600" />,
                    desc: t('dept.exhibitions.desc')
                  }
                ].map((dept, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    {/* Header with number and icon */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-gray-700">{index + 1}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {dept.icon}
                          <h4 className="font-medium text-gray-900 text-sm">
                            {(dept.name as string).replace(' Department', '')}
                          </h4>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {dept.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-secondary/50 px-8 py-4 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">{t('process.research')}</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
                <span className="text-sm font-medium text-foreground">{t('process.design')}</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                <span className="text-sm font-medium text-foreground">{t('process.execute')}</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
                <span className="text-sm font-medium text-foreground">{t('process.deliver')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;