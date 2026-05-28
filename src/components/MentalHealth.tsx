const cards = [
  {
    title: "Cortisol crônico",
    body: "Estresse mantém o cortisol alto. Cortisol alto trava o emagrecimento, aumenta a fome por doce e acumula gordura na barriga. Você pode comer pouco e ainda assim não emagrecer.",
  },
  {
    title: "Sono ruim",
    body: "Dormir mal mexe nos hormônios da fome e da saciedade. Resultado: você acorda com fome e termina o dia sem se sentir saciada. Não é falta de força de vontade. É bioquímica.",
  },
  {
    title: "Ansiedade e compulsão",
    body: "A compulsão alimentar não é vício por comida. É um pedido de regulação emocional. Tratar só a alimentação sem tratar a ansiedade é remediar pela metade.",
  },
  {
    title: "Hormônios da mulher",
    body: "Em cada fase da vida — ciclo, pós-parto, pré-menopausa, menopausa — o corpo muda. Não dá pra usar a mesma receita dos 20 aos 40. O plano precisa entender a fase em que você está.",
  },
];

export default function MentalHealth() {
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B2C25 0%, #2F4A3F 50%, #4a6b5c 100%)",
      }}
    >
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(199,211,190,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <span className="eyebrow text-leaf">O que te contaram estava incompleto</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.5rem] text-cream leading-[1.05]">
            O motivo das dietas falharem{" "}
            <em className="italic text-leaf">não está no prato.</em>
          </h2>
          <p className="mt-8 text-cream/75 text-base md:text-lg leading-relaxed max-w-2xl">
            A maior parte dos tratamentos de emagrecimento olha pra calorias e exercício. Só que o seu corpo não é uma planilha. Ele é um sistema vivo, onde mente e metabolismo conversam o tempo todo. Quando essa conversa está desregulada, nenhuma dieta dura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="border border-leaf/30 rounded-2xl bg-sage-dark/40 backdrop-blur-sm p-8 hover:bg-sage-dark/60 transition"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-leaf" />
                <span className="font-display text-xs text-leaf tracking-widest uppercase">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight mb-4">
                {card.title}
              </h3>
              <p className="text-cream/80 leading-relaxed text-[15px]">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="font-display italic text-leaf/90 text-lg md:text-xl leading-snug max-w-2xl mx-auto">
            Por isso o tratamento aqui começa pelo seu corpo inteiro — e não pelo prato.
          </p>
        </div>

      </div>
    </section>
  );
}
