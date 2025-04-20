import { Menu, Globe } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";

// Definir tipos para las variantes de animación
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);

  // Memoizar la función de scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Memoizar la función de scrollToSection
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: "smooth",
        });
      }, 100);
      setIsOpen(false);
    }
  }, []);

  const handleLanguageSelect = useCallback((language: string) => {
    console.log(`Selected language: ${language}`);
    setIsLanguageOpen(false);
  }, []);

  // Animation variants
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
          ? "bg-black/50 shadow-[0_0_15px_rgba(255,255,255,0.2)] border-b border-white/10"
          : "bg-black/90 backdrop-blur-xl shadow-lg border-b border-white/10"
      }`}
      variants={navbarVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
              <img
                src="logo.png"
                alt="Luxuri Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="font-bold text-white text-3xl">Luxury</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex pt-5 items-center space-x-6">
            <div className="ml-10 flex items-baseline space-x-6">
              {["inicio", "precios", "contacto"].map((section, index) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="text-white hover:text-black px-4 py-2 font-medium text-lg transition-all duration-300 relative group bg-white/10 rounded-md"
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate={isScrolled ? "scrolled" : "visible"}
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
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
                  >
                    <Globe size={22} />
                  </Button>
                </motion.div>
                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-40 bg-black/95 border border-white/10 rounded-lg shadow-lg z-50"
                      variants={languageMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="py-2">
                        {["Español", "English"].map((lang) => (
                          <button
                            key={lang}
                            onClick={() => handleLanguageSelect(lang)}
                            className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 hover:text-white text-sm transition-all duration-200"
                          >
                            {lang}
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
                >
                  <Globe size={22} />
                </Button>
              </motion.div>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    className="absolute right-0 top-12 w-40 bg-black/95 border border-white/10 rounded-lg shadow-lg z-50"
                    variants={languageMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="py-2">
                      {["Español", "English"].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLanguageSelect(lang)}
                          className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 hover:text-white text-sm transition-all duration-200"
                        >
                          {lang}
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
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white hover:text-black"
              >
                <Menu size={28} />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {["inicio", "precios", "contacto"].map((section, index) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  onTouchStart={(e: React.TouchEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="block text-white hover:text-black px-4 py-3 font-medium text-lg transition-all duration-300 relative group bg-white/10 rounded-md"
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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