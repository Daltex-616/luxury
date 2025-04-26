import React from 'react';
import { Car, Plane, Map } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Servicios = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      titleKey: 'services.categories.airport.title',
      descriptionKey: 'services.categories.airport.description',
      icon: <Plane className="w-12 h-12 text-[#D2C8B5]" />
    },
    {
      titleKey: 'services.categories.long_distance.title',
      descriptionKey: 'services.categories.long_distance.description',
      icon: <Car className="w-12 h-12 text-[#D2C8B5]" />
    },
    {
      titleKey: 'services.categories.international.title',
      descriptionKey: 'services.categories.international.description',
      icon: <Map className="w-12 h-12 text-[#D2C8B5]" />
    }
  ];

  return (
    <section id={t('nav.service_details_id')} className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold mb-6">{t(category.titleKey)}</h3>
              <p className="text-lg text-center max-w-3xl mx-auto text-[#D2C8B5]/80">
                {t(category.descriptionKey)}
              </p>
              <div className="flex justify-center mt-8">
                {category.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;