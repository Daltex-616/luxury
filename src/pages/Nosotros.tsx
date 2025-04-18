import { Separator } from "@/components/ui/separator";

const Nosotros = () => {
    return (
    <section id="quienes-somos" className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">¿QUIÉNES SOMOS?</h2>
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-3xl border border-[#D2C8B5]/30">
            <p className="text-xl mb-8 text-[#D2C8B5]/90">
              Somos un equipo de profesionales con más de 22 años de experiencia en custodia y seguridad VIP, así como, en la resolución y manejo de viajes ejecutivos.
            </p>
            <Separator className="my-8 bg-[#D2C8B5]/20" />
            <p className="text-xl text-[#D2C8B5]/90">
              Nos destacamos por nuestra atención personalizada, nuestra dedicación y nuestros vehículos exclusivos de alta gama que garantizan un traslado de lujo y confort inigualable.
            </p>
          </div>
        </div>
      </section>
    )
}

export default Nosotros;