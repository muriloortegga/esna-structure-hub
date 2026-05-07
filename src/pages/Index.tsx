import { Link } from "react-router-dom";
import { ArrowRight, Layers, Boxes, Lightbulb, Zap, Cpu, FileText, Network } from "lucide-react";
import Layout from "@/components/site/Layout";
import hero from "@/assets/hero-structure.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 min-h-[100svh] flex flex-col">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Estrutura metálica industrial integrada"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white" />
        </div>

        <div className="container-x flex-1 flex flex-col justify-end pb-20 md:pb-28 pt-32">
          <span className="earmark mb-8 animate-fade-in">
            Engenharia Integrada
          </span>
          <h1 className="display text-[52px] sm:text-7xl md:text-[110px] max-w-6xl leading-[1.0] text-depth">
            Precisão que sustenta <span className="text-accent italic">grandes operações</span>.
          </h1>
          <p className="mt-12 max-w-2xl text-xl text-slate leading-relaxed font-ui">
            Projetamos, estruturamos e executamos sistemas complexos com clareza absoluta e domínio técnico comprovado.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/solucoes"
              className="btn-primary flex items-center gap-3"
            >
              Nossas soluções <ArrowRight size={14} />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-3 px-8 py-3 border border-depth text-depth font-mono text-xs uppercase tracking-widest hover:bg-depth hover:text-white transition-all duration-300"
            >
              Ver portfólio
            </Link>
          </div>
        </div>

        <div className="container-x pb-12 grid grid-cols-3 gap-12 border-t border-accent/20 pt-8 text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-slate">
          <div className="flex flex-col gap-1">
            <span className="text-accent">↳ 01</span>
            <span>Elétrica</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent">↳ 02</span>
            <span>Automação</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-accent">↳ 03</span>
            <span>Integração</span>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="container-x py-32 md:py-48 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-display text-depth/[0.02] select-none pointer-events-none leading-none tracking-tighter">
          ESNA
        </div>
        <div className="grid md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-7">
            <span className="earmark mb-8 block">Sobre a ESNA</span>
            <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth">
              Uma empresa preparada para <span className="text-accent">grandes desafios</span>.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end space-y-8 text-xl text-slate leading-relaxed font-ui">
            <p>
              Atuamos com uma abordagem sistêmica, onde cada disciplina da engenharia é integrada
              em uma única operação estruturada e previsível.
            </p>
            <p className="text-depth border-l border-accent pl-8 py-2 italic">
              Não executamos apenas tarefas avulsas. <span className="font-bold not-italic">Entregamos estrutura.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-pale/30 border-y border-accent/10">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-3 gap-px bg-accent/20 border border-accent/20">
            {[
              { icon: Layers, t: "Transparência", d: "Processos objetivos, comunicação direta e previsibilidade total." },
              { icon: Boxes, t: "Estrutura", d: "Método proprietário, organização e base sólida para grandes operações." },
              { icon: Lightbulb, t: "Integração", d: "Conectamos múltiplas disciplinas em uma única unidade de entrega." },
            ].map((p) => (
              <div key={p.t} className="bg-background p-12 md:p-16 group transition-colors hover:bg-pale/20">
                <p.icon className="w-8 h-8 text-accent mb-12 transition-transform duration-500 group-hover:-translate-y-2" />
                <h3 className="display text-3xl mb-5 text-depth">{p.t}</h3>
                <p className="text-slate font-ui leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
          <div className="max-w-2xl">
            <span className="earmark mb-8 block">Expertise Técnica</span>
            <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth">
              Execução com método em cada disciplina.
            </h2>
          </div>
          <Link to="/solucoes" className="font-mono text-[11px] uppercase tracking-widest font-bold border-b border-accent pb-1 text-depth hover:text-accent transition-colors">
            Ver todas as soluções
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-accent/20 border border-accent/20">
          {[
            { icon: Zap, t: "Engenharia elétrica", d: "Projetos e execução de sistemas elétricos industriais com rigor técnico absoluto." },
            { icon: Cpu, t: "Automação e Robótica", d: "Integração tecnológica avançada para otimização e controle de plantas industriais." },
            { icon: FileText, t: "Civil & Manutenção", d: "Infraestruturas resilientes e manutenção predial com foco em alta performance." },
            { icon: Network, t: "Gestão & Dados", d: "Inteligência operacional e governança integrada de ativos e facilities." },
          ].map((s) => (
            <div key={s.t} className="bg-background p-12 md:p-16 flex flex-col gap-8 hover:bg-pale/10 transition-colors group">
              <s.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
              <div className="space-y-4">
                <h3 className="display text-3xl text-depth">{s.t}</h3>
                <p className="text-slate text-lg font-ui leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      {/* PROJETOS */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-24 flex-wrap gap-8">
          <div className="max-w-2xl">
            <span className="earmark mb-8 block">Portfólio</span>
            <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth">
              Experiência real. Entrega comprovada.
            </h2>
          </div>
          <Link to="/projetos" className="font-mono text-[11px] uppercase tracking-widest font-bold border-b border-accent pb-1 text-depth hover:text-accent transition-colors">
            Acessar portfólio completo
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {projects.slice(0, 4).map((p, i) => (
            <Link
              to={`/projetos/${p.slug}`}
              key={p.slug}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="overflow-hidden bg-pale aspect-[4/3] relative border border-accent/10">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-depth/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-8 flex items-center justify-between border-b border-accent/20 pb-6">
                <h3 className="display text-3xl text-depth">{p.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate font-bold">
                    ↳ {p.type}
                  </span>
                  <ArrowRight size={16} className="text-accent transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOBRE - BRANDED VERSION */}
      <section className="bg-depth text-white relative overflow-hidden">
        <div className="container-x py-32 md:py-48 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="earmark mb-8 block !text-mint">Nossa Missão</span>
            <h2 className="display text-5xl md:text-7xl leading-[1.05]">
              Sustentando grandes operações com <span className="text-mint italic">domínio técnico</span>.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col space-y-10 text-xl text-white/70 leading-relaxed font-ui">
            <p>
              A ESNA é uma empresa brasileira de engenharia integrada que atua com soluções completas para a indústria.
            </p>
            <p>
              Com abordagem sistêmica e domínio técnico comprovado, atendemos demandas complexas que exigem método, organização e execução confiável.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.3em] text-mint group transition-colors hover:text-white">
              ↳ Conheça a ESNA <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-x py-40 md:py-60 text-center relative">
        <div className="rule-thin absolute top-0 left-0" />
        <span className="earmark mb-10 inline-flex">Próximos Passos</span>
        <h2 className="display text-6xl md:text-[100px] max-w-5xl mx-auto leading-[1.0] text-depth">
          Vamos estruturar seu <span className="italic text-accent">próximo projeto</span>.
        </h2>
        <div className="mt-20 flex flex-col items-center gap-10">
          <Link
            to="/contato"
            className="btn-primary flex items-center gap-4 px-12 py-5"
          >
            Solicitar proposta <ArrowRight size={18} />
          </Link>
          <p className="text-slate font-mono text-[10px] uppercase tracking-widest">Respostas técnicas em até 24 horas.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
