import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  const achievements = [
    "Complete advertising solutions - print, audio & visual",
    "Corporate identity creation & rebranding",
    "Marketing research & local market analysis",
    "Conference & seminar organization",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Quote */}
            <div className="bg-accent/50 p-6 rounded-2xl mb-8 border-l-4 border-primary">
              <blockquote className="text-lg italic text-foreground/80 mb-2">
                "If any company wants to soar in the business world, its two wings are Marketing and Advertising"
              </blockquote>
              <cite className="text-sm text-muted-foreground">
                — J. Lawrence, Professor of Visual Communication, University of California
              </cite>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Dussur
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 1422 Hijri (2001) by a group of ambitious young professionals and academics united by one dream, Dussur began as an advertising and visual communication company and has evolved into a comprehensive marketing research center.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We reshape commercial concepts from an aesthetic and creative perspective, drawing from our deep understanding of local markets while applying global expertise. Our integrated team operates as true partners in your success, delivering solutions that combine strategic thinking with artistic excellence.
            </p>

            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="shadow-elegant hover:shadow-hover transition-all duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-accent-gradient rounded-3xl p-8 shadow-elegant">
              <div className="h-full bg-primary-gradient rounded-2xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold mb-4">20+</div>
                  <div className="text-xl font-medium mb-2">Years of Excellence</div>
                  <div className="text-sm opacity-80">Since 1422H / 2001</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;