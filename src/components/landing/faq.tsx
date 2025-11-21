import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: '¿Cuánto tiempo tengo para usar mi voucher?',
    answer: 'Tienes entre 3 y 4 meses desde la fecha de compra para agendar y usar tus limpiezas.',
  },
  {
    question: '¿Puedo regalar este voucher?',
    answer: 'Sí, el voucher es transferible. Es el regalo perfecto para cuidar la sonrisa de tus seres queridos.',
  },
  {
    question: '¿Qué incluye exactamente la Evaluación Gratis?',
    answer: 'Incluye una revisión completa por un profesional, diagnóstico con imágenes digitales, detección de caries y recomendaciones personalizadas.',
  },
  {
    question: '¿Hay costos adicionales?',
    answer: 'El precio de la oferta incluye la limpieza y la evaluación. Puedes añadir flúor por un costo adicional de $4.990 por persona si lo deseas.',
  },
  {
    question: 'Si compro el plan de 2 limpiezas, ¿puedo agendarlas el mismo día?',
    answer: 'No, las limpiezas están diseñadas para mantener tu salud bucal. La segunda se agenda 3 o 4 meses después de la primera.',
  },
];

export function Faq() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#28124C] to-[#7649B0] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#B98DFF]">{faq.question}</h3>
                <p className="text-white/90">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
