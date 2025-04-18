import { Car, Clock, Shield, Star, Instagram, MessageSquare, Plane, Map, DollarSign, Smartphone } from "lucide-react";

const ServiciosCuadro = () => {
    return(
        <section id="servicios" className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transporte Ejecutivo",
                description: "Vehículos de lujo con choferes profesionales",
                icon: <Car className="w-12 h-12 text-accent" />,
              },
              {
                title: "Servicio 24/7",
                description: "Disponibles cuando nos necesites",
                icon: <Clock className="w-12 h-12 text-accent" />,
              },
              {
                title: "Máxima Seguridad",
                description: "Tu seguridad es nuestra prioridad",
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
    )
}
export default ServiciosCuadro