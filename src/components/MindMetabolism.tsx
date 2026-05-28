"use client";

import { WA_LINK } from "../lib/constants";

const pillars = [
  {
    n: "01",
    title: "Investigação completa",
    body: "Exames, histórico, rotina, sono, comportamento alimentar e fase de vida — tudo avaliado junto, sem separar o corpo em partes.",
  },
  {
    n: "02",
    title: "Plano individualizado",
    body: "Nenhuma dieta pronta. Um plano clínico construído a partir do que o seu corpo específico precisa, respeitando a sua rotina real.",
  },
  {
    n: "03",
    title: "Acompanhamento contínuo",
    body: "O plano é ajustado conforme você evolui. A gente não some depois da primeira consulta — acompanhamento com ajustes ao longo do percurso.",
  },
];

export default function MindMetabolism() {
  return (
    <section
      id="tratamento"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f5f3 0%, #ededea 40%, #e0e8d8 100%)",
      }}
    >
      <div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(159,179,138,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(47,74,63,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <span className="eyebrow text-moss">A abordagem</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.75rem] text-sage leading-[1.05]">
            Emagrecimento com um{" "}
            <em className="italic text-moss">olhar Integrativo</em>
          </h2>
          <p className="mt-10 text-sage/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            A gente investiga o que está sustentando o ganho de peso: metabolismo, hormônios, inflamação, sono, comportamento alimentar e a fase de vida em que você está. A partir dessa leitura, montamos um plano clínico que respeita o seu corpo — e que cabe na sua rotina.
          </p>

          <div className="mt-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
            >
              Quero entender o que se aplica ao meu caso
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((item, i) => (
            <div
              key={item.n}
              className="bg-cream/70 backdrop-blur-sm border border-sage/20 rounded-2xl p-8 hover:border-moss hover:bg-leaf/15 transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <span className="font-display text-4xl text-moss/50">{item.n}</span>
              <h3 className="mt-4 font-display text-xl text-sage leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sage/75 text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
