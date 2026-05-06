export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background image mantida no CTA final */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep/95 via-sage/90 to-sage-dark/95" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-8 md:inset-16 border border-leaf/20 rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-leaf" />
            <span className="eyebrow text-leaf">O próximo passo é seu</span>
            <span className="w-10 h-px bg-leaf" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05]">
            Você não precisa continuar tentando{" "}
            <em className="italic text-leaf">resolver tudo sozinho.</em>
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-cream/85 text-base md:text-lg leading-relaxed">
            Se o seu corpo não responde como antes, se sua mente parece
            sobrecarregada, se o peso se tornou uma luta constante ou se você
            sente que precisa de um cuidado mais completo, este pode ser o
            momento de olhar para sua saúde com mais profundidade. A medicina
            integrativa permite construir um caminho mais individualizado,
            unindo ciência, escuta e estratégia para cuidar do que você sente,
            do que você vive e do que o seu corpo está tentando comunicar.
          </p>

          <div className="mt-14">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
            >
              Falar com a equipe pelo WhatsApp
              <span aria-hidden>→</span>
            </a>

            <p className="mt-8 text-leaf/70 text-xs tracking-widest uppercase">
              Atendimento sigiloso e humanizado
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-leaf/60 text-[11px] tracking-widest uppercase">
              <span>Medicina Integrativa</span>
              <span className="text-leaf/30">·</span>
              <span>Saúde Mental</span>
              <span className="text-leaf/30">·</span>
              <span>Emagrecimento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
