'use client';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white text-[#28124C] rounded-lg px-4 py-3 min-w-[70px] text-center">
      <span className="text-3xl font-bold">{value}</span>
    </div>
    <span className="text-sm mt-2 text-[#B98DFF]">{label}</span>
  </div>
);

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date('2025-11-30T23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient || !timeLeft) {
    return (
       <section className="bg-[#28124C] text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <span className="text-xl font-semibold">Cargando oferta...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const isOfferOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="bg-[#28124C] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8" />
            <span className="text-xl font-semibold">
              {isOfferOver ? 'La oferta ha terminado' : 'La oferta termina en:'}
            </span>
          </div>
          {!isOfferOver && (
            <div className="flex gap-4">
              <CountdownItem value={String(timeLeft.days).padStart(2, '0')} label="Días" />
              <CountdownItem value={String(timeLeft.hours).padStart(2, '0')} label="Horas" />
              <CountdownItem value={String(timeLeft.minutes).padStart(2, '0')} label="Min" />
              <CountdownItem value={String(timeLeft.seconds).padStart(2, '0')} label="Seg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
