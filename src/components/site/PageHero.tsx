interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}
export default function PageHero({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="container-x pt-28 md:pt-40 pb-16 md:pb-24">
      {eyebrow && (
        <span className="earmark mb-8">
          {eyebrow}
        </span>
      )}
      <h1 className="display text-6xl md:text-8xl max-w-5xl text-foreground leading-[1.05]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-12 max-w-2xl text-xl text-slate leading-relaxed font-ui">
          {subtitle}
        </p>
      )}
      <div className="rule-thin mt-20" />
    </section>
  );
}
