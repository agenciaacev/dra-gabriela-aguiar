import { useEffect, useState } from "react";
// @ts-ignore
import logo from "../assets/logo1.png";

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

        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Logo" className="h-[35px] w-auto" />
        </a>

        {/* Nav central — só desktop */}
        <nav className={`hidden lg:flex items-center gap-10 text-sm transition-colors duration-500 ${scrolled ? "text-sage" : "text-white"}`}>
          <a href="#sobre" className="hover:text-sage transition">Sobre</a>
          <a href="#saude-mental" className="hover:text-sage transition">Saúde Mental</a>
          <a href="#emagrecimento" className="hover:text-sage transition">Emagrecimento</a>
          <a href="#processo" className="hover:text-sage transition">Processo</a>
          <a href="#faq" className="hover:text-sage transition">Dúvidas</a>
        </nav>

        {/* WhatsApp — desktop e mobile, sempre visível */}
        <a
            href="#contato"
          className="shrink-0 inline-flex items-center gap-2 bg-sage text-cream px-4 py-2 text-[10px] tracking-widest uppercase font-semibold hover:bg-sage-dark transition rounded-xl"
        >
          WhatsApp
          <span aria-hidden>→</span>
        </a>

      </div>
    </header>
  );
}