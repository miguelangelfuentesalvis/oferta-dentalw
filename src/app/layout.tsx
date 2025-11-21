import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Black Friday - Clínica Dental W',
  description:
    'Black Friday Clínica Dental W: Plan Dúo de Prevención W por solo $39.990. 2 Limpiezas Dentales + Diagnóstico Digital. ¡Solo 100 vouchers disponibles!',
  icons: {
    icon: { url: '/favicon.ico?v=1', type: 'image/x-icon' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
