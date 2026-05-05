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
          <p className="eyebrow mb-8 animate-fade-in">ESNA · Engenharia Integrada</p>
          <h1 className="display text-[44px] sm:text-6xl md:text-8xl max-w-5xl">
            Engenharia integrada para projetos que exigem{" "}
            <span className="italic text-ochre">precisão</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Projetamos, estruturamos e executamos soluções completas com clareza, método e alto
            padrão técnico.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-ink/90 transition-colors"
            >
              Conheça nossas soluções <ArrowRight size={16} />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/80 hover:bg-foreground hover:text-background transition-colors"
            >
              Ver projetos
            </Link>
          </div>
        </div>

        <div className="container-x pb-8 grid grid-cols-3 gap-6 border-t border-border pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Elétrica</span>
          <span className="text-center">Automação</span>
          <span className="text-right">Integração</span>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="container-x py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">01 — Posicionamento</p>
            <h2 className="display text-4xl md:text-5xl">Estrutura para resolver com eficiência.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A ESNA atua na interseção entre diferentes disciplinas da engenharia, organizando
              processos complexos em soluções claras, funcionais e executáveis.
            </p>
            <p className="text-foreground">
              Não entregamos apenas partes. <span className="italic">Entregamos sistemas.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow mb-10">02 — Pilares</p>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: Layers, t: "Transparência", d: "Clareza em cada etapa do processo." },
              { icon: Boxes, t: "Estrutura", d: "Método, organização e base sólida." },
              { icon: Lightbulb, t: "Criatividade", d: "Soluções inteligentes para desafios complexos." },
            ].map((p) => (
              <div key={p.t} className="bg-background p-10 md:p-14 group">
                <p.icon className="w-7 h-7 text-ochre mb-10 transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="display text-3xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-baseline gap-4">
            <span className="eyebrow">Resultado</span>
            <span className="display text-3xl md:text-4xl italic text-ochre">Integração.</span>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="container-x py-28 md:py-40">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-4">03 — Soluções</p>
            <h2 className="display text-4xl md:text-5xl max-w-2xl">
              Soluções integradas de engenharia
            </h2>
          </div>
          <Link to="/solucoes" className="link-underline text-sm">
            Ver todas as soluções →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {[
            { icon: Zap, t: "Engenharia elétrica", d: "Projetos e execução de sistemas elétricos com foco em segurança e confiabilidade." },
            { icon: Cpu, t: "Automação e sistemas", d: "Integração para otimização e controle inteligente de operações." },
            { icon: FileText, t: "Projetos e execução", d: "Planejamento detalhado para clareza, viabilidade e zero retrabalho." },
            { icon: Network, t: "Integração de disciplinas", d: "Coordenação entre áreas para soluções completas e funcionais." },
          ].map((s) => (
            <div key={s.t} className="bg-background p-10 md:p-12 flex flex-col gap-6 hover:bg-secondary/40 transition-colors">
              <s.icon className="w-6 h-6 text-foreground" />
              <h3 className="display text-2xl">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section className="container-x py-28 md:py-40">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-4">04 — Projetos</p>
            <h2 className="display text-4xl md:text-5xl max-w-2xl">
              Projetos que validam nossa atuação
            </h2>
          </div>
          <Link to="/projetos" className="link-underline text-sm">
            Acessar portfólio completo →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(0, 4).map((p, i) => (
            <Link
              to={`/projetos/${p.slug}`}
              key={p.slug}
              className={`group block ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="overflow-hidden bg-secondary aspect-[4/3]">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="display text-2xl">{p.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-ink text-bone">
        <div className="container-x py-28 md:py-40 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6 text-bone/60">05 — Sobre</p>
            <h2 className="display text-4xl md:text-5xl">
              Uma operação estruturada para entregar com consistência.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-bone/70 leading-relaxed">
            <p>
              A ESNA é uma empresa de engenharia que atua com foco em organização, clareza e
              execução de alto nível.
            </p>
            <p>
              Nossa abordagem integra diferentes áreas para garantir eficiência, previsibilidade e
              qualidade em cada projeto.
            </p>
            <Link to="/sobre" className="link-underline inline-flex text-sm pt-4">
              Conheça a ESNA →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-x py-32 md:py-44 text-center">
        <p className="eyebrow mb-8">06 — Próximo passo</p>
        <h2 className="display text-5xl md:text-7xl max-w-4xl mx-auto">
          Vamos estruturar seu <span className="italic text-ochre">próximo projeto</span>.
        </h2>
        <Link
          to="/contato"
          className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-ink/90 transition-colors"
        >
          Entrar em contato <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
