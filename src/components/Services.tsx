import { useLanguage } from "@/contexts/LanguageContext";
import { Megaphone, Palette, TrendingUp, Users, Camera, Globe, Paintbrush, Factory, BookOpen, Radio, BarChart3, Smartphone, Calendar } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Megaphone className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.brandStrategy.title'),
      description: t('service.brandStrategy.description'),
    },
    {
      icon: <Palette className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.creativeDesign.title'),
      description: t('service.creativeDesign.description'),
    },
    {
      icon: <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.digitalMarketing.title'),
      description: t('service.digitalMarketing.description'),
    },
    {
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.socialMedia.title'),
      description: t('service.socialMedia.description'),
    },
    {
      icon: <Camera className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.contentCreation.title'),
      description: t('service.contentCreation.description'),
    },
    {
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      title: t('service.webDevelopment.title'),
      description: t('service.webDevelopment.description'),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Values */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('services.values.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('services.values.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('services.values.innovation')}</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('services.values.quality')}</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{t('services.values.results')}</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('services.vision.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('services.vision.description')}
            </p>
          </div>
        </div>

        {/* Main Lines Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            {t('services.mainLines.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Paintbrush className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t('services.mainLines.design.title')}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {t('services.mainLines.design.desc')}
              </p>
            </div>
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t('services.mainLines.production.title')}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {t('services.mainLines.production.desc')}
              </p>
            </div>
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t('services.mainLines.marketing.title')}
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {t('services.mainLines.marketing.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Departments */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            {t('services.departments.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-700">{index + 1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {dept.icon}
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {(dept.name as string).replace(' Department', '')}
                      </h4>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}