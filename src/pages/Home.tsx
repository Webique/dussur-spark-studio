import { useState } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Home() {
  useScrollToTop();
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");

  const navigationItems = [
    { id: "about", label: t('navbar.about') },
    { id: "services", label: t('navbar.services') },
    { id: "team", label: t('navbar.team') },
    { id: "contact", label: t('navbar.contact') }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "team":
        return <Team />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-0">
        {/* Hero Section - Always Visible */}
        <section id="hero">
          <Hero />
        </section>

        {/* Navigation Tabs Under Hero */}
        <div className="bg-background border-b border-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 py-4">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <section id="content" className="min-h-screen">
          {renderActiveSection()}
        </section>
      </main>
      <Footer />
    </div>
  );
}