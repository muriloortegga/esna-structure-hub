interface Props {
  title: string;
  subtitle?: string;
}
export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="section-padding bg-white overflow-hidden border-b border-border-sutil mt-[52px]">
      <div className="container-x">

        <h1 className="text-display text-void max-w-4xl animate-reveal [animation-delay:200ms]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-h1 text-gray-500 max-w-3xl animate-reveal [animation-delay:400ms]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
