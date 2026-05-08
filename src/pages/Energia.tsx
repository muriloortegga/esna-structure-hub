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
      <section className="section-padding section-white border-b border-black/5">
        <div className="container-x grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">VISÃO DA FRENTE</span>
            <h2 className="text-[32px] md:text-[56px] text-void leading-tight tracking-tighter">
              <span className="font-light">Energia integrada à</span> <br />
              <span className="font-bold">operação.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8 pt-4 text-[18px] md:text-[24px] text-gray-600 font-light tracking-tight leading-relaxed">
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
      <section className="section-padding section-surface border-b border-black/5">
        <div className="container-x">
          <div className="flex flex-col gap-16">
            <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">CAPACIDADES</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {[
                "Engenharia elétrica",
                "Distribuição de energia",
                "Sistemas de proteção",
                "Eficiência energética",
                "Integração de sistemas"
              ].map((cap, i) => (
                <div key={i} className="flex flex-col gap-6 border-t border-black/10 pt-8 group">
                  <span className="text-[12px] font-mono font-bold tracking-[0.3em] text-void/20 group-hover:text-void/60 transition-colors">0{i + 1}</span>
                  <h3 className="text-[24px] md:text-[32px] font-display text-void font-medium tracking-tighter group-hover:pl-2 transition-all">{cap}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="section-void py-32 md:py-48 text-white relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 md:gap-24 items-start relative z-10">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[10px] font-mono font-bold text-white/30 tracking-[0.3em] uppercase border-l-2 border-white pl-4">DIFERENCIAL</span>
            <h2 className="text-[32px] md:text-[56px] text-white leading-tight tracking-tighter">
              <span className="font-light">Precisão técnica aplicada à</span> <br />
              <span className="font-bold">continuidade.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col pt-4">
            <p className="text-[20px] md:text-[32px] text-gray-400 leading-relaxed font-sans font-light tracking-tight">
              Projetamos sistemas energéticos preparados para operar com <span className="font-medium text-white">estabilidade, segurança</span> e capacidade de adaptação.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
