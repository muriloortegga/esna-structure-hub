interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}
export default function PageHero({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="container-x pt-28 md:pt-40 pb-16 md:pb-24">
      {eyebrow && (
        <span className="block text-[11px] uppercase tracking-[0.3em] text-teal font-bold mb-6">
          {eyebrow}
        </span>
      )}
      <h1 className="display text-5xl md:text-8xl max-w-5xl text-foreground font-semibold leading-[0.95]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-10 max-w-2xl text-xl text-slate leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
      <div className="rule mt-20 opacity-50" />
    </section>
  );
}
