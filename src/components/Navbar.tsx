import { Menu, Globe, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);

  // IMPORTANTE: Los 'id' deben coincidir exactamente con los id="" de tus <section> en el Home
  const navLinks = [
    { id: 'inicio', translationKey: 'nav.home', path: '/' },
    { id: 'precios', translationKey: 'nav.pricing', path: '/' },
    { id: 'contacto', translationKey: 'nav.contact', path: '/ficha-traslado' }
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (sectionId: string, path: string) => {
    setIsOpen(false); // Cierra el menú móvil
    setIsLanguageOpen(false); // Cierra el selector de idioma si está abierto
    
    // Caso 1: Navegar a la página de Ficha de Traslado
    if (path === '/ficha-traslado') {
      navigate(path);
      window.scrollTo(0, 0);
      return;
    }

    // Caso 2: Si ya estamos en el Home, hacemos scroll suave
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay mínimo para que el menú móvil empiece a cerrar y no bloquee el scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      // Caso 3: Si estamos en Ficha y queremos volver a una sección del Home
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350); // Delay mayor para asegurar que la página principal cargó
    }
  };

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-[100] transition-all duration-500 font-[Playfair_Display] ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/40 transition-all">
              <img src="logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl md:text-2xl tracking-tighter leading-none">
                LUXURY
              </span>
              <span className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] font-light leading-none uppercase">
                Transfer & Security
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.path)}
                className={`px-4 py-2 text-[12px] uppercase tracking-[0.25em] transition-all duration-300 rounded-md hover:bg-white/5 ${
                  (location.pathname === link.path && link.path !== '/') || 
                  (location.pathname === '/' && link.path === '/')
                    ? "text-white font-bold" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t(link.translationKey)}
              </button>
            ))}
            
            {/* IDIOMA DESKTOP */}
            <div className="relative ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-white hover:bg-white/10 rounded-full"
              >
                <Globe size={18} />
              </Button>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-40 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                  >
                    {['es', 'en', 'pt'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`block w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all ${
                          i18n.language === lang ? 'bg-white/10 text-white' : 'text-white/60'
                        }`}
                      >
                        {lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => {
                setIsLanguageOpen(!isLanguageOpen);
                setIsOpen(false);
              }} 
              className="text-white"
            >
              <Globe size={20} />
            </Button>
            <button 
              onClick={() => {
                setIsOpen(!isOpen);
                setIsLanguageOpen(false);
              }} 
              className="p-2 text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU & LANGUAGE */}
      <AnimatePresence>
        {/* Menú de Navegación Móvil */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-white/10 overflow-hidden"
          >
            <div className="px-8 py-12 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.path)}
                  className={`block w-full text-left text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-white/40"
                  }`}
                >
                  {t(link.translationKey)}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Menú de Idioma Móvil */}
        {isLanguageOpen && !isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-b border-white/10 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col space-y-4">
              {['es', 'en', 'pt'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageSelect(lang)}
                  className={`text-left py-2 text-sm uppercase tracking-[0.3em] ${
                    i18n.language === lang ? 'text-white font-bold' : 'text-white/40'
                  }`}
                >
                  {lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;