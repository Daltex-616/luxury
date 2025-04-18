import { Menu, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // State for language dropdown

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
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
    } else {
      console.warn(`Element with ID "${id}" not found. Ensure your HTML has <section id="${id}">`);
    }
  };

  // Handle language selection
  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`); // Replace with actual language change logic
    setIsLanguageOpen(false);
  };

  // Animation variants for navbar
  const navbarVariants = {
    initial: { y: 0, height: 64 },
    scrolled: { y: 0, height: 80, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    scrolled: { opacity: 0.8, y: -5, transition: { duration: 0.3 } },
  };

  // Animation variants for language dropdown
  const languageMenuVariants = {
    hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.15 } },
  };

  // Mobile menu animation
  const mobileMenuVariants = {
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
      className={`fixed w-full z-50 font-[Playfair_Display] transition-all duration-500 ${isScrolled
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
                src="logo.png" // Replace with your logo's path
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
                  onClick={(e) => {
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
                    className={`text-white hover:text-black bg-white/10 hover:bg-white transition-all duration-300 rounded-full ${isScrolled ? "glow-effect" : ""
                      }`}
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
                  className={`text-white hover:text-black bg-white/10 hover:bg-white transition-all duration-300 rounded-full ${isScrolled ? "glow-effect" : ""
                    }`}
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
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={28} />
              </motion.div>
            </motion.button>
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
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  onTouchStart={(e) => {
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