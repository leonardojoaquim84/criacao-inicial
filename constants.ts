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
    id: 'troca-de-senha',
    url: 'https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Faccount.activedirectory.windowsazure.com%2FChangePassword.aspx&data=05%7C02%7Cleonardo.joaquim%40voeazul.com.br%7C930ee298d3e84c9677f908de656f140f%7C8f309b91b0604b60bbb5091c51b75cfd%7C0%7C0%7C639059724961638190%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=IrvPWc3qkWB96XTATJI092JYBSuviGziRC4U0ri2CCM%3D&reserved=0',
    title: 'TROCA DE SENHA',
    category: 'dia_a_dia',
    description: 'Portal de alteração de senha do Microsoft Active Directory.',
    tags: ['senha', 'segurança', 'ti'],
    createdAt: Date.now() - 550,
    isFavorite: false
  },
  {
    id: 'desbloqueio-de-senha',
    url: 'https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpasswordreset.microsoftonline.com%2F&data=05%7C02%7Cleonardo.joaquim%40voeazul.com.br%7C930ee298d3e84c9677f908de656f140f%7C8f309b91b0604b60bbb5091c51b75cfd%7C0%7C0%7C639059724961664200%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=PCBWEql6V8HgkHWxy870rIlsBL%2FBgZhv3PrUfLrikIc%3D&reserved=0',
    title: 'DESBLOQUEIO DE SENHA',
    category: 'dia_a_dia',
    description: 'Portal para recuperação e desbloqueio de senha Microsoft.',
    tags: ['senha', 'desbloqueio', 'segurança'],
    createdAt: Date.now() - 575,
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
    id: 'consulta-base-virtual',
    url: 'https://voeazul.service-now.com/sp?id=consulta_posicao_base_virtual_escala',
    title: 'BASE VIRTUAL',
    category: 'consultas',
    description: 'Consulta de posição em base virtual de escala no Service Now.',
    tags: ['base', 'virtual', 'escala'],
    createdAt: Date.now() - 1900,
    isFavorite: false
  },
  {
    id: 'consulta-base-contratual',
    url: 'https://voeazul.service-now.com/sp?id=consulta_de_posicao_transferencia_base',
    title: 'BASE CONTRATUAL',
    category: 'consultas',
    description: 'Consulta de posição e transferência de base no Service Now.',
    tags: ['base', 'contratual', 'transferência'],
    createdAt: Date.now() - 1910,
    isFavorite: false
  },
  {
    id: 'previsao-ferias',
    url: 'https://voeazul.service-now.com/sp?id=consulta_de_ferias',
    title: 'PREVISÃO DE FÉRIAS',
    category: 'consultas',
    description: 'Consulta de previsão de férias no Service Now.',
    tags: ['férias', 'rh', 'escala'],
    createdAt: Date.now() - 1920,
    isFavorite: false
  },
  {
    id: 'ocupacao-aeronaves',
    url: 'https://i.postimg.cc/1zjhG90G/ed95a45a_136b_4817_9b5a_ae0be67ae8b2.jpg',
    title: 'OCUPAÇÃO DAS AERONAVES',
    category: 'consultas',
    description: 'Informativo direto de ocupação das aeronaves.',
    tags: ['ocupação', 'aeronaves', 'vôos'],
    createdAt: Date.now() - 1930,
    isFavorite: false
  },
  {
    id: 'transporte-vcp',
    url: 'https://i.postimg.cc/SKvF6yLC/3781aa4d_1033_4dc4_9839_c2f3753cbe46.jpg',
    title: 'TRANSPORTE VCP',
    category: 'consultas',
    description: 'Informativo direto de transporte VCP.',
    tags: ['transporte', 'vcp', 'imagem'],
    createdAt: Date.now() - 1940,
    isFavorite: false
  },
  {
    id: 'gig-x-sdu',
    url: 'https://i.postimg.cc/0yHPfdPH/eb6a290e_a926_490e_a1e7_d7ff2f1a439f.jpg',
    title: 'GIG x SDU',
    category: 'consultas',
    description: 'Informativo direto GIG x SDU.',
    tags: ['transporte', 'gig', 'sdu', 'imagem'],
    createdAt: Date.now() - 1950,
    isFavorite: false
  },
  {
    id: 'consulta-licencas-anac',
    url: 'https://consultadelicencas.anac.gov.br/consultadelicencas/',
    title: 'CONSULTA DE LICENÇAS ANAC',
    category: 'consultas',
    description: 'Sistema oficial da ANAC para consulta de licenças e certificados de tripulantes.',
    tags: ['anac', 'licenças', 'documentação', 'tripulante'],
    createdAt: Date.now() - 1960,
    isFavorite: false
  }
];