import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
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