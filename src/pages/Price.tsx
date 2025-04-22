import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useTranslation } from 'react-i18next';

const Price = () => {
  const { t } = useTranslation();

  const pricingData = [
    { routeKey: 'pricing.routes.caba_ezeiza', priceKey: 'pricing.prices.caba_ezeiza' },
    { routeKey: 'pricing.routes.caba_aeroparque', priceKey: 'pricing.prices.caba_aeroparque' },
    { routeKey: 'pricing.routes.caba_san_fernando', priceKey: 'pricing.prices.caba_san_fernando' },
    { routeKey: 'pricing.routes.connection_ezeiza_caba', priceKey: 'pricing.prices.connection_ezeiza_caba' },
    { routeKey: 'pricing.routes.hourly_service', priceKey: 'pricing.prices.hourly_service' },
    { routeKey: 'pricing.routes.waiting_hour', priceKey: 'pricing.prices.waiting_hour' }
  ];

  return (
    <section id={t('nav.pricing_id')} className="py-20 px-4 bg-[#1A1F2C] text-white section-fade">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16">{t('pricing.title')}</h2>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-[#D2C8B5]/30">
          <Table className="w-full">
            <TableHeader className="bg-[#D2C8B5]/10">
              <TableRow>
                <TableHead className="text-left text-lg font-bold text-[#D2C8B5] py-4 px-6">
                  {t('pricing.table_header.service')}
                </TableHead>
                <TableHead className="text-right text-lg font-bold text-[#D2C8B5] py-4 px-6">
                  {t('pricing.table_header.price')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((item, index) => (
                <TableRow key={index} className="border-t border-[#D2C8B5]/20">
                  <TableCell className="text-left py-4 px-6 text-lg font-medium">
                    {t(item.routeKey)}
                  </TableCell>
                  <TableCell className="text-right py-4 px-6 text-lg font-medium text-[#D2C8B5]">
                    {t(item.priceKey)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="p-4 text-sm text-[#D2C8B5]/60 text-center">
            {t('pricing.disclaimer')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;