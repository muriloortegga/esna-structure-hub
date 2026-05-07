import Layout from "@/components/site/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjetoDetalhe() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projetos" replace />;

  return (
    <Layout>
      <article className="container-x pt-24 md:pt-32 pb-32">
        <Link to="/projetos" className="text-[11px] uppercase tracking-[0.3em] font-bold text-teal inline-flex items-center gap-3 hover:text-ink transition-colors mb-12">
          <ArrowLeft size={14} /> Voltar ao portfólio
        </Link>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h1 className="display text-5xl md:text-8xl font-semibold leading-[0.95] text-foreground">{project.name}</h1>
          </div>
          <div className="md:col-span-4 flex flex-col items-end text-slate font-bold uppercase tracking-[0.2em] text-[10px]">
             {project.client && <span>Cliente: {project.client}</span>}
             <span className="text-teal mt-1">{project.type}</span>
          </div>
        </div>

        <div className="mt-16 aspect-[16/9] overflow-hidden bg-slate/10 relative">
          <img
            src={project.cover}
            alt={project.name}
            width={1600}
            height={900}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-teal/5 pointer-events-none" />
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-16">
            <section className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold block">O Desafio</span>
              <p className="text-xl text-slate font-medium leading-relaxed">{project.description}</p>
            </section>
            <section className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold block">A Solução</span>
              <p className="text-xl text-slate font-medium leading-relaxed">{project.solution}</p>
            </section>
            <section className="bg-slate/5 p-10 border-l-4 border-teal">
              <span className="text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-4 block">Resultado Técnico</span>
              <p className="display text-3xl md:text-4xl font-semibold text-foreground leading-tight italic">{project.result}</p>
            </section>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="bg-ink text-background p-10 space-y-8">
              <span className="text-[11px] uppercase tracking-[0.3em] text-mint font-bold block">Escopo Atuado</span>
              <ul className="space-y-6">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-4 text-sm font-bold uppercase tracking-widest leading-relaxed border-b border-background/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-mint">+</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-40 border-t border-border pt-16 flex justify-between items-center">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-slate font-bold block">Projetos</span>
            <span className="display text-3xl md:text-5xl font-semibold">Explorar mais.</span>
          </div>
          <Link to="/projetos" className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-background font-bold uppercase text-xs tracking-widest hover:bg-ink transition-all duration-300">
            Ver Portfólio <ArrowLeft className="rotate-180" size={14} />
          </Link>
        </div>
      </article>
    </Layout>
  );
}
