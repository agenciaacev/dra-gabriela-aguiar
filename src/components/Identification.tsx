const dores = [
  'Você acorda cansada, mesmo dormindo "as horas certas".',
  "Você emagrece, recupera, emagrece de novo — e o corpo sempre volta um pouquinho maior.",
  "Você briga com a comida o dia inteiro e ainda se sente culpada à noite.",
  "Você sente que a ansiedade some quando come e volta logo em seguida.",
  "Você entrou na menopausa (ou perto dela) e o corpo virou um estranho.",
  'Você desconfia que tem lipedema, mas todo mundo diz que é "só perder peso".',
  'Você ouviu "é só fechar a boca" tantas vezes que já nem conta mais.',
  "Você sabe, no fundo, que o problema não é falta de esforço. É outra coisa.",
];

export default function Identification() {
  return (
    <section className="relative bg-bone py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl" data-aos="fade-up">
          <span className="eyebrow text-moss">Você não está sozinha</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
            Você já tentou de tudo.{" "}
            <em className="italic text-moss">
              E mesmo assim continua naquele mesmo lugar.
            </em>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl">
          {dores.map((q, i) => (
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

        <div className="mt-20 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-block">
            <div className="h-px w-16 bg-moss mx-auto mb-8" />
            <p className="font-display italic text-xl md:text-2xl text-sage leading-relaxed">
              Não é fraqueza. Não é preguiça. Não é falta de disciplina.{" "}
              <em className="not-italic underline decoration-moss decoration-2 underline-offset-4">
                É clínica — e tem nome.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
