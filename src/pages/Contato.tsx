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
        <div className="container-x grid lg:grid-cols-12 gap-16 md:gap-24">
          <form onSubmit={onSubmit} className="lg:col-span-7 flex flex-col gap-12 md:gap-16">
            {[
              { name: "nome", label: "NOME COMPLETO", type: "text" },
              { name: "empresa", label: "EMPRESA / ORGANIZAÇÃO", type: "text" },
              { name: "email", label: "E-MAIL CORPORATIVO", type: "email" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-4">
                <label className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">
                  {f.label}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  required
                  className="w-full bg-transparent border-b border-black/10 py-4 text-[18px] md:text-[24px] text-void focus:border-void outline-none transition-all font-light tracking-tight placeholder:text-void/10"
                />
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">
                MENSAGEM / DESCRITIVO DO DESAFIO
              </label>
              <textarea
                name="mensagem"
                rows={4}
                required
                className="w-full bg-transparent border-b border-black/10 py-4 text-[18px] md:text-[24px] text-void focus:border-void outline-none transition-all resize-none font-light tracking-tight placeholder:text-void/10"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-void text-white hover:bg-slate px-16 py-5 text-[12px] font-mono font-bold uppercase tracking-[0.2em] shadow-xl shadow-void/10 self-start transition-all disabled:opacity-50"
            >
              {loading ? "Processando…" : "Enviar Mensagem"}
            </button>
          </form>

          <aside className="lg:col-span-5 flex flex-col gap-20">
            <div className="flex flex-col gap-10">
              <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase border-l-2 border-void pl-4">Canais Diretos</span>
              <ul className="flex flex-col gap-10 text-[18px] md:text-[24px] text-void font-light tracking-tight">
                <li className="flex flex-col gap-3 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">E-MAIL</span>
                  <span className="hover:text-slate transition-colors cursor-pointer truncate">leonardo.neres@esnaengenharia.com</span>
                </li>
                <li className="flex flex-col gap-3 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">TELEFONE</span>
                  <span className="hover:text-slate transition-colors cursor-pointer">(13) 98123-6332</span>
                </li>
                <li className="flex flex-col gap-3 group">
                  <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">LOCALIZAÇÃO</span>
                  <span>Santos — São Paulo — Brasil</span>
                </li>
              </ul>
            </div>
            
            <div className="card-surface p-10 md:p-12 bg-surface border-black/5 relative overflow-hidden">
              <h3 className="text-[24px] md:text-[28px] text-void mb-6 tracking-tighter font-medium relative z-10">Atendimento técnico</h3>
              <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-light tracking-tight relative z-10">
                Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado para agilizar o suporte e garantir a continuidade operacional.
              </p>
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                 <div className="w-24 h-24 border-2 border-void rotate-12" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
