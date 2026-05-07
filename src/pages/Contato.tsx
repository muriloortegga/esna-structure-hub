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
          <form onSubmit={onSubmit} className="md:col-span-7 flex flex-col gap-10">
            {[
              { name: "nome", label: "Nome completo", type: "text" },
              { name: "empresa", label: "Empresa / Organização", type: "text" },
              { name: "email", label: "E-mail corporativo", type: "email" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col gap-4">
                <label className="text-caption text-gray-500">
                  {f.label}
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  required
                  className="w-full bg-surface border border-border-sutil rounded-sm px-6 py-4 text-h2 text-void focus:border-void outline-none transition-all"
                />
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <label className="text-caption text-gray-500">
                Mensagem / Descritivo do Desafio
              </label>
              <textarea
                name="mensagem"
                rows={5}
                required
                className="w-full bg-surface border border-border-sutil rounded-sm px-6 py-4 text-h2 text-void focus:border-void outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-palantir-primary self-start px-12 py-4"
            >
              {loading ? "Processando…" : "Enviar Mensagem"}
            </button>
          </form>

          <aside className="md:col-span-5 flex flex-col gap-16">
            <div className="flex flex-col gap-8">
              <span className="text-nav text-void border-l-2 border-void pl-4">Canais Diretos</span>
              <ul className="flex flex-col gap-6 text-body text-gray-600">
                <li className="flex items-center gap-4 group">
                  <Mail size={18} className="text-void" /> 
                  <span className="hover:text-void transition-colors cursor-pointer">leonardo.neres@esnaengenharia.com</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={18} className="text-void" /> 
                  <span className="hover:text-void transition-colors cursor-pointer">(13) 98123-6332</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <MapPin size={18} className="text-void" /> 
                  <span>Santos — São Paulo — Brasil</span>
                </li>
              </ul>
            </div>
            
            <div className="card-surface p-10 bg-surface/50 border-void/10">
              <h3 className="text-h1 text-void mb-4">Atendimento técnico</h3>
              <p className="text-body text-gray-500 leading-relaxed">
                Para projetos em andamento, encaminhe diretamente ao time responsável pelo escopo contratado para agilizar o suporte e garantir a continuidade operacional.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
