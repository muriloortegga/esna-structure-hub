import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "Engenharia elétrica",
    desc: "Projetos e execução de sistemas elétricos com foco em segurança, eficiência e confiabilidade.",
    items: ["Subestações e MT/BT", "SPDA e aterramento", "Estudos elétricos"],
  },
  {
    n: "02",
    title: "Automação",
    desc: "Integração de sistemas para otimização de processos e controle inteligente de operações.",
    items: ["PLC / SCADA / IHM", "Indústria 4.0", "Cibersegurança OT"],
  },
  {
    n: "03",
    title: "Projetos executivos",
    desc: "Planejamento detalhado para garantir clareza, viabilidade e execução sem retrabalho.",
    items: ["Compatibilização", "BIM Coordination", "Memorial e cadernos"],
  },
  {
    n: "04",
    title: "Integração de sistemas",
    desc: "Coordenação entre disciplinas para entrega de soluções completas e funcionais.",
    items: ["Gestão multidisciplinar", "Comissionamento", "Operação assistida"],
  },
];

export default function Solucoes() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nossas Frentes"
        title="Soluções completas, executadas com precisão."
        subtitle="Quatro frentes integradas, uma única lógica: organizar a complexidade até a entrega técnica absoluta."
      />
      <section className="container-x pb-48">
        <div className="border-t border-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="border-b border-border py-16 md:py-24 grid md:grid-cols-12 gap-10 group transition-colors hover:bg-slate/5"
            >
              <div className="md:col-span-1 text-teal font-bold text-sm tracking-[0.3em]">{s.n}</div>
              <div className="md:col-span-5">
                <h2 className="display text-4xl md:text-6xl font-semibold leading-tight group-hover:text-teal transition-colors duration-500">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-6 space-y-10">
                <p className="text-xl text-slate font-medium leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-wider text-ink/80">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 border-l border-teal/30 pl-4 py-1">
                       {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-32 text-center">
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 px-10 py-5 bg-teal text-background font-bold uppercase text-sm tracking-[0.2em] hover:bg-ink transition-all duration-500"
          >
            Conversar com o time técnico
          </Link>
        </div>
      </section>
    </Layout>
  );
}
