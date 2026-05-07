import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const units = [
  {
    badge: "ESNA INFRA",
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
    sub: "Automação & Robótica",
    desc: "Onde o futuro encontra a execução. Automação industrial, robótica avançada e sistemas integrados para a indústria 4.0.",
    services: [
      { t: "Automação Industrial", body: "Sistemas CLP, SCADA e HMI. Redes industriais Profibus/Profinet." },
      { t: "Robótica & Montagem", body: "Robótica colaborativa, visão computacional e linhas de produção." }
    ]
  },
  {
    badge: "ESNA ENERGY",
    sub: "Elétrica & Sustentabilidade",
    desc: "Energia para a evolução. Engenharia elétrica industrial e sistemas sustentáveis que equilibram potência e responsabilidade.",
    services: [
      { t: "Engenharia Elétrica", body: "Infraestrutura de grande escala, subestações e SPDA." },
      { t: "Sistemas Sustentáveis", body: "Soluções de eficiência energética e redução de impacto ambiental." }
    ]
  },
  {
    badge: "ESNA CORPORATE",
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
        eyebrow="Nossas Frentes"
        title="Quatro unidades. Um ecossistema."
        subtitle="Organizamos nossa expertise em frentes integradas para garantir entrega técnica absoluta em cada disciplina."
      />
      
      {/* UNITS LIST */}
      {units.map((u, i) => (
        <section key={u.badge} className={`section-padding border-b border-border-sutil ${i % 2 === 0 ? "section-white" : "section-surface"}`}>
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-12 md:gap-20">
              <div className="md:col-span-4 flex flex-col gap-6 sticky top-24 h-fit">
                <span className="earmark-tag bg-void text-white self-start">{u.badge}</span>
                <h2 className="text-display text-void">{u.sub}</h2>
                <p className="text-body text-gray-600 leading-relaxed">
                  {u.desc}
                </p>
                <div className="h-px w-24 bg-void/10 mt-4" />
              </div>
              
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                {u.services.map((s) => (
                  <div key={s.t} className="card-surface group hover:bg-white transition-all">
                    <div className="flex flex-col h-full">
                      <h3 className="text-h1 text-void mb-6 group-hover:underline underline-offset-4 decoration-1">{s.t}</h3>
                      <p className="text-body text-gray-500 mb-10 flex-grow">{s.body}</p>
                      <span className="text-[11px] font-bold text-void uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Especificações Técnicas →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section className="section-void section-padding">
        <div className="container-x text-center flex flex-col items-center gap-10">
          <span className="text-caption text-gray-500">Pronto para Integrar?</span>
          <h2 className="text-display text-white max-w-3xl">
            Sua operação merece uma <span className="text-gray-400 italic">Estrutura de Engenharia</span> de alto nível.
          </h2>
          <Link to="/contato" className="btn-palantir-primary bg-white text-void hover:bg-gray-200 px-12">
            Solicitar Proposta Técnica
          </Link>
        </div>
      </section>
    </Layout>
  );
}
