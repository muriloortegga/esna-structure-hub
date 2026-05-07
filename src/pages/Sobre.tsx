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
      <section className="container-x pb-48 space-y-48 relative">
        {blocks.map((b, i) => (
          <div key={b.eyebrow} className="grid md:grid-cols-12 gap-16 relative">
            <div className="absolute -left-12 -top-12 text-[140px] font-mono font-bold text-accent/[0.07] select-none pointer-events-none">
              0{i + 1}
            </div>
            <div className="md:col-span-5 relative z-10">
              <span className="earmark mb-8 block">
                {b.eyebrow}
              </span>
              <h2 className="display text-4xl md:text-6xl leading-[1.1] text-depth">{b.title}</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-8 text-xl text-slate leading-relaxed font-ui">
              {b.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        ))}
      </section>

      {/* MISSÃO & VISÃO */}
      <section className="bg-depth text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-stripes opacity-10 pointer-events-none" />
        <div className="container-x py-32 md:py-48">
          <span className="earmark mb-8 block !text-mint">Missão & Visão</span>
          <h2 className="display text-5xl md:text-7xl leading-[1.05] mb-20 max-w-4xl">
            Satisfazer nossos clientes em seus <span className="text-mint italic">projetos</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="rule-thin !bg-mint/40 w-24" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint font-bold block">Missão</span>
              <p className="text-xl text-white/70 font-ui leading-relaxed">
                Conquistar a confiança dos nossos clientes diariamente — através do compromisso, da qualidade técnica e da capacidade de entregar soluções completas com método e precisão.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rule-thin !bg-mint/40 w-24" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint font-bold block">Visão</span>
              <p className="text-xl text-white/70 font-ui leading-relaxed">
                Ser reconhecida como a principal referência em engenharia integrada no Brasil, com padrão de excelência comparável às maiores consultorias globais do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="container-x py-32 md:py-48 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="stat-block">
          <span className="stat-value">+10</span>
          <span className="stat-label">Anos de atuação</span>
        </div>
        <div className="stat-block">
          <span className="stat-value">9</span>
          <span className="stat-label">Áreas integradas</span>
        </div>
        <div className="stat-block">
          <span className="stat-value">+50</span>
          <span className="stat-label">Projetos entregues</span>
        </div>
        <div className="stat-block">
          <span className="stat-value">100%</span>
          <span className="stat-label">Comprometimento</span>
        </div>
      </section>
    </Layout>
  );
}
