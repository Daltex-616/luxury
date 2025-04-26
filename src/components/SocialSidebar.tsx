import React from 'react';
import { Instagram, Mail, Smartphone } from "lucide-react";

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-2">
      <a 
        href="https://www.instagram.com/luxurytransfer/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-background text-text/60 hover:text-accent transition-all duration-300 hover:scale-110 border border-accent/30 shadow-lg rounded-l-lg"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-background text-text/60 hover:text-accent transition-all duration-300 hover:scale-110 border border-accent/30 shadow-lg rounded-l-lg"
        aria-label="WhatsApp"
      >
        <Smartphone size={24} />
      </a>
      <a 
        href="mailto:contact@luxurytransfer.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-background text-text/60 hover:text-accent transition-all duration-300 hover:scale-110 border border-accent/30 shadow-lg rounded-l-lg"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;