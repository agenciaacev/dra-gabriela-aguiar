export default function MentalHealth() {
  return (
    <section
      id="saude-mental"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B2C25 0%, #2F4A3F 50%, #4a6b5c 100%)",
      }}
    >
      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay pointer-events-none" />
      {/* Orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(199,211,190,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left intro */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <span className="eyebrow text-leaf">Eixo 01 · Saúde mental</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[3.5rem] text-cream leading-[1.05]">
              Saúde mental também é <em className="italic text-leaf">saúde do corpo.</em>
              {" "}E merece ser tratada com profundidade.
            </h2>

            <div className="mt-10 hidden lg:block">
              <div className="h-px w-24 bg-leaf/40 mb-8" />
              <p className="font-display italic text-leaf/90 text-lg leading-snug max-w-sm">
                Não é fraqueza. Não é falta de disciplina. É clínica.
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7 space-y-8 text-cream/85 leading-relaxed text-[15px] md:text-base" data-aos="fade-left" data-aos-delay="200">
            <p>
              Ansiedade, depressão, estresse crônico, falta de foco, baixa
              motivação e sensação constante de esgotamento não devem ser
              vistos como fraqueza ou falta de disciplina. Muitas vezes,
              esses sintomas estão associados a alterações no funcionamento
              cerebral, na qualidade do sono, nos níveis de estresse, no
              metabolismo, nos hábitos e na forma como o organismo responde
              ao ambiente.
            </p>
            <p>
              Dentro dessa abordagem, a Dra. Gabriela Aguiar avalia o paciente
              de forma ampla, considerando não apenas o que ele sente, mas
              também o que pode estar sustentando esses sintomas ao longo do
              tempo.
            </p>
            <p>
              A proposta não é tratar a mente de forma isolada. É compreender
              como o cérebro, o corpo e a rotina estão funcionando juntos e
              de que forma essa interação pode estar contribuindo para o
              desequilíbrio.
            </p>

            {/* EMT card */}
            <div className="mt-12 border border-leaf/30 rounded-2xl bg-sage-dark/40 backdrop-blur-sm p-8" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-leaf" />
                <span className="eyebrow text-leaf">
                  Sobre a Estimulação Magnética Transcraniana
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                EMT, quando indicada
              </h3>
              <p className="mt-4 text-cream/80 leading-relaxed text-[15px]">
                Para casos selecionados, a Estimulação Magnética Transcraniana
                pode fazer parte do plano terapêutico. A EMT é uma tecnologia
                não invasiva que utiliza estímulos magnéticos para modular
                áreas específicas do cérebro relacionadas ao humor, à
                regulação emocional e ao bem-estar. Ela não exige internação,
                não envolve cirurgia e deve ser indicada após avaliação
                médica criteriosa. A decisão sobre sua inclusão no tratamento
                depende do quadro clínico, dos objetivos e da segurança de
                cada paciente.
              </p>
            </div>

            {/* Mini FAQ */}
            <div className="mt-8 space-y-4">
              <details className="border-b border-leaf/20 pb-4 group">
                <summary className="flex items-start justify-between gap-6 py-3 text-cream">
                  <span className="font-display text-lg leading-snug">
                    Já faço tratamento para ansiedade ou depressão. Posso buscar esse acompanhamento?
                  </span>
                  <span className="accordion-icon text-leaf text-2xl leading-none mt-1">+</span>
                </summary>
                <div className="accordion-content text-cream/75 text-[15px] leading-relaxed pt-2">
                  Sim. A avaliação médica é essencial para entender o seu
                  caso com segurança. Nenhuma conduta em andamento deve ser
                  interrompida sem orientação profissional. Quando indicada,
                  a abordagem integrativa pode atuar de forma complementar e
                  personalizada, respeitando seu histórico e seus tratamentos
                  atuais.
                </div>
              </details>
              <details className="border-b border-leaf/20 pb-4 group">
                <summary className="flex items-start justify-between gap-6 py-3 text-cream">
                  <span className="font-display text-lg leading-snug">
                    A EMT é indicada para todos os pacientes?
                  </span>
                  <span className="accordion-icon text-leaf text-2xl leading-none mt-1">+</span>
                </summary>
                <div className="accordion-content text-cream/75 text-[15px] leading-relaxed pt-2">
                  Não. A Estimulação Magnética Transcraniana é avaliada caso
                  a caso e indicada somente quando existe necessidade clínica
                  específica e quando os benefícios são maiores do que os
                  riscos para aquele paciente. A decisão é sempre tomada após
                  avaliação médica completa.
                </div>
              </details>
            </div>

            <div className="pt-6">
              <a
                href="#contato"
                className="btn-primary inline-flex items-center gap-3 bg-cream text-sage px-8 py-4 text-sm tracking-widest uppercase hover:bg-leaf rounded-xl"
              >
                Agendar avaliação de saúde mental
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
