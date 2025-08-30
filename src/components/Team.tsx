import { Card } from "@/components/ui/card";
import { Users, Award, Lightbulb, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  
  const teamValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: t('team.collaboration.title'),
      description: t('team.collaboration.description'),
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('team.excellence.title'),
      description: t('team.excellence.description'),
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('team.innovation.title'),
      description: t('team.innovation.description'),
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t('team.results.title'),
      description: t('team.results.description'),
    },
  ];

  return (
    <section className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamValues.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 text-primary-foreground">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Team Description */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/5 p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('team.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;