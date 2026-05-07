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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* ANNOUNCEMENT BAR */}
      {!scrolled && (
        <div className="announcement-bar">
          <span className="flex items-center gap-2">
            <span className="bg-mint text-depth px-1.5 py-0.5 rounded-sm text-[9px] font-bold">NEW</span>
            ESNA 2025 — Construindo sistemas de engenharia integrados de alta performance →
          </span>
        </div>
      )}

      {/* NAV BAR */}
      <header className={`w-full transition-all duration-300 ${scrolled ? "bg-void/80 backdrop-blur-md border-b border-mint/20" : "bg-transparent"}`}>
        <div className="container-x flex items-center justify-between h-[52px]">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-[20px] tracking-widest text-white uppercase">ESNA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-nav transition-all duration-200 hover:text-white ${isActive ? "text-mint font-bold" : "text-slate"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contato"
              className="hidden md:inline-flex btn-palantir-primary !py-2 !px-4 text-[11px]"
            >
              Falar com Especialista
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 text-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-t border-mint/20 h-screen overflow-y-auto">
          <div className="container-x py-10 flex flex-col gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-[24px] font-display text-white">
                {l.label}
              </NavLink>
            ))}
            <Link to="/contato" className="btn-palantir-primary inline-flex self-start mt-4">
              Falar com Especialista
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
