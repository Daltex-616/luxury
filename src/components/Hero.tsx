import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

  // Manejar el scroll suave para mejor accesibilidad
  const handleScrollDown = () => {
    const nextSectionId = t('nav.about_id');
    const nextSection = document.getElementById(nextSectionId);
    
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Precargar la imagen de fondo para mejor performance
  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070';
  }, []);

  return (
    <section 
      id={t('nav.home_id')}
      ref={heroRef}
      className="relative h-screen text-center flex items-center justify-center overflow-hidden"
      aria-label={t('hero.aria_label') || "Main hero section"}
    >
      {/* Imagen de fondo optimizada */}
      <div 
        className="absolute inset-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "transform" // Optimización para animaciones
        }}
        role="img"
        aria-label={t('hero.background_aria_label') || "Background image of a luxury car"}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-1xl mb-8 text-secondary animate-fade-up">
          {t('hero.subtitle')}
        </p>
        <a 
          href={`#${t('nav.contact_id')}`} 
          className="inline-block bg-accent text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label={t('hero.cta_aria_label') || "Contact us button"}
        >
          {t('hero.cta_button')}
        </a>
      </div>
      
      {/* Botón de scroll optimizado */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-1"
        onClick={handleScrollDown}
        aria-label={t('hero.scroll_down_aria_label') || "Scroll down"}
      >
        <ChevronDown 
          size={32} 
          className="text-accent" 
          aria-hidden="true" // El icono es decorativo ya que el botón tiene aria-label
        />
      </button>
    </section>
  );
};

export default Hero;