import { Card, CardContent } from '@/components/ui/card';
import { User, Users, PlusCircle } from 'lucide-react';
import { WHATSAPP_PROMO_URL } from '@/lib/constants';

const includedItems = [
  {
    icon: User,
    title: 'Plan 1 Limpieza',
    description: '1 Limpieza dental completa con ultrasonido + Evaluación Digital Gratis.',
    value: '$19.990',
    featured: false,
  },
  {
    icon: Users,
    title: 'Plan 2 Limpiezas',
    description: '2 Limpiezas dentales completas (1 ahora y 1 en 3-4 meses) + Evaluación Digital Gratis.',
    value: '$34.990',
    featured: true,
  },
  {
    icon: PlusCircle,
    title: 'Añade Flúor',
    description: 'Fortalece tu esmalte y previene caries. Válido para cualquier plan.',
    value: '+$4.990',
    featured: false,
  },
];

export function WhatsIncluded() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#28124C] mb-4">¿Qué Incluye el Plan Preventivo?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que más te convenga y dale a tu sonrisa el cuidado que merece con tecnología de punta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {includedItems.map((item, index) => (
            <Card
              key={index}
              className={`flex flex-col gap-6 rounded-xl py-6 shadow-sm hover:shadow-xl transition-shadow ${
                item.featured
                  ? 'border-2 border-[#7649B0] bg-gradient-to-br from-[#7649B0] to-[#28124C] text-white'
                  : 'border-2 border-[#B98DFF] bg-card text-card-foreground'
              }`}
            >
              <CardContent className="px-6 pt-8 pb-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    item.featured ? 'bg-white' : 'bg-[#7649B0]'
                  }`}
                >
                  <item.icon
                    className={`w-8 h-8 ${item.featured ? 'text-[#7649B0]' : 'text-white'}`}
                  />
                </div>
                <h3 className={`text-2xl font-bold ${!item.featured && 'text-[#28124C]'}`}>
                  {item.title}
                </h3>
                <p className={item.featured ? 'text-purple-100' : 'text-gray-600'}>
                  {item.description}
                </p>
                <div
                  className={`font-bold text-3xl ${
                    item.featured ? 'text-white' : 'text-[#7649B0]'
                  }`}
                >
                  {item.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href={WHATSAPP_PROMO_URL} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 hover:scale-105">
                <Card className="inline-block border-2 border-[#7649B0] shadow-lg hover:shadow-2xl">
                    <CardContent className="py-6 px-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="text-left">
                        <div className="text-sm text-gray-600">Plan 1 Limpieza</div>
                        <div className="text-3xl font-bold text-[#28124C]">$19.990</div>
                        </div>
                        <div className="text-4xl font-bold text-gray-300 mx-4 hidden sm:block">+</div>
                        <div className="text-left border-4 border-primary p-4 rounded-xl">
                        <div className="text-sm text-[#7649B0] font-semibold">Plan 2 Limpiezas (¡El más popular!)</div>
                        <div className="text-4xl font-bold text-[#7649B0]">$34.990</div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
            </a>
        </div>
      </div>
    </section>
  );
}
