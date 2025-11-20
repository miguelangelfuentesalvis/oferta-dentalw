import {
  WHATSAPP_PROMO_URL,
  EMAIL_ADDRESS,
  MAILTO_HREF
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#28124C] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-[#B98DFF]">
              Clínica Dental W
            </h3>
            <p className="text-purple-200">Tu sonrisa, nuestra prioridad</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4 text-[#B98DFF]">Contacto</h4>
            <div className="space-y-2 text-purple-200">
              <a
                href={WHATSAPP_PROMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                WhatsApp: +56 9 6788 8588
              </a>
              <a
                href={MAILTO_HREF}
                className="block hover:text-white transition"
              >
                Email: {EMAIL_ADDRESS}
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4 text-[#B98DFF]">Síguenos</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/clinicadentalw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Cl%C3%ADnica-Dental-W/61581809440516/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300 text-sm">
          <p>© 2025 Clínica Dental W. Todos los derechos reservados.</p>
          <a
            href="https://dentalw.cl/politica-de-privacidad/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white mt-2 inline-block"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
