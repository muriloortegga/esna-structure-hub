import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export interface Project {
  slug: string;
  name: string;
  type: string;
  client?: string;
  cover: string;
  description: string;
  scope: string[];
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "subestacao-industrial",
    name: "Subestação Industrial",
    type: "Industrial",
    client: "Confidencial",
    cover: p1,
    description:
      "Projeto e execução de subestação de média tensão para planta industrial em operação contínua.",
    scope: ["Projeto elétrico completo", "Especificação de equipamentos", "Comissionamento e start-up"],
    solution:
      "Coordenação entre engenharia elétrica, civil e automação para garantir continuidade operacional durante a obra.",
    result: "Entrega no prazo, 0 paradas não programadas e ganho de 18% em eficiência energética.",
  },
  {
    slug: "automacao-linha-producao",
    name: "Automação de Linha",
    type: "Automação",
    cover: p2,
    description: "Integração de sistema de controle e robótica para linha de manufatura de alta precisão.",
    scope: ["Arquitetura de controle", "Integração SCADA/PLC", "Treinamento operacional"],
    solution: "Padronização de protocolos e integração com ERP existente.",
    result: "Redução de 32% em retrabalho e rastreabilidade total da produção.",
  },
  {
    slug: "edificacao-comercial",
    name: "Edificação Comercial",
    type: "Comercial",
    cover: p3,
    description: "Projetos executivos integrados para empreendimento comercial multiuso.",
    scope: ["Compatibilização de projetos", "BIM coordination", "Acompanhamento de obra"],
    solution: "Gestão integrada das disciplinas com revisão única de pranchas.",
    result: "Eliminação de incompatibilidades em obra e antecipação de cronograma.",
  },
  {
    slug: "centro-controle-operacional",
    name: "Centro de Controle Operacional",
    type: "Sistemas",
    cover: p4,
    description: "Projeto e implantação de centro de controle para monitoramento 24/7.",
    scope: ["Infraestrutura técnica", "Sistemas de supervisão", "Redundância e contingência"],
    solution: "Arquitetura modular com redundância N+1 e protocolos de cibersegurança.",
    result: "Disponibilidade operacional de 99,98% no primeiro ano.",
  },
];
