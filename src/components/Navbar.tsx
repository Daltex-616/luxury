
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#D2C8B5]/20 flex items-center justify-center">
              <span className="text-[#D2C8B5] text-xl font-bold">L</span>
            </div>
            <span className="text-2xl font-bold text-accent">Luxuri</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Inicio</a>
              <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Servicios</a>
              <a href="#detalles-servicio" onClick={(e) => scrollToSection(e, 'detalles-servicio')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Detalles</a>
              <a href="#flota" onClick={(e) => scrollToSection(e, 'flota')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Flota</a>
              <a href="#quienes-somos" onClick={(e) => scrollToSection(e, 'quienes-somos')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Quiénes Somos</a>
              <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Por Qué Elegirnos</a>
              <a href="#precios" onClick={(e) => scrollToSection(e, 'precios')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Precios</a>
              <a href="#testimonios" onClick={(e) => scrollToSection(e, 'testimonios')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Testimonios</a>
              <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Contacto</a>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-text hover:text-accent hover:bg-transparent transition-colors duration-300"
            >
              <Globe size={20} />
            </Button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-text hover:text-accent hover:bg-transparent transition-colors duration-300"
            >
              <Globe size={20} />
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-accent">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Inicio</a>
            <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Servicios</a>
            <a href="#detalles-servicio" onClick={(e) => scrollToSection(e, 'detalles-servicio')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Detalles</a>
            <a href="#flota" onClick={(e) => scrollToSection(e, 'flota')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Flota</a>
            <a href="#quienes-somos" onClick={(e) => scrollToSection(e, 'quienes-somos')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Quiénes Somos</a>
            <a href="#nosotros" onClick={(e) => scrollToSection(e, 'nosotros')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Por Qué Elegirnos</a>
            <a href="#precios" onClick={(e) => scrollToSection(e, 'precios')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Precios</a>
            <a href="#testimonios" onClick={(e) => scrollToSection(e, 'testimonios')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Testimonios</a>
            <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="block text-text hover:text-accent px-3 py-2 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
