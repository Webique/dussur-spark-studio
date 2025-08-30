import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Home() {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-0">
        <section id="hero">
          <Hero />
        </section>
      </main>
      <Footer />
    </div>
  );
} 