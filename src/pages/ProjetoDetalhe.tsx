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
        <Link to="/projetos" className="text-[11px] uppercase tracking-[0.3em] font-bold text-accent inline-flex items-center gap-3 hover:text-foreground transition-colors mb-12 font-mono">
          <ArrowLeft size={14} /> Voltar ao portfólio
        </Link>

        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h1 className="display text-5xl md:text-8xl leading-[0.95] text-foreground">{project.name}</h1>
          </div>
          <div className="md:col-span-4 flex flex-col items-end text-slate font-bold uppercase tracking-[0.2em] text-[10px] font-mono">
             {project.client && <span>Cliente: {project.client}</span>}
             <span className="text-accent mt-1">↳ {project.type}</span>
          </div>
        </div>

        <div className="mt-16 aspect-[16/9] overflow-hidden bg-surf2 relative border border-accent/10">
          <img
            src={project.cover}
            alt={project.name}
            width={1600}
            height={900}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-depth/5 pointer-events-none" />
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-16">
            <section className="space-y-6">
              <span className="earmark block">O Desafio</span>
              <p className="text-xl text-slate font-ui leading-relaxed">{project.description}</p>
            </section>
            <section className="space-y-6">
              <span className="earmark block">A Solução</span>
              <p className="text-xl text-slate font-ui leading-relaxed">{project.solution}</p>
            </section>
            <section className="bg-surf2 p-10 border-l-4 border-accent">
              <span className="earmark mb-4 block">Resultado Técnico</span>
              <p className="display text-3xl md:text-4xl text-foreground leading-tight italic">{project.result}</p>
            </section>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="bg-depth text-foreground p-10 space-y-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold block">↳ Escopo Atuado</span>
              <ul className="space-y-6">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-4 text-sm font-bold uppercase tracking-widest leading-relaxed border-b border-foreground/10 pb-4 last:border-0 last:pb-0 font-mono">
                    <span className="text-accent">+</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-40 border-t border-accent/10 pt-16 flex justify-between items-center">
          <div className="space-y-2">

            <span className="display text-3xl md:text-5xl text-foreground">Explorar mais.</span>
          </div>
          <Link to="/projetos" className="btn-primary inline-flex items-center gap-3">
            Ver Portfólio <ArrowLeft className="rotate-180" size={14} />
          </Link>
        </div>
      </article>
    </Layout>
  );
}
