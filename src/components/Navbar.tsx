import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+966544435856";
    const message = "Hello! I'm interested in your advertising services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { id: 'home', name: t('nav.home') },
    { id: 'about', name: t('nav.about') },
    { id: 'services', name: t('nav.services') },
    { id: 'team', name: t('nav.team') },
    { id: 'contact', name: t('nav.contact') },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-black/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/lovable-uploads/6c856bd6-386c-41d3-98f0-88663266e825.png"
                alt="Dussur Advertising Agency"
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                  {/* Hover underline effect */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 transition-all duration-300 rounded-lg ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                <Languages className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'عربي' : 'EN'}</span>
              </Button>

              {/* Get Started Button */}
              <Button
                onClick={openWhatsApp}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('nav.getStarted')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="p-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="mt-8 space-y-4">
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full justify-center py-3 border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-300"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  <span>{language === 'en' ? 'عربي' : 'EN'}</span>
                </Button>

                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {t('nav.getStarted')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}