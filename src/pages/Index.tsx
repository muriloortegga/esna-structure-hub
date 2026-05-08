import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Zap, Cpu, Building2, BarChart } from "lucide-react";
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

        <div className="container-x relative z-10 pt-32 flex flex-col items-center text-center">
          <div className="flex flex-col gap-6 max-w-5xl items-center">
            <h1 className="text-[48px] md:text-[72px] leading-[1.1] font-sans font-medium tracking-tight text-white animate-reveal [animation-delay:200ms]">
              Com engenharia integrada para toda decisão estrutural.
            </h1>
            <p className="text-[20px] md:text-[24px] text-gray-200 animate-reveal [animation-delay:400ms] max-w-3xl font-sans mb-8">
              Projetamos, estruturamos e executamos sistemas complexos onde a precisão técnica encontra a eficiência operacional absoluta.
            </p>
            
            {/* Floating Units */}
            <div className="flex flex-wrap justify-center gap-4 animate-reveal [animation-delay:600ms]">
              {[
                { label: "Energia", icon: Zap, link: "/energia" },
                { label: "Automação", icon: Cpu, link: "/tech" },
                { label: "Infra", icon: Building2, link: "/infraestrutura" },
                { label: "Gestão", icon: BarChart, link: "/gestao" },
              ].map((s) => (
                <Link 
                  key={s.label} 
                  to={s.link}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-sans font-medium"
                >
                  <s.icon size={16} className="text-gray-300" />
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CLIENTS TICKER */}
      <div className="w-full overflow-hidden bg-white py-12 flex">
        <div className="flex w-max animate-marquee gap-16 items-center pr-16">
          {clientLogos.length > 0 ? (
            [...clientLogos, ...clientLogos].map((logo, i) => (
              <img key={i} src={logo} alt="Client Logo" className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale-0" />
            ))
          ) : (
            [...clients, ...clients].map((client, i) => (
              <span key={i} className="text-h2 text-void font-bold tracking-tighter uppercase opacity-80 hover:opacity-100 hover:text-blue-600 transition-all cursor-default">
                {client}
              </span>
            ))
          )}
        </div>
      </div>

      {/* FEATURE SECTION (DUPLEX) */}
      <section className="section-white section-padding">
        <div className="container-x grid md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">

              <h2 className="text-display text-void leading-tight">
                Engenharia como sistema de governança.
              </h2>
            </div>
            <p className="text-body text-gray-600 max-w-xl">
              Não executamos apenas tarefas avulsas. Entregamos estrutura. A ESNA atua na integração total de disciplinas, transformando complexidade em vantagem operacional para grandes indústrias e projetos de mission-critical.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-2 border-t border-black/10 pt-4">
                <span className="text-h2 text-void">+10 Anos</span>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono font-bold">Experiência Industrial</p>
              </div>
              <div className="flex flex-col gap-2 border-t border-black/10 pt-4">
                <span className="text-h2 text-void">+50 Projetos</span>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono font-bold">Entregues com Precisão</p>
              </div>
            </div>
            <Link to="/sobre" className="btn-esna-arrow self-start mt-4">
              Conheça nossa metodologia →
            </Link>
          </div>
          <div className="p-0 overflow-hidden aspect-video bg-gray-200">
             <img src={heroImage} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID (4-COL) */}
      <section className="section-surface section-padding">
        <div className="container-x">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="flex flex-col gap-4">

              <h2 className="text-display text-void">Soluções que Escalam.</h2>
            </div>
            <Link to="/solucoes" className="btn-esna-arrow">Ver todas as frentes →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "ESNA INFRA", d: "Caldeiraria, mecânica e estruturas de alta complexidade.", tag: "CIVIL & MECÂNICA", img: p1, link: "/infraestrutura" },
              { t: "ESNA TECH", d: "Automação, robótica e integração Industry 4.0.", tag: "INDÚSTRIA 4.0", img: p2, link: "/tech" },
              { t: "ESNA ENERGY", d: "Eficiência energética e infraestrutura elétrica industrial.", tag: "SUSTENTABILIDADE", img: p3, link: "/energia" },
              { t: "ESNA CORP", d: "Gestão estratégica, facilities, PCM e coordenação de grandes obras.", tag: "FACILITIES & GESTÃO", img: p4, link: "/gestao" },
            ].map((s) => (
              <Link to={s.link} key={s.t} className="card-surface flex flex-col h-full hover:bg-white transition-colors group p-0 block">
                <div className="w-full h-[200px] overflow-hidden">
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-12">
                    <span className="earmark-tag bg-void text-white px-2 py-1">{s.tag}</span>
                    <div className="h-4 w-4 border-r border-t border-black/20 group-hover:border-black transition-colors" />
                  </div>
                  <h3 className="text-h1 text-void mb-4">{s.t}</h3>
                  <p className="text-body text-gray-600 mb-8 flex-grow">{s.d}</p>
                  <div className="h-px w-full bg-black/10 mb-6" />
                  <span className="text-[11px] font-bold text-void uppercase tracking-widest group-hover:underline">Explorar Solução</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT / NEWS CARDS (DARK) */}
      <section className="section-white section-padding">
        <div className="container-x">
          <div className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto">

            <h2 className="text-display text-void">Resultados Reais.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.slice(0, 2).map((p) => (
              <Link to={`/projetos/${p.slug}`} key={p.slug} className="group flex flex-col gap-8">
                <div className="card-surface p-0 overflow-hidden aspect-[16/10] bg-void">
                  <img
                    src={p.cover}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="earmark-tag border border-black/10 px-2 py-1">{p.type}</span>
                    <span className="text-caption text-gray-400">Case Study 2024</span>
                  </div>
                  <h3 className="text-display text-void group-hover:underline underline-offset-8 decoration-1">
                    {p.name}
                  </h3>
                  <p className="text-body text-gray-600 max-w-xl">
                    Implementação de sistemas de controle integrados com foco em resiliência e continuidade operacional.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-void section-padding text-center">
        <div className="container-x flex flex-col items-center gap-10">

          <h2 className="text-display text-white max-w-4xl">
            Pronto para reconstruir sua <span className="text-gray-400">Vantagem Operacional</span>?
          </h2>
          <div className="flex gap-6">
            <Link to="/contato" className="btn-esna-primary bg-white text-void hover:bg-gray-200 px-12">
              Solicitar Demo
            </Link>
            <Link to="/solucoes" className="border border-white text-white hover:bg-white hover:text-void px-12 py-3 text-[12px] font-mono uppercase tracking-widest transition-all">
              Ver Ofertas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
