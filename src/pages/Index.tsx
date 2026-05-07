import { Link } from "react-router-dom";
import { ArrowRight, Layers, Boxes, Lightbulb, Zap, Cpu, FileText, Network } from "lucide-react";
import Layout from "@/components/site/Layout";
import hero from "@/assets/hero-structure.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
        </div>

        <div className="container-x flex-1 flex flex-col justify-end pb-20 md:pb-28 pt-32">
          <span className="text-[11px] uppercase tracking-[0.4em] text-teal font-bold mb-8 animate-fade-in">
            Soluções Integradas de Engenharia
          </span>
          <h1 className="display text-[48px] sm:text-7xl md:text-[110px] max-w-6xl leading-[0.9] font-semibold text-foreground">
            Engenharia que estrutura o <span className="text-teal italic">futuro</span>.
          </h1>
          <p className="mt-12 max-w-xl text-xl text-slate leading-relaxed font-medium">
            Projetamos, estruturamos e executamos sistemas complexos com clareza absoluta e precisão técnica.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-background font-bold uppercase text-xs tracking-widest hover:bg-ink transition-all duration-300"
            >
              Nossas soluções <ArrowRight size={14} />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-ink text-ink font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-background transition-all duration-300"
            >
              Ver portfólio
            </Link>
          </div>
        </div>

        <div className="container-x pb-12 grid grid-cols-3 gap-12 border-t border-border pt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-slate">
          <div className="flex flex-col gap-1">
            <span className="text-teal opacity-50">01</span>
            <span>Elétrica</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-teal opacity-50">02</span>
            <span>Automação</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-teal opacity-50">03</span>
            <span>Integração</span>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="container-x py-32 md:py-48 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-bold text-slate/[0.03] select-none pointer-events-none leading-none tracking-tighter">
          ESNA
        </div>
        <div className="grid md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-6 block">Nosso Posicionamento</span>
            <h2 className="display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Estrutura para resolver com <span className="text-teal">eficiência máxima</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end space-y-8 text-xl text-slate leading-relaxed font-medium">
            <p>
              A ESNA atua na interseção entre diferentes disciplinas da engenharia, organizando
              processos complexos em soluções claras, funcionais e executáveis.
            </p>
            <p className="text-ink border-l-2 border-teal pl-8 py-2">
              Não entregamos apenas partes. <span className="italic font-bold">Entregamos sistemas.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-slate/5 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { icon: Layers, t: "Transparência", d: "Clareza total em cada etapa do processo executivo." },
              { icon: Boxes, t: "Estrutura", d: "Método proprietário, organização e base técnica sólida." },
              { icon: Lightbulb, t: "Criatividade", d: "Soluções inteligentes para os desafios mais complexos." },
            ].map((p) => (
              <div key={p.t} className="bg-background p-12 md:p-16 group transition-colors hover:bg-mint/10">
                <p.icon className="w-8 h-8 text-teal mb-12 transition-transform duration-500 group-hover:-translate-y-2" />
                <h3 className="display text-3xl font-semibold mb-5">{p.t}</h3>
                <p className="text-slate font-medium leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex items-baseline gap-4">
            <span className="display text-4xl md:text-5xl font-bold italic text-teal">Integração Pragmática.</span>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-6 block">Expertise Técnica</span>
            <h2 className="display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Soluções integradas de engenharia
            </h2>
          </div>
          <Link to="/solucoes" className="text-[13px] uppercase tracking-widest font-bold border-b-2 border-teal pb-1 hover:text-teal transition-colors">
            Ver todas as soluções
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            { icon: Zap, t: "Engenharia elétrica", d: "Projetos e execução de sistemas elétricos com foco em segurança máxima e conformidade." },
            { icon: Cpu, t: "Automação e sistemas", d: "Integração tecnológica para otimização e controle inteligente de operações industriais." },
            { icon: FileText, t: "Projetos e execução", d: "Planejamento detalhado para clareza, viabilidade técnica e eficiência produtiva." },
            { icon: Network, t: "Integração de disciplinas", d: "Coordenação estratégica entre áreas para soluções completas e funcionais." },
          ].map((s) => (
            <div key={s.t} className="bg-background p-12 md:p-16 flex flex-col gap-8 hover:bg-slate/5 transition-colors group">
              <s.icon className="w-8 h-8 text-teal group-hover:scale-110 transition-transform duration-500" />
              <div className="space-y-4">
                <h3 className="display text-3xl font-semibold">{s.t}</h3>
                <p className="text-slate text-lg font-medium leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-6 block">Projetos Recentes</span>
            <h2 className="display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Portfólio em evidência
            </h2>
          </div>
          <Link to="/projetos" className="text-[13px] uppercase tracking-widest font-bold border-b-2 border-teal pb-1 hover:text-teal transition-colors">
            Acessar portfólio completo
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {projects.slice(0, 4).map((p, i) => (
            <Link
              to={`/projetos/${p.slug}`}
              key={p.slug}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="overflow-hidden bg-slate/10 aspect-[4/3] relative">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-8 flex items-center justify-between border-b border-border pb-6">
                <h3 className="display text-3xl font-semibold">{p.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate font-bold">
                    {p.type}
                  </span>
                  <ArrowRight size={16} className="text-teal transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOBRE - LIGHT VERSION */}
      <section className="bg-ink text-background relative overflow-hidden">
        <div className="container-x py-32 md:py-48 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-mint font-bold mb-8 block">Nossa Missão</span>
            <h2 className="display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Uma operação estruturada para entregar <span className="text-mint">consistência</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 space-y-8 text-xl text-background/70 leading-relaxed font-medium">
            <p>
              A ESNA é uma empresa de engenharia que atua com foco em organização, clareza e
              execução de alto nível em todo o território nacional.
            </p>
            <p>
              Nossa abordagem integra diferentes áreas para garantir eficiência, previsibilidade e
              qualidade inquestionável em cada entrega.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-mint group">
              Conheça a ESNA <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-x py-40 md:py-60 text-center relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <span className="text-[11px] uppercase tracking-[0.4em] text-teal font-bold mb-10 block">Próximos Passos</span>
        <h2 className="display text-6xl md:text-[100px] max-w-5xl mx-auto leading-[0.9] font-semibold text-foreground">
          Vamos estruturar seu <span className="italic text-teal">próximo projeto</span>.
        </h2>
        <div className="mt-16 flex flex-col items-center gap-8">
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 px-10 py-5 bg-teal text-background font-bold uppercase text-sm tracking-[0.2em] hover:bg-ink transition-all duration-500 shadow-xl shadow-teal/10"
          >
            Entrar em contato <ArrowRight size={18} />
          </Link>
          <p className="text-slate font-medium text-sm">Respostas técnicas em até 24 horas.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
