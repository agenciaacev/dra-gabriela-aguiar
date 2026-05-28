import { WA_LINK } from "../lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep/95 via-sage/90 to-sage-dark/95" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      <div className="absolute inset-8 md:inset-16 border border-leaf/20 rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-leaf" />
            <span className="eyebrow text-leaf">O próximo passo é seu</span>
            <span className="w-10 h-px bg-leaf" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
            Você já tentou sozinha{" "}
            <em className="italic text-leaf">por tempo demais.</em>
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-cream/85 text-base md:text-lg leading-relaxed">
            Se você se reconheceu em alguma parte desta página, esse é o sinal pra começar diferente.
          </p>

          <div className="mt-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
            >
              Iniciar minha triagem gratuita pelo WhatsApp
              <span aria-hidden>→</span>
            </a>

            <p className="mt-8 text-leaf/70 text-xs tracking-widest uppercase">
              Atendimento sigiloso e humanizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
