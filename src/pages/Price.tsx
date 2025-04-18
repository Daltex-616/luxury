
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
const Price = () => {
    return(
        <section id="precios" className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">PRECIOS REFERENCIALES</h2>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[#D2C8B5]/30">
            <Table className="w-full">
              <TableHeader className="bg-[#D2C8B5]/10">
                <TableRow>
                  <TableHead className="text-left text-lg font-bold text-[#D2C8B5] py-4 px-6">Servicio</TableHead>
                  <TableHead className="text-right text-lg font-bold text-[#D2C8B5] py-4 px-6">Precio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { route: "Desde CABA hacia Ezeiza", price: "110.000 $" },
                  { route: "Desde CABA (Hotel centro) hacia Aeroparque", price: "70.000 $" },
                  { route: "Desde CABA (Hotel centro) hacia San Fernando", price: "110.000 $" },
                  { route: "Conexión Ezeiza / CABA", price: "120.000 $" },
                  { route: "Hora de disposición", price: "40.000 $" },
                  { route: "Hora de espera", price: "20.000 $" },
                ].map((item, index) => (
                  <TableRow key={index} className="border-t border-[#D2C8B5]/20">
                    <TableCell className="text-left py-4 px-6 text-lg font-medium">{item.route}</TableCell>
                    <TableCell className="text-right py-4 px-6 text-lg font-medium text-[#D2C8B5]">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 text-sm text-[#D2C8B5]/60 text-center">
              Precios referenciales sujetos a cambios de acuerdo a cada requerimiento.
            </div>
          </div>
        </div>
      </section>
    )
}

export default Price;