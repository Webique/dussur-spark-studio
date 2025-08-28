import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  // Fallback achievements in case translation fails
  const fallbackAchievements = [
    'Complete advertising solutions - print, audio & visual',
    'Corporate identity creation & rebranding',
    'Marketing research & local market analysis',
    'Conference & seminar organization',
  ];
  
  const openWhatsApp = () => {
    const phoneNumber = "+966544435856";
    const message = "Hello! I'd like to learn more about Dussur Advertising Agency and your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get achievements with fallback
  const achievements = Array.isArray(t('about.achievements')) ? (t('about.achievements') as string[]) : fallbackAchievements;

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div>
            {/* Quote */}
            <div className="bg-accent/50 p-6 rounded-2xl mb-8 border-l-4 border-primary">
              <blockquote className="text-lg italic text-foreground/80 mb-2">
                {t('about.quote')}
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                {t('about.quoteAuthor')}
              </cite>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement: string, index: number) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="shadow-elegant hover:shadow-hover transition-all duration-300" onClick={openWhatsApp}>
              {t('about.learnMore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;