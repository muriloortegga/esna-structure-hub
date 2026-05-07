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
        title="Clareza, estrutura e execução."
        subtitle="Uma empresa de engenharia construída para entregar projetos complexos com método e consistência."
      />
      <section className="container-x pb-32 space-y-24">
        {blocks.map((b, i) => (
          <div key={b.eyebrow} className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <h2 className="display text-3xl md:text-4xl">{b.title}</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              {b.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
