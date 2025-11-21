'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { WHATSAPP_PROMO_URL } from '@/lib/constants';
import React from 'react';

export function Hero({ vouchersLeft }: { vouchersLeft: number }) {

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7649B0]/10 via-transparent to-[#B98DFF]/10" />
      <div className="container relative py-12 md:py-20 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-[#28124C] text-white hover:bg-[#28124C]/90 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Black Friday Exclusivo
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-[#28124C]">Plan Dúo de</span>
                <br />
                <span className="text-[#7649B0]">Prevención W</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                2 Limpiezas Dentales Profesionales + Diagnóstico Digital W
              </p>
            </div>
            <div className="flex items-baseline gap-4 flex-wrap">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-[#7649B0]">$39.990</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl text-gray-400 line-through">$80.000</span>
                <Badge variant="destructive" className="w-fit">50% OFF</Badge>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href={WHATSAPP_PROMO_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#7649B0] hover:bg-[#28124C] text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                  Comprar Voucher Ahora
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="https://dentalw.cl/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#7649B0] text-[#7649B0] hover:bg-[#7649B0] hover:text-white text-lg px-8 py-6 w-full">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  dentalw.cl
                </Button>
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#B98DFF]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-600">Vouchers Disponibles</span>
                <Badge variant="destructive">¡Solo {vouchersLeft}!</Badge>
              </div>
              <Progress value={vouchersLeft} className="h-3 [&>*]:bg-gradient-to-r [&>*]:from-[#7649B0] [&>*]:to-[#B98DFF]" />
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[#7649B0] to-[#B98DFF] rounded-3xl transform rotate-3 opacity-20" />
            <Image
              src="/hero-dental.jpg"
              alt="Sonrisa de mujer joven y feliz en clínica dental"
              width={800}
              height={800}
              className="relative rounded-3xl shadow-2xl w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
