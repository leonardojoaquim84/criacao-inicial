
import { Category } from './types';

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'dia_a_dia', name: 'Dia a Dia', icon: 'fa-calendar-check', color: 'text-blue-500' },
  { id: 'treinamento', name: 'Treinamento', icon: 'fa-graduation-cap', color: 'text-emerald-500' },
  { id: 'passe_livre', name: 'Viagem', icon: 'fa-plane', color: 'text-purple-500' },
  { id: 'consultas', name: 'Consultas', icon: 'fa-clipboard-question', color: 'text-amber-500' }
];

export const INITIAL_LINKS = [
  // --- DIA A DIA ---
  {
    id: 'isa-azul',
    url: 'https://isa.voeazul.com.br/login/#/azul',
    title: 'ISA',
    category: 'dia_a_dia',
    description: 'Sistema ISA Azul.',
    tags: ['azul', 'sistema'],
    createdAt: Date.now(),
    isFavorite: false
  },
  {
    id: 'webmail-azul',
    url: 'https://outlook.office.com/mail/inbox',
    title: 'WEBMAIL',
    category: 'dia_a_dia',
    description: 'Acesso ao Outlook Webmail.',
    tags: ['email', 'office'],
    createdAt: Date.now() - 100,
    isFavorite: false
  },
  {
    id: 'escala-sabre',
    url: 'http://cae.voeazul.com.br/',
    title: 'ESCALA SABRE',
    category: 'dia_a_dia',
    description: 'Consulta de escala Sabre.',
    tags: ['escala', 'sabre'],
    createdAt: Date.now() - 200,
    isFavorite: false
  },
  {
    id: 'bid-azul',
    url: 'http://crew.azu.jepphost.com/site/',
    title: 'BID',
    category: 'dia_a_dia',
    description: 'Sistema BID Crew.',
    tags: ['tripulante', 'escala'],
    createdAt: Date.now() - 300,
    isFavorite: false
  },
  {
    id: 'portal-rh',
    url: 'https://portalrh.voeazul.com.br/portalrh/',
    title: 'PORTAL RH',
    category: 'dia_a_dia',
    description: 'Portal do colaborador e RH.',
    tags: ['rh', 'colaborador'],
    createdAt: Date.now() - 400,
    isFavorite: false
  },
  {
    id: 'uniformes-azul',
    url: 'https://sistemas.voeazul.com.br/azuluniformes/',
    title: 'UNIFORMES',
    category: 'dia_a_dia',
    description: 'Sistema de pedidos de uniformes.',
    tags: ['logística', 'vestuário'],
    createdAt: Date.now() - 500,
    isFavorite: false
  },
  {
    id: 'service-now',
    url: 'https://voeazul.service-now.com/',
    title: 'PORTAL DE SERVIÇOS - SERVICE NOW',
    category: 'dia_a_dia',
    description: 'Portal de chamados e serviços TI.',
    tags: ['suporte', 'ti'],
    createdAt: Date.now() - 600,
    isFavorite: false
  },
  {
    id: 'vistair-docunet',
    url: 'https://login-br.vistair.com/login?service=https%3A%2F%2Fdocunet-online-br.vistair.com%2Fj_spring_cas_security_check',
    title: 'VISTAIR - DOCUNET',
    category: 'dia_a_dia',
    description: 'Documentação técnica e manuais.',
    tags: ['docs', 'técnico'],
    createdAt: Date.now() - 700,
    isFavorite: false
  },
  {
    id: 'aqd-azul',
    url: 'https://aqdweb.voeazul.com.br/AQDWeb/home.aspx',
    title: 'AQD',
    category: 'dia_a_dia',
    description: 'Sistema de qualidade e segurança.',
    tags: ['qualidade', 'segurança'],
    createdAt: Date.now() - 800,
    isFavorite: false
  },
  {
    id: 'assinatura-email',
    url: 'https://voeazul.sharepoint.com/sites/intranet/SitePages/AssinaturaEmail.aspx?',
    title: 'GERADOR DE ASSINATURA DE E-MAIL PADRÃO',
    category: 'dia_a_dia',
    description: 'Padronização de assinaturas de e-mail.',
    tags: ['comunicação', 'padronização'],
    createdAt: Date.now() - 900,
    isFavorite: false
  },
  {
    id: 'standardscast-spotify',
    url: 'https://open.spotify.com/',
    title: 'STANDARDSCAST - SPOTIFY',
    category: 'dia_a_dia',
    description: 'Acesso ao Spotify (StandardsCast).',
    tags: ['áudio', 'podcast'],
    createdAt: Date.now() - 1000,
    isFavorite: false
  },

  // --- TREINAMENTO ---
  {
    id: 'mint-treinamento',
    url: 'https://azul.mint-online.com/azul/',
    title: 'MINT',
    category: 'treinamento',
    description: 'Sistema de gestão de treinamento MINT.',
    tags: ['treinamento', 'gestão', 'azul'],
    createdAt: Date.now() - 1010,
    isFavorite: false
  },
  {
    id: 'portal-piloto',
    url: 'https://voeazul.sharepoint.com/sites/PortaldeInstrutores-Pilotos/SitePages/Portal-do-aluno--Aviador.aspx?ga=1',
    title: 'PORTAL DO PILOTO',
    category: 'treinamento',
    description: 'Portal do aluno e instrutor aviador.',
    tags: ['piloto', 'treinamento', 'instrução'],
    createdAt: Date.now() - 1020,
    isFavorite: false
  },
  {
    id: 'ead-uniazul',
    url: 'https://portaluniazul.voeazul.com.br/',
    title: 'EAD - PORTAL UNIAZUL',
    category: 'treinamento',
    description: 'Portal de ensino a distância Uniazul.',
    tags: ['ead', 'uniazul', 'cursos'],
    createdAt: Date.now() - 1030,
    isFavorite: false
  },
  {
    id: 'area-aluno-gto',
    url: 'https://voeazul.sharepoint.com/sites/gto-ged/Material%20de%20Treinamento/Forms/AllItems.aspx?id=%2Fsites%2Fgto%2Dged%2FMaterial%20de%20Treinamento%2FA320&viewid=f0ea0fc6%2D85db%2D475b%2Da5c0%2D809a4a16a18b',
    title: 'AREA DO ALUNO',
    category: 'treinamento',
    description: 'Material de treinamento GTO/GED.',
    tags: ['material', 'estudo', 'a320'],
    createdAt: Date.now() - 1040,
    isFavorite: false
  },

  // --- VIAGEM ---
  {
    id: 'gol-pl',
    url: 'https://passelivre.voegol.com.br/',
    title: 'GOL',
    category: 'passe_livre',
    description: 'Portal de Passe Livre da GOL.',
    tags: ['viagem', 'companhia'],
    createdAt: Date.now() - 1100,
    isFavorite: false
  },
  {
    id: 'azul-pl',
    url: 'https://passelivre.voeazul.com.br/login',
    title: 'AZUL',
    category: 'passe_livre',
    description: 'Portal de Passe Livre da Azul.',
    tags: ['viagem', 'companhia'],
    createdAt: Date.now() - 1200,
    isFavorite: false
  },
  {
    id: 'latam-pl',
    url: 'https://passelivre.appslatam.com/#/',
    title: 'LATAM',
    category: 'passe_livre',
    description: 'Portal de Passe Livre da LATAM.',
    tags: ['viagem', 'companhia'],
    createdAt: Date.now() - 1300,
    isFavorite: false
  },
  {
    id: 'concessao-pg',
    url: 'https://concessaopassagens.voeazul.com.br/ConcessaoPassagensWeb/Login',
    title: 'CONCESSÃO de PASSAGENS',
    category: 'passe_livre',
    description: 'Sistema de concessão de passagens Azul.',
    tags: ['benefício', 'azul'],
    createdAt: Date.now() - 1400,
    isFavorite: false
  },
  {
    id: 'consulta-voos',
    url: 'https://concessao-consulteseuvoo.voeazul.com.br/',
    title: 'CONSULTA VOOS AZUL',
    category: 'passe_livre',
    description: 'Painel para consulta de voos da Azul.',
    tags: ['vôos', 'azul'],
    createdAt: Date.now() - 1500,
    isFavorite: false
  },

  // --- CONSULTAS ---
  {
    id: 'consulta-base-contratual',
    url: 'https://voeazul.service-now.com/sp?id=consulta_de_posicao_transferencia_base',
    title: 'BASE CONTRATUAL',
    category: 'consultas',
    description: 'Consulta de posição e transferência de base no Service Now.',
    tags: ['base', 'contratual', 'transferência'],
    createdAt: Date.now() - 2000,
    isFavorite: false
  },
  {
    id: 'consulta-base-virtual',
    url: 'https://voeazul.service-now.com/sp?id=consulta_posicao_base_virtual_escala',
    title: 'BASE VIRTUAL',
    category: 'consultas',
    description: 'Consulta de posição em base virtual de escala no Service Now.',
    tags: ['base', 'virtual', 'escala'],
    createdAt: Date.now() - 2100,
    isFavorite: false
  }
];
