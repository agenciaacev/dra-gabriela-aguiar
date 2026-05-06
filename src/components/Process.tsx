import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Você entra em contato pelo WhatsApp",
    body: "Nossa equipe responde com agilidade e agenda sua consulta com a Dra. Gabriela.",
  },
  {
    title: "Avaliação médica completa",
    body: "A Dra. Gabriela investiga queixas, histórico clínico, exames, rotina, sono, alimentação, sintomas emocionais, uso de medicações e objetivos do paciente. Sem pressa, sem julgamento.",
  },
  {
    title: "Plano terapêutico individualizado",
    body: "A partir da avaliação, é definido um plano que pode envolver estratégias de emagrecimento integrativo, acompanhamento metabólico, suporte para saúde mental, orientação alimentar e, quando indicado, tecnologias avançadas como a EMT.",
  },
  {
    title: "Acompanhamento contínuo",
    body: "O paciente não fica sozinho após a consulta. O acompanhamento é pensado para gerar clareza, organização e segurança em cada etapa do tratamento.",
  },
  {
    title: "Ajustes ao longo do caminho",
    body: "O plano é revisado conforme a evolução do paciente, respeitando sua realidade, seus limites e seus objetivos.",
  },
];

const faq = [
  {
    q: "Este acompanhamento é para mim se eu quero apenas emagrecer, sem foco em saúde mental?",
    a: "Sim. O acompanhamento pode ser direcionado conforme a necessidade de cada paciente. Se o objetivo principal é o emagrecimento, o plano é construído com esse foco, considerando os fatores metabólicos, hormonais, comportamentais e alimentares envolvidos.",
  },
  {
    q: "E se eu quero cuidar da saúde mental mas não tenho interesse em emagrecer?",
    a: "Também é indicado. A abordagem integrativa atende pacientes com diferentes objetivos. O plano terapêutico é sempre individualizado conforme as necessidades e os objetivos de cada pessoa.",
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Depende do quadro clínico, do histórico e dos objetivos de cada paciente. Alguns resultados, como mais clareza, menos ansiedade e melhora da energia, podem ser percebidos nas primeiras semanas. Outros, como o emagrecimento consistente, exigem um acompanhamento mais longo e contínuo.",
  },
  {
    q: "Preciso interromper meus tratamentos atuais para começar?",
    a: "Não. Nenhuma conduta em andamento deve ser interrompida sem orientação profissional. A Dra. Gabriela avalia o histórico completo do paciente e constrói um plano que respeita e, quando possível, complementa os tratamentos existentes.",
  },
  {
    q: "O acompanhamento é presencial ou online?",
    a: "Essa informação será confirmada pela equipe no momento do agendamento, conforme a disponibilidade e a necessidade de cada paciente.",
  },
  {
    q: "E se eu não conseguir manter a rotina proposta?",
    a: "O acompanhamento não é construído para uma vida perfeita. Ele precisa caber na vida real. Por isso, as estratégias são pensadas considerando horários, rotina, preferências, limitações e desafios emocionais de cada paciente.",
  },
];

export default function Process() {
  const [floating, setFloating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFloating(true), 900);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="processo" className="relative bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="eyebrow text-moss">O processo</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
              Como funciona o acompanhamento{" "}
              <em className="italic text-moss">com a Dra. Gabriela Aguiar.</em>
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`relative bg-cream p-7 hover:bg-leaf/30 transition group min-h-[280px] flex flex-col rounded-2xl ${floating ? "floaty" : ""}`}
              style={floating ? { animationDelay: `${i * 0.4}s` } : {}}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-5xl text-moss/60 group-hover:text-moss transition">
                  0{i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-moss/40 text-2xl hidden lg:inline">
                    →
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl text-sage leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-sm text-sage/75 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA between */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href="#contato"
            className="btn-primary inline-flex items-center gap-3 bg-sage text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-sage-dark rounded-xl"
          >
            Agendar minha avaliação médica
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* FAQ */}
        <div id="faq" className="mt-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="eyebrow text-moss">FAQ</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-sage leading-[1.05]">
              Dúvidas que chegam{" "}
              <em className="italic text-moss">com frequência.</em>
            </h2>
            <p className="mt-6 text-sage/75 leading-relaxed text-[15px]">
              Se restar alguma dúvida que não está aqui, fale com a equipe pelo
              WhatsApp. Atendimento humano e sigiloso.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-1" data-aos="fade-left" data-aos-delay="200">
            {faq.map((f, i) => (
              <details
                key={f.q}
                className="border-t border-sage/20 last:border-b group"
              >
                <summary className="flex items-start justify-between gap-6 py-6 hover:text-moss transition">
                  <div className="flex gap-4">
                    <span className="font-display text-xs text-moss pt-1">
                      0{i + 1}
                    </span>
                    <h4 className="font-display text-lg md:text-xl text-sage leading-snug">
                      {f.q}
                    </h4>
                  </div>
                  <span className="accordion-icon text-2xl text-moss leading-none mt-1">+</span>
                </summary>
                <div className="accordion-content pl-10 pb-6 text-sage/80 leading-relaxed text-[15px]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
