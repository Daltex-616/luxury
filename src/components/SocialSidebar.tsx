import React from 'react';
import { Instagram, Mail, Smartphone } from "lucide-react";

const SocialSidebar: React.FC = () => {
  return (
    <nav 
      className="fixed bottom-0 left-0 w-full z-[100] 
                 md:bottom-auto md:top-1/2 md:left-auto md:right-0 md:w-auto md:-translate-y-1/2 
                 flex flex-row md:flex-col 
                 items-center justify-center 
                 gap-0 md:gap-4 
                 bg-background/95 backdrop-blur-sm border-t border-accent/20 
                 md:bg-transparent md:backdrop-blur-none md:border-none md:p-0"
    >
      {/* Instagram */}
      <a 
        href="https://www.instagram.com/luxurytransfer/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 md:flex-none flex items-center justify-center 
                   p-4 md:p-5 
                   bg-transparent md:bg-accent 
                   text-accent md:text-background 
                   hover:bg-secondary md:hover:bg-secondary 
                   hover:text-background
                   transition-all duration-300 
                   md:hover:-translate-x-3 md:shadow-xl md:rounded-l-2xl
                   group"
        aria-label="Instagram"
      >
        <Instagram size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Instagram</span>
      </a>

      {/* WhatsApp - El más resaltado */}
      <a 
        href="https://wa.me/+5491159804525" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 md:flex-none flex items-center justify-center 
                   p-4 md:p-5 
                   bg-accent md:bg-accent 
                   text-background 
                   hover:bg-secondary
                   transition-all duration-300 
                   relative overflow-hidden
                   md:hover:-translate-x-3 md:shadow-[0_0_25px_rgba(229,222,255,0.4)] md:rounded-l-2xl
                   group"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 border-2 border-accent animate-ping opacity-25 md:rounded-l-2xl"></span>
        <Smartphone size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        <span className="sr-only">WhatsApp</span>
      </a>

      {/* Email */}
      <a 
        href="mailto:contacto@luxurytransfer.com.ar" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 md:flex-none flex items-center justify-center 
                   p-4 md:p-5 
                   bg-transparent md:bg-accent 
                   text-accent md:text-background 
                   hover:bg-secondary md:hover:bg-secondary 
                   hover:text-background
                   transition-all duration-300 
                   md:hover:-translate-x-3 md:shadow-xl md:rounded-l-2xl
                   group"
        aria-label="Email"
      >
        <Mail size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Email</span>
      </a>
    </nav>
  );
};

export default SocialSidebar;