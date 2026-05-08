import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";

export default function Energia() {
  return (
    <Layout>
      <PageHero
        title="Energia com eficiência, controle e continuidade."
        subtitle="Projetos e soluções energéticas desenvolvidos para operações que dependem de estabilidade, segurança e performance."
      />

      {/* VISÃO DA FRENTE */}
      <section className="section-padding section-white border-b border-border-sutil">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="earmark-tag bg-void text-white self-start px-2 py-1">VISÃO DA FRENTE</span>
            <h2 className="text-display text-void leading-tight">
              <span className="font-light">Energia integrada à</span> <br />
              <span className="font-bold">operação.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 pt-4 text-h2 text-gray-600 font-light tracking-tight leading-relaxed">
            <p>
              A ESNA desenvolve soluções energéticas com foco em <span className="font-medium text-void">confiabilidade operacional,</span> eficiência técnica e integração entre sistemas.
            </p>
            <p>
              Atuamos desde o planejamento até a implementação, garantindo <span className="font-medium text-void">desempenho consistente</span> e alinhado às necessidades de cada operação industrial complexa.
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
                "Engenharia elétrica",
                "Distribuição de energia",
                "Sistemas de proteção",
                "Eficiência energética",
                "Integração de sistemas"
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
              <span className="font-light">Precisão técnica aplicada à</span> <br />
              <span className="font-bold">continuidade.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col pt-4">
            <p className="text-h1 text-gray-300 leading-relaxed font-sans font-light tracking-tight">
              Projetamos sistemas energéticos preparados para operar com <span className="font-medium text-white">estabilidade, segurança</span> e capacidade de adaptação.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
