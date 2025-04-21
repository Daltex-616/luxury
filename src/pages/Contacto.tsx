import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  });
  const [formErrors, setFormErrors] = useState({
    user_name: false,
    user_lastname: false,
    user_email: false,
    message: false
  });

  const validateForm = () => {
    if (!form.current) return false;

    const inputs = form.current.elements;
    let isValid = true;
    const newErrors = {
      user_name: false,
      user_lastname: false,
      user_email: false,
      message: false
    };

    // Validar cada campo
    const nameInput = inputs.namedItem('user_name') as HTMLInputElement;
    if (!nameInput.value.trim()) {
      newErrors.user_name = true;
      isValid = false;
    }

    const lastnameInput = inputs.namedItem('user_lastname') as HTMLInputElement;
    if (!lastnameInput.value.trim()) {
      newErrors.user_lastname = true;
      isValid = false;
    }

    const emailInput = inputs.namedItem('user_email') as HTMLInputElement;
    if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
      newErrors.user_email = true;
      isValid = false;
    }

    const messageInput = inputs.namedItem('message') as HTMLTextAreaElement;
    if (!messageInput.value.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setAlert({
        show: true,
        message: 'Por favor completa todos los campos correctamente.',
        type: 'error'
      });
      return;
    }

    if (form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then((result) => {
          setAlert({
            show: true,
            message: '¡Gracias por tu mensaje! Te responderé pronto. - Luxry Transfer',
            type: 'success'
          });
          if (form.current) form.current.reset();
        }, (error) => {
          setAlert({
            show: true,
            message: 'Error al enviar. Por favor intenta nuevamente.',
            type: 'error'
          });
        });
    }
  };

  const closeAlert = () => {
    setAlert(prev => ({ ...prev, show: false }));
  };

  // Función para manejar el cambio en los inputs y limpiar el error
  const handleInputChange = (field: keyof typeof formErrors) => {
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: false }));
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
                onChange={() => handleInputChange('user_name')}
                className={`w-full p-4 rounded-lg bg-gray-900/80 border ${formErrors.user_name ? 'border-red-500' : 'border-gray-700/50'} focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent`}
              />
              <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Nombre
              </span>
              {formErrors.user_name && (
                <p className="mt-1 text-sm text-red-500">Este campo es requerido</p>
              )}
            </div>

            {/* Apellido */}
            <div className="relative group">
              <input
                id="user_lastname"
                type="text"
                name="user_lastname"
                placeholder=" "
                required
                onChange={() => handleInputChange('user_lastname')}
                className={`w-full p-4 rounded-lg bg-gray-900/80 border ${formErrors.user_lastname ? 'border-red-500' : 'border-gray-700/50'} focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent`}
              />
              <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Apellido
              </span>
              {formErrors.user_lastname && (
                <p className="mt-1 text-sm text-red-500">Este campo es requerido</p>
              )}
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
              onChange={() => handleInputChange('user_email')}
              className={`w-full p-4 rounded-lg bg-gray-900/80 border ${formErrors.user_email ? 'border-red-500' : 'border-gray-700/50'} focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent`}
            />
            <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Email
            </span>
            {formErrors.user_email && (
              <p className="mt-1 text-sm text-red-500">
                {form.current && !(form.current.elements.namedItem('user_email') as HTMLInputElement)?.value.trim() 
                  ? 'Este campo es requerido' 
                  : 'Por favor ingresa un email válido'}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              rows={5}
              required
              onChange={() => handleInputChange('message')}
              className={`w-full p-4 rounded-lg bg-gray-900/80 border ${formErrors.message ? 'border-red-500' : 'border-gray-700/50'} focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent`}
            ></textarea>
            <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Tu mensaje
            </span>
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-500">Este campo es requerido</p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Modal de Alerta */}
        {alert.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
              onClick={closeAlert}
            />
            
            <div className={`relative z-10 w-full max-w-md rounded-xl overflow-hidden transition-all transform animate-slide-up`}>
              <div className={`p-6 ${alert.type === 'success' ? 'bg-gray-900/95 border-yellow-500' : 'bg-red-900/90 border-red-700'} border rounded-xl backdrop-blur-sm`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-2 rounded-full ${alert.type === 'success' ? 'bg-yellow-500/20' : 'bg-red-700/20'}`}>
                    {alert.type === 'success' ? (
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-medium ${alert.type === 'success' ? 'text-yellow-500' : 'text-red-300'}`}>
                      {alert.type === 'success' ? 'Éxito' : 'Error'}
                    </h3>
                    <div className="mt-2 text-sm text-gray-300">
                      <p>{alert.message}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium ${alert.type === 'success' ? 'text-yellow-500 hover:bg-yellow-500/10' : 'text-red-300 hover:bg-red-800/50'} transition-colors`}
                    onClick={closeAlert}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contacto;