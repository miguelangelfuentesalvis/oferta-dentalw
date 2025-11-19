import { Clock } from 'lucide-react';

const CountdownItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white text-[#28124C] rounded-lg px-4 py-3 min-w-[70px] text-center">
      <span className="text-3xl font-bold">{value}</span>
    </div>
    <span className="text-sm mt-2 text-[#B98DFF]">{label}</span>
  </div>
);

export function CountdownBanner() {
  return (
    <section className="bg-[#28124C] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8" />
            <span className="text-xl font-semibold">La oferta termina en:</span>
          </div>
          <div className="flex gap-4">
            <CountdownItem value="11" label="Días" />
            <CountdownItem value="13" label="Horas" />
            <CountdownItem value="22" label="Min" />
            <CountdownItem value="17" label="Seg" />
          </div>
        </div>
      </div>
    </section>
  );
}
