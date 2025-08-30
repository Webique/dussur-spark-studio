import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        <section id="contact">
          <ContactComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
} 