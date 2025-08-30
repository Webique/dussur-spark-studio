import TeamComponent from "@/components/Team";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        <section id="team">
          <TeamComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
} 