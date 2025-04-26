import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  preloadImage?: boolean;
}

const Hero = ({ preloadImage = true }: HeroProps) => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFontReady, setIsFontReady] = useState(false);

  // URL de imagen optimizada (WebP con tamaño adecuado)
  const optimizedImageUrl = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80&format=webp';

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

  // Precargar recursos críticos
  useEffect(() => {
    let mounted = true;

    const loadResources = async () => {
      try {
        // Precargar imagen si está habilitado
        if (preloadImage && typeof window !== 'undefined') {
          const img = new Image();
          img.src = optimizedImageUrl;
          await img.decode();
        }

        // Esperar a que las fuentes estén listas
        if (typeof window !== 'undefined') {
          await document.fonts.ready;
        }

        if (mounted) {
          setIsLoaded(true);
          setIsFontReady(true);
        }
      } catch (error) {
        console.error('Error loading resources:', error);
        if (mounted) setIsLoaded(true); // Mostrar contenido igualmente
      }
    };

    loadResources();

    return () => {
      mounted = false;
    };
  }, [preloadImage]);

  // Estilos en línea críticos para el LCP
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
      id={t('nav.home_id')}
      ref={heroRef}
      className="relative h-screen text-center flex items-center justify-center overflow-hidden"
      aria-label={t('hero.aria_label') || "Main hero section"}
      style={{
        // Fallback de color de fondo similar a la imagen
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Imagen de fondo optimizada - ahora usando una etiqueta picture para mejor optimización */}
      <picture className="absolute inset-0 w-full h-full overflow-hidden">
        <source srcSet={optimizedImageUrl} type="image/webp" />
        <img
          src={optimizedImageUrl}
          alt={t('hero.background_aria_label') || "Background image of a luxury car"}
          className="absolute inset-0 w-full h-full object-cover"
          style={criticalStyles.background}
          loading={isLoaded ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
      
      {/* Overlay con blur */}
      <div 
        className="absolute inset-0 bg-background/70 backdrop-blur-sm" 
        style={criticalStyles.background}
      />
      
      {/* Contenido principal - Prioridad máxima para el LCP */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={criticalStyles.title}
        >
          {t('hero.title')}
        </h1>
        <p 
          className="text-xl md:text-1xl mb-8 text-secondary"
          style={{
            opacity: isFontReady ? 1 : 0,
            transition: 'opacity 300ms ease-out 100ms'
          }}
        >
          {t('hero.subtitle')}
        </p>
        <a 
          href={`#${t('nav.contact_id')}`} 
          className="inline-block bg-accent text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label={t('hero.cta_aria_label') || "Contact us button"}
          style={{
            opacity: isFontReady ? 1 : 0,
            transition: 'opacity 300ms ease-out 200ms'
          }}
        >
          {t('hero.cta_button')}
        </a>
      </div>
      
      {/* Botón de scroll (carga diferida) */}
      {isLoaded && (
        <button 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-accent rounded-full p-1"
          onClick={handleScrollDown}
          aria-label={t('hero.scroll_down_aria_label') || "Scroll down"}
        >
          <ChevronDown 
            size={32} 
            className="text-accent" 
            aria-hidden="true"
          />
        </button>
      )}
    </section>
  );
};

export default Hero;