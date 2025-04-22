import { Car, Clock, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ServiciosCuadro = () => {
  const { t } = useTranslation();

  return (
    <section id={t('nav.services_id')} className="py-20 px-4 section-fade">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: t('services.items.executive_transport.title'),
              description: t('services.items.executive_transport.description'),
              icon: <Car className="w-12 h-12 text-accent" />,
            },
            {
              title: t('services.items.24_7_service.title'),
              description: t('services.items.24_7_service.description'),
              icon: <Clock className="w-12 h-12 text-accent" />,
            },
            {
              title: t('services.items.max_security.title'),
              description: t('services.items.max_security.description'),
              icon: <Shield className="w-12 h-12 text-accent" />,
            },
          ].map((service, index) => (
            <div key={index} className="glass-card p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-text/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosCuadro;