import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate

interface HeroProps {
  preloadImage?: boolean;
}

const Hero = ({ preloadImage = true }: HeroProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // 2. Inicializamos el navegador
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFontReady, setIsFontReady] = useState(false);

  const optimizedImageUrl = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80&format=webp';

  // Función para el botón de la flecha (scroll hacia abajo a la siguiente sección)
  const handleScrollDown = () => {
    // Buscamos la siguiente sección (por ejemplo, Servicios o Nosotros)
    // Asegúrate de que el siguiente componente en tu Index tenga id="servicios"
    const nextSection = document.getElementById('servicios');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Función para el botón principal (Redirección a la Ficha)
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/ficha-traslado'); // 3. Redirigimos a la ruta deseada
    window.scrollTo(0, 0); // Aseguramos que cargue desde arriba
  };

  useEffect(() => {
    let mounted = true;
    const loadResources = async () => {
      try {
        if (preloadImage && typeof window !== 'undefined') {
          const img = new Image();
          img.src = optimizedImageUrl;
          await img.decode();
        }
        if (typeof window !== 'undefined') {
          await document.fonts.ready;
        }
        if (mounted) {
          setIsLoaded(true);
          setIsFontReady(true);
        }
      } catch (error) {
        if (mounted) setIsLoaded(true);
      }
    };
    loadResources();
    return () => { mounted = false; };
  }, [preloadImage]);

  const criticalStyles = {
    title: {
      contentVisibility: 'auto' as const,
      opacity: isFontReady ? 1 : 0,
      transition: 'opacity 300ms ease-out'
    },
    background: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 500ms ease-in-out'
    }
  };

  return (
    <section 
      id="inicio" // ID estático para que la Navbar lo encuentre siempre
      ref={heroRef}
      className="relative h-screen text-center flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <picture className="absolute inset-0 w-full h-full overflow-hidden">
        <source srcSet={optimizedImageUrl} type="image/webp" />
        <img
          src={optimizedImageUrl}
          alt="Luxury Car Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={criticalStyles.background}
          loading="eager"
          decoding="async"
        />
      </picture>
      
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-white tracking-tight" style={criticalStyles.title}>
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 font-light tracking-wide"
          style={{
            opacity: isFontReady ? 1 : 0,
            transition: 'opacity 300ms ease-out 100ms'
          }}
        >
          {t('hero.subtitle')}
        </p>
        
        {/* BOTÓN PRINCIPAL CON NAVEGACIÓN */}
        <button 
          onClick={handleCtaClick}
          className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl"
          style={{
            opacity: isFontReady ? 1 : 0,
            transition: 'opacity 300ms ease-out 200ms'
          }}
        >
          {t('hero.cta_button')}
        </button>
      </div>
      
      {isLoaded && (
        <button 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-2 hover:text-white transition-colors"
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <ChevronDown size={40} className="text-white/50" />
        </button>
      )}
    </section>
  );
};

export default Hero;