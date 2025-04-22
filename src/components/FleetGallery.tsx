import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTranslation } from 'react-i18next';

interface Vehicle {
  id: number;
  nameKey: string;
  image: string;
  specsKey: string;
  descriptionKey: string;
}

const FleetGallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const fleetData: Vehicle[] = [
    {
      id: 1,
      nameKey: 'fleet.sedan.name',
      image: "https://tn.com.ar/resizer/v2/el-auto-mas-planchado-del-mundo-HCSXVGHAFVEU5FJRQQCH2EETQI.JPG?auth=faedad68e897e3f506c7cf87ea77986b29f9875b4b7111ff90c3878e98bc474a&width=767",
      specsKey: 'fleet.sedan.specs',
      descriptionKey: 'fleet.sedan.description'
    },
    {
      id: 2,
      nameKey: 'fleet.suv.name',
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
      specsKey: 'fleet.suv.specs',
      descriptionKey: 'fleet.suv.description'
    },
    {
      id: 3,
      nameKey: 'fleet.van.name',
      image: "https://thumbs.dreamstime.com/z/coche-peruano-del-tuk-tuk-en-la-calle-78098906.jpg",
      specsKey: 'fleet.van.specs',
      descriptionKey: 'fleet.van.description'
    },
    {
      id: 4,
      nameKey: 'fleet.limo.name',
      image: "https://media.discordapp.net/attachments/467431736045862992/1363380669887025152/image.png?ex=6805d2b2&is=68048132&hm=d57bde42166336cc78cf6f590065a116bb19862f603dcf2311947181ce50ae9e&=&format=webp&quality=lossless",
      specsKey: 'fleet.limo.specs',
      descriptionKey: 'fleet.limo.description'
    },
    {
      id: 5,
      nameKey: 'fleet.sports.name',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
      specsKey: 'fleet.sports.specs',
      descriptionKey: 'fleet.sports.description'
    },
    {
      id: 6,
      nameKey: 'fleet.suv_sport.name',
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/world-of-warcraft-patch-11-1-drive-system-official-preview.jpg",
      specsKey: 'fleet.suv_sport.specs',
      descriptionKey: 'fleet.suv_sport.description'
    }
  ];

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleTouch = (id: number) => {
    if (isTouchDevice) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <TooltipProvider>
      <section
        id={t('nav.fleet_id')}
        className="py-24 px-6 section-fade relative overflow-hidden"
        style={{
          background: '#1A1F2C',
          position: 'relative',
          zIndex: 0
        }}
      >
        {/* Elementos decorativos diagonales */}
        <div
          className="absolute top-0 left-0 w-3/4 h-1/2 md:w-1/2 md:h-1/3"
          style={{
            background: '#D2C8B5',
            clipPath: 'polygon(0 0, 0% 100%, 100% 0)',
            opacity: 0.1,
            zIndex: 1
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-3/4 h-1/2 md:w-1/2 md:h-1/3"
          style={{
            background: '#D2C8B5',
            clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
            opacity: 0.1,
            zIndex: 1
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center relative inline-block text-white">
              {t('fleet.title')}
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#D2C8B5] rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {fleetData.map((vehicle) => {
              const isActive = activeCard === vehicle.id;

              return (
                <div
                  key={vehicle.id}
                  className="relative overflow-hidden rounded-xl shadow-xl"
                  onTouchStart={() => handleTouch(vehicle.id)}
                  onMouseEnter={() => !isTouchDevice && setActiveCard(vehicle.id)}
                  onMouseLeave={() => !isTouchDevice && setActiveCard(null)}
                >
                  <img
                    src={vehicle.image}
                    alt={t(vehicle.nameKey)}
                    className={`w-full h-64 object-cover transition-transform duration-300 ${
                      isActive ? 'scale-105' : ''
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Car className="w-16 h-16 text-[#D2C8B5]" />
                  </div>
                  
                  {/* Info Card */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-[#1A1F2C]/95 backdrop-blur-sm border-t border-[#D2C8B5]/20 text-white p-4 transition-all duration-300 ${
                      isActive ? 'translate-y-0' : 'translate-y-full'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Car className="h-10 w-10 text-[#D2C8B5]" />
                      <div>
                        <h4 className="text-lg font-semibold">{t(vehicle.nameKey)}</h4>
                        <p className="text-sm text-[#D2C8B5]">{t(vehicle.specsKey)}</p>
                        <p className="text-sm text-gray-300">{t(vehicle.descriptionKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default FleetGallery;