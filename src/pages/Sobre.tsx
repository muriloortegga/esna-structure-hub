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
        subtitle="Uma empresa de engenharia construída para entregar projetos complexos com método e consistência técnica."
      />
      
      {/* HISTORY DUPLEX */}
      <section className="section-white section-padding">
        <div className="container-x grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[56px] lg:text-[64px] text-void leading-[1.1] tracking-tighter">
              <span className="font-light">Engenharia para</span> <span className="font-bold">projetos integrados.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 text-[16px] md:text-[20px] text-gray-600 font-light tracking-tight leading-relaxed">
            <p>
              A ESNA é uma empresa de engenharia especializada em <span className="font-medium text-void">soluções integradas.</span> Atuamos organizando e executando projetos que exigem precisão técnica, visão sistêmica e capacidade de coordenação entre múltiplas disciplinas.
            </p>
            <p>
              Nosso trabalho parte da <span className="font-medium text-void">organização.</span> Entendemos o projeto como um sistema — e estruturamos cada etapa para garantir eficiência, controle e qualidade absoluta em cada entrega industrial.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION/VISION DUPLEX (SURFACE) */}
      <section className="section-surface section-padding border-y border-black/5">
        <div className="container-x grid lg:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">Nossa Missão</span>
              <p className="text-[18px] md:text-[24px] text-gray-600 leading-relaxed font-light tracking-tight">
                Conquistar a confiança dos nossos clientes diariamente — através do compromisso, da qualidade técnica e da capacidade de entregar soluções completas com método e precisão.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">Nossa Visão</span>
              <p className="text-[18px] md:text-[24px] text-gray-600 leading-relaxed font-light tracking-tight">
                Ser reconhecida como a principal referência em engenharia integrada no Brasil, com padrão de excelência comparável às maiores consultorias globais do setor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="card-dark p-10 md:p-16 flex flex-col gap-10 bg-void text-white">
              <span className="text-[10px] font-mono font-bold text-white/30 tracking-[0.3em] uppercase">Princípios</span>
              <ul className="flex flex-col gap-6 text-[18px] md:text-[24px] font-light tracking-tight">
                <li className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 bg-white/30" />
                  Transparência Radical
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 bg-white/30" />
                  Excelência Técnica
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 bg-white/30" />
                  Visão Sistêmica
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 bg-white/30" />
                  Compromisso com o Prazo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS (WHITE) */}
      <section className="section-white section-padding border-t border-black/5">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
          {[
            { v: "+10", l: "Anos de atuação" },
            { v: "9", l: "Áreas integradas" },
            { v: "+50", l: "Projetos entregues" },
            { v: "100%", l: "Comprometimento" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-3">
              <span className="text-[32px] md:text-[56px] text-void tracking-tighter font-bold">{s.v}</span>
              <span className="text-[10px] md:text-[11px] text-gray-400 font-mono font-bold uppercase tracking-[0.2em]">{s.l}</span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
