import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { TooltipProvider } from "@/components/ui/tooltip";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  specs: string;
  description: string;
}

const fleetData: Vehicle[] = [
  {
    id: 1,
    name: "Sedan Ejecutivo",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070",
    specs: "4 pasajeros • A/C • WiFi",
    description: "Perfecto para viajes ejecutivos y corporativos"
  },
  {
    id: 2,
    name: "SUV Premium",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070",
    specs: "6 pasajeros • A/C • WiFi • Maletero amplio",
    description: "Ideal para grupos y viajes con equipaje"
  },
  {
    id: 3,
    name: "Van de Lujo",
    image: "https://thumbs.dreamstime.com/z/coche-peruano-del-tuk-tuk-en-la-calle-78098906.jpg",
    specs: "8 pasajeros • A/C • WiFi • Entretenimiento",
    description: "Perfecta para grupos grandes y eventos especiales"
  },
  {
    id: 4,
    name: "Limusina Ejecutiva",
    image: "https://tn.com.ar/resizer/v2/el-auto-mas-planchado-del-mundo-HCSXVGHAFVEU5FJRQQCH2EETQI.JPG?auth=faedad68e897e3f506c7cf87ea77986b29f9875b4b7111ff90c3878e98bc474a&width=767",
    specs: "6 pasajeros • A/C • Bar • WiFi Premium",
    description: "La máxima expresión del lujo y confort"
  },
  {
    id: 5,
    name: "Deportivo de Lujo",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
    specs: "2 pasajeros • A/C • Sistema de sonido premium",
    description: "Experiencia única para ocasiones especiales"
  },
  {
    id: 6,
    name: "SUV Deportiva",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/world-of-warcraft-patch-11-1-drive-system-official-preview.jpg",
    specs: "5 pasajeros • A/C • WiFi • Deportiva",
    description: "El balance perfecto entre lujo y rendimiento"
  }
];

const FleetGallery: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Detectamos si es un dispositivo táctil
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
        id="flota"
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
              Nuestra Flota
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
                    alt={vehicle.name}
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
                        <h4 className="text-lg font-semibold">{vehicle.name}</h4>
                        <p className="text-sm text-[#D2C8B5]">{vehicle.specs}</p>
                        <p className="text-sm text-gray-300">{vehicle.description}</p>
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