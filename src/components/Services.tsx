import { Card } from "@/components/ui/card";
import { Megaphone, Palette, TrendingUp, Users, Camera, Globe } from "lucide-react";

// Import department images
import deptDesign from "@/assets/dept-design.jpg";
import deptProduction from "@/assets/dept-production.jpg";
import deptPublishing from "@/assets/dept-publishing.jpg";
import deptMedia from "@/assets/dept-media.jpg";
import deptMarketingStudies from "@/assets/dept-marketing-studies.jpg";
import deptDigitalMarketing from "@/assets/dept-digital-marketing.jpg";
import deptExhibitions from "@/assets/dept-exhibitions.jpg";

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
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Departments
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Dussur operates through three main parallel lines - Design, Production, and Marketing - supported by specialized departments that ensure comprehensive market analysis and competitive positioning.
            </p>
            
            {/* Three Main Lines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">Design</h4>
                <p className="text-sm opacity-90">Creative conceptualization</p>
              </div>
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">Production</h4>
                <p className="text-sm opacity-90">Quality execution</p>
              </div>
              <div className="bg-primary-gradient p-6 rounded-2xl text-primary-foreground">
                <h4 className="text-xl font-semibold mb-2">Marketing</h4>
                <p className="text-sm opacity-90">Strategic positioning</p>
              </div>
            </div>
          </div>

          {/* Specialized Departments */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl"></div>
            <div className="relative p-8 lg:p-12">
              <h4 className="text-2xl font-bold text-center text-foreground mb-12">
                Specialized Departments
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[
                  { 
                    name: "Design Department", 
                    image: deptDesign, 
                    desc: "Creative visualization & brand identity",
                    color: "from-blue-500/20 to-purple-500/20"
                  },
                  { 
                    name: "Production Department", 
                    image: deptProduction, 
                    desc: "Quality manufacturing & execution",
                    color: "from-orange-500/20 to-red-500/20"
                  }, 
                  { 
                    name: "Publishing Department", 
                    image: deptPublishing, 
                    desc: "Content creation & distribution",
                    color: "from-green-500/20 to-emerald-500/20"
                  },
                  { 
                    name: "Media Department", 
                    image: deptMedia, 
                    desc: "Multimedia content & broadcasting",
                    color: "from-pink-500/20 to-rose-500/20"
                  },
                  { 
                    name: "Marketing Studies Department", 
                    image: deptMarketingStudies, 
                    desc: "Market research & analysis",
                    color: "from-cyan-500/20 to-blue-500/20"
                  },
                  { 
                    name: "Digital Marketing Department", 
                    image: deptDigitalMarketing, 
                    desc: "Online presence & digital campaigns",
                    color: "from-violet-500/20 to-purple-500/20"
                  },
                  { 
                    name: "Exhibitions & Conferences Department", 
                    image: deptExhibitions, 
                    desc: "Event planning & management",
                    color: "from-yellow-500/20 to-orange-500/20"
                  }
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-elegant group-hover:-translate-y-2 overflow-hidden">
                      {/* Image Container */}
                      <div className="relative h-40 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-60`}></div>
                        <img 
                          src={dept.image} 
                          alt={dept.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                        
                        {/* Number Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
                          <span className="text-primary font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h5 className="font-semibold text-foreground text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                          {dept.name.replace(' Department', '')}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {dept.desc}
                        </p>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Connecting Lines Animation */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-10">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
                      <stop offset="50%" stopColor="currentColor" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 100 200 Q 300 150 500 200 T 900 200" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-secondary/50 px-8 py-4 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Research</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
                <span className="text-sm font-medium text-foreground">Design</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                <span className="text-sm font-medium text-foreground">Execute</span>
              </div>
              <div className="w-6 h-px bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
                <span className="text-sm font-medium text-foreground">Deliver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;