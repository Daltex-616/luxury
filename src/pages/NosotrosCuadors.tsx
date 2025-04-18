const NosotrosCuadors = () => {
    return(
        <section id="nosotros" className="py-20 px-4 bg-secondary/5 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Por Qué Elegirnos</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", text: "Clientes Satisfechos" },
              { number: "100%", text: "Seguridad Garantizada" },
              { number: "24/7", text: "Soporte Disponible" },
              { number: "50+", text: "Vehículos de Lujo" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-text/80">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default NosotrosCuadors