import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

export default function Gestao() {
  return (
    <Layout>
      <PageHero
        title="Gestão estruturada para projetos de alta exigência."
        subtitle="Organização, planejamento e coordenação aplicados à execução eficiente de operações e projetos complexos."
      />

      {/* VISÃO DA FRENTE */}
      <section className="section-padding section-white border-b border-black/10">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="earmark-tag bg-void text-white self-start px-2 py-1">VISÃO DA FRENTE</span>
            <h2 className="text-display text-void leading-tight">Método como parte da entrega.</h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 pt-4">
            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed font-sans tracking-tight">
              A frente de Gestão da ESNA atua na coordenação estratégica de processos, equipes e operações, garantindo clareza, previsibilidade e alinhamento entre todas as etapas do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="section-padding section-surface border-b border-black/10">
        <div className="container-x">
          <div className="flex flex-col gap-12">
            <span className="earmark-tag bg-void text-white self-start px-2 py-1">CAPACIDADES</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {[
                "Gestão de projetos",
                "Planejamento operacional",
                "Coordenação técnica",
                "Controle de execução",
                "Gestão integrada"
              ].map((cap, i) => (
                <div key={i} className="flex flex-col gap-4 border-t border-black/20 pt-6">
                  <span className="text-[14px] font-mono font-bold tracking-widest text-gray-400">0{i + 1}</span>
                  <h3 className="text-[24px] font-display text-void font-medium tracking-tight">{cap}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="section-padding bg-void text-white">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="earmark-tag bg-white text-void self-start px-2 py-1">DIFERENCIAL</span>
            <h2 className="text-display text-white leading-tight">Clareza para operações mais eficientes.</h2>
          </div>
          <div className="md:col-span-7 flex flex-col pt-4">
            <p className="text-[24px] md:text-[32px] text-gray-300 leading-relaxed font-sans tracking-tight">
              Organizamos fluxos, processos e decisões para transformar complexidade em execução consistente.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
