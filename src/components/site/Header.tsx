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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-accent/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="display text-3xl tracking-[0.2em] text-foreground">ESNA</span>
          <span className="hidden md:inline text-[9px] font-mono uppercase tracking-[0.4em] text-slate mt-1.5 border-l border-accent/30 pl-3">
            Engenharia Integrada
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] font-mono uppercase tracking-[0.25em] transition-all duration-300 ${
                  isActive ? "text-accent font-bold" : "text-slate hover:text-accent"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contato"
          className="hidden md:inline-flex btn-primary"
        >
          Fale com a ESNA
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-accent/10 bg-background h-[calc(100vh-64px)]">
          <div className="container-x py-12 flex flex-col gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-4xl display text-foreground">
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
