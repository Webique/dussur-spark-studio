import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />

        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
