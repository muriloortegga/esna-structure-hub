interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}
export default function PageHero({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="container-x pt-32 md:pt-48 pb-16 md:pb-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-display text-accent/[0.03] select-none pointer-events-none leading-none tracking-tighter">
        ESNA
      </div>
      {eyebrow && (
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent font-bold">
            ↳ {eyebrow}
          </span>
        </div>
      )}
      <h1 className="display text-6xl md:text-8xl max-w-5xl text-depth leading-[1.05]">
        {title}
      </h1>
      {subtitle && (
        <div className="mt-16 flex gap-8 items-start max-w-3xl">
          <div className="h-12 w-px bg-accent/30 shrink-0 mt-2" />
          <p className="text-xl md:text-2xl text-slate leading-relaxed font-ui">
            {subtitle}
          </p>
        </div>
      )}
    </section>
  );
}
