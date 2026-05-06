import { useEffect, useRef, useState } from "react";
// @ts-ignore
import imgAut from "../assets/img_autho.webp";

const QUOTE = "“Cada paciente carrega uma história, um corpo e uma forma única de responder ao tratamento. Por isso, cuidar de saúde mental e emagrecimento exige mais do que protocolos prontos. Exige escuta, ciência e individualização.”";

function useTypewriter(text: string, speed = 35) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [started, text, speed]);

  return { displayed, ref, done: displayed.length >= text.length };
}

const stats = [
  { highlight: "Integrativa", label: "Abordagem que une mente, metabolismo e corpo" },
  { highlight: "Individualizada", label: "Plano construído para a realidade de cada paciente" },
  { highlight: "EMT", label: "Tecnologia não invasiva para saúde mental quando indicada" },
  { highlight: "Completo", label: "Do diagnóstico ao acompanhamento contínuo" },
];

const seals = [
  "Medicina Integrativa",
  "Saúde Mental e Metabólica",
  "Emagrecimento com base clínica",
  "Atendimento individualizado",
];

export default function Authority() {
  const { displayed, ref, done } = useTypewriter(QUOTE);

  return (
    <section id="sobre" className="relative bg-cream py-24 md:py-32">
      {/* Top stats bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-y border-sage/15 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-sage/10 overflow-hidden">
          {stats.map((s, i) => (
            <div
              key={s.highlight}
              className="p-6 md:p-8 group hover:bg-leaf/20 transition rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-moss tracking-widest">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-sage/15" />
              </div>
              <h3 className="mt-4 font-display text-2xl md:text-3xl lg:text-3xl text-sage break-words">
                {s.highlight}
              </h3>
              <p className="mt-3 text-sm text-sage/70 leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 md:mt-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Photo column */}
        <div className="lg:col-span-5" data-aos="fade-right">
          <div className="floaty image-frame relative" style={{ animationDelay: '1s' }}>
            <img
              src={imgAut}
              alt="Dra. Gabriela Aguiar"
              className="w-full h-[560px] object-cover grayscale-[0.1] rounded-2xl"
            />
            <div className="floaty absolute -bottom-6 -right-6 bg-sage text-cream px-6 py-5 max-w-[260px] shadow-soft rounded-2xl">
              <p className="font-display italic text-sm leading-snug">
                Cada paciente carrega uma história, um corpo e uma forma única de responder ao tratamento.
              </p>
            </div>
          </div>

          <div className="mt-12 hidden lg:flex items-center gap-4 text-sage/60">
            <div className="h-px bg-sage/30 flex-1" />
            <span className="eyebrow">Quem cuida de você</span>
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
          <span className="eyebrow text-moss">Quem vai cuidar de você</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
            Uma medicina que <em className="italic text-moss">não separa</em> o paciente em partes.
          </h2>

          <div className="mt-10 space-y-6 text-sage/85 leading-relaxed text-[15px] md:text-base max-w-2xl">
            <p>
              A Dra. Gabriela Aguiar atua com medicina integrativa, saúde
              mental, emagrecimento e saúde metabólica, unindo conhecimento
              médico, escuta qualificada e estratégias individualizadas para
              cuidar do paciente de forma completa.
            </p>
            <p>
              Seu olhar clínico parte do princípio de que sintomas físicos e
              emocionais estão conectados, e que um tratamento realmente
              efetivo precisa respeitar a singularidade de cada pessoa. Por
              isso, a abordagem não se limita ao peso, à ansiedade ou a um
              exame isolado. Ela busca compreender o organismo como um todo,
              identificando o que pode estar interferindo no bem-estar, na
              disposição, no equilíbrio emocional e na saúde metabólica.
            </p>
          </div>

          {/* Quote */}
          <figure className="mt-12 border-l-2 border-moss pl-6 md:pl-8 max-w-2xl">
            <blockquote
              ref={ref as React.RefObject<HTMLQuoteElement>}
              className="font-display italic text-xl md:text-2xl text-sage leading-snug min-h-[6rem]"
            >
              {displayed}
              {!done && <span className="animate-pulse">|</span>}
            </blockquote>
            <figcaption className="mt-4 eyebrow text-moss">
              Dra. Gabriela Aguiar
            </figcaption>
          </figure>

          {/* Seals */}
          <div className="mt-14 grid sm:grid-cols-2 gap-3 max-w-2xl">
            {seals.map((seal, i) => (
              <div
                key={seal}
                className="flex items-center gap-3 border border-sage/15 rounded-xl px-4 py-3 hover:border-moss hover:bg-leaf/15 transition"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="w-6 h-6 rounded-full border border-moss flex items-center justify-center text-moss text-[10px]">
                  ✓
                </span>
                <span className="text-sm text-sage">{seal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
