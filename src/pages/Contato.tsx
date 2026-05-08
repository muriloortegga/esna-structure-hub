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
        subtitle="Inicie seu projeto com o suporte técnico de quem entende de integração. Respondemos em até um dia útil."
      />
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-12 gap-16 md:gap-24">
          <form onSubmit={onSubmit} className="md:col-span-7 flex flex-col gap-12">
            {[
              { name: "nome", label: "NOME COMPLETO", type: "text" },
              { name: "empresa", label: "EMPRESA / ORGANIZAÇÃO", type: "text" },
              { name: "email", label: "E-MAIL CORPORATIVO", type: "email" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-3">
                <label className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">
                  {f.label}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-4 text-h2 text-void focus:border-void outline-none transition-all font-light tracking-tight"
                />
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">
                MENSAGEM / DESCRITIVO DO DESAFIO
              </label>
              <textarea
                name="mensagem"
                rows={4}
                required
                className="w-full bg-transparent border-b border-black/10 py-4 text-h2 text-void focus:border-void outline-none transition-all resize-none font-light tracking-tight"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-esna-primary self-start px-16 py-4 mt-4"
            >
              {loading ? "Processando…" : "Enviar Mensagem"}
            </button>
          </form>

          <aside className="md:col-span-5 flex flex-col gap-20">
            <div className="flex flex-col gap-10">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-void/30">Canais Diretos</span>
              <ul className="flex flex-col gap-8 text-h2 text-void font-light tracking-tight">
                <li className="flex flex-col gap-2 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">E-MAIL</span>
                  <span className="hover:text-slate transition-colors cursor-pointer truncate">leonardo.neres@esnaengenharia.com</span>
                </li>
                <li className="flex flex-col gap-2 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">TELEFONE</span>
                  <span className="hover:text-slate transition-colors cursor-pointer">(13) 98123-6332</span>
                </li>
                <li className="flex flex-col gap-2 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">LOCALIZAÇÃO</span>
                  <span>Santos — São Paulo — Brasil</span>
                </li>
              </ul>
            </div>
            
            <div className="card-surface p-12 bg-pale border-black/5">
              <h3 className="text-h1 text-void mb-6 tracking-tighter font-medium">Atendimento técnico</h3>
              <p className="text-body text-gray-600 leading-relaxed font-light tracking-tight">
                Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado para agilizar o suporte e garantir a continuidade operacional.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
