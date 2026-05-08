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
      <header className={`w-full transition-all duration-300 ${scrolled ? 'bg-void/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="container-x flex items-center justify-between h-[60px]">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-medium text-[20px] tracking-tighter text-white uppercase">ESNA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[12px] font-sans font-bold uppercase tracking-widest transition-all duration-200 hover:text-white ${isActive ? "text-white" : "text-white/50"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              to="/contato"
              className="hidden md:inline-flex bg-white text-void hover:bg-gray-200 transition-colors py-2 px-6 text-[11px] font-mono font-bold uppercase tracking-widest"
            >
              Comece agora
            </Link>
            <button aria-label="Search" className="hidden md:flex p-2 text-white/50 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="p-2 text-white/50 hover:text-white transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden fixed inset-0 z-[60] bg-void transition-all duration-500 ease-in-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container-x h-full flex flex-col justify-between py-12">
          <div className="flex justify-between items-center h-[60px]">
            <Link to="/" onClick={() => setOpen(false)} className="font-display font-medium text-[20px] tracking-tighter text-white uppercase">ESNA</Link>
            <button onClick={() => setOpen(false)} className="p-2 text-white">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {links.map((l, i) => (
              <NavLink 
                key={l.to} 
                to={l.to} 
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `text-[40px] font-display leading-tight tracking-tighter transition-all duration-300 ${isActive ? "text-white" : "text-white/30 hover:text-white"}`
                }
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-10">
            <Link 
              to="/contato" 
              onClick={() => setOpen(false)}
              className="bg-white text-void py-5 px-8 text-center text-[12px] font-mono font-bold uppercase tracking-[0.2em]"
            >
              Comece agora
            </Link>
            <div className="flex gap-8 text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.3em]">
              <span>LinkedIn</span>
              <span>Instagram</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
