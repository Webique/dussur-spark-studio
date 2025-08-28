import { useLanguage } from "@/contexts/LanguageContext";
import client1 from "@/assets/1.jpg";
import client2 from "@/assets/2.jpg";
import client3 from "@/assets/3.jpg";
import client4 from "@/assets/4.jpg";
import client5 from "@/assets/5.jpg";
import client6 from "@/assets/6.jpg";
import client7 from "@/assets/7.jpg";
import client8 from "@/assets/8.jpg";
import client9 from "@/assets/9.jpg";

export default function Clients() {
  const { t } = useLanguage();

  const clientImages = [
    { src: client1, alt: 'Client 1' },
    { src: client2, alt: 'Client 2' },
    { src: client3, alt: 'Client 3' },
    { src: client4, alt: 'Client 4' },
    { src: client5, alt: 'Client 5' },
    { src: client6, alt: 'Client 6' },
    { src: client7, alt: 'Client 7' },
    { src: client8, alt: 'Client 8' },
    { src: client9, alt: 'Client 9' },
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {clientImages.map((client, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-800">
                      {t('clients.viewPartner')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="bg-accent/30 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t('clients.trustTitle')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('clients.trustDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 