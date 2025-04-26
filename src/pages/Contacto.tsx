import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error',
  });
  const [formErrors, setFormErrors] = useState({
    user_name: false,
    user_lastname: false,
    user_email: false,
    message: false,
  });
  const [formData, setFormData] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    message: '',
  });

  const validateForm = () => {
    if (!form.current) return false;

    let isValid = true;
    const newErrors = {
      user_name: false,
      user_lastname: false,
      user_email: false,
      message: false,
    };

    if (!formData.user_name.trim()) {
      newErrors.user_name = true;
      isValid = false;
    }

    if (!formData.user_lastname.trim()) {
      newErrors.user_lastname = true;
      isValid = false;
    }

    if (!formData.user_email.trim() || !/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      newErrors.user_email = true;
      isValid = false;
    }

    if (!formData.message.trim()) {
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
        message: t('contact.form_validation_error'),
        type: 'error',
      });
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setAlert({
              show: true,
              message: t('contact.success_message'),
              type: 'success',
            });
            setFormData({
              user_name: '',
              user_lastname: '',
              user_email: '',
              message: '',
            });
          },
          (error) => {
            setAlert({
              show: true,
              message: t('contact.error_message'),
              type: 'error',
            });
          }
        );
    }
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const handleInputChange = (
    field: keyof typeof formErrors,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  return (
    <section
      id={t('nav.contact_id')}
      className="py-24 px-6 bg-gradient-to-b from-gray-900/10 to-black/50 section-fade"
    >
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
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
                value={formData.user_name}
                onChange={(e) =>
                  handleInputChange('user_name', e.target.value)
                }
                className={`w-full p-4 rounded-lg bg-gray-900/80 border ${
                  formErrors.user_name ? 'border-red-500' : 'border-gray-700/50'
                } focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 text-white`}
              />
              <label
                htmlFor="user_name"
                className={`absolute left-4 pointer-events-none transition-all duration-300 ${
                  formData.user_name
                    ? '-translate-y-7 text-xs text-white'
                    : 'top-4 text-base text-gray-400'
                }`}
              >
                {t('contact.form.first_name')}
              </label>
              {formErrors.user_name && (
                <p className="mt-1 text-sm text-red-500">
                  {t('contact.form_errors.required_field')}
                </p>
              )}
            </div>

            {/* Apellido */}
            <div className="relative group">
              <input
                id="user_lastname"
                type="text"
                name="user_lastname"
                value={formData.user_lastname}
                onChange={(e) =>
                  handleInputChange('user_lastname', e.target.value)
                }
                className={`w-full p-4 rounded-lg bg-gray-900/80 border ${
                  formErrors.user_lastname
                    ? 'border-red-500'
                    : 'border-gray-700/50'
                } focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 text-white`}
              />
              <label
                htmlFor="user_lastname"
                className={`absolute left-4 pointer-events-none transition-all duration-300 ${
                  formData.user_lastname
                    ? '-translate-y-7 text-xs text-white'
                    : 'top-4 text-base text-gray-400'
                }`}
              >
                {t('contact.form.last_name')}
              </label>
              {formErrors.user_lastname && (
                <p className="mt-1 text-sm text-red-500">
                  {t('contact.form_errors.required_field')}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              id="user_email"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={(e) =>
                handleInputChange('user_email', e.target.value)
              }
              className={`w-full p-4 rounded-lg bg-gray-900/80 border ${
                formErrors.user_email ? 'border-red-500' : 'border-gray-700/50'
              } focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 text-white`}
            />
            <label
              htmlFor="user_email"
              className={`absolute left-4 pointer-events-none transition-all duration-300 ${
                formData.user_email
                  ? '-translate-y-7 text-xs text-white'
                  : 'top-4 text-base text-gray-400'
              }`}
            >
              {t('contact.form.email')}
            </label>
            {formErrors.user_email && (
              <p className="mt-1 text-sm text-red-500">
                {!formData.user_email.trim()
                  ? t('contact.form_errors.required_field')
                  : t('contact.form_errors.invalid_email')}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div className="relative group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                handleInputChange('message', e.target.value)
              }
              rows={5}
              className={`w-full p-4 rounded-lg bg-gray-900/80 border ${
                formErrors.message ? 'border-red-500' : 'border-gray-700/50'
              } focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 text-white`}
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-4 top-4 pointer-events-none transition-all duration-300 ${
                formData.message
                  ? '-translate-y-7 text-xs text-white'
                  : 'text-base text-gray-400'
              }`}
            >
              {t('contact.form.message')}
            </label>
            {formErrors.message && (
              <p className="mt-1 text-sm text-red-500">
                {t('contact.form_errors.required_field')}
              </p>
            )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {t('contact.form.submit_button')}
          </button>
        </form>

        {/* Modal de Alerta */}
        {alert.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={closeAlert}
            />
            <div
              className={`relative z-10 w-full max-w-md rounded-xl overflow-hidden transition-all transform animate-slide-up`}
            >
              <div
                className={`p-6 ${
                  alert.type === 'success'
                    ? 'bg-gray-900/95 border-yellow-500'
                    : 'bg-red-900/90 border-red-700'
                } border rounded-xl backdrop-blur-sm`}
              >
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 p-2 rounded-full ${
                      alert.type === 'success'
                        ? 'bg-yellow-500/20'
                        : 'bg-red-700/20'
                    }`}
                  >
                    {alert.type === 'success' ? (
                      <svg
                        className="w-6 h-6 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`text-lg font-medium ${
                        alert.type === 'success'
                          ? 'text-yellow-500'
                          : 'text-red-300'
                      }`}
                    >
                      {alert.type === 'success'
                        ? t('contact.alerts.success')
                        : t('contact.alerts.error')}
                    </h3>
                    <div className="mt-2 text-sm text-gray-300">
                      <p>{alert.message}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-end">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      alert.type === 'success'
                        ? 'text-yellow-500 hover:bg-yellow-500/10'
                        : 'text-red-300 hover:bg-red-800/50'
                    } transition-colors`}
                    onClick={closeAlert}
                  >
                    {t('contact.alerts.close_button')}
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