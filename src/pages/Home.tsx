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
    { id: "about", label: t('nav.about') },
    { id: "services", label: t('nav.services') },
    { id: "team", label: t('nav.team') },
    { id: "contact", label: t('nav.contact') }
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
          <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
        </section>

        {/* Dynamic Content Section */}
        <section id="content" className="min-h-screen">
          {renderActiveSection()}
        </section>
      </main>
      <Footer />
    </div>
  );
}