import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ← Corregido (una "D")
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then((result) => {
          alert('¡Gracias por tu mensaje! Te responderé pronto. - Daltex Federico Zamora');
          if (form.current) form.current.reset();
        }, (error) => {
          alert('Error al enviar. Por favor intenta nuevamente.');
        });
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-gray-900/10 to-black/50 section-fade">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Contáctame
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Escríbeme y te responderé personalmente.
          </p>
        </div>

        {/* Formulario */}
        <form ref={form} onSubmit={sendEmail} className="space-y-8" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="relative group">
              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder=" "
                required
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
              />
              <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Nombre
              </span>
            </div>

            {/* Apellido */}
            <div className="relative group">
              <input
                id="user_lastname"
                type="text"
                name="user_lastname"
                placeholder=" "
                required
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
              />
              <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Apellido
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder=" "
              required
              className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
            />
            <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Email
            </span>
          </div>

          {/* Mensaje */}
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              rows={5}
              required
              className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
            ></textarea>
            <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Tu mensaje
            </span>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;