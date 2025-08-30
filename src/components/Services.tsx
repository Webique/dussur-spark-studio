import { useLanguage } from "@/contexts/LanguageContext";
import { Paintbrush, BookOpen, Radio, Calendar, Megaphone, TrendingUp } from "lucide-react";
import creativeWorkspace from "@/assets/creative-workspace.jpg";
import deptConferences from "@/assets/dept-conferences.jpg";
import deptAdvertising from "@/assets/dept-advertising.jpg";
import deptMarketing from "@/assets/dept-marketing-strategy.jpg";
import deptBranding from "@/assets/dept-branding.jpg";
import deptPublications from "@/assets/dept-publications.jpg";
import deptMediaProduction from "@/assets/dept-media-production.jpg";

export default function Services() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={creativeWorkspace}
          alt="Creative Workspace"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gray-50/95"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Image Section */}
        <div className="text-center mb-12">
          <div className="relative max-w-4xl mx-auto mb-8">
            <img
              src="/lovable-uploads/bf37207f-07d6-4162-bc06-44866dd7550a.png"
              alt="Marketing Strategy Concepts"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Specialized Departments */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            {language === 'en' ? 'Our Departments' : 'أقسامنا'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                name: language === 'en' ? 'Conferences & Exhibitions Department' : 'قسم تنظيم المؤتمرات والمعارض',
                icon: <Calendar className="h-6 w-6 text-gray-600" />,
                desc: language === 'en' 
                  ? 'Planning and executing events with the highest standards of professionalism.'
                  : 'تخطيط وتنفيذ الفعاليات بأعلى معايير الاحترافية.',
                image: deptConferences
              },
              { 
                name: language === 'en' ? 'Advertising Department' : 'قسم الدعاية والإعلان',
                icon: <Megaphone className="h-6 w-6 text-gray-600" />,
                desc: language === 'en'
                  ? 'Designing and managing innovative advertising campaigns across various channels.'
                  : 'تصميم وإدارة الحملات الإعلانية المبتكرة بمختلف الوسائل.',
                image: deptAdvertising
              }, 
              { 
                name: language === 'en' ? 'Marketing Department' : 'قسم التسويق',
                icon: <TrendingUp className="h-6 w-6 text-gray-600" />,
                desc: language === 'en'
                  ? 'Developing smart marketing strategies that strengthen brand presence.'
                  : 'ابتكار استراتيجيات تسويقية ذكية تدعم انتشار العلامات التجارية.',
                image: deptMarketing
              },
              { 
                name: language === 'en' ? 'Visual Identity & Design Department' : 'قسم الهوية البصرية والتصميم',
                icon: <Paintbrush className="h-6 w-6 text-gray-600" />,
                desc: language === 'en'
                  ? 'Creating powerful and creative visual identities.'
                  : 'ابتكار هويات بصرية قوية وإبداعية.',
                image: deptBranding
              },
              { 
                name: language === 'en' ? 'Publications & Magazines Department' : 'قسم المطبوعات والمجلات',
                icon: <BookOpen className="h-6 w-6 text-gray-600" />,
                desc: language === 'en'
                  ? 'Producing high-quality publications and distinctive magazines that reflect clients\' identities.'
                  : 'إنتاج مطبوعات راقية ومجلات مميزة تعكس هوية العملاء.',
                image: deptPublications
              },
              { 
                name: language === 'en' ? 'Media Production Department' : 'قسم الإنتاج الإعلامي',
                icon: <Radio className="h-6 w-6 text-gray-600" />,
                desc: language === 'en'
                  ? 'Filming and producing audiovisual advertisements with professionalism.'
                  : 'تصوير وإخراج الإعلانات المرئية والمسموعة باحترافية.',
                image: deptMediaProduction
              }
            ].map((dept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                {/* Department Image */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Header with number and icon */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-700">{index + 1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {dept.icon}
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        {dept.name}
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