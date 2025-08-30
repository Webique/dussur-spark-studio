import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function About() {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        <section id="about">
          <AboutComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
} 