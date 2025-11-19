import { CircleCheck, MessageCircle, Calendar, Sparkles } from 'lucide-react';

const steps = [
    {
      icon: CircleCheck,
      title: 'Compra tu Voucher',
      description: 'Adquiere tu Plan Dúo durante el Black Friday (27-30 nov)',
    },
    {
      icon: MessageCircle,
      title: 'Recibe Confirmación',
      description: 'Te enviaremos tu voucher digital por WhatsApp o email',
    },
    {
      icon: Calendar,
      title: 'Agenda tu Cita',
      description: 'Tienes 3-4 meses para agendar tu primera limpieza',
    },
    {
      icon: Sparkles,
      title: 'Disfruta tu Sonrisa',
      description: 'Recibe tu tratamiento y diagnóstico profesional',
    },
  ];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#7649B0]/5 to-[#B98DFF]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#28124C] mb-4">¿Cómo Funciona?</h2>
          <p className="text-xl text-gray-600">Simple, rápido y sin complicaciones</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#7649B0] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="text-[#7649B0] mb-4 mt-4">
                    <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#28124C] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
