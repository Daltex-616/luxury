
import { Car, Clock, Shield, Star, Instagram, MessageSquare, Plane, Map, DollarSign, Smartphone } from "lucide-react";

const Footer = () => {
    return(
        <footer className="bg-gradient-to-b from-background to-accent/10 border-t border-accent/30 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo o Branding */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-accent tracking-tight">Luxuri</h3>
              <p className="mt-2 text-text/70 text-sm">Traslados de lujo con estilo y confort.</p>
            </div>

            {/* Enlaces sociales con animaciones */}
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/luxurytransfer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Smartphone size={28} />
              </a>
              {/* Ejemplo de ícono adicional */}
              <a
                href="https://www.facebook.com/luxurytransfer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>

            {/* Enlaces adicionales */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4">
                <a href="/about" className="text-text/60 hover:text-accent transition-colors text-sm">Sobre Nosotros</a>
                <a href="/contact" className="text-text/60 hover:text-accent transition-colors text-sm">Contacto</a>
                <a href="/terms" className="text-text/60 hover:text-accent transition-colors text-sm">Términos</a>
              </div>
              <p className="text-text/50 text-sm mt-2">© 2025 Luxuri. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer