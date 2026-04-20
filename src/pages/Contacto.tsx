import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import { motion } from 'framer-motion';
import { Calendar, Clock, Plane, User, Phone, MapPin, CreditCard, ClipboardList, Briefcase } from 'lucide-react';

const Contacto = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });
  
  const [formData, setFormData] = useState({
    fecha: '', dia_semana: '', hora_inicio: '',
    cliente_nombre: '', cliente_telefono: '',
    pasajeros_cantidad: '', pasajeros_nombres: '', pasajeros_notas: '',
    ruta_inicio: '', ruta_destino: '', vuelo: '',
    valijas: '', butaca_infantil: 'No', cartel_recepcion: 'No',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setAlert({ show: true, message: "Ficha enviada con éxito", type: 'success' });
        form.current?.reset();
      }).catch(() => {
        setAlert({ show: true, message: "Error al enviar la ficha", type: 'error' });
      });
    }
  };

  // ESTILOS DE ALTO CONTRASTE
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
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">Ficha de Traslado</h2>
            <p className="text-accent uppercase text-xs tracking-[0.5em] font-medium opacity-80">Luxury Transfer & Security</p>
          </div>

          {alert.show && (
            <div className={`mb-8 p-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs border ${alert.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
              {alert.message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            
            {/* SECCIÓN: LOGÍSTICA */}
            <div className={cardStyle}>
              <h3 className="text-white text-sm font-bold mb-8 flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                <Calendar size={18} className="text-accent" /> Logística Temporal
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className={labelStyle}>Fecha</label>
                  <input type="date" name="fecha" required className={inputStyle} onChange={(e) => handleInputChange('fecha', e.target.value)} />
                </div>
                <div>
                  <label className={labelStyle}>Día</label>
                  <input type="text" name="dia_semana" placeholder="Lunes" className={inputStyle} onChange={(e) => handleInputChange('dia_semana', e.target.value)} />
                </div>
                <div>
                  <label className={labelStyle}>Hora de Inicio</label>
                  <input type="time" name="hora_inicio" required className={inputStyle} onChange={(e) => handleInputChange('hora_inicio', e.target.value)} />
                </div>
              </div>
            </div>

            {/* SECCIÓN: CLIENTE Y PASAJEROS */}
            <div className={cardStyle}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                    <User size={18} className="text-accent" /> Cliente / Contacto
                  </h3>
                  <input type="text" name="cliente_nombre" placeholder="Nombre completo" required className={inputStyle} onChange={(e) => handleInputChange('cliente_nombre', e.target.value)} />
                  <input type="tel" name="cliente_telefono" placeholder="Teléfono (WhatsApp)" required className={inputStyle} onChange={(e) => handleInputChange('cliente_telefono', e.target.value)} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                    <Briefcase size={18} className="text-accent" /> Pasajeros
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="number" name="pasajeros_cantidad" placeholder="Cant. Pax" className={inputStyle} onChange={(e) => handleInputChange('pasajeros_cantidad', e.target.value)} />
                    <input type="text" name="valijas" placeholder="Valijas" className={inputStyle} onChange={(e) => handleInputChange('valijas', e.target.value)} />
                  </div>
                  <input type="text" name="pasajeros_nombres" placeholder="Nombres de acompañantes" className={inputStyle} onChange={(e) => handleInputChange('pasajeros_nombres', e.target.value)} />
                  <input type="text" name="pasajeros_notas" placeholder="Notas (niños/mayores)" className={inputStyle} onChange={(e) => handleInputChange('pasajeros_notas', e.target.value)} />
                </div>
              </div>
            </div>

            {/* SECCIÓN: RUTA */}
            <div className={cardStyle}>
              <h3 className="text-white text-sm font-bold mb-8 flex items-center gap-2 uppercase tracking-widest border-b border-white/5 pb-4">
                <MapPin size={18} className="text-accent" /> Itinerario de Ruta
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="ruta_inicio" placeholder="Punto de Inicio" required className={inputStyle} onChange={(e) => handleInputChange('ruta_inicio', e.target.value)} />
                <input type="text" name="ruta_destino" placeholder="Punto de Destino" required className={inputStyle} onChange={(e) => handleInputChange('ruta_destino', e.target.value)} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" name="vuelo" placeholder="Vuelo a conectar (si aplica)" className={inputStyle} onChange={(e) => handleInputChange('vuelo', e.target.value)} />
                 <div className="flex items-center gap-6 bg-black/40 p-3 rounded-xl border border-white/5 justify-around">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" name="butaca_infantil" className="w-4 h-4 accent-white" onChange={(e) => handleInputChange('butaca_infantil', e.target.checked ? 'Sí' : 'No')} />
                      <span className="text-xs text-gray-400">Butaca Infantil</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" name="cartel_recepcion" className="w-4 h-4 accent-white" onChange={(e) => handleInputChange('cartel_recepcion', e.target.checked ? 'Sí' : 'No')} />
                      <span className="text-xs text-gray-400">Cartel Recepción</span>
                    </label>
                  </div>
              </div>
            </div>

            {/* OBSERVACIONES */}
            <div className="space-y-4">
              <label className={labelStyle}><ClipboardList size={14}/> Otros Detalles / Observaciones</label>
              <textarea name="message" rows={4} className={inputStyle + " resize-none"} placeholder="Indique cualquier detalle adicional importante..." onChange={(e) => handleInputChange('message', e.target.value)} />
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-black py-6 rounded-2xl text-sm font-black uppercase tracking-[0.5em] hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-[0.98]"
            >
              GENERAR FICHA DE TRASLADO
            </button>
            
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contacto;