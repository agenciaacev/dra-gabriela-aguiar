// @ts-ignore
import logo from "../assets/logo.webp";

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
              <img src={logo} alt="Dra. Gabriela Aguiar" className="h-[50px] w-auto brightness-0 invert opacity-90" />
            </a>
            <p className="mt-3 text-sm leading-relaxed">
              Medicina Integrativa, Saúde Mental, Emagrecimento e Saúde
              Metabólica.
            </p>
          </div>

          <div className="text-sm space-y-2">
            <p className="eyebrow text-leaf mb-4">Navegação</p>
            <a href="#sobre" className="block hover:text-cream transition">Sobre</a>
            <a href="#saude-mental" className="block hover:text-cream transition">Saúde Mental</a>
            <a href="#emagrecimento" className="block hover:text-cream transition">Emagrecimento</a>
            <a href="#processo" className="block hover:text-cream transition">Processo</a>
            <a href="#faq" className="block hover:text-cream transition">FAQ</a>
          </div>

          <div className="text-sm space-y-2">
            <p className="eyebrow text-leaf mb-4">Contato</p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-cream transition"
            >
              WhatsApp
            </a>
            <p>Atendimento sigiloso e humanizado</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Dra. Gabriela Aguiar. Todos os direitos reservados.</p>
          <p>
            Este conteúdo é informativo e não substitui avaliação médica
            individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
}
