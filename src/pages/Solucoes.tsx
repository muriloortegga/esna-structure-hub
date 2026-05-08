import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const units = [
  {
    badge: "ESNA INFRA",
    id: "infra",
    link: "/infraestrutura",
    sub: "Civil & Manutenção",
    desc: "Solidez que sustenta o crescimento. Caldeiraria, civil, mecânica industrial, refrigeração e montagem com rigor técnico absoluto.",
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
    sub: "Automação & Robótica",
    desc: "Onde o futuro encontra a execução. Automação industrial, robótica avançada e sistemas integrados para a indústria 4.0.",
    services: [
      { t: "Automação Industrial", body: "Sistemas CLP, SCADA e HMI. Redes industriais Profibus/Profinet." },
      { t: "Robótica & Montagem", body: "Robótica colaborativa, visão computacional e linhas de produção." }
    ]
  },
  {
    badge: "ESNA ENERGY",
    id: "energia",
    link: "/energia",
    sub: "Elétrica & Sustentabilidade",
    desc: "Energia para a evolução. Engenharia elétrica industrial e sistemas sustentáveis que equilibram potência e responsabilidade.",
    services: [
      { t: "Engenharia Elétrica", body: "Infraestrutura de grande escala, subestações e SPDA." },
      { t: "Sistemas Sustentáveis", body: "Soluções de eficiência energética e redução de impacto ambiental." }
    ]
  },
  {
    badge: "ESNA CORPORATE",
    id: "gestao",
    link: "/gestao",
    sub: "Gestão & Dados",
    desc: "A inteligência por trás da operação. Dados, governança, compliance e gestão integrada de ativos e facilities.",
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
            <div className="grid md:grid-cols-12 gap-12 md:gap-20">
              <div className="md:col-span-4 flex flex-col gap-6">
                <span className="earmark-tag bg-void text-white self-start px-2 py-1">{u.badge}</span>
                <h2 className="text-display text-void tracking-tighter">
                  <span className="font-light">{u.sub.split(' ')[0]}</span> <br />
                  <span className="font-bold">{u.sub.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-body text-gray-600 leading-relaxed font-light tracking-tight">
                  {u.desc}
                </p>
                <div className="h-px w-24 bg-void/10 mt-4" />
                <Link to={u.link} className="btn-esna-arrow self-start mt-2">
                  Visitar Página da Frente →
                </Link>
              </div>
              
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                {u.services.map((s) => (
                  <Link to={u.link} key={s.t} className="card-surface group hover:bg-white transition-all p-8 border border-black/10 block">
                    <div className="flex flex-col h-full">
                      <h3 className="text-h1 text-void mb-6 group-hover:underline underline-offset-4 decoration-1 tracking-tighter font-medium">{s.t}</h3>
                      <p className="text-body text-gray-500 mb-10 flex-grow font-light tracking-tight">{s.body}</p>
                      <span className="text-[11px] font-bold text-void uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        Ver Detalhes da Frente →
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
      <section className="section-void section-padding">
        <div className="container-x text-center flex flex-col items-center gap-10">

          <h2 className="text-display text-white max-w-3xl">
            Sua operação merece uma <span className="text-gray-400 italic">Estrutura de Engenharia</span> de alto nível.
          </h2>
          <Link to="/contato" className="btn-esna-primary bg-white text-void hover:bg-gray-200 px-12">
            Solicitar Proposta Técnica
          </Link>
        </div>
      </section>
    </Layout>
  );
}
