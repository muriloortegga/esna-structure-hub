import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

export default function Infraestrutura() {
  return (
    <Layout>
      <PageHero
        title="Infraestrutura pensada para sustentar operações."
        subtitle="Soluções estruturadas para ambientes que exigem organização, confiabilidade e capacidade técnica em escala."
      />

      {/* VISÃO DA FRENTE */}
      <section className="section-padding section-white border-b border-border-sutil">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="earmark-tag bg-void text-white self-start px-2 py-1">VISÃO DA FRENTE</span>
            <h2 className="text-display text-void leading-tight">
              <span className="font-light">Base sólida para</span> <br />
              <span className="font-bold">operações complexas.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 pt-4 text-h2 text-gray-600 font-light tracking-tight leading-relaxed">
            <p>
              A frente de Infraestrutura da ESNA atua no desenvolvimento e execução de soluções essenciais para o <span className="font-medium text-void">funcionamento eficiente</span> de operações industriais, corporativas e técnicas.
            </p>
            <p>
              Nossa abordagem combina <span className="font-medium text-void">organização, planejamento e integração</span> para garantir estruturas preparadas para crescer com segurança, estabilidade e desempenho.
            </p>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="section-padding section-surface border-b border-border-sutil">
        <div className="container-x">
          <div className="flex flex-col gap-12">
            <span className="earmark-tag bg-void text-white self-start px-2 py-1">CAPACIDADES</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {[
                "Estruturas técnicas",
                "Instalações industriais",
                "Adequações operacionais",
                "Sistemas de suporte",
                "Integração física de ambientes"
              ].map((cap, i) => (
                <div key={i} className="flex flex-col gap-4 border-t border-black/20 pt-6">
                  <span className="text-[14px] font-mono font-bold tracking-widest text-gray-400">0{i + 1}</span>
                  <h3 className="text-h1 text-void font-medium tracking-tight">{cap}</h3>
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
            <h2 className="text-display text-white leading-tight">
              <span className="font-light">Estrutura como</span> <br />
              <span className="font-bold">inteligência operacional.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col pt-4">
            <p className="text-h1 text-gray-300 leading-relaxed font-sans font-light tracking-tight">
              Mais do que construir, organizamos sistemas capazes de sustentar operações com <span className="font-medium text-white">eficiência, previsibilidade e continuidade.</span>
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
