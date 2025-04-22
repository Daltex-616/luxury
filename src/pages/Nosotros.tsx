import { Separator } from "@/components/ui/separator";
import { useTranslation } from 'react-i18next';

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <section id={t('nav.about_id')} className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16">{t('about.title')}</h2>
        <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border border-[#D2C8B5]/30">
          <p className="text-xl mb-8 text-[#D2C8B5]/90">
            {t('about.description1')}
          </p>
          <Separator className="my-8 bg-[#D2C8B5]/20" />
          <p className="text-xl text-[#D2C8B5]/90">
            {t('about.description2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros;