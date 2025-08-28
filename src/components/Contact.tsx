import { Card } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const openWhatsApp = () => {
    const phoneNumber = "+966544435856";
    const message = "Hello! I'd like to get in touch with Dussur Advertising Agency.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phone.title'),
      info: t('contact.phone.info'),
      description: t('contact.phone.description'),
      onClick: openWhatsApp,
      clickable: true,
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.office.title'),
      info: t('contact.office.info'),
      description: t('contact.office.description'),
      onClick: null,
      clickable: false,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className={`p-6 border-border/50 bg-card/50 backdrop-blur-sm ${
                  item.clickable ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''
                }`}
                onClick={item.onClick}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.clickable && (
                      <p className="text-xs text-primary/70 mt-1">{t('whatsapp.clickText')}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;