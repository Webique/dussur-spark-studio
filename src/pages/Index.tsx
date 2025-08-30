import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Index() {
  useScrollToTop();
  const { language } = useLanguage();
  
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="team">
          <Team />
        </section>
        
        {/* Stats Section */}
        <section id="stats" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'en' ? 'Watch Our Story' : 'شاهد قصتنا'}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  onClick={scrollToAbout}
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Watch Our Story' : 'شاهد قصتنا'}
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-lg text-gray-700">
                  {language === 'en' ? 'Projects Completed' : 'مشروع مكتمل'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-lg text-gray-700">
                  {language === 'en' ? 'Years Experience' : 'سنوات خبرة'}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-lg text-gray-700">
                  {language === 'en' ? 'Happy Clients' : 'عميل سعيد'}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
