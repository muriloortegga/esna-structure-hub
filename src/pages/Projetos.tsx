import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projetos() {
  return (
    <Layout>
      <PageHero
        eyebrow="Portfólio"
        title="Experiência aplicada em projetos reais."
        subtitle="Cada projeto é resolvido como um sistema técnico integrado. Aqui estão os marcos da nossa atuação."
      />
      <section className="container-x pb-48">
        <div className="grid md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-32">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-surf2 relative border border-accent/10">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-depth/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-8 flex items-center justify-between border-b border-accent/20 pb-6">
                <h3 className="display text-3xl text-foreground">{p.name}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold font-mono">
                  ↳ {p.type}
                </span>
              </div>
              <p className="mt-6 text-slate text-lg font-ui max-w-xl leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
