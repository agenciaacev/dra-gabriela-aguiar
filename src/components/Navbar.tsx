import { useEffect, useState } from "react";
// @ts-ignore
import logoBranco from "../assets/logo-text-branco.png";
// @ts-ignore
import logoVerde from "../assets/logo-text-verde.png";
import { WA_LINK } from "../lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-sage/10"
          : "bg-white border-b border-sage/10 lg:bg-transparent lg:backdrop-blur-none lg:border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-5">

        <a
          href="#top"
          className="flex items-center gap-2 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logoVerde} alt="Logo" className="lg:hidden h-[26px] w-auto" />
          <img
            src={scrolled ? logoVerde : logoBranco}
            alt="Logo"
            className="hidden lg:block h-[38px] w-auto transition-opacity duration-300"
          />
        </a>

        <nav className={`hidden lg:flex items-center gap-10 text-sm transition-colors duration-500 ${scrolled ? "text-sage" : "text-white"}`}>
          <a href="#sobre" className="hover:text-sage transition">Sobre</a>
          <a href="#tratamento" className="hover:text-sage transition">Como Funciona</a>
          <a href="#resultados" className="hover:text-sage transition">Resultados</a>
          <a href="#processo" className="hover:text-sage transition">Processo</a>
          <a href="#faq" className="hover:text-sage transition">FAQ</a>
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-[11px] sm:text-[14px] tracking-widest uppercase font-semibold hover:bg-[#1ebe5d] transition rounded-xl"
        >
          Triagem gratuita
          <span aria-hidden>→</span>
        </a>

      </div>
    </header>
  );
}
