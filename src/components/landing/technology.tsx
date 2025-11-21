import Image from 'next/image';
import { CircleCheck } from 'lucide-react';

const features = [
    "Detección temprana de problemas dentales",
    "Imágenes digitales de alta precisión",
    "Plan de tratamiento personalizado",
    "Equipo profesional certificado",
    "Instalaciones modernas y cómodas",
  ];

export function Technology() {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/diagnostics.jpg"
              alt="Tecnología Dental W"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
              unoptimized={true}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-[#28124C]">
              Tecnología de Última Generación
            </h2>
            <p className="text-xl text-gray-600">
              En Clínica Dental W utilizamos el Diagnóstico Digital más avanzado para garantizar tu salud bucal.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CircleCheck className="w-6 h-6 text-[#7649B0] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
