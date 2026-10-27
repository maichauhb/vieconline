export type JobItem = {
  id: number;
  title: string;
  slug: string;
  company: string;
  location: string;
  type: string;
  mode: string;
  salary: string;
  summary: string;
  description: string;
  skills: string[];
  urgent?: boolean;
};

export const stats = [
  { label: "Job duoc duyet moi tuan", value: "120+" },
  { label: "Ung vien online chu dong", value: "3.4k" },
  { label: "SME va startup dang tuyen", value: "240+" },
  { label: "Thoi gian co apply dau tien", value: "< 48h" },
] as const;

export const featuredJobs: JobItem[] = [
  {
    id: 1,
    title: "Content Marketing Freelancer",
    slug: "content-marketing-freelancer",
    company: "Luna Commerce",
    location: "TP HCM",
    type: "Part-time",
    mode: "Remote",
    salary: "8-12 trieu",
    summary: "Viet noi dung landing page, email va social cho SME ban le.",
    description:
      "Can mot ban co kinh nghiem viet content chuyen doi cho ecommerce, co the bat dau nhanh va phoi hop async voi founder.",
    skills: ["Content", "SEO", "Ecommerce"],
    urgent: true,
  },
  {
    id: 2,
    title: "Designer Social Media",
    slug: "designer-social-media",
    company: "Kite Agency",
    location: "Ha Noi",
    type: "Freelance",
    mode: "Remote",
    salary: "500k-900k/ngay",
    summary: "Thiet ke post social, banner quang cao va visual campaign ngan han.",
    description:
      "Phu hop voi designer co kha nang len nhanh visual cho cac chien dich social media cua SME va startup.",
    skills: ["Figma", "Photoshop", "Branding"],
  },
  {
    id: 3,
    title: "Nhan vien CSKH Online",
    slug: "nhan-vien-cskh-online",
    company: "Mira Health",
    location: "Da Nang",
    type: "Full-time",
    mode: "Hybrid",
    salary: "9-11 trieu",
    summary: "Cham soc khach hang qua chat, xu ly ticket va cap nhat CRM.",
    description:
      "Can nguoi giao tiep tot, viet ro rang va co kinh nghiem xu ly khach hang tren chat hoac inbox.",
    skills: ["CSKH", "CRM", "Communication"],
  },
  {
    id: 4,
    title: "Telesales Online",
    slug: "telesales-online",
    company: "GrowFast Edu",
    location: "Toan quoc",
    type: "Part-time",
    mode: "Remote",
    salary: "Luong cứng + hoa hong",
    summary: "Goi lead nong, tu van khoa hoc va chot lich hoc thu.",
    description:
      "Vai tro phu hop voi nguoi muon kiem them thu nhap va da co kinh nghiem sales hoac telesales online.",
    skills: ["Sales", "Lead Closing", "Phone"],
  },
  {
    id: 5,
    title: "Video Editor TikTok",
    slug: "video-editor-tiktok",
    company: "Nova Studio",
    location: "TP HCM",
    type: "Freelance",
    mode: "Remote",
    salary: "10-15 trieu",
    summary: "Cat dung short video, subtitle va hook cho kenh TikTok ban hang.",
    description:
      "Can editor co gu nhanh, biet xu ly short-form video va hieu cach toi uu retention 3 giay dau.",
    skills: ["Premiere", "CapCut", "Short Video"],
  },
  {
    id: 6,
    title: "Performance Marketing Executive",
    slug: "performance-marketing-executive",
    company: "Seedbox",
    location: "Ha Noi",
    type: "Full-time",
    mode: "Hybrid",
    salary: "14-20 trieu",
    summary: "Chay ads Meta va Google cho startup giai doan tang truong.",
    description:
      "Vai tro can kha nang tu setup, doc so lieu den toi uu CPL va ROAS cho chien dich thu lead.",
    skills: ["Meta Ads", "Google Ads", "Analytics"],
  },
];

export const valueProps = {
  candidates: [
    "Tao ho so gon, apply nhanh, khong can quy trinh ram ra.",
    "Loc viec theo ky nang, muc luong va hinh thuc lam viec.",
    "Uu tien job duoc duyet, han che job gia va job spam.",
  ],
  hirers: [
    "Dang job trong vai phut voi form toi uu cho SME va startup.",
    "Nhan ung vien nhanh, xem skill va portfolio ngay trong dashboard.",
    "Bat referral chia se job de mo rong nguon ung vien tu cong dong.",
  ],
} as const;

export const processSteps = [
  {
    title: "Dang job nhanh",
    description:
      "Nguoi giao viec tao bai dang ngan gon, ro output, ro ky nang va ngan sach.",
  },
  {
    title: "Ung vien phu hop",
    description:
      "Candidate co profile san se apply nhanh va duoc match theo nhu cau.",
  },
  {
    title: "Chia se de tang lead",
    description:
      "Moi job co the mo referral link de cong dong chia se va mang them ung vien.",
  },
  {
    title: "Duyet va theo doi",
    description:
      "Admin duyet job, hirer theo doi ung vien, toi uu ti le tuyen thanh cong.",
  },
] as const;

export const roadmapItems = [
  "Landing + SEO pages",
  "Dang ky, onboarding va phan vai",
  "Dang job, listing va apply flow",
  "Admin moderation va referral tracking",
] as const;
