import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import heroImage from "@/assets/hero-structure.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="h-screen bg-void flex flex-col justify-center relative overflow-hidden section-padding mt-0">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/3201509/3201509-hd_1920_1080_25fps.mp4"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-x relative z-10 pt-32 flex flex-col items-center text-center">
          <div className="flex flex-col gap-6 max-w-5xl items-center">
            <h1 className="text-[48px] md:text-[72px] leading-[1.1] font-sans font-medium tracking-tight text-white animate-reveal [animation-delay:200ms]">
              Com engenharia integrada para toda decisão estrutural.
            </h1>
            <p className="text-[20px] md:text-[24px] text-gray-200 animate-reveal [animation-delay:400ms] max-w-3xl font-sans">
              Projetamos, estruturamos e executamos sistemas complexos onde a precisão técnica encontra a eficiência operacional absoluta.
            </p>
          </div>
        </div>

        {/* Hero Footer Stats / Video Box placeholder */}
        <div className="container-x relative z-10 mt-auto pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-reveal [animation-delay:600ms]">
          {/* We can leave the stats or remove them to match the exact vibe, let's keep them as a subtle footer for the hero */}
          {[
            { label: "Unidade 01", value: "Energia" },
            { label: "Unidade 02", value: "Automação" },
            { label: "Unidade 03", value: "Infra" },
            { label: "Unidade 04", value: "Gestão" },
          ].map((s) => (
            <div key={s.value} className="flex flex-col gap-2 border-t border-white/30 pt-6">
              <span className="text-[14px] font-sans text-gray-300">{s.label}</span>
              <span className="text-[18px] font-sans font-medium text-white">{s.value}</span>
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
              <div className="flex flex-col gap-2 border-t border-black/10 pt-4">
                <span className="text-h2 text-void">+10 Anos</span>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono font-bold">Experiência Industrial</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-black/10 pt-4">
                <span className="text-h2 text-void">+50 Projetos</span>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono font-bold">Entregues com Precisão</p>
              </div>
            </div>
            <Link to="/sobre" className="btn-esna-arrow self-start mt-4">
              Conheça nossa metodologia →
            </Link>
          </div>
          <div className="p-0 overflow-hidden aspect-video bg-gray-200">
             <img src={heroImage} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID (4-COL) */}
      <section className="section-surface section-padding">
        <div className="container-x">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="flex flex-col gap-4">

              <h2 className="text-display text-void">Soluções que Escalam.</h2>
            </div>
            <Link to="/solucoes" className="btn-esna-arrow">Ver todas as frentes →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "ESNA INFRA", d: "Caldeiraria, mecânica e estruturas de alta complexidade.", tag: "DEFENSE", img: p1 },
              { t: "ESNA TECH", d: "Automação, robótica e integração Industry 4.0.", tag: "AIP", img: p2 },
              { t: "ESNA ENERGY", d: "Eficiência energética e infraestrutura elétrica industrial.", tag: "FOUNDRY", img: p3 },
              { t: "ESNA CORP", d: "Gestão estratégica, PCM e coordenação de grandes obras.", tag: "APOLLO", img: p4 },
            ].map((s) => (
              <div key={s.t} className="card-surface flex flex-col h-full hover:bg-white transition-colors group p-0">
                <div className="w-full h-[200px] overflow-hidden">
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-12">
                    <span className="earmark-tag bg-void text-white px-2 py-1">{s.tag}</span>
                    <div className="h-4 w-4 border-r border-t border-black/20 group-hover:border-black transition-colors" />
                  </div>
                  <h3 className="text-h1 text-void mb-4">{s.t}</h3>
                  <p className="text-body text-gray-600 mb-8 flex-grow">{s.d}</p>
                  <div className="h-px w-full bg-black/10 mb-6" />
                  <span className="text-[11px] font-bold text-void uppercase tracking-widest group-hover:underline">Explorar Solução</span>
                </div>
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
                    <span className="earmark-tag border border-black/10 px-2 py-1">{p.type}</span>
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
      <section className="section-surface border-y border-black/10">
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
            Pronto para reconstruir sua <span className="text-gray-400">Vantagem Operacional</span>?
          </h2>
          <div className="flex gap-6">
            <Link to="/contato" className="btn-esna-primary bg-white text-void hover:bg-gray-200 px-12">
              Solicitar Demo
            </Link>
            <Link to="/solucoes" className="border border-white text-white hover:bg-white hover:text-void px-12 py-3 text-[12px] font-mono uppercase tracking-widest transition-all">
              Ver Ofertas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
