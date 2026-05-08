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
        </div>        <div className="container-x relative z-10 pt-20 md:pt-32 flex flex-col items-center text-center">
          <div className="flex flex-col gap-6 md:gap-8 max-w-5xl items-center">
            <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[1.05] font-sans tracking-tighter text-white animate-reveal [animation-delay:200ms]">
              <span className="font-light">Engenharia integrada para</span> <span className="font-bold">operações</span> <span className="font-light">que exigem</span> <span className="font-bold">precisão.</span>
            </h1>
            <p className="text-[18px] md:text-[24px] text-gray-200 animate-reveal [animation-delay:400ms] max-w-3xl font-sans font-light tracking-tight mb-8 px-4">
              <span className="font-light">Infraestrutura, energia, tecnologia e gestão</span> <span className="font-medium">conectadas em soluções estruturadas</span> <span className="font-light">para ambientes complexos.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-reveal [animation-delay:600ms] w-full sm:w-auto px-6 sm:px-0">
              <Link to="/solucoes" className="btn-esna-primary bg-white text-void hover:bg-gray-200 px-12 py-4">
                Conheça nossas soluções
              </Link>
              <Link to="/projetos" className="border border-white/30 text-white hover:bg-white hover:text-void px-12 py-4 text-[11px] font-mono font-bold uppercase tracking-widest transition-all">
                Ver projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CLIENTS TICKER */}
      <div className="w-full overflow-hidden bg-white py-16 md:py-20 flex border-b border-black/5">
        <div className="flex w-max animate-marquee gap-12 md:gap-24 items-center pr-16">
          {clientLogos.length > 0 ? (
            [...clientLogos, ...clientLogos].map((logo, i) => (
              <img key={i} src={logo} alt="Client Logo" className="max-h-8 md:max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale" />
            ))
          ) : (
            [...clients, ...clients].map((client, i) => (
              <span key={i} className="text-h2 md:text-h1 text-void font-bold tracking-tighter uppercase opacity-30 hover:opacity-100 transition-all cursor-default font-display px-4">
                {client}
              </span>
            ))
          )}
        </div>
      </div>

      {/* BLOCO INSTITUCIONAL / SOBRE (DUPLEX) */}
      <section className="section-white section-padding">
        <div className="container-x grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[56px] lg:text-[64px] text-void leading-[1.1] tracking-tighter">
                <span className="font-light">Estrutura para</span> <span className="font-bold">resolver com eficiência.</span>
              </h2>
            </div>
            <p className="text-[16px] md:text-[20px] text-gray-600 max-w-xl font-light tracking-tight leading-relaxed">
              A ESNA atua na integração entre diferentes disciplinas da engenharia, <span className="font-medium text-void">organizando processos, sistemas e operações</span> com clareza técnica e visão estratégica.
              <br /><br />
              Desenvolvemos soluções completas para empresas que exigem <span className="font-medium text-void">confiabilidade, precisão e capacidade de execução.</span>
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12 mt-4">
              <div className="flex flex-col gap-2 border-t border-black/10 pt-6">
                <span className="text-[24px] md:text-[40px] text-void tracking-tighter font-medium">+10 Anos</span>
                <p className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-mono font-bold">Experiência Industrial</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-black/10 pt-6">
                <span className="text-[24px] md:text-[40px] text-void tracking-tighter font-medium">+50 Projetos</span>
                <p className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-mono font-bold">Entregues com Precisão</p>
              </div>
            </div>
            <Link to="/sobre" className="btn-esna-arrow self-start mt-4 group">
              Conheça nossa metodologia <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square bg-gray-100 border border-black/5">
             <img src={heroImage} className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO / 4 FRENTES (4-COL) */}
      <section className="section-surface section-padding border-t border-black/5">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] md:text-[56px] text-void tracking-tighter font-medium">Soluções que Escalam.</h2>
            </div>
            <Link to="/solucoes" className="btn-esna-arrow group">
              Ver todas as frentes <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "INFRAESTRUTURA", d: "Estruturas técnicas desenvolvidas para sustentar operações com eficiência, organização e capacidade de expansão.", tag: "CIVIL & MECÂNICA", img: p1, link: "/infraestrutura" },
              { t: "ENERGIA", d: "Soluções energéticas integradas para operações que dependem de estabilidade, segurança e desempenho contínuo.", tag: "SUSTENTABILIDADE", img: p3, link: "/energia" },
              { t: "TECH", d: "Automação, monitoramento e inteligência aplicada para operações mais conectadas e eficientes.", tag: "INDÚSTRIA 4.0", img: p2, link: "/tech" },
              { t: "GESTÃO", d: "Planejamento, coordenação e controle operacional para garantir previsibilidade e execução consistente.", tag: "FACILITIES & GESTÃO", img: p4, link: "/gestao" },
            ].map((s) => (
              <Link to={s.link} key={s.t} className="card-surface flex flex-col h-full hover:bg-white transition-all duration-500 group p-0 border border-black/5">
                <div className="w-full h-[240px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-16">
                    <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em]">{s.tag}</span>
                    <div className="h-4 w-4 border-r border-t border-black/10 group-hover:border-void transition-colors" />
                  </div>
                  <h3 className="text-[24px] md:text-[28px] text-void mb-6 tracking-tighter font-medium group-hover:text-slate transition-colors">{s.t}</h3>
                  <p className="text-[15px] text-gray-500 mb-12 flex-grow font-light tracking-tight leading-relaxed">{s.d}</p>
                  <div className="h-px w-full bg-black/5 mb-8" />
                  <span className="text-[11px] font-bold text-void uppercase tracking-[0.2em] font-mono group-hover:pl-2 transition-all">Explorar Solução →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO DIFERENCIAL */}
      <section className="section-void py-32 md:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
        <div className="container-x flex flex-col items-center gap-10 relative z-10">
          <h2 className="text-[32px] md:text-[64px] lg:text-[72px] text-white max-w-4xl tracking-tighter leading-[1.1]">
            <span className="font-light">Integração como</span> <span className="font-bold">método.</span>
          </h2>
          <p className="text-[18px] md:text-[28px] text-gray-400 max-w-3xl font-sans font-light tracking-tight leading-relaxed px-4">
            A capacidade de <span className="font-medium text-white">integrar diferentes áreas</span> da engenharia permite à ESNA desenvolver <span className="font-medium text-white">soluções mais eficientes</span>, reduzir ruídos operacionais e garantir maior controle em <span className="font-medium text-white">todas as etapas do projeto</span>.
          </p>
        </div>
      </section>

      {/* BLOCO DE PROJETOS (DARK) */}
      <section className="section-white section-padding">
        <div className="container-x">
          <div className="flex flex-col gap-6 mb-16 md:mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[56px] text-void tracking-tighter font-medium">Projetos que validam nossa atuação.</h2>
            <p className="text-[16px] md:text-[20px] text-gray-500 font-sans font-light tracking-tight px-4 leading-relaxed">
              Experiência aplicada em operações que exigem organização, confiabilidade e capacidade técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {projects.slice(0, 2).map((p) => (
              <Link to={`/projetos/${p.slug}`} key={p.slug} className="group flex flex-col gap-10">
                <div className="relative overflow-hidden aspect-[16/10] bg-void border border-black/5">
                  <img
                    src={p.cover}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono font-bold text-void/40 tracking-[0.2em] uppercase">{p.type}</span>
                    <div className="h-px flex-grow bg-black/5" />
                  </div>
                  <h3 className="text-[28px] md:text-[40px] text-void group-hover:text-slate transition-colors tracking-tighter font-medium leading-tight">
                    {p.name}
                  </h3>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-void/30 group-hover:text-void transition-colors">Ver Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-surface py-32 md:py-48 text-center border-t border-black/5">
        <div className="container-x flex flex-col items-center gap-12">
          <h2 className="text-[36px] md:text-[64px] lg:text-[80px] text-void max-w-5xl tracking-tighter leading-[1.05]">
            <span className="font-light">Vamos</span> <span className="font-bold">estruturar</span> <span className="font-light">seu próximo projeto.</span>
          </h2>
          <p className="text-[18px] md:text-[24px] text-gray-500 font-light tracking-tight max-w-3xl leading-relaxed px-4">
            Entre em contato com a ESNA e desenvolva soluções preparadas para operar com <span className="font-medium text-void">eficiência, clareza e escala.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full sm:w-auto px-6 sm:px-0">
            <Link to="/contato" className="btn-esna-primary bg-void text-white hover:bg-slate px-16 py-5 text-[12px] font-mono font-bold uppercase tracking-[0.2em] shadow-xl shadow-void/10">
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
