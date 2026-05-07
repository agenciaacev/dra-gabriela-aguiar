// @ts-nocheck
import imgHero1 from '../assets/imgidhero1.webp'
import imgHero2 from '../assets/imgidhero2.webp'

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
          
          {/* Mobile image */}
          <img
            src={imgHero1}
            alt="Dra. Gabriela Aguiar"
            className="
              lg:hidden block w-full h-auto
            "
            style={{ objectPosition: '50% 18%' }}
          />

          {/* Desktop image */}
          <img
            src={imgHero2}
            alt="Dra. Gabriela Aguiar"
            className="
              hidden lg:block w-full h-auto
              lg:absolute lg:inset-0 lg:h-full lg:object-cover
            "
            style={{ objectPosition: '50% 18%' }}
          />

          {/* degradê esquerda — só no desktop, funde com o painel verde */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-2/5"
            style={{ background: 'linear-gradient(to right, #9fb38a, transparent)' }}
          />
          {/* degradê baixo — desktop e mobile */}
          <div
            className="absolute bottom-0 inset-x-0 h-40 lg:h-1/3"
            style={{ background: 'linear-gradient(to top, #9fb38a, transparent)' }}
          />
          {/* degradê topo — mobile: suaviza transição com o nav */}
          <div
            className="absolute top-0 inset-x-0 h-16 lg:hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(159,179,138,0.6), transparent)' }}
          />
        </div>

        {/* LEFT — conteúdo */}
        <div
          className="relative z-10 flex items-center lg:bg-[#9fb38a] px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24 -mt-72 lg:mt-0"
        >
          {/* degradê topo — mobile: funde conteúdo com a foto */}
          <div
            className="absolute inset-0 lg:hidden pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, #9fb38a 7rem)' }}
          />

          <div className="relative max-w-xl">
            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-8 h-px bg-cream/70" />
              <span className="eyebrow text-cream">
                Medicina Integrativa · Saúde Mental · Emagrecimento
              </span>
            </div>

            <h1 className="font-display text-sage text-[2.6rem] sm:text-5xl md:text-6xl leading-[1.06] tracking-tight"
              data-aos="fade-right"
            >
              Cuidar da mente, do metabolismo e do corpo com uma{' '}
              <em className="italic text-cream font-normal">
                medicina que enxerga você por inteiro.
              </em>
            </h1>

            <p className="mt-7 text-cream text-base md:text-[17px] leading-relaxed font-light max-w-md" data-aos="fade-right">
              A Dra. Gabriela Aguiar une saúde mental, equilíbrio metabólico e
              emagrecimento em uma abordagem médica personalizada, pensada para
              quem deseja recuperar qualidade de vida com ciência e estratégia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#contato"
                className="btn-primary inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[13px] sm:text-[16px] tracking-widest uppercase font-semibold hover:bg-[#1ebe5d] rounded-xl"
              >
                Falar com a equipe no WhatsApp
                <span aria-hidden>→</span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-3 text-cream hover:text-cream/80 text-xs tracking-wider px-2 py-3 transition"
              >
                <span className="w-6 h-px bg-cream" />
                Conhecer a abordagem
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-cream/80 text-[10px] tracking-[0.22em] uppercase">
              <span>Medicina Integrativa</span>
              <span className="text-cream/40">·</span>
              <span>Saúde Mental</span>
              <span className="text-cream/40">·</span>
              <span>Emagrecimento</span>
              <span className="text-cream/40">·</span>
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