import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="bg-[#7649B0] hover:bg-[#28124C] text-white shadow-2xl rounded-full px-8 py-6 animate-bounce">
        <MessageCircle className="mr-2 w-5 h-5" />
        Comprar Ahora
      </Button>
    </div>
  );
}
