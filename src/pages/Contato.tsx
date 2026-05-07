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
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-12">
          {[
            { name: "nome", label: "Nome completo", type: "text" },
            { name: "empresa", label: "Empresa / Organização", type: "text" },
            { name: "email", label: "E-mail corporativo", type: "email" },
          ].map((f) => (
            <div key={f.name} className="border-b border-accent/20 pb-4 focus-within:border-accent transition-colors group">
              <label className="block mb-4 text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-slate group-focus-within:text-accent transition-colors">
                ↳ {f.label}
              </label>
              <input
                name={f.name}
                type={f.type}
                maxLength={255}
                required
                className="w-full bg-transparent outline-none text-3xl text-foreground placeholder:text-slate/20 font-ui"
              />
            </div>
          ))}
          <div className="border-b border-accent/20 pb-4 focus-within:border-accent transition-colors group">
            <label className="block mb-4 text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-slate group-focus-within:text-accent transition-colors">
              ↳ Mensagem / Descritivo do Desafio
            </label>
            <textarea
              name="mensagem"
              rows={4}
              maxLength={1000}
              required
              className="w-full bg-transparent outline-none text-3xl text-foreground resize-none placeholder:text-slate/20 font-ui"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full md:w-auto px-12"
          >
            {loading ? "Processando…" : "Enviar Mensagem"}
          </button>
        </form>

        <aside className="md:col-span-4 md:col-start-9 space-y-16">
          <div className="space-y-10">
            <span className="earmark">Canais Diretos</span>
            <ul className="space-y-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
              <li className="flex items-center gap-4 group cursor-pointer hover:text-accent transition-colors">
                <Mail size={16} className="text-accent" /> leonardo.neres@esnaengenharia.com
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" /> (13) 98123-6332
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-accent transition-colors">
                <MapPin size={16} className="text-accent" /> Santos — São Paulo — Brasil
              </li>
            </ul>
          </div>
          <div className="bg-surf2 border border-accent/10 p-10 space-y-6">
            <p className="display text-3xl text-foreground">Atendimento técnico</p>
            <p className="text-slate font-ui leading-relaxed">
              Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado para agilizar o suporte.
            </p>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
