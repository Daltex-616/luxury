
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen parallax bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070')] text-center flex items-center justify-center">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Transporte Premium a Tu Alcance
        </h1>
        <p className="text-xl md:text-1xl mb-8 text-secondary animate-fade-up">
          Servicio de transporte exclusivo con los más altos estándares de calidad
        </p>
        <a href="#contacto" className="inline-block bg-accent text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors">
          Reserva Ahora
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-accent" />
      </div>
    </section>
  );
};

export default Hero;
