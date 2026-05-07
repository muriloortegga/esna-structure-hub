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
        subtitle="Cada projeto é resolvido como um sistema técnico integrado. Aqui estão os marcos da nossa atuação industrial."
      />
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-40">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className={`group flex flex-col gap-8 ${i % 2 === 1 ? "md:mt-48" : ""}`}
            >
              <div className="card-surface p-0 overflow-hidden aspect-[16/10] bg-void">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="earmark-tag border border-void/10">{p.type}</span>
                  <span className="text-caption text-gray-400">Impact Study // 2024</span>
                </div>
                <h3 className="text-display text-void group-hover:underline underline-offset-8 decoration-1">
                  {p.name}
                </h3>
                <p className="text-body text-gray-600 max-w-xl leading-relaxed">
                  {p.description}
                </p>
                <span className="text-nav text-void mt-4 group-hover:translate-x-2 transition-transform">
                  Ler Estudo de Impacto →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
