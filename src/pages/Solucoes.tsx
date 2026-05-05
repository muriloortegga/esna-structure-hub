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
        eyebrow="Soluções"
        title="Soluções completas, executadas com precisão."
        subtitle="Quatro frentes integradas, uma única lógica: organizar a complexidade até a entrega."
      />
      <section className="container-x pb-32">
        <div className="border-t border-border">
          {services.map((s) => (
            <article
              key={s.title}
              className="border-b border-border py-12 md:py-16 grid md:grid-cols-12 gap-8 group"
            >
              <div className="md:col-span-1 text-stone text-sm tracking-widest">{s.n}</div>
              <div className="md:col-span-5">
                <h2 className="display text-3xl md:text-5xl group-hover:text-ochre transition-colors duration-500">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-6 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-ochre" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-ink/90"
          >
            Conversar com o time →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
