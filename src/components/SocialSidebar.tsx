import React from 'react';
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const SocialSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-2">
      <a 
        href="https://www.instagram.com/luxurytransfer/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-110 transition-transform duration-200 rounded-l-lg shadow-lg"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-[#25D366] text-white hover:scale-110 transition-transform duration-200 rounded-l-lg shadow-lg"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-[#1877F2] text-white hover:scale-110 transition-transform duration-200 rounded-l-lg shadow-lg"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-black text-white hover:scale-110 transition-transform duration-200 rounded-l-lg shadow-lg"
        aria-label="X (Twitter)"
      >
        <FaXTwitter size={24} />
      </a>
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 bg-[#FF0000] text-white hover:scale-110 transition-transform duration-200 rounded-l-lg shadow-lg"
        aria-label="YouTube"
      >
        <Youtube size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;