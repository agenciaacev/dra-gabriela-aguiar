const questions = [
  "Você sente uma ansiedade que parece não passar, mesmo quando tenta controlar?",
  "A falta de energia e o cansaço constante estão presentes mesmo depois de dormir?",
  "Você já tentou emagrecer várias vezes mas vive no efeito sanfona?",
  "A relação com a comida gera culpa, compulsão ou sensação de descontrole?",
  "Seu foco, motivação e disposição estão comprometidos no dia a dia?",
  "Você sente que o corpo não responde mais como antes, mesmo fazendo o que considera certo?",
  "Já tentou diferentes tratamentos mas ainda não encontrou uma resposta que realmente funcione?",
  "O estresse, o humor e o sono estão afetando a sua qualidade de vida de forma constante?",
];

export default function Identification() {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="eyebrow text-moss">Os sinais</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
            Seu corpo e sua mente estão{" "}
            <em className="italic text-moss">mandando sinais.</em>{" "}
            Não normalize.
          </h2>
          <p className="mt-8 text-sage/75 text-base md:text-lg leading-relaxed max-w-2xl">
            Muitas pessoas chegam ao consultório depois de anos tentando
            resolver esses sintomas separadamente, sem encontrar uma resposta
            consistente.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl">
          {questions.map((q, i) => (
            <div
              key={i}
              className="group flex gap-5 py-6 border-b border-sage/15 hover:border-moss transition"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <span className="font-display text-sm text-moss pt-1 min-w-[2rem]">
                0{i + 1}
              </span>
              <p className="text-sage/90 leading-relaxed text-[15px] md:text-base group-hover:text-sage transition">
                {q}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          className="mt-20 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <div className="inline-block">
            <div className="h-px w-16 bg-moss mx-auto mb-8" />
            <p className="font-display italic text-xl md:text-2xl text-sage leading-relaxed">
              Isso acontece porque saúde mental e metabolismo conversam entre
              si. Talvez você não precise de mais tentativas. Talvez precise
              de um cuidado que <em className="not-italic underline decoration-moss decoration-2 underline-offset-4">finalmente olhe para a causa.</em>
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#contato"
              className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
            >
              Quero entender o que está acontecendo comigo
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
