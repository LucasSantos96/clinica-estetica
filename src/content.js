import {
  BotoxIcon,
  ClockIcon,
  HomeIcon,
  HeartIcon,
  LocationIcon,
  MonitorIcon,
  ShieldCheckIcon,
  ShieldIcon,
  TargetIcon,
  WhatsAppIcon,
  UserIcon,
} from './icons';

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export const instagramUrl = 'https://www.instagram.com/lucasweb.sites/';
export const whatsappMessage = 'Olá, gostaria de agendar uma avaliação.';
export const whatsappUrl = `https://wa.me/5522981073895?text=${encodeURIComponent(whatsappMessage)}`;

export const services = [
  {
    title: 'Botox',
    description: 'Suaviza linhas de expressão e rejuvenece o rosto com naturalidade e precisão.',
    imageUrl: 'https://images.pexels.com/photos/7581584/pexels-photo-7581584.jpeg',
    imageClass: 'service-img-1',
    icon: BotoxIcon,
  },
  {
    title: 'Preenchimento',
    description: 'Harmoniza traços com naturalidade, devolvendo volume e contorno ao rosto.',
    imageUrl: 'https://images.pexels.com/photos/34775440/pexels-photo-34775440.jpeg',
    imageClass: 'service-img-2',
    icon: TargetIcon,
  },
  {
    title: 'Limpeza de pele',
    description: 'Renova e devolve o viço da pele com protocolos profissionais e resultado imediato.',
    imageUrl: 'https://images.pexels.com/photos/37033485/pexels-photo-37033485.jpeg',
    imageClass: 'service-img-3',
    icon: ShieldIcon,
  },
  {
    title: 'Bioestimulador',
    description: 'Estimula colágeno e firmeza, promovendo rejuvenescimento natural e duradouro.',
    imageUrl: 'https://images.pexels.com/photos/4586708/pexels-photo-4586708.jpeg',
    imageClass: 'service-img-4',
    icon: HeartIcon,
  },
];

export const results = [
  {
    imageUrl: 'https://i.pinimg.com/736x/49/ca/4e/49ca4e603e7cb1cad2ceb8a78f906a13.jpg',
    alt: 'Resultado antes e depois 1',
  },
  {
    imageUrl: 'https://i.pinimg.com/1200x/c3/87/6a/c3876a6c4b3ef8221308d6605db59ce3.jpg',
    alt: 'Resultado antes e depois 2',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/cc/24/77/cc2477a445410ddb7db1c910663025db.jpg',
    alt: 'Resultado antes e depois 3',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/c6/6d/e0/c66de099458643ca91cce65ce25142f0.jpg',
    alt: 'Resultado antes e depois 4',
  },
];

export const differentiators = [
  {
    title: 'Atendimento personalizado',
    description: 'Planos feitos sob medida para as suas necessidades e objetivos.',
    icon: UserIcon,
  },
  {
    title: 'Equipamentos modernos',
    description: 'Tecnologia de ponta para garantir resultados seguros e superiores.',
    icon: MonitorIcon,
  },
  {
    title: 'Ambiente confortável',
    description: 'Espaço acolhedor e pensado para o seu bem-estar desde a chegada.',
    icon: HomeIcon,
  },
  {
    title: 'Protocolos seguros',
    description: 'Segurança em cada etapa do seu tratamento, com produtos certificados.',
    icon: ShieldCheckIcon,
  },
];

export const testimonials = [
  {
    name: 'Juliana Martins',
    role: 'Cliente há 2 anos',
    text: 'Cada consulta me surpreende. Me sinto ouvida e cuidada. Os resultados foram incríveis e muito naturais!',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbZWwBUqy3JAVAyDK39SKjQ2nSXEWbr3nhQ&s',
  },
  {
    name: 'Camila Souza',
    role: 'Cliente há 1 ano',
    text: 'Simplesmente incrível! Ambiente carinhoso e acolhedor. Recomendo para todas as minhas amigas!',
    imageUrl: 'https://conteudo.imguol.com.br/c/entretenimento/7c/2022/06/26/a-atriz-klara-castanho-1656254661572_v2_450x450.jpg',
  },
  {
    name: 'Fernanda Lima',
    role: 'Cliente há 3 anos',
    text: 'A clínica é incrível! O cuidado com cada detalhe faz toda a diferença. Me sinto renovada sempre!',
    imageUrl:
      'https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/ULBLSUYTUBJKJDD6LWYKCLLJAI.jpg?auth=6a31d59dc3e4b40f45d3da37623eefe4f5e811f94132e9fa5a106965cb2bae59&width=1024&height=1024',
  },
];

export const contactItems = [
  {
    label: 'Endereço',
    value: 'Rua Exemplo, 123 — Centro',
    icon: LocationIcon,
  },
  {
    label: 'WhatsApp',
    value: '(22) 99999-9999',
    icon: WhatsAppIcon,
  },
  {
    label: 'Horário',
    value: 'Seg a Sex · 09h às 18h',
    icon: ClockIcon,
  },
];

export const footerLinks = [
  { href: '#home', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];
