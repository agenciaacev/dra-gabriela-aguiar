import { WA_LINK } from "../lib/constants";

const testimonials = [
  {
    quote:
      "Pela primeira vez alguém me perguntou como eu dormia antes de me passar uma dieta.",
    author: "M., 38 anos",
  },
  {
    quote:
      "Eu achei que era frescura minha. Era a tireoide e a menopausa. Hoje eu durmo, emagreci e voltei a sorrir.",
    author: "C., 51 anos",
  },
  {
    quote: "Saí da consulta sentindo que ia dar certo. E deu.",
    author: "A., 29 anos",
  },
];

const beforeAfter = [
  { label: "L., 42 anos", detail: "14kg em 7 meses. Sem dieta restritiva." },
  { label: "M., 51 anos", detail: "Menopausa, sono ajustado, 9kg em 5 meses." },
  { label: "C., 36 anos", detail: "Compulsão estabilizada, 11kg em 6 meses." },
];

export default function Weight() {
  return (
    <section id="resultados" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <span className="eyebrow text-moss">Histórias reais</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
            O que muda quando o cuidado{" "}
            <em className="italic text-moss">finalmente é completo.</em>
          </h2>
        </div>

        {/* Before/After placeholders */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {beforeAfter.map((item, i) => (
            <div
              key={item.label}
              className="bg-bone border border-sage/15 rounded-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="h-64 bg-leaf/30 flex items-center justify-center">
                <span className="text-sage/40 text-xs tracking-widest uppercase">
                  Foto autorizada
                </span>
              </div>
              <div className="p-6">
                <p className="font-display text-sage text-lg">{item.label}</p>
                <p className="mt-1 text-sage/70 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="bg-bone p-8 border-l-2 border-moss rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <p className="font-display italic text-sage text-lg leading-snug">
                "{t.quote}"
              </p>
              <p className="mt-4 eyebrow text-moss">{t.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
          >
            Quero começar minha triagem gratuita
            <span aria-hidden>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
