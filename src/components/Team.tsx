import { Card } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  Palette, 
  PenTool, 
  Camera, 
  Printer, 
  Monitor, 
  HeadphonesIcon, 
  UserCheck, 
  Calculator, 
  Phone, 
  FileText 
} from "lucide-react";

const Team = () => {
  const teamCategories = [
    {
      category: "Strategy & Research",
      icon: <TrendingUp className="h-6 w-6" />,
      roles: ["Strategic Planning Managers", "Marketing Researchers"]
    },
    {
      category: "Creative Design",
      icon: <Palette className="h-6 w-6" />,
      roles: ["Advertisement Designers", "Art Directors"]
    },
    {
      category: "Content Creation",
      icon: <PenTool className="h-6 w-6" />,
      roles: ["Copywriters", "Poets & Songwriters"]
    },
    {
      category: "Production",
      icon: <Camera className="h-6 w-6" />,
      roles: ["Photographers", "TV Directors", "Print Managers"]
    },
    {
      category: "Media & Coordination",
      icon: <Monitor className="h-6 w-6" />,
      roles: ["Media Coordinators", "Publishing Coordinators"]
    },
    {
      category: "Talent & Performance",
      icon: <Users className="h-6 w-6" />,
      roles: ["Models", "Actors", "Celebrity Collaborators"]
    },
    {
      category: "Client Services",
      icon: <HeadphonesIcon className="h-6 w-6" />,
      roles: ["Customer Service Managers", "Account Coordinators"]
    },
    {
      category: "Operations",
      icon: <Calculator className="h-6 w-6" />,
      roles: ["Accountants", "Public Relations", "Legal Representatives"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dussur operates as a permanent workshop with an integrated team working according to a comprehensive system whose ultimate goal is client satisfaction. Our diverse group of permanent employees and collaborators brings together expertise from every aspect of advertising and marketing.
          </p>
        </div>

        {/* Team Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamCategories.map((team, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {team.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {team.category}
              </h3>
              <ul className="space-y-2">
                {team.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="text-sm text-muted-foreground">
                    {role}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-primary-gradient p-8 rounded-3xl text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">One Team, One Vision</h3>
            <p className="text-lg leading-relaxed opacity-90">
              From strategic planners to creative directors, from photographers to media coordinators – every member of our integrated team works toward the same goal: delivering exceptional results that exceed client expectations and drive meaningful business success.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <UserCheck className="h-5 w-5" />
            <span className="font-medium">Ready to work with our expert team?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;