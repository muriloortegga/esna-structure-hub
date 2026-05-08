import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const units = [
  {
    badge: "ESNA INFRA",
    id: "infra",
    link: "/infraestrutura",
    sub: "Infraestrutura Integrada",
    desc: "Estruturas técnicas desenvolvidas para sustentar operações com eficiência, organização e capacidade de expansão.",
    services: [
      { t: "Caldeiraria Industrial", body: "Grande e médio porte. Soldagem certificada SMAW/MIG/TIG." },
      { t: "Civil & Manutenção Predial", body: "Construção civil, retrofit e manutenção com foco em performance." },
      { t: "Refrigeração", body: "Projetos e instalação de sistemas industriais e câmaras frias." }
    ]
  },
  {
    badge: "ESNA TECH",
    id: "automacao",
    link: "/tech",
    sub: "Tecnologia & Sistemas",
    desc: "Automação, monitoramento e inteligência aplicada para operações mais conectadas e eficientes.",
    services: [
      { t: "Automação Industrial", body: "Sistemas CLP, SCADA e HMI. Redes industriais Profibus/Profinet." },
      { t: "Robótica & Montagem", body: "Robótica colaborativa, visão computacional e linhas de produção." }
    ]
  },
  {
    badge: "ESNA ENERGY",
    id: "energia",
    link: "/energia",
    sub: "Energia & Potência",
    desc: "Soluções energéticas integradas para operações que dependem de estabilidade, segurança e desempenho contínuo.",
    services: [
      { t: "Engenharia Elétrica", body: "Infraestrutura de grande escala, subestações e SPDA." },
      { t: "Sistemas Sustentáveis", body: "Soluções de eficiência energética e redução de impacto ambiental." }
    ]
  },
  {
    badge: "ESNA GESTÃO",
    id: "gestao",
    link: "/gestao",
    sub: "Planejamento & Gestão",
    desc: "Planejamento, coordenação e controle operacional para garantir previsibilidade e execução consistente.",
    services: [
      { t: "Gestão de Ativos", body: "Governança operacional e gestão estratégica de facilities." },
      { t: "Dados & Inteligência", body: "Transformamos dados operacionais em decisões estratégicas." }
    ]
  },
];

export default function Solucoes() {
  return (
    <Layout>
      <PageHero
        title="Quatro unidades. Um ecossistema."
        subtitle="Organizamos nossa expertise em frentes integradas para garantir entrega técnica absoluta em cada disciplina."
      />
      
      {/* UNITS LIST */}
      {units.map((u, i) => (
        <section id={u.id} key={u.badge} className={`section-padding border-b border-black/5 scroll-mt-[60px] ${i % 2 === 0 ? "section-white" : "section-surface"}`}>
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
              <div className="lg:col-span-4 flex flex-col gap-6 md:sticky md:top-24">
                <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">{u.badge}</span>
                <h2 className="text-[32px] md:text-[56px] text-void tracking-tighter leading-tight">
                  <span className="font-light">{u.sub.split(' ')[0]}</span> <br />
                  <span className="font-bold">{u.sub.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-[16px] md:text-[20px] text-gray-600 leading-relaxed font-light tracking-tight max-w-sm">
                  {u.desc}
                </p>
                <div className="h-px w-24 bg-void/10 mt-4" />
                <Link to={u.link} className="btn-esna-arrow self-start mt-2 group">
                  Visitar Página da Frente <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {u.services.map((s) => (
                  <Link to={u.link} key={s.t} className="card-surface group hover:bg-white transition-all duration-500 p-10 md:p-12 border border-black/5 block">
                    <div className="flex flex-col h-full">
                      <h3 className="text-[20px] md:text-[24px] text-void mb-6 tracking-tighter font-medium group-hover:text-slate transition-colors">{s.t}</h3>
                      <p className="text-[15px] md:text-[16px] text-gray-500 mb-10 flex-grow font-light tracking-tight leading-relaxed">{s.body}</p>
                      <span className="text-[11px] font-bold text-void uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 transition-all font-mono">
                        Detalhes da Frente →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section className="section-void py-32 md:py-48">
        <div className="container-x text-center flex flex-col items-center gap-12">
          <h2 className="text-[32px] md:text-[64px] lg:text-[72px] text-white max-w-4xl tracking-tighter leading-[1.1]">
            Sua operação merece uma <br />
            <span className="font-light text-white/50">Engenharia de alto nível.</span>
          </h2>
          <Link to="/contato" className="btn-esna-primary bg-white text-void hover:bg-slate hover:text-white px-16 py-5 text-[12px] font-mono font-bold uppercase tracking-[0.2em]">
            Solicitar Proposta Técnica
          </Link>
        </div>
      </section>
    </Layout>
  );
}
