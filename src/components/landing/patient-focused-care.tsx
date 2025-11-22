import Image from 'next/image';
import { Eye, MapPin, Smile } from 'lucide-react';

const features = [
    {
      icon: Eye,
      title: "Entendimiento Total",
      description: "Nos tomamos el tiempo de explicarte tu salud con espejo en mano, para que te sientas seguro."
    },
    {
      icon: MapPin,
      title: "Tu Dentista de Cabecera",
      description: "En Puerto Varas, Alerce, Cardonal y Outlet somos tus vecinos. Aquí no eres un número."
    },
    {
      icon: Smile,
      title: "Garantía de Comodidad",
      description: "Ambiente relajado y cálido. Diseñamos nuestra atención para que pierdas el miedo."
    }
  ];

export function PatientFocusedCare() {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
             <div className="absolute inset-0 bg-gradient-to-br from-[#7649B0] to-[#B98DFF] rounded-3xl transform -rotate-3 opacity-20" />
            <Image
              src="/patient-care.png"
              alt="Dentista explicando procedimiento a paciente"
              width={800}
              height={600}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#28124C]">
              Una Atención Pensada Para Ti
            </h2>
            <p className="text-xl text-gray-600">
              Más allá de la tecnología, creemos en el poder de una atención humana, cercana y transparente.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#7649B0] text-white rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#28124C]">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
