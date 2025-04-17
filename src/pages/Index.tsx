
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FleetGallery from "../components/FleetGallery";
import SocialSidebar from "../components/SocialSidebar";
import { Car, Clock, Shield, Star, Instagram, MessageSquare, Plane, Map, DollarSign, Smartphone } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SocialSidebar />
      <Hero />

      {/* Servicios */}
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

      {/* Detalles del Servicio */}
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

      {/* Flota */}
      <FleetGallery />

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">¿QUIÉNES SOMOS?</h2>
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border border-[#D2C8B5]/30">
            <p className="text-xl mb-8 text-[#D2C8B5]/90">
              Somos un equipo de profesionales con más de 22 años de experiencia en custodia y seguridad VIP, así como, en la resolución y manejo de viajes ejecutivos.
            </p>
            <Separator className="my-8 bg-[#D2C8B5]/20" />
            <p className="text-xl text-[#D2C8B5]/90">
              Nos destacamos por nuestra atención personalizada, nuestra dedicación y nuestros vehículos exclusivos de alta gama que garantizan un traslado de lujo y confort inigualable.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="nosotros" className="py-20 px-4 bg-secondary/5 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Por Qué Elegirnos</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", text: "Clientes Satisfechos" },
              { number: "100%", text: "Seguridad Garantizada" },
              { number: "24/7", text: "Soporte Disponible" },
              { number: "50+", text: "Vehículos de Lujo" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-text/80">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios Referenciales */}
      <section id="precios" className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">PRECIOS REFERENCIALES</h2>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[#D2C8B5]/30">
            <Table className="w-full">
              <TableHeader className="bg-[#D2C8B5]/10">
                <TableRow>
                  <TableHead className="text-left text-lg font-bold text-[#D2C8B5] py-4 px-6">Servicio</TableHead>
                  <TableHead className="text-right text-lg font-bold text-[#D2C8B5] py-4 px-6">Precio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { route: "Desde CABA hacia Ezeiza", price: "110.000 $" },
                  { route: "Desde CABA (Hotel centro) hacia Aeroparque", price: "70.000 $" },
                  { route: "Desde CABA (Hotel centro) hacia San Fernando", price: "110.000 $" },
                  { route: "Conexión Ezeiza / CABA", price: "120.000 $" },
                  { route: "Hora de disposición", price: "40.000 $" },
                  { route: "Hora de espera", price: "20.000 $" },
                ].map((item, index) => (
                  <TableRow key={index} className="border-t border-[#D2C8B5]/20">
                    <TableCell className="text-left py-4 px-6 text-lg font-medium">{item.route}</TableCell>
                    <TableCell className="text-right py-4 px-6 text-lg font-medium text-[#D2C8B5]">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 text-sm text-[#D2C8B5]/60 text-center">
              Precios referenciales sujetos a cambios de acuerdo a cada requerimiento.
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "El mejor servicio de transporte que he utilizado. Puntual y profesional.",
                author: "María González",
                role: "Ejecutiva",
                rating: 5
              },
              {
                text: "Impresionante atención al cliente y vehículos de primera clase.",
                author: "Carlos Ruiz",
                role: "Empresario",
                rating: 5
              },
              {
                text: "Servicio confiable y de alta calidad. Totalmente recomendado.",
                author: "Ana Torres",
                role: "Directora",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < testimonial.rating ? "#D2C8B5" : "none"}
                      color={i < testimonial.rating ? "#D2C8B5" : "#D2C8B5"}
                    />
                  ))}
                </div>
                <p className="mb-4 text-text/80">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-text/60 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-secondary/5 to-background/50 section-fade">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado con subtítulo */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
              Contáctanos
            </h2>
            <p className="mt-4 text-text/70 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario y te responderemos lo antes posible.
            </p>
          </div>

          {/* Formulario */}
          <form className="space-y-8" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo Nombre */}
              <div className="relative">
                <label htmlFor="nombre" className="sr-only">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full p-4 rounded-xl bg-background border border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 peer"
                />
                <span className="absolute left-4 top-4 text-text/50 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Nombre
                </span>
              </div>

              {/* Campo Email */}
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 rounded-xl bg-background border border-accent/30 focus:border-accent focus:ring-咖喱 focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 peer"
                />
                <span className="absolute left-4 top-4 text-text/50 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Email
                </span>
              </div>
            </div>

            {/* Campo Mensaje */}
            <div className="relative">
              <label htmlFor="mensaje" className="sr-only">Mensaje</label>
              <textarea
                id="mensaje"
                placeholder="Mensaje"
                rows={5}
                required
                className="w-full p-4 rounded-xl bg-background border border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 peer"
              ></textarea>
              <span className="absolute left-4 top-4 text-text/50 pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Mensaje
              </span>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-accent text-background px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-accent/30 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo o Branding */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-accent tracking-tight">Luxuri</h3>
              <p className="mt-2 text-text/70 text-sm">Traslados de lujo con estilo y confort.</p>
            </div>

            {/* Enlaces sociales con animaciones */}
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/luxurytransfer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Smartphone size={28} />
              </a>
              {/* Ejemplo de ícono adicional */}
              <a
                href="https://www.facebook.com/luxurytransfer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>

            {/* Enlaces adicionales */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4">
                <a href="/about" className="text-text/60 hover:text-accent transition-colors text-sm">Sobre Nosotros</a>
                <a href="/contact" className="text-text/60 hover:text-accent transition-colors text-sm">Contacto</a>
                <a href="/terms" className="text-text/60 hover:text-accent transition-colors text-sm">Términos</a>
              </div>
              <p className="text-text/50 text-sm mt-2">© 2025 Luxuri. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
