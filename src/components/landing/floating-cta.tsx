import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';
import { WHATSAPP_PROMO_URL } from '@/lib/constants';

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href={WHATSAPP_PROMO_URL} target="_blank" rel="noopener noreferrer">
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl rounded-full px-6 py-6 animate-bounce text-base">
          <CalendarCheck className="mr-2 w-5 h-5" />
          Quiero mi Evaluación Sin Prisas
        </Button>
      </a>
    </div>
  );
}
