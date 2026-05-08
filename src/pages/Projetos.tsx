import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projetos() {
  return (
    <Layout>
      <PageHero
        title="Experiência aplicada em projetos reais."
        subtitle="Cada projeto é resolvido como um sistema técnico integrado. Aqui estão os marcos da nossa atuação industrial."
      />
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-48">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className={`group flex flex-col gap-10 ${i % 2 === 1 ? "md:mt-48" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-void border border-black/5">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">{p.type}</span>
                  <div className="h-px flex-grow bg-black/5" />
                  <span className="text-[10px] font-mono font-bold text-void/30 tracking-[0.1em]">2024</span>
                </div>
                <h3 className="text-[32px] md:text-[48px] text-void group-hover:text-slate transition-colors tracking-tighter leading-tight font-medium">
                  <span className="font-light">{p.name.split(' ').slice(0, -1).join(' ')}</span> <span className="font-bold">{p.name.split(' ').slice(-1)}</span>
                </h3>
                <p className="text-[16px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed font-light tracking-tight">
                  {p.description}
                </p>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-void/30 group-hover:text-void group-hover:pl-2 transition-all">
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
