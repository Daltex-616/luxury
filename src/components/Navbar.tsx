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

  // Definimos las secciones: 'path' define si es navegación de página o scroll
  const navLinks = [
    { id: t('nav.home_id'), translationKey: 'nav.home', path: '/' },
    { id: t('nav.pricing_id'), translationKey: 'nav.pricing', path: '/' },
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
    setIsOpen(false);
    
    // Si el destino es la página del formulario (Contacto)
    if (path === '/ficha-traslado') {
      navigate(path);
      return;
    }

    // Si estamos en el Home y queremos ir a una sección (Home o Precios)
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Si estamos en la página del formulario y queremos volver a una sección del Home
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
          ? "bg-[#232020]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/40 transition-all">
              <img src="logo.png" alt="Luxury Transfer" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
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
                className={`px-4 py-2 text-[13px] uppercase tracking-[0.2em] transition-all duration-300 rounded-md hover:bg-white/5 ${
                  location.pathname === link.path 
                    ? "text-white font-bold" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t(link.translationKey)}
              </button>
            ))}
            
            {/* IDIOMA */}
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
                    className="absolute right-0 mt-3 w-40 bg-[#232020] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {['es', 'en', 'pt'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageSelect(lang)}
                        className={`block w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors ${
                          i18n.language === lang ? 'bg-white/10 text-white' : 'text-white/80'
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
            <Button variant="ghost" size="icon" onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="text-white">
              <Globe size={20} />
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#232020] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.path)}
                  className={`block w-full text-left text-2xl font-light tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-white/60"
                  }`}
                >
                  {t(link.translationKey)}
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