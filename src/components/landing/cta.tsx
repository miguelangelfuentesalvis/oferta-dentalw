import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { WHATSAPP_PROMO_URL } from '@/lib/constants';

export function Cta({ vouchersLeft }: { vouchersLeft: number }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-primary to-[#28124C] rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¡No Pierdas Esta Oportunidad!
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Solo quedan <span className="font-bold text-2xl md:text-3xl text-white">{vouchersLeft}</span> vouchers disponibles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_PROMO_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 shadow-xl">
                Quiero mi Evaluación Sin Prisas
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </a>
          </div>
          <p className="text-sm mt-8 text-purple-200">
            Oferta válida del 24 de Noviembre al 3 de Diciembre de 2025
          </p>
        </div>
      </div>
    </section>
  );
}
