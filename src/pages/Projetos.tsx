import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projetos() {
  return (
    <Layout>
      <PageHero
        title="Experiência aplicada em projetos reais."
        subtitle="Cada projeto é resolvido como um sistema. Aqui estão alguns deles."
      />
      <section className="container-x pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="display text-2xl md:text-3xl">{p.name}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.type}
                </span>
              </div>
              <p className="mt-3 text-muted-foreground max-w-md">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
