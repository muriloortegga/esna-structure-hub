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
        </div      {/* POSICIONAMENTO & STATS */}
      <section className="container-x py-32 md:py-48 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-display text-depth/[0.02] select-none pointer-events-none leading-none tracking-tighter">
          ESNA
        </div>
        <div className="grid md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-7">
            <span className="earmark mb-8 block">Sobre a ESNA</span>
            <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth">
              Uma empresa preparada para <span className="text-accent">grandes operações</span>.
            </h2>
            <div className="mt-12 flex flex-col justify-end space-y-8 text-xl text-slate leading-relaxed font-ui max-w-xl">
              <p>
                A ESNA é uma empresa brasileira de engenharia integrada que atua com soluções completas para a indústria. Com abordagem sistêmica e domínio técnico comprovado.
              </p>
              <p className="text-depth border-l border-accent pl-8 py-2 italic">
                Não executamos apenas tarefas avulsas. <span className="font-bold not-italic">Entregamos estrutura.</span>
              </p>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center space-y-16 py-12 px-8 bg-depth text-white relative">
            <div className="absolute inset-0 pattern-rects opacity-10 pointer-events-none" />
            <span className="earmark !text-mint block relative z-10">Números</span>
            <div className="grid grid-cols-1 gap-12 relative z-10">
              <div className="flex flex-col">
                <span className="display text-5xl text-mint font-bold">+10</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mt-2">Anos de atuação</span>
              </div>
              <div className="rule-thin !bg-mint/20" />
              <div className="flex flex-col">
                <span className="display text-5xl text-mint font-bold">9</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mt-2">Áreas integradas</span>
              </div>
              <div className="rule-thin !bg-mint/20" />
              <div className="flex flex-col">
                <span className="display text-5xl text-mint font-bold">+50</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50 mt-2">Projetos entregues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSÊNCIA / PILARES */}
      <section className="bg-pale/30 border-y border-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stripes opacity-20 pointer-events-none" />
        <div className="container-x py-32 md:py-48 relative z-10">
          <span className="earmark mb-8 block">Nossa Essência</span>
          <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth mb-20">
            Três pilares.<br />Uma integração.
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { tag: "01 — Transparência", title: "Clareza em cada etapa", d: "Processos objetivos, comunicação direta e previsibilidade total. O cliente sabe exatamente onde o projeto está." },
              { tag: "02 — Estrutura", title: "Engenharia como sistema", d: "Organização, método e base sólida. A ESNA não executa tarefas isoladas — projeta, planeja e entrega com visão sistêmica." },
              { tag: "03 — Integração", title: "Operação Multidisciplinar", d: "Conectamos caldeiraria, automação e elétrica em uma única operação estruturada — entregando resultado coeso." },
            ].map((p) => (
              <div key={p.tag} className="flex flex-col">
                <div className="w-1.5 h-1.5 bg-accent mb-6" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-4">↳ {p.tag}</span>
                <h3 className="display text-2xl text-depth mb-6">{p.title}</h3>
                <p className="text-slate font-ui leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <p className="display text-xl text-accent italic">"A ESNA resolve com estrutura — não apenas executa tarefas."</p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="container-x py-32 md:py-48">
        <div className="flex items-end justify-between mb-24 flex-wrap gap-8">
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
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { tag: "ESNA INFRA", t: "Caldeiraria Industrial", d: "Grande e médio porte. Mecânica industrial, soldagem certificada e estruturas metálicas." },
            { tag: "ESNA TECH", t: "Automação e Robótica", d: "Sistemas CLP, SCADA e robótica avançada. Indústria 4.0 com integração total de dados." },
            { tag: "ESNA ENERGY", t: "Engenharia Elétrica", d: "Infraestrutura de grande escala, subestações e eficiência energética estratégica." },
            { tag: "ESNA CORPORATE", t: "Gestão de Ativos", d: "Governança, compliance e gestão integrada de facilities com visão analítica." },
          ].map((s) => (
            <div key={s.t} className="service-card group">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold block mb-4">↳ {s.tag}</span>
              <div className="space-y-4">
                <h3 className="display text-3xl text-depth group-hover:text-accent transition-colors duration-500">{s.t}</h3>
                <p className="text-slate text-lg font-ui leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFÓLIO / PROJETOS */}
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

      {/* CLIENTES */}
      <section className="bg-depth text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-rects opacity-10 pointer-events-none" />
        <div className="container-x py-32 md:py-48 grid md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-5">
            <span className="earmark mb-8 block !text-mint">Clientes</span>
            <h2 className="display text-5xl md:text-6xl leading-[1.1] mb-8">
              Grandes operações.<br />Parceiros de peso.
            </h2>
            <div className="rule-thin !bg-mint/30 mb-8" />
            <p className="text-xl text-white/60 leading-relaxed font-ui mb-12">
              Atendemos empresas que exigem padrão global de qualidade, comunicação e execução técnica.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
             <span className="earmark mb-10 block !text-mint">Alguns clientes atendidos</span>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {["Schuler", "Santander", "Petribu", "Grupo Olho D'Água", "FVO", "Ypê"].map(c => (
                 <div key={c} className="client-pill !bg-mint/5 !text-white !border-mint/20 hover:!bg-mint/20">
                   {c}
                 </div>
               ))}
             </div>
             <div className="mt-12 text-sm font-ui text-white/50 leading-relaxed">
                A presença de empresas como Schuler e Santander reflete a capacidade da ESNA de operar no nível de clientes que exigem padrão global.
             </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="container-x py-32 md:py-48">
        <span className="earmark mb-8 block">Metodologia</span>
        <h2 className="display text-5xl md:text-7xl leading-[1.05] text-depth mb-24">
          Como a ESNA trabalha.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { n: "01", t: "Diagnóstico", d: "Levantamento técnico completo e mapeamento de riscos." },
            { n: "02", t: "Projeto", d: "Desenvolvimento técnico integrado e plano de execução." },
            { n: "03", t: "Execução", d: "Operação com equipes coordenadas como única unidade." },
            { n: "04", t: "Entrega", body: "Testes, documentação e transferência formal sem surpresas." },
            { n: "05", t: "Pós-entrega", d: "Acompanhamento e suporte técnico contínuo." },
          ].map((s, i) => (
            <div key={s.t} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center display text-xl text-depth bg-pale group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-8 relative">
                {s.n}
                {i < 4 && (
                  <div className="hidden md:block absolute left-full top-1/2 w-8 h-px bg-accent/30 -translate-y-1/2" />
                )}
              </div>
              <h3 className="display text-lg text-depth mb-4">{s.t}</h3>
              <p className="text-sm text-slate font-ui leading-relaxed px-4">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-x py-40 md:py-60 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-stripes opacity-[0.03] pointer-events-none" />
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
