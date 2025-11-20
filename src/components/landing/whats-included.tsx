import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Shield, Calendar } from 'lucide-react';
import { WHATSAPP_PROMO_URL } from '@/lib/constants';

const includedItems = [
  {
    icon: Sparkles,
    title: 'Primera Limpieza',
    description: 'Limpieza dental profesional completa con tecnología ultrasónica de última generación',
    value: '$40.000',
    featured: false,
  },
  {
    icon: Shield,
    title: 'Diagnóstico Digital W',
    description: 'Evaluación completa con tecnología digital para detectar problemas antes de que aparezcan',
    value: '$20.000',
    featured: true,
  },
  {
    icon: Calendar,
    title: 'Segunda Limpieza',
    description: 'Mantén tu sonrisa perfecta con una segunda limpieza en los próximos 3-4 meses',
    value: '$20.000',
    featured: false,
  },
];

export function WhatsIncluded() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#28124C] mb-4">¿Qué Incluye el Plan Dúo?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un paquete completo de prevención dental con tecnología de última generación
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
                  className={`font-semibold text-lg ${
                    item.featured ? 'text-[#B98DFF]' : 'text-[#7649B0]'
                  }`}
                >
                  Valor: {item.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a href={WHATSAPP_PROMO_URL} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform duration-300 hover:scale-105">
                <Card className="inline-block border-2 border-[#7649B0] shadow-lg hover:shadow-2xl">
                    <CardContent className="py-6 px-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-12 h-12 text-[#7649B0]"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        <div className="text-left">
                        <div className="text-sm text-gray-600">Valor Total Real</div>
                        <div className="text-3xl font-bold text-[#28124C]">$80.000</div>
                        </div>
                        <div className="text-4xl font-bold text-gray-300 mx-4 hidden sm:block">→</div>
                        <div className="text-left">
                        <div className="text-sm text-[#7649B0] font-semibold">Precio Black Friday</div>
                        <div className="text-4xl font-bold text-[#7649B0]">$39.990</div>
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
