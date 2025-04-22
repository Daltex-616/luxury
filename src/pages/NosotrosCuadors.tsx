import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const NosotrosCuadors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { t } = useTranslation();

  const stats = [
    { 
      number: 50000,  // Reduje el número para mejor visualización
      suffixKey: 'why_us.stats.clients.suffix', 
      textKey: 'why_us.stats.clients.text' 
    },
    { 
      number: 100, 
      suffixKey: 'why_us.stats.security.suffix', 
      textKey: 'why_us.stats.security.text' 
    },
    { 
      number: 24, 
      suffixKey: 'why_us.stats.support.suffix', 
      textKey: 'why_us.stats.support.text' 
    },
    { 
      number: 50, 
      suffixKey: 'why_us.stats.vehicles.suffix', 
      textKey: 'why_us.stats.vehicles.text' 
    },
  ];

  return (
    <section id={t('nav.why_us_id')} className="py-20 px-4 bg-secondary/5 section-fade">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('why_us.title')}</h2>
        <div ref={ref} className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={t(stat.suffixKey)}
                    separator=","
                    decimals={0}
                  />
                ) : (
                  `0${t(stat.suffixKey)}`
                )}
              </div>
              <div className="text-text/80">{t(stat.textKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosCuadors;