'use client';
import { Hero } from '@/components/landing/hero';
import { CountdownBanner } from '@/components/landing/countdown-banner';
import { WhatsIncluded } from '@/components/landing/whats-included';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Technology } from '@/components/landing/technology';
import { Faq } from '@/components/landing/faq';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { FloatingCta } from '@/components/landing/floating-cta';
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [vouchersLeft, setVouchersLeft] = useState(0);

  useEffect(() => {
    // Inicializa con un número "aleatorio" creíble entre 65 y 90 para cada visita
    const initialVouchers = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    setVouchersLeft(initialVouchers);

    // Disminuye el número de vouchers lentamente con el tiempo
    const interval = setInterval(() => {
      setVouchersLeft((prev) => (prev > 10 ? prev - 1 : prev));
    }, 15000); // Reduce 1 voucher cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Hero vouchersLeft={vouchersLeft} />
      <CountdownBanner />
      <WhatsIncluded />
      <HowItWorks />
      <Technology />
      <Faq />
      <Cta vouchersLeft={vouchersLeft} />
      <Footer />
      <FloatingCta />
    </div>
  );
}
