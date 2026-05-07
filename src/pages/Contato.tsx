import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("E-mail inválido").max(255),
  mensagem: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

export default function Contato() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mensagem enviada. Em breve entraremos em contato.");
    }, 700);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contato"
        title="Fale com a ESNA."
        subtitle="Inicie seu projeto com o suporte técnico de quem entende de integração. Respondemos em até um dia útil."
      />
      <section className="container-x pb-48 grid md:grid-cols-12 gap-16">
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-10">
          {[
            { name: "nome", label: "Nome completo", type: "text" },
            { name: "empresa", label: "Empresa / Organização", type: "text" },
            { name: "email", label: "E-mail corporativo", type: "email" },
          ].map((f) => (
            <div key={f.name} className="border-b-2 border-border pb-4 focus-within:border-teal transition-colors group">
              <label className="block mb-3 text-[11px] uppercase tracking-[0.2em] font-bold text-slate group-focus-within:text-teal transition-colors">
                {f.label}
              </label>
              <input
                name={f.name}
                type={f.type}
                maxLength={255}
                required
                className="w-full bg-transparent outline-none text-2xl font-medium text-foreground placeholder:text-slate/30"
              />
            </div>
          ))}
          <div className="border-b-2 border-border pb-4 focus-within:border-teal transition-colors group">
            <label className="block mb-3 text-[11px] uppercase tracking-[0.2em] font-bold text-slate group-focus-within:text-teal transition-colors">
              Mensagem / Descritivo do Desafio
            </label>
            <textarea
              name="mensagem"
              rows={5}
              maxLength={1000}
              required
              className="w-full bg-transparent outline-none text-2xl font-medium text-foreground resize-none placeholder:text-slate/30"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-teal text-background font-bold uppercase text-sm tracking-[0.2em] hover:bg-ink transition-all duration-500 disabled:opacity-60 shadow-lg shadow-teal/5"
          >
            {loading ? "Processando…" : "Enviar Mensagem"}
          </button>
        </form>

        <aside className="md:col-span-4 md:col-start-9 space-y-12">
          <div>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-slate">
              <li className="flex items-center gap-4 group cursor-pointer hover:text-teal transition-colors">
                <Mail size={18} className="text-teal" /> contato@esna.eng.br
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-teal transition-colors">
                <Phone size={18} className="text-teal" /> +55 (00) 0000-0000
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-teal transition-colors">
                <MapPin size={18} className="text-teal" /> Brasil
              </li>
            </ul>
          </div>
          <div className="bg-slate/5 border border-border p-8 md:p-10 space-y-4">
            <p className="display text-2xl font-semibold">Atendimento técnico</p>
            <p className="text-slate font-medium leading-relaxed">
              Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado para agilizar o suporte.
            </p>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
