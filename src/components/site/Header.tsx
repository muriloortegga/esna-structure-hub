import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/sobre", label: "Sobre" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-white/70 backdrop-blur-2xl border-b border-accent/20 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 md:h-28 transition-all duration-700">
        <Link to="/" className="flex flex-col gap-0 group">
          <div className="flex items-center gap-3">
            <span className="display text-4xl md:text-5xl tracking-[0.4em] text-depth">ESNA</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-8 bg-accent/40" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate">
              Engenharia Integrada
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] font-mono uppercase tracking-[0.25em] transition-all duration-300 relative group/link ${
                  isActive ? "text-depth font-bold" : "text-slate hover:text-depth"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-accent transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover/link:w-full"}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link
            to="/contato"
            className="hidden md:inline-flex btn-primary !py-4"
          >
            Fale com a ESNA
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 text-depth"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Accent line that appears when scrolled */}
      <div className={`h-px w-full bg-accent/30 transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      {open && (
        <div className="md:hidden border-t border-accent/10 bg-background h-[calc(100vh-64px)]">
          <div className="container-x py-12 flex flex-col gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-4xl display text-depth">
                <span className="text-accent mr-4 font-mono text-xl">↳</span>
                {l.label}
              </NavLink>
            ))}
            <Link to="/contato" className="btn-primary inline-flex self-start px-12 py-5 mt-10">
              Solicitar proposta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
