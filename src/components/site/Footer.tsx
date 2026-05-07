import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-x py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="display text-3xl">esna</div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            Engenharia integrada para projetos que exigem precisão, método e alto padrão técnico.
          </p>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="link-underline">Sobre</Link></li>
            <li><Link to="/solucoes" className="link-underline">Soluções</Link></li>
            <li><Link to="/projetos" className="link-underline">Projetos</Link></li>
            <li><Link to="/contato" className="link-underline">Contato</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contato@esna.eng.br</li>
            <li>+55 (00) 0000-0000</li>
            <li>Brasil</li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} ESNA Engenharia. Todos os direitos reservados.</span>
        <span>Estrutura. Clareza. Execução.</span>
      </div>
    </footer>
  );
}
