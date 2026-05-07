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
      
      <section className="container-x pb-48">
        <div className="space-y-32">
          {units.map((u) => (
            <div key={u.badge} className="grid md:grid-cols-12 gap-16 relative">
              <div className="md:col-span-4 space-y-8">
                <span className="earmark block">{u.badge}</span>
                <h2 className="display text-4xl text-depth leading-tight">{u.sub}</h2>
                <p className="text-slate font-ui leading-relaxed">{u.desc}</p>
                <div className="rule-thin w-24" />
              </div>
              <div className="md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-8">
                {u.services.map((s) => (
                  <div key={s.t} className="service-card group">
                    <h3 className="display text-2xl text-depth mb-4 group-hover:text-accent transition-colors">{s.t}</h3>
                    <p className="text-sm text-slate font-ui leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* METODOLOGIA BREVE */}
        <div className="mt-48 bg-depth text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 pattern-rects opacity-10 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="earmark !text-mint mb-8 block">Nossa Entrega</span>
              <h2 className="display text-4xl md:text-5xl leading-tight">Como garantimos a <span className="text-mint italic">integração</span>.</h2>
            </div>
            <div className="space-y-6 text-white/70 font-ui text-lg">
              <p>Mapeamos interfaces, riscos e requisitos antes de qualquer proposta.</p>
              <p>Operamos com equipes coordenadas como uma única unidade de entrega integrada.</p>
              <Link to="/contato" className="btn-primary inline-flex mt-4 !bg-mint !text-depth">
                Solicitar Diagnóstico Técnico
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
