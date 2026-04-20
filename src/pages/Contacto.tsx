import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, Plane, User, Phone, MapPin, ClipboardList, Briefcase } from 'lucide-react';

const Contacto = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSending) return;
    setIsSending(true);

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setAlert({ show: true, message: "Ficha enviada con éxito. Protocolo activado.", type: 'success' });
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setAlert({ show: true, message: "Error: Verifica tu conexión o configuración.", type: 'error' });
      })
      .finally(() => {
        setIsSending(false);
        // Ocultar alerta después de 5 segundos
        setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 5000);
      });
    }
  };

  // ESTILOS DE ALTO CONTRASTE (Negro Luxury)
  const inputStyle = "w-full p-3 rounded-xl bg-[#0F0F0F] border border-white/20 focus:border-white focus:ring-1 focus:ring-white/30 outline-none transition-all text-white placeholder-gray-500";
  const labelStyle = "flex items-center gap-2 text-[11px] font-black text-gray-300 mb-2 ml-1 uppercase tracking-[0.2em]";
  const cardStyle = "bg-[#18181B] p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)]";

  return (
    <>
      <Navbar />
      <SocialSidebar />
      
      <section className="min-h-screen py-24 px-6 bg-[#09090B] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">Ficha de Traslado</h2>
            <div className="flex items-center justify-center gap-4 opacity-70">
              <span className="h-[1px] w-8 bg-accent"></span>
              <p className="text-accent uppercase text-xs tracking-[0.5em] font-medium">Luxury Transfer & Security</p>
              <span className="h-[1px] w-8 bg-accent"></span>
            </div>
          </div>

          {/* Feedback Alerta */}
          {alert.show && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-8 p-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs border ${
                alert.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-red-500/10 border-red-500 text-red-500'
              }`}
            >
              {alert.message}
            </motion.div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            
            {/* SECCIÓN 1: LOGÍSTICA */}
            <div className={cardStyle}>
              <h3 className="text-white text-sm font-bold mb-8 flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                <Calendar size={18} className="text-accent" /> Logística Temporal
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className={labelStyle}>Fecha</label>
                  <input type="date" name="fecha" required className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Día</label>
                  <input type="text" name="dia_semana" placeholder="Ej: Lunes" className={inputStyle} />
                </div>
                <div>
                  <label className={labelStyle}>Hora de Inicio</label>
                  <input type="time" name="hora_inicio" required className={inputStyle} />
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: CLIENTE Y PASAJEROS */}
            <div className={cardStyle}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                    <User size={18} className="text-accent" /> Cliente / Contacto
                  </h3>
                  <input type="text" name="cliente_nombre" placeholder="Nombre completo" required className={inputStyle} />
                  <input type="tel" name="cliente_telefono" placeholder="Teléfono (WhatsApp)" required className={inputStyle} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                    <Briefcase size={18} className="text-accent" /> Pasajeros
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" name="pasajeros_cantidad" placeholder="Cant. Pax" className={inputStyle} />
                    <input type="text" name="valijas" placeholder="Valijas" className={inputStyle} />
                  </div>
                  <input type="text" name="pasajeros_nombres" placeholder="Nombres de acompañantes" className={inputStyle} />
                  <input type="text" name="pasajeros_notas" placeholder="Niños / Mayores" className={inputStyle} />
                </div>
              </div>
            </div>

            {/* SECCIÓN 3: RUTA E ITINERARIO */}
            <div className={cardStyle}>
              <h3 className="text-white text-sm font-bold mb-8 flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                <MapPin size={18} className="text-accent" /> Itinerario de Ruta
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="ruta_inicio" placeholder="Punto de Recogida" required className={inputStyle} />
                <input type="text" name="ruta_destino" placeholder="Punto de Destino" required className={inputStyle} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" name="vuelo" placeholder="Vuelo a conectar (si aplica)" className={inputStyle} />
                 <div className="flex items-center gap-6 bg-black/40 p-3 rounded-xl border border-white/5 justify-around">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" name="butaca_infantil" value="Sí" className="w-4 h-4 accent-white" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Butaca Infantil</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" name="cartel_recepcion" value="Sí" className="w-4 h-4 accent-white" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Cartel Recepción</span>
                    </label>
                  </div>
              </div>
            </div>

            {/* OBSERVACIONES */}
            <div className="space-y-4">
              <label className={labelStyle}><ClipboardList size={14}/> Otros Detalles / Observaciones</label>
              <textarea name="message" rows={4} className={inputStyle + " resize-none"} placeholder="Indique cualquier detalle adicional importante de seguridad o preferencia..." />
            </div>

            {/* Botón de envío */}
            <button 
              type="submit" 
              disabled={isSending}
              className={`w-full py-6 rounded-2xl text-sm font-black uppercase tracking-[0.5em] transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-[0.98] ${
                isSending 
                ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              {isSending ? "PROCESANDO..." : "GENERAR FICHA DE TRASLADO"}
            </button>
            
          </form>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Contacto;