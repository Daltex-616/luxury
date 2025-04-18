const Contacto = () => {
    return(
        <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-gray-900/10 to-black/50 section-fade">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado con subtítulo */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Contáctanos
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario y te responderemos lo antes posible.
            </p>
          </div>

          {/* Formulario */}
          <form className="space-y-8" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo Nombre */}
              <div className="relative group">
                <label htmlFor="nombre" className="sr-only">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder=" "
                  required
                  className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
                />
                <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Nombre
                </span>
              </div>

              {/* Campo Email */}
              <div className="relative group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                  className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
                />
                <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Email
                </span>
              </div>
            </div>

            {/* Campo Mensaje */}
            <div className="relative group">
              <label htmlFor="mensaje" className="sr-only">Mensaje</label>
              <textarea
                id="mensaje"
                placeholder=" "
                rows={5}
                required
                className="w-full p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 focus:border-white focus:ring-2 focus:ring-white/10 outline-none transition-all duration-300 peer text-white placeholder-transparent"
              ></textarea>
              <span className="absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-white peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                Mensaje
              </span>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    )
}
export default Contacto