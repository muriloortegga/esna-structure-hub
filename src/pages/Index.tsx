import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/site/Layout";
import heroImage from "@/assets/hero-structure.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { projects } from "@/data/projects";

// Import all files from the hero-bg directory automatically using relative path for better Vite compatibility
const heroBackgrounds = import.meta.glob('../assets/hero-bg/*.{gif,mp4,webm,jpg,png}', { eager: true, query: '?url', import: 'default' });
const bgUrls = Object.values(heroBackgrounds) as string[];

// Import client logos
const clientFiles = import.meta.glob('../assets/clients/*.{png,svg,jpg,jpeg,webp}', { eager: true, import: 'default' });
const clientLogos = Object.values(clientFiles) as string[];

const Index = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    if (bgUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgUrls.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Clients list for ticker fallback
  const clients = ["Schuler", "Santander", "Petribu", "FVO", "Ypê", "Ambev", "BRF", "Gerdau"];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="h-screen bg-void flex flex-col justify-center relative overflow-hidden section-padding mt-0">
        <div className="absolute inset-0 z-0 bg-black">
          {bgUrls.length > 0 ? (
            bgUrls.map((url, index) => {
              // Extract the base URL without query parameters to check extension
              const cleanUrl = url.split('?')[0].toLowerCase();
              const isVideo = cleanUrl.endsWith('.mp4') || cleanUrl.endsWith('.webm');
              
              return isVideo ? (
                <video
                  key={url}
                  src={url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentBg ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <img
                  key={url}
                  src={url}
                  alt="ESNA Background"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentBg ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://videos.pexels.com/video-files/3201509/3201509-hd_1920_1080_25fps.mp4"
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-x relative z-10 pt-32 flex flex-col items-start justify-center h-full">
          <div className="flex flex-col gap-8 max-w-4xl">
            <h1 className="text-[56px] md:text-[80px] leading-[1.05] font-display font-medium tracking-tighter text-white animate-reveal [animation-delay:200ms]">
              Engenharia integrada para operações que exigem precisão.
            </h1>
            <p className="text-[20px] md:text-[24px] text-gray-300 animate-reveal [animation-delay:400ms] max-w-3xl font-sans font-light tracking-tight mb-8">
              Infraestrutura, energia, tecnologia e gestão conectadas em soluções estruturadas para ambientes complexos.
            </p>
            
            <div className="flex flex-wrap gap-6 animate-reveal [animation-delay:600ms]">
              <Link to="/solucoes" className="btn-esna-primary bg-white text-void hover:bg-gray-200 px-10 py-4">
                Conheça nossas soluções
              </Link>
              <Link to="/projetos" className="border border-white text-white hover:bg-white hover:text-void px-10 py-4 text-[12px] font-mono uppercase tracking-widest transition-all">
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CLIENTS TICKER */}
      <div className="w-full overflow-hidden bg-white py-16 flex">
        <div className="flex w-max animate-marquee gap-20 items-center pr-20">
          {clientLogos.length > 0 ? (
            [...clientLogos, ...clientLogos].map((logo, i) => (
              <img key={i} src={logo} alt="Client Logo" className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale-0" />
            ))
          ) : (
            [...clients, ...clients].map((client, i) => (
              <span key={i} className="text-h2 text-void font-bold tracking-tighter uppercase opacity-60 hover:opacity-100 transition-all cursor-default">
                {client}
              </span>
            ))
          )}
        </div>
      </div>

      {/* BLOCO INSTITUCIONAL / SOBRE */}
      <section className="section-white py-32 md:py-48">
        <div className="container-x grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-display text-void leading-tight">
              Estrutura para resolver com eficiência.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8 pt-2">
            <p className="text-[20px] md:text-[28px] text-gray-800 leading-relaxed font-sans font-light tracking-tight">
              A ESNA atua na integração entre diferentes disciplinas da engenharia, organizando processos, sistemas e operações com clareza técnica e visão estratégica.
            </p>
            <p className="text-[20px] md:text-[28px] text-gray-800 leading-relaxed font-sans font-light tracking-tight">
              Desenvolvemos soluções completas para empresas que exigem confiabilidade, precisão e capacidade de execução.
            </p>
            <Link to="/sobre" className="btn-esna-arrow mt-8 self-start">
              Conheça nossa metodologia →
            </Link>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO / 4 FRENTES */}
      <section className="section-surface py-32 md:py-48 border-y border-black/5">
        <div className="container-x">
          <div className="flex flex-col gap-24">
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              {[
                { t: "Infraestrutura", d: "Estruturas técnicas desenvolvidas para sustentar operações com eficiência, organização e capacidade de expansão.", img: p1, link: "/infraestrutura" },
                { t: "Energia", d: "Soluções energéticas integradas para operações que dependem de estabilidade, segurança e desempenho contínuo.", img: p3, link: "/energia" },
                { t: "Tech", d: "Automação, monitoramento e inteligência aplicada para operações mais conectadas e eficientes.", img: p2, link: "/tech" },
                { t: "Gestão", d: "Planejamento, coordenação e controle operacional para garantir previsibilidade e execução consistente.", img: p4, link: "/gestao" },
              ].map((s, i) => (
                <Link to={s.link} key={s.t} className="group flex flex-col gap-8 block">
                  <div className="w-full aspect-[4/3] overflow-hidden bg-gray-200">
                    <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-[12px] font-mono tracking-widest text-gray-400 uppercase">0{i + 1}</span>
                    <h3 className="text-[32px] font-display text-void font-medium tracking-tight group-hover:underline underline-offset-4 decoration-1">{s.t}</h3>
                    <p className="text-[18px] text-gray-600 leading-relaxed max-w-lg">{s.d}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BLOCO DIFERENCIAL */}
      <section className="section-void py-32 md:py-48 text-center flex flex-col items-center justify-center">
        <div className="container-x flex flex-col items-center gap-10 max-w-5xl">
          <h2 className="text-[56px] md:text-[80px] leading-[1.05] font-display font-medium tracking-tighter text-white">
            Integração como método.
          </h2>
          <p className="text-[20px] md:text-[32px] text-gray-300 leading-relaxed font-sans font-light tracking-tight">
            A capacidade de integrar diferentes áreas da engenharia permite à ESNA desenvolver soluções mais eficientes, reduzir ruídos operacionais e garantir maior controle em todas as etapas do projeto.
          </p>
        </div>
      </section>

      {/* BLOCO DE PROJETOS */}
      <section className="section-white py-32 md:py-48">
        <div className="container-x">
          <div className="flex flex-col gap-6 mb-24 max-w-3xl">
            <h2 className="text-display text-void leading-tight">Projetos que validam nossa atuação.</h2>
            <p className="text-[20px] md:text-[24px] text-gray-600 font-light tracking-tight">
              Experiência aplicada em operações que exigem organização, confiabilidade e capacidade técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.slice(0, 2).map((p) => (
              <Link to={`/projetos/${p.slug}`} key={p.slug} className="group flex flex-col gap-8">
                <div className="overflow-hidden aspect-[16/11] bg-gray-100">
                  <img
                    src={p.cover}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-void">{p.type}</span>
                    <span className="w-8 h-px bg-black/20"></span>
                    <span className="text-[14px] text-gray-500 font-light">Case Study</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] leading-tight text-void font-medium tracking-tight group-hover:underline underline-offset-8 decoration-1">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Link to="/projetos" className="btn-esna-arrow text-[14px]">
              Ver portfólio completo →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-surface py-32 md:py-48 border-t border-black/10 text-center">
        <div className="container-x flex flex-col items-center gap-12 max-w-4xl">
          <h2 className="text-[48px] md:text-[72px] leading-[1.05] font-display font-medium tracking-tighter text-void">
            Vamos estruturar seu próximo projeto.
          </h2>
          <p className="text-[20px] md:text-[28px] text-gray-600 font-light tracking-tight">
            Entre em contato com a ESNA e desenvolva soluções preparadas para operar com eficiência, clareza e escala.
          </p>
          <Link to="/contato" className="btn-esna-primary bg-void text-white hover:bg-gray-800 px-12 py-5 mt-4 text-[14px]">
            Entrar em contato
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
