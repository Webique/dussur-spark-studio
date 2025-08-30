import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Services() {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-8">
        <Navbar />
        <section id="services">
          <ServicesComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
} 