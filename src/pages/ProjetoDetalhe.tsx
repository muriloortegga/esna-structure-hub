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
      <article className="container-x pt-24 md:pt-40 pb-32">
        <Link to="/projetos" className="text-[11px] uppercase tracking-[0.3em] font-bold text-void/40 inline-flex items-center gap-3 hover:text-void transition-all mb-16 md:mb-20 font-mono group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao portfólio
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <h1 className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.95] text-void tracking-tighter">
              <span className="font-light">{project.name.split(' ').slice(0, -1).join(' ')}</span> <br />
              <span className="font-bold">{project.name.split(' ').slice(-1)}</span>
            </h1>
          </div>
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end text-slate font-bold uppercase tracking-[0.2em] text-[10px] font-mono mt-8 lg:mt-0">
             {project.client && <span className="text-void/40">Cliente: {project.client}</span>}
             <span className="text-void mt-2">↳ {project.type}</span>
          </div>
        </div>

        <div className="mt-16 md:mt-24 aspect-[16/9] overflow-hidden bg-gray-100 relative border border-black/5">
          <img
            src={project.cover}
            alt={project.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 bg-void/5 pointer-events-none" />
        </div>

        <div className="mt-20 md:mt-32 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7 space-y-20 md:space-y-32">
            <section className="space-y-8">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">O DESAFIO</span>
              <p className="text-[20px] md:text-[28px] text-gray-600 font-light leading-relaxed tracking-tight">{project.description}</p>
            </section>
            <section className="space-y-8">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">A SOLUÇÃO</span>
              <p className="text-[20px] md:text-[28px] text-gray-600 font-light leading-relaxed tracking-tight">{project.solution}</p>
            </section>
            <section className="bg-surface p-12 md:p-16 border-l-4 border-void relative overflow-hidden">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase mb-8 block">Resultado Técnico</span>
              <p className="text-[28px] md:text-[40px] text-void leading-tight tracking-tighter font-medium italic relative z-10">"{project.result}"</p>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <div className="w-32 h-32 border-4 border-void rotate-45" />
              </div>
            </section>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-void text-white p-12 md:p-16 space-y-12 md:sticky md:top-24">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold block">↳ Escopo Atuado</span>
              <ul className="space-y-8">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-4 text-[12px] font-bold uppercase tracking-[0.2em] leading-relaxed border-b border-white/5 pb-6 last:border-0 last:pb-0 font-mono">
                    <span className="text-white/20">+</span>
                    <span className="flex-grow">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-40 md:mt-64 border-t border-black/5 pt-20 flex flex-col sm:flex-row justify-between items-center gap-12">
          <div className="text-center sm:text-left">
            <span className="text-[32px] md:text-[56px] text-void tracking-tighter leading-none">
              <span className="font-light">Explorar</span> <span className="font-bold">mais.</span>
            </span>
          </div>
          <Link to="/projetos" className="bg-void text-white hover:bg-slate px-16 py-5 text-[12px] font-mono font-bold uppercase tracking-[0.2em] shadow-xl shadow-void/10 group flex items-center gap-4 transition-all">
            Ver Portfólio <ArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1" size={14} />
          </Link>
        </div>
      </article>
    </Layout>
  );
}
