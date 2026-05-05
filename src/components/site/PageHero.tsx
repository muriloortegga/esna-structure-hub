interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}
export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="container-x pt-20 md:pt-32 pb-16 md:pb-24">
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className="display text-5xl md:text-7xl max-w-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
      <div className="rule mt-16" />
    </section>
  );
}
