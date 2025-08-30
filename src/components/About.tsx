import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import strategyBackground from "@/assets/strategy-background.jpg";
import successAbstract from "@/assets/success-abstract.jpg";

export default function About() {
  const { t, language } = useLanguage();
  const openWhatsApp = () => {
    window.open('https://wa.me/966544435856?text=مرحباً، أريد معرفة المزيد عن دسر', '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={strategyBackground}
          alt="Strategy Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
            {/* Eagle Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative max-w-xs">
                <img
                  src="/lovable-uploads/87059cd4-17e1-4caa-814a-d981a9a4508e.png"
                  alt="Soaring Eagle - Symbol of Vision and Excellence"
                  className="w-full h-32 md:h-40 object-contain"
                />
              </div>
            </div>
            {/* Company Story */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Our Story' : 'قصتنا'}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.description1')}
                </p>
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Our Services' : 'خدماتنا'}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.description2')}
                </p>
                <ul className="space-y-4">
                  {(t('about.services') as string[] || []).map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3"></div>
                      <span className="text-gray-700 text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Company Philosophy */}
          <div className="text-center relative">
            {/* Background decorative image */}
            <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
              <img
                src={successAbstract}
                alt="Success Abstract"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200 relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {t('about.description3')}
              </p>
            </div>
          </div>

          {/* Vision, Mission & Values Section */}
          <div className="mt-20">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Vision, Mission & Values' : 'الرؤية والرسالة والقيم'}
                </h2>
                <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Vision */}
              <div className="group">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {language === 'en' 
                        ? 'To be the leading institution in creative communication and conference management, and a distinguished Saudi model that leaves a global footprint in the modern media world.'
                        : 'أن نكون المؤسسة الرائدة في صناعة الاتصال الإبداعي وتنظيم المؤتمرات، ونموذجًا سعوديًا متميزًا يضع بصمة عالمية في عالم الإعلام الحديث.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="group">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      {language === 'en' ? 'Our Mission' : 'رسالتنا'}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {language === 'en'
                        ? 'We create integrated marketing and advertising solutions that reflect our clients\' identities and deliver a positive impact in building their brands—through a blend of creativity, technology, and professionalism.'
                        : 'نبتكر حلولًا تسويقية وإعلانية متكاملة تعكس هوية عملائنا وتحقق أثرًا إيجابيًا في بناء علاماتهم التجارية، عبر مزيج من الإبداع، التقنية، والاحترافية.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                {language === 'en' ? 'Our Values' : 'قيمنا'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {[
                  {
                    title: language === 'en' ? 'Creativity' : 'الإبداع',
                    description: language === 'en' 
                      ? 'Delivering fresh, innovative ideas that make a difference.'
                      : 'تقديم أفكار جديدة ومبتكرة تصنع الفرق.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: language === 'en' ? 'Professionalism' : 'الاحترافية',
                    description: language === 'en'
                      ? 'Committing to the highest standards of quality in every service we provide.'
                      : 'الالتزام بأعلى معايير الجودة في كل خدمة نقدمها.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  {
                    title: language === 'en' ? 'Partnership' : 'الشراكة',
                    description: language === 'en'
                      ? 'Building long-term relationships based on trust and shared success.'
                      : 'بناء علاقات طويلة الأمد قائمة على الثقة والنجاح المشترك.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    title: language === 'en' ? 'Flexibility' : 'المرونة',
                    description: language === 'en'
                      ? 'Adapting swiftly and efficiently to market changes and client needs.'
                      : 'التكيف مع متغيرات السوق واحتياجات العملاء بسرعة وكفاءة.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )
                  },
                  {
                    title: language === 'en' ? 'Excellence' : 'التميز',
                    description: language === 'en'
                      ? 'Continuously striving to exceed expectations and achieve leadership.'
                      : 'السعي المستمر لتجاوز التوقعات وتحقيق الريادة.',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  }
                ].map((value, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                          <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                            {value.icon}
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={openWhatsApp}
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('about.buttonText')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}