import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

const blocks = [
  {
    eyebrow: "Quem somos",
    title: "Engenharia para projetos integrados.",
    body: [
      "A ESNA é uma empresa de engenharia especializada em soluções integradas.",
      "Atuamos organizando e executando projetos que exigem precisão técnica, visão sistêmica e capacidade de coordenação entre múltiplas disciplinas.",
    ],
  },
  {
    eyebrow: "Como atuamos",
    title: "Uma abordagem baseada em método.",
    body: [
      "Nosso trabalho parte da organização. Entendemos o projeto como um sistema — e estruturamos cada etapa para garantir eficiência, controle e qualidade.",
    ],
  },
  {
    eyebrow: "Diferencial",
    title: "Integração como diferencial.",
    body: [
      "A capacidade de integrar diferentes áreas da engenharia é o que nos permite entregar soluções mais completas, reduzir ruídos e aumentar a eficiência operacional.",
    ],
  },
];

export default function Sobre() {
  return (
    <Layout>
      <PageHero
        eyebrow="A Empresa"
        title="Clareza, estrutura e execução."
        subtitle="Uma empresa de engenharia construída para entregar projetos complexos com método e consistência técnica."
      />
      <section className="container-x pb-48 space-y-40">
        {blocks.map((b, i) => (
          <div key={b.eyebrow} className="grid md:grid-cols-12 gap-16 relative">
            <div className="absolute -left-10 top-0 text-[100px] font-bold text-slate/[0.05] select-none">
              0{i + 1}
            </div>
            <div className="md:col-span-5 relative z-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-6 block">
                {b.eyebrow}
              </span>
              <h2 className="display text-4xl md:text-5xl font-semibold leading-tight">{b.title}</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-8 text-xl text-slate leading-relaxed font-medium">
              {b.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
