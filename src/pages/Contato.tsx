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
        title="Fale com a ESNA."
        subtitle="Conte sobre seu projeto. Respondemos em até um dia útil."
      />
      <section className="container-x pb-32 grid md:grid-cols-12 gap-12">
        <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
          {[
            { name: "nome", label: "Nome", type: "text" },
            { name: "empresa", label: "Empresa", type: "text" },
            { name: "email", label: "E-mail", type: "email" },
          ].map((f) => (
            <div key={f.name} className="border-b border-border pb-3 focus-within:border-foreground transition-colors">
              <label className="block mb-2 text-sm font-medium">{f.label}</label>
              <input
                name={f.name}
                type={f.type}
                maxLength={255}
                className="w-full bg-transparent outline-none text-lg"
              />
            </div>
          ))}
          <div className="border-b border-border pb-3 focus-within:border-foreground transition-colors">
            <label className="block mb-2 text-sm font-medium">Mensagem</label>
            <textarea
              name="mensagem"
              rows={5}
              maxLength={1000}
              className="w-full bg-transparent outline-none text-lg resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background hover:bg-ink/90 disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Enviar →"}
          </button>
        </form>

        <aside className="md:col-span-4 md:col-start-9 space-y-8">
          <div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-ochre" /> contato@esna.eng.br</li>
              <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-ochre" /> +55 (00) 0000-0000</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-ochre" /> Brasil</li>
            </ul>
          </div>
          <div className="border border-border p-6">
            <p className="display text-xl">Atendimento técnico</p>
            <p className="text-sm text-muted-foreground mt-2">
              Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado.
            </p>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
