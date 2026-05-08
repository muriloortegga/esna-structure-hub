import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-void text-white border-t border-white/5">
      <div className="container-x py-24 grid md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-8">
          <div className="font-display font-medium text-[24px] tracking-tighter uppercase">ESNA</div>
          <p className="text-white/50 text-[14px] leading-relaxed max-w-xs font-light tracking-tight">
            Estruturando operações complexas e integrando sistemas para as instituições mais importantes do setor industrial.
          </p>
          <div className="flex gap-6 text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.3em]">
            <span>BR</span>
            <span>US</span>
            <span>UK</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 font-bold">Unidades</span>
          <ul className="flex flex-col gap-4 text-[14px] font-sans font-light tracking-tight">
            <li><Link to="/energia" className="hover:text-white transition-colors">ESNA Energy</Link></li>
            <li><Link to="/tech" className="hover:text-white transition-colors">ESNA Tech</Link></li>
            <li><Link to="/infraestrutura" className="hover:text-white transition-colors">ESNA Infra</Link></li>
            <li><Link to="/gestao" className="hover:text-white transition-colors">ESNA Gestão</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 font-bold">Institucional</span>
          <ul className="flex flex-col gap-4 text-[14px] font-sans font-light tracking-tight">
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link to="/projetos" className="hover:text-white transition-colors">Impacto</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Carreiras</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Investidores</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 font-bold">Social</span>
          <ul className="flex flex-col gap-4 text-[14px] font-sans font-light tracking-tight">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x py-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[11px] text-white/30 font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} ESNA Engenharia Integrada.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
