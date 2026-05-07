import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-accent/10">
      <div className="container-x py-20 grid md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <div className="display text-4xl text-foreground">ESNA</div>
          <p className="mt-6 text-slate max-w-sm text-sm leading-relaxed font-ui">
            Engenharia integrada para projetos que exigem precisão, método e alto padrão técnico.
          </p>
        </div>
        <div>
          <ul className="space-y-4">
            <li><Link to="/sobre" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate hover:text-accent transition-colors">Sobre</Link></li>
            <li><Link to="/solucoes" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate hover:text-accent transition-colors">Soluções</Link></li>
            <li><Link to="/projetos" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate hover:text-accent transition-colors">Projetos</Link></li>
            <li><Link to="/contato" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate hover:text-accent transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
            <li className="text-accent font-bold">↳ Contato</li>
            <li>contato@esna.eng.br</li>
            <li>(13) 98123-6332</li>
            <li>Brasil</li>
          </ul>
        </div>
      </div>
      <div className="container-x py-8 border-t border-accent/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-slate/60">
        <span>© {new Date().getFullYear()} ESNA Engenharia Integrada.</span>
        <span className="text-accent/80">Precisão que sustenta grandes operações.</span>
      </div>
    </footer>
  );
}
