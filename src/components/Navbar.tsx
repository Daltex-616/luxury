import { Menu, Globe } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';

// Tipos para las variantes de animación
interface NavbarVariants extends Variants {
  initial: { y: number; height: number };
  scrolled: { y: number; height: number; transition: { type: string; stiffness: number; damping: number } };
}

interface MenuItemVariants extends Variants {
  hidden: { opacity: number; y: number };
  visible: (i: number) => { opacity: number; y: number; transition: { delay: number; duration: number } };
  scrolled: { opacity: number; y: number; transition: { duration: number } };
}

interface LanguageMenuVariants extends Variants {
  hidden: { opacity: number; scaleY: number; transformOrigin: string };
  visible: { opacity: number; scaleY: number; transition: { duration: number; ease: string } };
  exit: { opacity: number; scaleY: number; transition: { duration: number } };
}

interface MobileMenuVariants extends Variants {
  hidden: { opacity: number; height: number };
  visible: { opacity: number; height: string; transition: { duration: number; ease: string } };
  exit: { opacity: number; height: number; transition: { duration: number } };
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);

  // Secciones del menú con sus IDs y claves de traducción
  const navSections = [
    { id: t('nav.home_id'), translationKey: 'nav.home' },
    { id: t('nav.pricing_id'), translationKey: 'nav.pricing' },
    { id: t('nav.contact_id'), translationKey: 'nav.contact' }
  ];

  // Efecto para el scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Función para scroll a sección
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }, []);

  // Cambiar idioma
  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageOpen(false);
    localStorage.setItem('i18nextLng', language);
  };

  // Variantes de animación
  const navbarVariants: NavbarVariants = {
    initial: { y: 0, height: 64 },
    scrolled: {
      y: 0,
      height: 80,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const menuItemVariants: MenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    scrolled: { opacity: 0.8, y: -5, transition: { duration: 0.3 } },
  };

  const languageMenuVariants: LanguageMenuVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.15 } },
  };

  const mobileMenuVariants: MobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 font-[Playfair_Display] transition-all duration-500 ${
        isScrolled
          ? "bg-[#232020]/50 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-b border-white/10"
          : "bg-[#232020] backdrop-blur-xl shadow-lg border-b border-white/10"
      }`}
      variants={navbarVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-transparent">
              <img
                src="logo.png"
                alt={t('nav.logo_alt')}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-white text-3xl">{t('brand.name')}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex pt-5 items-center space-x-6">
            <div className="ml-10 flex items-baseline space-x-6">
              {navSections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="text-white hover:text-black px-4 py-2 font-medium text-lg transition-all duration-300 relative group bg-white/10 rounded-md"
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate={isScrolled ? "scrolled" : "visible"}
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                  {t(section.translationKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              
              {/* Selector de idioma */}
              <div className="relative">
                <motion.div
                  custom={3}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate={isScrolled ? "scrolled" : "visible"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="text-white hover:text-black bg-white/10 hover:bg-white transition-all duration-300 rounded-full glow-effect"
                    aria-label={t('nav.language_selector')}
                  >
                    <Globe size={22} />
                    <span className="sr-only">{t('nav.language_selector')}</span>
                  </Button>
                </motion.div>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-40 bg-[#232020]/95 border border-white/10 rounded-lg shadow-lg z-50"
                      variants={languageMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="py-2">
                        {Object.entries(t('languages', { returnObjects: true })).map(([langCode, langName]) => (
                          <button
                            key={langCode}
                            onClick={() => handleLanguageSelect(langCode)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-all duration-200 ${
                              i18n.language === langCode 
                                ? 'bg-white/20 text-white font-medium' 
                                : 'text-white hover:bg-white/10'
                            }`}
                          >
                            {langName}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <motion.div
                custom={3}
                variants={menuItemVariants}
                initial="hidden"
                animate={isScrolled ? "scrolled" : "visible"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="text-white hover:text-black bg-white/10 hover:bg-white transition-all duration-300 rounded-full glow-effect"
                  aria-label={t('nav.language_selector')}
                >
                  <Globe size={22} />
                  <span className="sr-only">{t('nav.language_selector')}</span>
                </Button>
              </motion.div>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    className="absolute right-0 top-12 w-40 bg-[#232020]/95 border border-white/10 rounded-lg shadow-lg z-50"
                    variants={languageMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="py-2">
                      {Object.entries(t('languages', { returnObjects: true })).map(([langCode, langName]) => (
                        <button
                          key={langCode}
                          onClick={() => handleLanguageSelect(langCode)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-all duration-200 ${
                            i18n.language === langCode 
                              ? 'bg-white/20 text-white font-medium' 
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {langName}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black"
              aria-label={t('nav.menu_toggle')}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={28} />
                <span className="sr-only">{t('nav.menu_toggle')}</span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#232020]/95"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navSections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className="block text-white hover:text-black px-4 py-3 font-medium text-lg transition-all duration-300 relative group bg-white/10 rounded-md"
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                  {t(section.translationKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;