// @ts-ignore
import logo from "../assets/logo-sib-branco.png";
import { WA_LINK, CONTACT } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-sage-deep text-cream/70 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 items-start">

          <div>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src={logo}
                alt="Dra. Gabriela Amarante"
                className="h-[80px] w-auto opacity-90"
              />
            </a>
            <p className="mt-3 text-sm leading-relaxed">
              Medicina do estilo de vida. Emagrecimento cuidando do corpo de dentro pra fora.
            </p>
            <p className="mt-2 text-xs text-cream/50">{CONTACT.crm}</p>
          </div>

          <div className="text-sm space-y-2">
            <p className="eyebrow text-leaf mb-4">Navegação</p>
            <a href="#sobre" className="block hover:text-cream transition">Sobre</a>
            <a href="#tratamento" className="block hover:text-cream transition">Como funciona o tratamento</a>
            <a href="#resultados" className="block hover:text-cream transition">Resultados</a>
            <a href="#processo" className="block hover:text-cream transition">Processo</a>
            <a href="#faq" className="block hover:text-cream transition">FAQ</a>
          </div>

          <div className="text-sm space-y-3">
            <p className="eyebrow text-leaf mb-4">Contato</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-cream transition"
            >
              WhatsApp: {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block hover:text-cream transition break-all"
            >
              {CONTACT.email}
            </a>
            <p className="leading-relaxed text-cream/50 text-xs">
              {CONTACT.address}
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Dra. Gabriela Amarante. Todos os direitos reservados.</p>
          <p>
            Este conteúdo é informativo e não substitui avaliação médica individualizada. Resultados variam de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
