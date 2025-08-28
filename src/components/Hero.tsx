import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export default function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern advertising workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 font-light mt-2 md:mt-4">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-white text-gray-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-lg"
            >
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">500+</div>
              <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">{t('hero.stats.projects')}</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">15+</div>
              <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">{t('hero.stats.years')}</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">50+</div>
              <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider">{t('hero.stats.clients')}</div>
            </div>
          </div>
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