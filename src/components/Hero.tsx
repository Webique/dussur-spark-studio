import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export default function Hero({ activeSection, setActiveSection }: HeroProps) {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    const phoneNumber = "+966544435856";
    const message = "Hello! I'm interested in your advertising services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern advertising workspace"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-white text-gray-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg"
            >
              {t('hero.startProject')}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-lg"
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t('hero.watchStory')}
            </Button>
          </div>

          {/* Navigation Tabs */}
          {setActiveSection && (
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
              {[
                { id: "about", label: t('nav.about') },
                { id: "services", label: t('nav.services') },
                { id: "team", label: t('nav.team') },
                { id: "contact", label: t('nav.contact') }
              ].map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-white text-gray-900 shadow-md hover:bg-white/90"
                      : "border border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}