import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-void text-white">
      <div className="container-x py-24 grid md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="font-sans font-bold text-[24px] tracking-tight">ESNA</div>
          <p className="text-gray-400 text-[14px] leading-relaxed max-w-xs">
            Construindo software e sistemas para as instituições mais importantes do mundo industrial.
          </p>
          <div className="flex gap-4 text-[11px] font-medium text-gray-500 uppercase tracking-widest">
            <span>BR</span>
            <span>US</span>
            <span>UK</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-nav text-gray-500">Unidades</span>
          <ul className="flex flex-col gap-4 text-[14px]">
            <li><Link to="/solucoes" className="hover:text-gray-300 transition-colors">ESNA Energy</Link></li>
            <li><Link to="/solucoes" className="hover:text-gray-300 transition-colors">ESNA Tech</Link></li>
            <li><Link to="/solucoes" className="hover:text-gray-300 transition-colors">ESNA Infra</Link></li>
            <li><Link to="/solucoes" className="hover:text-gray-300 transition-colors">ESNA Corporate</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-nav text-gray-500">Institucional</span>
          <ul className="flex flex-col gap-4 text-[14px]">
            <li><Link to="/sobre" className="hover:text-gray-300 transition-colors">Sobre Nós</Link></li>
            <li><Link to="/projetos" className="hover:text-gray-300 transition-colors">Impacto</Link></li>
            <li><Link to="/contato" className="hover:text-gray-300 transition-colors">Carreiras</Link></li>
            <li><Link to="/contato" className="hover:text-gray-300 transition-colors">Investidores</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-nav text-gray-500">Social</span>
          <ul className="flex flex-col gap-4 text-[14px]">
            <li><a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Youtube</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors">Github</a></li>
          </ul>
        </div>
      </div>

      <div className="container-x py-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-[12px] text-gray-500">
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
