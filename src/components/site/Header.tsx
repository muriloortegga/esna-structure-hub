import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";

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
            Leia a carta do CEO aos acionistas.
          </span>
        </div>
      )}

      {/* NAV BAR */}
      <header className={`w-full transition-all duration-300 ${scrolled ? "bg-void border-b border-white/10" : "bg-gradient-to-b from-black/60 to-transparent"}`}>
        <div className="container-x flex items-center justify-between h-[60px]">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-medium text-[20px] tracking-tight text-white uppercase">ESNA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[14px] font-sans transition-all duration-200 hover:text-white ${isActive ? "text-white font-bold" : "text-gray-300"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contato"
              className="hidden md:inline-flex bg-white text-void hover:bg-gray-200 transition-colors !py-2 !px-6 text-[14px] font-sans font-medium"
            >
              Comece agora
            </Link>
            <button aria-label="Search" className="hidden md:flex p-2 text-white hover:bg-white/10 transition-colors">
              <Search size={20} />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="p-2 text-white hover:bg-white/10 transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-void border-t border-white/10 h-screen overflow-y-auto">
          <div className="container-x py-10 flex flex-col gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="text-[24px] font-display text-white">
                {l.label}
              </NavLink>
            ))}
            <Link to="/contato" className="btn-esna-primary bg-white text-void inline-flex self-start mt-4">
              Comece agora
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
