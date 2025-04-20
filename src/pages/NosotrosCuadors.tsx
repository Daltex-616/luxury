import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const NosotrosCuadors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se ejecuta solo una vez
    threshold: 0.3, // Se dispara cuando el 30% del elemento es visible
  });

  return (
    <section id="nosotros" className="py-20 px-4 bg-secondary/5 section-fade">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Por Qué Elegirnos</h2>
        <div ref={ref} className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: 50000, suffix: "+", text: "Clientes Satisfechos" },
            { number: 100, suffix: "%", text: "Seguridad Garantizada" },
            { number: 24, suffix: "/7", text: "Soporte Disponible" },
            { number: 50, suffix: "+", text: "Vehículos de Lujo" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                    formattingFn={(value) =>
                      stat.number === 24
                        ? `${Math.floor(value)}/7` // Maneja el caso especial de 24/7
                        : stat.number === 100
                        ? `${Math.floor(value)}%` // Maneja el caso especial de 100%
                        : `${Math.floor(value)}${stat.suffix || ""}`
                    }
                  />
                ) : (
                  `0${stat.suffix || ""}`
                )}
              </div>
              <div className="text-text/80">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosCuadors;