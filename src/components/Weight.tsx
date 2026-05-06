const accordions = [
  {
    title: "Por que o peso não sai mesmo fazendo o que parece certo",
    subtitle: "Resistência ao emagrecimento tem causas que vão além da dieta",
    body: [
      "O organismo humano é complexo. O ganho de peso e a dificuldade de emagrecer podem estar relacionados a alterações hormonais, inflamação crônica, resistência à insulina, desregulação do sono, estresse cortisol elevado, comportamento alimentar e fatores emocionais que influenciam diretamente a fome, a saciedade e o metabolismo.",
      "Tratar o emagrecimento apenas com restrição calórica sem investigar esses fatores é uma das principais razões pelas quais os resultados não se sustentam. O corpo continua respondendo aos mesmos gatilhos e o efeito sanfona se repete.",
      "A investigação clínica começa por entender o que está por trás da resistência do organismo à mudança.",
    ],
  },
  {
    title: "Compulsão alimentar e relação emocional com a comida",
    subtitle: "Quando a fome não é só física",
    body: [
      "A compulsão alimentar, o comer emocional e a dificuldade de manter uma alimentação equilibrada raramente são questões de falta de informação ou disciplina. Eles estão frequentemente ligados a mecanismos emocionais, ao estresse, à ansiedade, ao sono e ao funcionamento cerebral relacionado à recompensa e ao prazer.",
      "Dentro de uma abordagem integrativa, o comportamento alimentar é avaliado como parte do quadro clínico, não como um problema de caráter. A proposta é reduzir a compulsão, reorganizar a relação com a comida e criar estratégias que o paciente consiga manter sem sofrimento.",
      "Você não precisa viver em guerra com a comida, com a balança ou com o seu corpo.",
    ],
  },
  {
    title: "Efeito sanfona e dificuldade de manter resultados",
    subtitle: "O problema pode não ser a sua força de vontade",
    body: [
      "O efeito sanfona acontece quando o tratamento resolve o sintoma sem modificar os fatores que o sustentam. A pessoa emagrece, mas o metabolismo, os hábitos, o comportamento alimentar e os gatilhos emocionais continuam os mesmos. Quando o tratamento termina, o corpo retorna ao ponto de equilíbrio anterior.",
      "Um acompanhamento integrativo trabalha para que as mudanças aconteçam em múltiplas camadas, metabolismo, comportamento, emoção e rotina, de forma que os resultados tenham mais chances de se sustentar ao longo do tempo.",
    ],
  },
  {
    title: "O que é o emagrecimento integrativo na prática",
    subtitle: "Um plano construído a partir da sua realidade",
    body: [
      "O acompanhamento com a Dra. Gabriela Aguiar não se baseia em dietas prontas ou restrições extremas. O plano é construído a partir dos exames, da rotina, da relação com a comida, da saúde emocional, do sono, da energia e dos sinais que o corpo apresenta.",
      "O objetivo é favorecer um emagrecimento mais consistente, com melhora da saúde, redução da compulsão alimentar, mais consciência sobre o próprio corpo e estratégias que possam ser sustentadas ao longo do tempo. Mais disposição, mais clareza, mais equilíbrio e uma rotina de cuidado que caiba na vida real.",
    ],
  },
];

const faq = [
  {
    q: "E se eu já tentei de tudo e nada funcionou?",
    a: "Quando uma pessoa já tentou vários tratamentos sem resultado duradouro, isso não significa que ela falhou. Pode significar que ainda não foi investigada da forma correta. Muitas abordagens tratam apenas o sintoma aparente sem avaliar o que pode estar por trás dele. A avaliação integrativa busca justamente identificar esses fatores.",
  },
  {
    q: "Terei que passar fome ou viver em restrição?",
    a: "Não é esse o objetivo. O emagrecimento integrativo não tem como proposta gerar sofrimento. A ideia é entender o funcionamento do organismo e criar um plano que favoreça equilíbrio, saciedade, saúde metabólica e constância dentro da sua rotina real.",
  },
];

export default function Weight() {
  return (
    <section id="emagrecimento" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7" data-aos="fade-up">
            <span className="eyebrow text-moss">
              Eixo 02 · Emagrecimento integrativo
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
              Emagrecer com saúde exige mais do que cortar calorias.{" "}
              <em className="italic text-moss">Exige entender o seu metabolismo.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-sage/80 text-base leading-relaxed">
              Quando o emagrecimento é tratado apenas como uma questão de
              força de vontade, o paciente costuma carregar culpa por não
              conseguir manter resultados. Na prática clínica, o ganho de
              peso pode estar relacionado a fatores metabólicos, hormonais,
              emocionais, comportamentais e inflamatórios.
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-1">
          {accordions.map((item, i) => (
            <details
              key={item.title}
              className="group border-t border-sage/20 last:border-b transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <summary className="grid grid-cols-12 gap-6 py-8 md:py-10 items-start hover:bg-leaf/15 px-2 transition">
                <span className="col-span-1 font-display text-sm text-moss pt-2">
                  0{i + 1}
                </span>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-sage leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-sage/60 italic">
                    {item.subtitle}
                  </p>
                </div>
                <span className="col-span-2 md:col-span-1 flex justify-end">
                  <span className="accordion-icon text-3xl text-moss leading-none">+</span>
                </span>
              </summary>
              <div className="accordion-content grid grid-cols-12 gap-6 px-2 pb-10">
                <div className="col-span-1" />
                <div className="col-span-11 md:col-span-9 space-y-4 text-sage/85 leading-relaxed text-[15px]">
                  {item.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Mini FAQ */}
        <div className="mt-20 grid md:grid-cols-2 gap-8" data-aos="fade-up">
          {faq.map((f) => (
            <div
              key={f.q}
              className="bg-bone p-8 md:p-10 border-l-2 border-moss rounded-2xl"
            >
              <h4 className="font-display text-xl text-sage leading-snug">
                {f.q}
              </h4>
              <p className="mt-4 text-sage/80 leading-relaxed text-[15px]">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href="#contato"
            className="btn-primary inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[15px] sm:text-[18px] tracking-widest uppercase hover:bg-[#1ebe5d] rounded-xl"
          >
            Quero começar meu acompanhamento
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
