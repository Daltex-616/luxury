import { Car, Clock, Shield, Star, Instagram, MessageSquare, Plane, Map, DollarSign, Smartphone } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
const SliderTestimonios = () => {
    return(
        <section id="testimonios" className="py-20 px-4 section-fade">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "El mejor servicio de transporte que he utilizado. Puntual y profesional.",
                author: "María González",
                role: "Ejecutiva",
                rating: 5
              },
              {
                text: "Impresionante atención al cliente y vehículos de primera clase.",
                author: "Carlos Ruiz",
                role: "Empresario",
                rating: 5
              },
              {
                text: "Servicio confiable y de alta calidad. Totalmente recomendado.",
                author: "Ana Torres",
                role: "Directora",
                rating: 5
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i < testimonial.rating ? "#D2C8B5" : "none"}
                      color={i < testimonial.rating ? "#D2C8B5" : "#D2C8B5"}
                    />
                  ))}
                </div>
                <p className="mb-4 text-text/80">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-text/60 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default SliderTestimonios