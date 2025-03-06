import {
  Code,
  Github,
  ImageIcon,
  Linkedin,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  GalleryVertical,
} from 'lucide-react'

export const MAX_FREE_COUNTS = 5 as const

export const TESTIMONIALS = [
  {
    name: 'Milan Nikolic',
    image: '/users/james-barr.png',
    title: 'Specijalista za marketing',
    description:
      'Ova aplikacija menja igru! Otpremio sam fotografiju svoje dnevne sobe i za nekoliko sekundi mi je dala nekoliko opcija dizajna. AI je u potpunosti razumeo moj stil i učinio da se soba oseća svežom i modernom bez ikakvih problema',
  },
  {
    name: 'Ivana Petrovic',
    image: '/users/brock-wegner.png',
    title: 'Student',
    description:
      'Apsolutno volim ovaj alat! Nisam dobar u dizajnu enterijera, ali ova aplikacija mi je to tako olakšala. Upravo sam postavio sliku svoje spavaće sobe i veštačka inteligencija je predložila neverovatne dizajne kojih se sam nikada ne bih setio. Neverovatni rezultati!',
  },
  {
    name: 'Zoran Nikolic',
    image: '/users/samuel-raita.png',
    title: 'Preduzetnik',
    description:
      'Generator AI dizajna me je oduševio! U roku od nekoliko minuta, mogao sam da vidim različite stilove nameštaja za moj novi stan. Izuzetno je lak za upotrebu i daje rezultate na profesionalnom nivou.',
  },
  {
    name: 'Mirjana Popovic',
    image: '/users/evan-wise.png',
    title: 'Grafički dizajner',
    description: 'Ova aplikacija mi je uštedela mnogo vremena i novca. Nisam bio siguran kako da transformišem svoj prostor, ali AI mi je dao fantastične ideje koje su savršeno odgovarale mom ukusu. Proces je bio gladak, a rezultati su bili neverovatni!',
  },
] as const

export const TOOLS = [
  // {
  //   label: 'Conversation',
  //   icon: MessageSquare,
  //   color: 'text-violet-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/conversation',
  // },
  // {
  //   label: 'Music Generation',
  //   icon: Music,
  //   color: 'text-emerald-500',
  //   bgColor: 'bg-violet-500/10',
  //   href: '/music',
  // },
  {
    label: 'Sobni Generator',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  // {
  //   label: 'Pomoč',
  //   icon: VideoIcon,
  //   color: 'text-orange-700',
  //   bgColor: 'bg-orange-700/10',
  //   href: '/video',
  // },
  {
    label: 'Kontakt',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
] as const

export const ROUTES = [
  {
    label: 'Početna stranica',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  ...TOOLS,
  {
    label: 'Postavke',
    icon: Settings,
    href: '/settings',
    color: null,
  },
] as const

export const FOOTER_LINKS = [
  // {
  //   name: 'Project',
  //   icon: GalleryVertical,
  //   link: 'https://redtomato0129.com/portfolio/jarvis-ai',
  // },
  // {
  //   name: 'Linkedin',
  //   icon: Linkedin,
  //   link: 'https://linkedin.com/in/redtomato0129',
  // },
  // {
  //   name: 'Github',
  //   icon: Github,
  //   link: 'https://github.com/redtomato0129/jarvis-ai',
  // },
]
