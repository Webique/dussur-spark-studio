import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Services() {
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