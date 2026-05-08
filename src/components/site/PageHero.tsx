interface Props {
  title: string;
  subtitle?: string;
}
export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="section-padding bg-white overflow-hidden border-b border-black/5 mt-[60px] py-32 md:py-48">
      <div className="container-x">
        <h1 className="text-display text-[48px] md:text-[80px] leading-[1.05] text-void max-w-5xl animate-reveal [animation-delay:200ms] tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-10 text-[20px] md:text-[28px] text-gray-500 max-w-4xl animate-reveal [animation-delay:400ms] font-light tracking-tight leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
