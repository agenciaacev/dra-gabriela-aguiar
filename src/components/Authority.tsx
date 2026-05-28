import { useEffect, useRef, useState } from "react";
// @ts-ignore
import imgAut from "../assets/img_autho.webp";

const QUOTE =
  '"Não é sua culpa. É um cuidado que você nunca recebeu. Aqui, a gente faz diferente."';

function useTypewriter(text: string, speed = 35) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [started, text, speed]);

  return { displayed, ref, done: displayed.length >= text.length };
}

export default function Authority() {
  const { displayed, ref, done } = useTypewriter(QUOTE);

  return (
    <section id="sobre" className="relative bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* Photo column */}
        <div className="lg:col-span-5" data-aos="fade-right">
          <div className="floaty image-frame relative" style={{ animationDelay: "1s" }}>
            <img
              src={imgAut}
              alt="Dra. Gabriela Amarante"
              className="w-full h-[560px] object-cover grayscale-[0.1] rounded-2xl"
            />
            <div className="floaty absolute -bottom-6 -right-6 bg-sage text-cream px-6 py-5 max-w-[260px] shadow-soft rounded-2xl">
              <p className="font-display italic text-sm leading-snug">
                A gente cuida do corpo de dentro pra fora.
              </p>
            </div>
          </div>

          <div className="mt-12 hidden lg:flex items-center gap-4 text-sage/60">
            <div className="h-px bg-sage/30 flex-1" />
            <span className="eyebrow">CRM-CE/17636</span>
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
          <span className="eyebrow text-moss">Uma palavra de quem atende</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-sage leading-[1.05]">
            O que eu vejo no{" "}
            <em className="italic text-moss">consultório</em>{" "}
            toda semana.
          </h2>

          <div className="mt-10 space-y-6 text-sage/85 leading-relaxed text-[15px] md:text-base max-w-2xl">
            <p>
              Comecei a perceber que as mulheres que chegavam até mim, com ansiedade, compulsão, exaustão, e perdidas no processo. Estavam ali porque ninguém tinha parado pra escutar o corpo inteiro.
            </p>
            <p>
              Quando você me diz <em className="italic">"eu não consigo emagrecer"</em>, o que eu escuto é: o seu cortisol está alto há anos, o seu sono está raso, a sua tireoide pode estar pedindo socorro e a sua relação com a comida virou refúgio porque a vida cobra demais.
            </p>
            <p className="font-medium text-sage">
              Não é sua culpa. É um cuidado que você nunca recebeu.
            </p>
            <p>
              Aqui, a gente faz diferente. A gente cuida do corpo de dentro pra fora.
            </p>
          </div>

          <figure className="mt-12 border-l-2 border-moss pl-6 md:pl-8 max-w-2xl">
            <blockquote
              ref={ref as React.RefObject<HTMLQuoteElement>}
              className="font-display italic text-xl md:text-2xl text-sage leading-snug min-h-[4rem]"
            >
              {displayed}
              {!done && <span className="animate-pulse">|</span>}
            </blockquote>
            <figcaption className="mt-6 text-sage/70 text-sm">
              — Dra. Gabriela Amarante · CRM-CE/17636
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
