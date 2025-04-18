import React from 'react'
import { Car, Clock, Shield, Star, Instagram, MessageSquare, Plane, Map, DollarSign, Smartphone } from "lucide-react";

const Servicios = () => {
    return(
        <section id="detalles-servicio" className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-16">
            {/* Traslados a Aeropuertos */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Traslados a Aeropuertos y Terminales</h2>
              <p className="text-lg text-center max-w-3xl mx-auto text-[#D2C8B5]/80">
                Recepción y traslado premium hacia y desde aeropuertos y terminales, con seguimiento en tiempo real para máxima eficiencia.
              </p>
              <div className="flex justify-center mt-8">
                <Plane className="w-12 h-12 text-[#D2C8B5]" />
              </div>
            </div>

            {/* Servicios de Media y Larga Distancia */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Servicios de Media y Larga Distancia</h2>
              <p className="text-lg text-center max-w-3xl mx-auto text-[#D2C8B5]/80">
                Viajes ejecutivos con la comodidad y seguridad que su empresa necesita, optimizando tiempos y garantizando un trayecto sin preocupaciones.
              </p>
              <div className="flex justify-center mt-8">
                <Car className="w-12 h-12 text-[#D2C8B5]" />
              </div>
            </div>

            {/* Traslados a Provincias */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Traslados a Provincias y Fuera de Argentina</h2>
              <p className="text-lg text-center max-w-3xl mx-auto text-[#D2C8B5]/80">
                Expanda sus posibilidades con nuestro servicio de transporte internacional y a distintas provincias, asegurando un viaje de lujo sin fronteras.
              </p>
              <div className="flex justify-center mt-8">
                <Map className="w-12 h-12 text-[#D2C8B5]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Servicios