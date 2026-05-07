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
      <article className="container-x pt-12 pb-24">
        <Link to="/projetos" className="link-underline text-sm inline-flex items-center gap-2">
          <ArrowLeft size={14} /> Voltar aos projetos
        </Link>

        <div className="mt-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h1 className="display text-4xl md:text-6xl">{project.name}</h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-muted-foreground space-y-1 self-end text-sm">
            {project.client && <div>{project.client}</div>}
          </div>
        </div>

        <div className="mt-12 aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={project.cover}
            alt={project.name}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-12">
            <section>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </section>
            <section>
              <p className="text-lg leading-relaxed">{project.solution}</p>
            </section>
            <section>
              <p className="display text-2xl md:text-3xl">{project.result}</p>
            </section>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="border border-border p-8">
              <ul className="space-y-3">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-3 text-sm">
                    <span className="w-1 h-1 bg-ochre mt-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-24 border-t border-border pt-10 flex justify-between items-center">
          <span className="display text-2xl">Próximo projeto.</span>
          <Link to="/projetos" className="link-underline text-sm">Ver todos →</Link>
        </div>
      </article>
    </Layout>
  );
}
