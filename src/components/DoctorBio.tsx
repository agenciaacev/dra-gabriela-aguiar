// @ts-ignore
import imgAut from "../assets/img_hero.webp";

const seals = [
  "Médica Integrativa",
  "Medicina do Estilo de Vida",
  "Emagrecimento com base clínica",
  "Atendimento individualizado",
];

export default function DoctorBio() {
  return (
    <section className="relative bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="image-frame relative">
              <img
                src={imgAut}
                alt="Dra. Gabriela Amarante"
                className="w-full h-[520px] object-cover grayscale-[0.1] rounded-2xl"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <span className="eyebrow text-moss">Quem vai cuidar de você</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
              Dra. Gabriela Amarante
            </h2>

            <div className="mt-10 space-y-5 text-sage/85 leading-relaxed text-[15px] md:text-base max-w-2xl">
              <p>
                Médica Integrativa. Especializou-se em medicina do estilo de vida e emagrecimento porque viu, no consultório, que tratar só a mente nunca era o suficiente.
              </p>
              <p>
                Hoje atende mulheres em busca de um cuidado que enxergue o corpo inteiro: mente, hormônio, sono, alimentação e história de vida.
              </p>
              <p>
                É esposa do Dr. Gustavo Amarante e mãe da Sofia. Fala de corpo, hormônio e maternidade com a clareza de quem viveu.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
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

            <div className="mt-8 space-y-1 text-sage/60 text-sm">
              <p>CRM-CE/17636</p>
              <p>Atendimento presencial em Fortaleza</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
