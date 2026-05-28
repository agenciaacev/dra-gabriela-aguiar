import { useEffect, useRef, useState } from "react";
import { WA_LINK } from "../lib/constants";

const steps = [
  {
    title: "Você fala com a equipe pelo WhatsApp.",
    body: "A triagem é gratuita. A gente entende seu momento, suas queixas e o que você já tentou.",
  },
  {
    title: "Agendamento da avaliação clínica.",
    body: "Marcamos sua primeira consulta presencial com a Dra. Gabriela, no consultório em Fortaleza.",
  },
  {
    title: "Avaliação completa, sem pressa.",
    body: "Cerca de 1h. A Dra. investiga histórico, exames, rotina, sono, alimentação, sintomas emocionais e seus objetivos. Sem julgamento.",
  },
  {
    title: "Plano individualizado.",
    body: "Você sai com um caminho claro: o que tratar primeiro, o que pedir de exame, o que ajustar na rotina e quando voltar. Acompanhamento contínuo, com ajustes ao longo do percurso.",
  },
];

const faq = [
  {
    q: "O atendimento é presencial?",
    a: "Sim. Todo o acompanhamento é presencial, no consultório da Dra. em Fortaleza. Não fazemos atendimento online — a avaliação clínica exige a presença pra ser feita com a profundidade que esse cuidado pede.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "Valores e formas de pagamento são apresentados na triagem gratuita pelo WhatsApp, junto com a disponibilidade da agenda.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Cada corpo responde de uma forma. A maioria das pacientes percebe mudanças no seu corpo, ansiedade, sono e disposição já nas primeiras semanas. Emagrecimento sustentável tende a aparecer a partir do segundo mês.",
  },
  {
    q: "E se eu não conseguir seguir o plano direitinho?",
    a: "A gente ajusta. O plano é vivo — feito pra caber na sua vida real, não numa vida ideal. Recaída faz parte. Aqui, ninguém te julga.",
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

        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="eyebrow text-moss">Como funciona</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
              Quatro passos até o{" "}
              <em className="italic text-moss">seu primeiro atendimento.</em>
            </h2>
          </div>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
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
                  <span className="text-moss/40 text-2xl hidden lg:inline">→</span>
                )}
              </div>
              <h3 className="font-display text-xl text-sage leading-tight">{s.title}</h3>
              <p className="mt-4 text-sm text-sage/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
          >
            Começar pela triagem gratuita
            <span aria-hidden>→</span>
          </a>
        </div>

        <div id="faq" className="mt-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4" data-aos="fade-right">
            <span className="eyebrow text-moss">Ainda em dúvida?</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-sage leading-[1.05]">
              As perguntas que mais chegam{" "}
              <em className="italic text-moss">aqui.</em>
            </h2>
            <p className="mt-6 text-sage/75 leading-relaxed text-[15px]">
              Se restar alguma dúvida que não está aqui, fale com a equipe pelo WhatsApp. Atendimento humano e sigiloso.
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
                    <span className="font-display text-xs text-moss pt-1">0{i + 1}</span>
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
