const items = [
  {
    title: "Como o estresse e a ansiedade afetam o metabolismo e o peso",
    body: [
      "O estresse crônico eleva os níveis de cortisol, hormônio que, em excesso, favorece o acúmulo de gordura abdominal, aumenta a fome, especialmente por alimentos calóricos, prejudica o sono e compromete a sensibilidade à insulina. A ansiedade, por sua vez, pode intensificar o comportamento compulsivo com a comida e dificultar a adesão a qualquer plano alimentar.",
      "Tratar a ansiedade e o estresse como parte do plano de emagrecimento não é acessório. Em muitos casos, é o que faz a diferença entre resultados que duram e resultados que somem.",
    ],
  },
  {
    title: "Como o sono ruim sabota o emagrecimento e a saúde mental",
    body: [
      "A privação de sono afeta diretamente os hormônios da fome e da saciedade, a grelina e a leptina, aumentando o apetite e reduzindo a sensação de satisfação após as refeições. Além disso, o sono insuficiente compromete o humor, a motivação, o foco e a capacidade de tomar decisões saudáveis ao longo do dia.",
      "Melhorar a qualidade do sono pode ser uma das intervenções mais impactantes tanto para a saúde mental quanto para o controle do peso. Por isso, ele é avaliado como parte central do acompanhamento.",
    ],
  },
  {
    title: "Por que tratar um pilar melhora o outro",
    body: [
      "Cuidar da saúde mental pode ajudar o paciente a ter mais clareza, estabilidade e motivação para cuidar do corpo. Ao mesmo tempo, melhorar o metabolismo, a alimentação, o sono e a disposição pode contribuir para uma mente mais equilibrada.",
      "Esse cuidado integrado permite que o tratamento seja mais completo, mais humano e mais alinhado com a vida real. Não se trata de fazer tudo ao mesmo tempo. Trata-se de entender quais fatores estão se influenciando e por onde começar a mudança com mais inteligência clínica.",
    ],
  },
];

export default function MindMetabolism() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f5f3 0%, #ededea 40%, #e0e8d8 100%)",
      }}
    >
      {/* Decorative organic shapes */}
      <div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(159,179,138,0.25) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(47,74,63,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <span className="eyebrow text-moss">Eixo 03 · A abordagem integrativa</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.75rem] text-sage leading-[1.05]">
            Quando a mente está sobrecarregada,{" "}
            <em className="italic text-moss">o corpo sente.</em>
            <br className="hidden md:block" /> Quando o metabolismo está
            desequilibrado, <em className="italic text-moss">a mente também responde.</em>
          </h2>
          <p className="mt-8 text-sage/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            O diferencial da medicina integrativa está em não separar o
            paciente em partes. Entenda como esses sistemas se conectam.
          </p>
        </div>

        <div className="mt-20 space-y-1">
          {items.map((item, i) => (
            <details
              key={item.title}
              className="group border-t border-sage/20 last:border-b rounded-2xl overflow-hidden bg-cream/70 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <summary className="grid grid-cols-12 gap-6 px-6 md:px-10 py-8 items-start hover:bg-leaf/25 transition">
                <span className="col-span-2 md:col-span-1 font-display text-sm text-moss pt-2">
                  0{i + 1}
                </span>
                <h3 className="col-span-9 md:col-span-10 font-display text-2xl md:text-3xl text-sage leading-tight">
                  {item.title}
                </h3>
                <span className="col-span-1 flex justify-end">
                  <span className="accordion-icon text-3xl text-moss leading-none">+</span>
                </span>
              </summary>
              <div className="accordion-content px-6 md:px-10 pb-10">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-2 md:col-span-1" />
                  <div className="col-span-10 md:col-span-9 space-y-4 text-sage/85 leading-relaxed text-[15px]">
                    {item.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
