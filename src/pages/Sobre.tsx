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
      
      {/* HISTORY DUPLEX */}
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-6">
            <span className="text-caption text-gray-500">História & Fundação</span>
            <h2 className="text-display text-void leading-tight">Engenharia para projetos integrados.</h2>
          </div>
          <div className="flex flex-col gap-8 text-body text-gray-600">
            <p>
              A ESNA é uma empresa de engenharia especializada em soluções integradas. Atuamos organizando e executando projetos que exigem precisão técnica, visão sistêmica e capacidade de coordenação entre múltiplas disciplinas.
            </p>
            <p>
              Nosso trabalho parte da organização. Entendemos o projeto como um sistema — e estruturamos cada etapa para garantir eficiência, controle e qualidade absoluta em cada entrega industrial.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION/VISION DUPLEX (SURFACE) */}
      <section className="section-surface section-padding border-y border-border-sutil">
        <div className="container-x grid md:grid-cols-2 gap-20">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-nav text-void border-l-2 border-void pl-4">Nossa Missão</span>
              <p className="text-h2 text-gray-600 leading-relaxed">
                Conquistar a confiança dos nossos clientes diariamente — através do compromisso, da qualidade técnica e da capacidade de entregar soluções completas com método e precisão.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-nav text-void border-l-2 border-void pl-4">Nossa Visão</span>
              <p className="text-h2 text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em engenharia integrada no Brasil, com padrão de excelência comparável às maiores consultorias globais do setor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="card-dark p-12 flex flex-col gap-6">
              <span className="text-caption text-gray-400">Valores Essenciais</span>
              <ul className="flex flex-col gap-4 text-h2 text-white">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-white rounded-full" />
                  Transparência Radical
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-white rounded-full" />
                  Excelência Técnica
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-white rounded-full" />
                  Visão Sistêmica
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-white rounded-full" />
                  Compromisso com o Prazo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS (WHITE) */}
      <section className="section-white section-padding">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { v: "+10", l: "Anos de atuação" },
            { v: "9", l: "Áreas integradas" },
            { v: "+50", l: "Projetos entregues" },
            { v: "100%", l: "Comprometimento" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-2">
              <span className="text-display text-void font-bold">{s.v}</span>
              <span className="text-caption text-gray-500">{s.l}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
