// @ts-nocheck
import imgHero from '../assets/img_hero.webp'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 items-stretch min-h-screen">

        {/* RIGHT — foto (order-first no mobile) */}
        <div
          className="relative order-first lg:order-last overflow-hidden"
        >
          {/* No mobile: img com height auto para aparecer inteira */}
          {/* No desktop: absolute fill para preencher a coluna */}
          <img
            src={imgHero}
            alt="Dra. Gabriela Aguiar"
            className="
              block w-full h-auto
              lg:absolute lg:inset-0 lg:h-full lg:object-cover
            "
            style={{ objectPosition: '50% 18%' }}
          />

          {/* degradê esquerda — só no desktop, funde com o painel verde */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-2/5"
            style={{ background: 'linear-gradient(to right, #1B2C25, transparent)' }}
          />
          {/* degradê baixo — desktop e mobile */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 lg:h-1/3"
            style={{ background: 'linear-gradient(to top, #1B2C25, transparent)' }}
          />
          {/* degradê topo — mobile: suaviza transição com o nav */}
          <div
            className="absolute top-0 inset-x-0 h-16 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(27,44,37,0.6), transparent)' }}
          />
        </div>

        {/* LEFT — conteúdo */}
        <div
          className="relative z-10 flex items-center bg-[#1B2C25] px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24"
          
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-leaf/70" />
              <span className="eyebrow text-leaf/80">
                Medicina Integrativa · Saúde Mental · Emagrecimento
              </span>
            </div>

            <h1 className="font-display text-cream text-[2.6rem] sm:text-5xl md:text-6xl leading-[1.06] tracking-tight"
              data-aos="fade-right"
            >
              Cuidar da mente, do metabolismo e do corpo com uma{' '}
              <em className="italic text-leaf font-normal not-italic">
                medicina que enxerga você por inteiro.
              </em>
            </h1>

            <p className="mt-7 text-cream/75 text-base md:text-[17px] leading-relaxed font-light max-w-md" data-aos="fade-right">
              A Dra. Gabriela Aguiar une saúde mental, equilíbrio metabólico e
              emagrecimento em uma abordagem médica personalizada, pensada para
              quem deseja recuperar qualidade de vida com ciência e estratégia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#contato"
                className="btn-primary inline-flex items-center justify-center gap-3 bg-cream text-sage px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-leaf rounded-xl"
              >
                Falar com a equipe no WhatsApp
                <span aria-hidden>→</span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-3 text-cream/70 hover:text-cream text-xs tracking-wider px-2 py-3 transition"
              >
                <span className="w-6 h-px bg-cream/50" />
                Conhecer a abordagem
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-leaf/60 text-[10px] tracking-[0.22em] uppercase">
              <span>Medicina Integrativa</span>
              <span className="text-leaf/25">·</span>
              <span>Saúde Mental</span>
              <span className="text-leaf/25">·</span>
              <span>Emagrecimento</span>
              <span className="text-leaf/25">·</span>
              <span>Saúde Metabólica</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div
          className="h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(199,211,190,0.25) 0%, rgba(199,211,190,0.06) 60%, transparent 100%)',
          }}
        />
      </div>
    </section>
  )
}