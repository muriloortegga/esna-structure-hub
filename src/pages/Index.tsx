import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import hero from "@/assets/hero-structure.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-void flex flex-col justify-center relative overflow-hidden section-padding">
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="ESNA Integrated Engineering"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        </div>

        <div className="container-x relative z-10 pt-20">
          <div className="flex flex-col gap-6 max-w-4xl">

            <h1 className="text-display text-white animate-reveal [animation-delay:200ms]">
              Construindo a Infraestrutura que Sustenta <span className="text-gray-400 italic">Grandes Operações</span>.
            </h1>
            <p className="text-h1 text-gray-400 animate-reveal [animation-delay:400ms] max-w-2xl">
              Projetamos, estruturamos e executamos sistemas complexos onde a precisão técnica encontra a eficiência operacional absoluta.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-reveal [animation-delay:600ms]">
              <Link to="/solucoes" className="btn-palantir-primary px-10">
                Começar Projeto
              </Link>
              <Link to="/projetos" className="btn-palantir-ghost text-white border-white/20 hover:bg-white/10 px-10">
                Ver Impacto
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Footer Stats */}
        <div className="container-x relative z-10 mt-auto pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-reveal [animation-delay:800ms]">
          {[
            { label: "↳ Unidade 01", value: "Energia" },
            { label: "↳ Unidade 02", value: "Automação" },
            { label: "↳ Unidade 03", value: "Infra" },
            { label: "↳ Unidade 04", value: "Gestão" },
          ].map((s) => (
            <div key={s.value} className="flex flex-col gap-2 border-t border-white/10 pt-6">
              <span className="text-caption text-gray-500">{s.label}</span>
              <span className="text-h2 text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION (DUPLEX) */}
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">

              <h2 className="text-display text-void leading-tight">
                Engenharia como sistema de governança.
              </h2>
            </div>
            <p className="text-body text-gray-600 max-w-xl">
              Não executamos apenas tarefas avulsas. Entregamos estrutura. A ESNA atua na integração total de disciplinas, transformando complexidade em vantagem operacional para grandes indústrias.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-h2 text-void">+10 Anos</span>
                <p className="text-[13px] text-gray-500 uppercase tracking-widest">Experiência Industrial</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-h2 text-void">+50 Projetos</span>
                <p className="text-[13px] text-gray-500 uppercase tracking-widest">Entregues com Precisão</p>
              </div>
            </div>
            <Link to="/sobre" className="btn-palantir-arrow self-start mt-4">
              Conheça nossa metodologia →
            </Link>
          </div>
          <div className="card-surface p-0 overflow-hidden aspect-video bg-gray-200">
             <img src={hero} className="w-full h-full object-cover grayscale opacity-80" />
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID (3-COL) */}
      <section className="section-surface section-padding">
        <div className="container-x">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="flex flex-col gap-4">

              <h2 className="text-display text-void">Soluções que Escalam.</h2>
            </div>
            <Link to="/solucoes" className="btn-palantir-arrow">Ver todas as frentes →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "ESNA INFRA", d: "Caldeiraria, mecânica e estruturas de alta complexidade.", tag: "DEFENSE" },
              { t: "ESNA TECH", d: "Automação, robótica e integração Industry 4.0.", tag: "AIP" },
              { t: "ESNA ENERGY", d: "Eficiência energética e infraestrutura elétrica industrial.", tag: "FOUNDRY" },
            ].map((s) => (
              <div key={s.t} className="card-surface flex flex-col h-full hover:bg-white transition-colors group">
                <div className="flex items-center justify-between mb-12">
                  <span className="earmark-tag bg-void text-white">{s.tag}</span>
                  <div className="h-4 w-4 border-r border-t border-void/20 group-hover:border-void transition-colors" />
                </div>
                <h3 className="text-h1 text-void mb-4">{s.t}</h3>
                <p className="text-body text-gray-600 mb-8 flex-grow">{s.d}</p>
                <div className="h-px w-full bg-border-sutil mb-6" />
                <span className="text-[11px] font-bold text-void uppercase tracking-widest">Explorar Solução</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / NEWS CARDS (DARK) */}
      <section className="section-white section-padding">
        <div className="container-x">
          <div className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto">

            <h2 className="text-display text-void">Resultados Reais.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((p) => (
              <Link to={`/projetos/${p.slug}`} key={p.slug} className="group flex flex-col gap-8">
                <div className="card-surface p-0 overflow-hidden aspect-[16/10] bg-void">
                  <img
                    src={p.cover}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="earmark-tag border border-void/10">{p.type}</span>
                    <span className="text-caption text-gray-400">Case Study 2024</span>
                  </div>
                  <h3 className="text-display text-void group-hover:underline underline-offset-8 decoration-1">
                    {p.name}
                  </h3>
                  <p className="text-body text-gray-600 max-w-xl">
                    Implementação de sistemas de controle integrados com foco em resiliência e continuidade operacional.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS (SUBTLE) */}
      <section className="section-surface border-y border-border-sutil">
        <div className="container-x py-12 flex flex-wrap items-center justify-between gap-12 opacity-50 grayscale">
          {["Schuler", "Santander", "Petribu", "FVO", "Ypê"].map(c => (
            <span key={c} className="text-h2 text-void font-bold tracking-tightest">{c}</span>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-void section-padding text-center">
        <div className="container-x flex flex-col items-center gap-10">

          <h2 className="text-display text-white max-w-4xl">
            Pronto para reconstruir sua <span className="text-gray-400 italic">Vantagem Operacional</span>?
          </h2>
          <div className="flex gap-6">
            <Link to="/contato" className="btn-palantir-primary bg-white text-void hover:bg-gray-200 px-12">
              Solicitar Demo
            </Link>
            <Link to="/solucoes" className="btn-palantir-ghost text-white border-white/20 px-12">
              Ver Ofertas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
