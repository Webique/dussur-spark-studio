import { Card } from "@/components/ui/card";
import { Megaphone, Palette, TrendingUp, Users, Camera, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Brand Strategy",
      description: "Comprehensive brand positioning and strategic planning to establish your unique market presence.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Stunning visual identities, logos, and marketing materials that capture your brand essence.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Data-driven digital campaigns across all platforms to maximize your online reach and engagement.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media",
      description: "Engaging social media strategies that build communities and foster meaningful connections.",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Content Creation",
      description: "High-quality video, photography, and written content that tells your story effectively.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and digital platforms that convert visitors into customers.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We offer comprehensive advertising and marketing solutions tailored to elevate your brand and drive results.
          </p>
          
          {/* Values & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-primary/5 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                We operate with a strict framework demanding creativity while avoiding imitation. Our approach emphasizes understanding client needs through research, study, and implementation, maintaining ethical standards that align with social guidelines.
              </p>
            </div>
            <div className="bg-accent/30 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To work according to international standards with precise local academic vision, delivering advertising products that anticipate the future while preserving aesthetic and creative value in everything we create.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Our Departments */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Departments
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dussur operates through three main parallel lines - Design, Production, and Marketing - supported by specialized departments that ensure comprehensive market analysis and competitive positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Design Department",
              "Production Department", 
              "Publishing Department",
              "Media Department",
              "Marketing Studies Department",
              "Digital Marketing Department",
              "Exhibitions & Conferences Department"
            ].map((dept, index) => (
              <div
                key={index}
                className="bg-primary/5 p-6 rounded-xl text-center border border-primary/10 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-foreground text-sm leading-tight">
                  {dept}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;