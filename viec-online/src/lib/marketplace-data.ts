export type MarketplaceJobStatus =
  | "draft"
  | "pending"
  | "published"
  | "paused"
  | "closed"
  | "rejected";

export type MarketplaceApplicationStatus =
  | "pending"
  | "reviewing"
  | "shortlisted"
  | "interviewing"
  | "hired"
  | "rejected";

export type CandidateSummary = {
  id: string;
  name: string;
  headline: string;
  city: string;
  expectedSalary: string;
  workModes: string[];
  skills: string[];
  portfolioUrl?: string;
  profileScore: number;
};

export type HirerSummary = {
  id: string;
  companyName: string;
  ownerName: string;
  title: string;
  verified: boolean;
  activeJobs: number;
};

export type MarketplaceJob = {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  workMode: string;
  salary: string;
  summary: string;
  description: string;
  skills: string[];
  urgent?: boolean;
  status: MarketplaceJobStatus;
  applicants: number;
  shortlist: number;
  sourceMix: {
    direct: number;
    referral: number;
  };
  referralClicks: number;
  referralApplies: number;
  timeToFirstApply: string;
  createdAt: string;
  expiresAt: string;
};

export type ApplicationItem = {
  id: string;
  candidateId: string;
  candidateName: string;
  candidateHeadline: string;
  jobId: string;
  jobTitle: string;
  company: string;
  status: MarketplaceApplicationStatus;
  source: "direct" | "referral";
  appliedAt: string;
  note: string;
};

export type ReportItem = {
  id: string;
  jobTitle: string;
  company: string;
  reason: string;
  status: "open" | "reviewing" | "resolved";
  createdAt: string;
};

export const candidateSummary: CandidateSummary = {
  id: "cand-01",
  name: "Linh Tran",
  headline: "Content strategist & performance copywriter",
  city: "TP HCM",
  expectedSalary: "12-18 trieu / thang",
  workModes: ["Remote", "Hybrid"],
  skills: ["Content", "SEO", "Landing Page", "Email", "Analytics"],
  portfolioUrl: "https://portfolio.example/linh-tran",
  profileScore: 84,
};

export const hirerSummary: HirerSummary = {
  id: "hirer-01",
  companyName: "Luna Commerce",
  ownerName: "Mai Nguyen",
  title: "Founder",
  verified: true,
  activeJobs: 3,
};

export const marketplaceJobs: MarketplaceJob[] = [
  {
    id: "job-01",
    slug: "content-marketing-freelancer",
    title: "Content Marketing Freelancer",
    company: "Luna Commerce",
    location: "TP HCM",
    employmentType: "Part-time",
    workMode: "Remote",
    salary: "8-12 trieu",
    summary: "Viet content landing page, email va social cho SME ban le.",
    description:
      "Can mot ban co kinh nghiem viet content chuyen doi cho ecommerce, co the bat dau nhanh va phoi hop async voi founder trong cac sprint 1-2 tuan.",
    skills: ["Content", "SEO", "Ecommerce"],
    urgent: true,
    status: "published",
    applicants: 18,
    shortlist: 5,
    sourceMix: {
      direct: 12,
      referral: 6,
    },
    referralClicks: 87,
    referralApplies: 6,
    timeToFirstApply: "9 gio",
    createdAt: "2026-10-20",
    expiresAt: "2026-11-05",
  },
  {
    id: "job-02",
    slug: "designer-social-media",
    title: "Designer Social Media",
    company: "Kite Agency",
    location: "Ha Noi",
    employmentType: "Freelance",
    workMode: "Remote",
    salary: "500k-900k/ngay",
    summary: "Thiet ke post social, banner quang cao va visual campaign ngan han.",
    description:
      "Phu hop voi designer co kha nang len nhanh visual cho cac chien dich social media, biet lam viec tren Figma va ban giao file gon.",
    skills: ["Figma", "Photoshop", "Branding"],
    status: "published",
    applicants: 11,
    shortlist: 3,
    sourceMix: {
      direct: 9,
      referral: 2,
    },
    referralClicks: 24,
    referralApplies: 2,
    timeToFirstApply: "1 ngay",
    createdAt: "2026-10-18",
    expiresAt: "2026-11-02",
  },
  {
    id: "job-03",
    slug: "nhan-vien-cskh-online",
    title: "Nhan vien CSKH Online",
    company: "Mira Health",
    location: "Da Nang",
    employmentType: "Full-time",
    workMode: "Hybrid",
    salary: "9-11 trieu",
    summary: "Cham soc khach hang qua chat, xu ly ticket va cap nhat CRM.",
    description:
      "Can nguoi giao tiep tot, viet ro rang, co kha nang giu SLA va hop tac cung sales va ops trong moi ca truc.",
    skills: ["CSKH", "CRM", "Communication"],
    status: "published",
    applicants: 24,
    shortlist: 8,
    sourceMix: {
      direct: 20,
      referral: 4,
    },
    referralClicks: 33,
    referralApplies: 4,
    timeToFirstApply: "6 gio",
    createdAt: "2026-10-15",
    expiresAt: "2026-11-04",
  },
  {
    id: "job-04",
    slug: "telesales-online",
    title: "Telesales Online",
    company: "GrowFast Edu",
    location: "Toan quoc",
    employmentType: "Part-time",
    workMode: "Remote",
    salary: "Luong cung + hoa hong",
    summary: "Goi lead nong, tu van khoa hoc va chot lich hoc thu.",
    description:
      "Vai tro phu hop voi nguoi muon kiem them thu nhap, da co kinh nghiem sales online va quen theo KPI theo tuan.",
    skills: ["Sales", "Lead Closing", "Phone"],
    status: "pending",
    applicants: 7,
    shortlist: 2,
    sourceMix: {
      direct: 5,
      referral: 2,
    },
    referralClicks: 19,
    referralApplies: 2,
    timeToFirstApply: "14 gio",
    createdAt: "2026-10-24",
    expiresAt: "2026-11-08",
  },
  {
    id: "job-05",
    slug: "video-editor-tiktok",
    title: "Video Editor TikTok",
    company: "Nova Studio",
    location: "TP HCM",
    employmentType: "Freelance",
    workMode: "Remote",
    salary: "10-15 trieu",
    summary: "Cat dung short video, subtitle va hook cho kenh TikTok ban hang.",
    description:
      "Can editor co gu nhanh, biet xu ly short-form video va hieu cach toi uu retention 3 giay dau cho video ads va UGC.",
    skills: ["Premiere", "CapCut", "Short Video"],
    status: "paused",
    applicants: 13,
    shortlist: 4,
    sourceMix: {
      direct: 10,
      referral: 3,
    },
    referralClicks: 42,
    referralApplies: 3,
    timeToFirstApply: "11 gio",
    createdAt: "2026-10-12",
    expiresAt: "2026-10-30",
  },
  {
    id: "job-06",
    slug: "performance-marketing-executive",
    title: "Performance Marketing Executive",
    company: "Seedbox",
    location: "Ha Noi",
    employmentType: "Full-time",
    workMode: "Hybrid",
    salary: "14-20 trieu",
    summary: "Chay ads Meta va Google cho startup giai doan tang truong.",
    description:
      "Vai tro can kha nang tu setup, doc so lieu den toi uu CPL va ROAS cho chien dich thu lead va ecommerce.",
    skills: ["Meta Ads", "Google Ads", "Analytics"],
    status: "rejected",
    applicants: 4,
    shortlist: 0,
    sourceMix: {
      direct: 4,
      referral: 0,
    },
    referralClicks: 7,
    referralApplies: 0,
    timeToFirstApply: "2 ngay",
    createdAt: "2026-10-11",
    expiresAt: "2026-10-28",
  },
];

export const candidateApplications: ApplicationItem[] = [
  {
    id: "app-01",
    candidateId: "cand-01",
    candidateName: "Linh Tran",
    candidateHeadline: "Content strategist & performance copywriter",
    jobId: "job-01",
    jobTitle: "Content Marketing Freelancer",
    company: "Luna Commerce",
    status: "shortlisted",
    source: "direct",
    appliedAt: "2026-10-22",
    note: "Da nop portfolio gom landing, email flow va SEO case study.",
  },
  {
    id: "app-02",
    candidateId: "cand-01",
    candidateName: "Linh Tran",
    candidateHeadline: "Content strategist & performance copywriter",
    jobId: "job-02",
    jobTitle: "Designer Social Media",
    company: "Kite Agency",
    status: "reviewing",
    source: "referral",
    appliedAt: "2026-10-20",
    note: "Referral tu community design lead, dang cho feedback vong 1.",
  },
  {
    id: "app-03",
    candidateId: "cand-01",
    candidateName: "Linh Tran",
    candidateHeadline: "Content strategist & performance copywriter",
    jobId: "job-03",
    jobTitle: "Nhan vien CSKH Online",
    company: "Mira Health",
    status: "rejected",
    source: "direct",
    appliedAt: "2026-10-18",
    note: "Chua khop kinh nghiem van hanh CRM theo ca.",
  },
];

export const hirerApplicants: ApplicationItem[] = [
  {
    id: "app-11",
    candidateId: "cand-11",
    candidateName: "Thanh Vo",
    candidateHeadline: "SEO writer cho ecommerce va edu",
    jobId: "job-01",
    jobTitle: "Content Marketing Freelancer",
    company: "Luna Commerce",
    status: "shortlisted",
    source: "direct",
    appliedAt: "2026-10-22",
    note: "Strong portfolio ve landing page va SEO content.",
  },
  {
    id: "app-12",
    candidateId: "cand-12",
    candidateName: "Nhi Le",
    candidateHeadline: "Email marketer & copywriter",
    jobId: "job-01",
    jobTitle: "Content Marketing Freelancer",
    company: "Luna Commerce",
    status: "interviewing",
    source: "referral",
    appliedAt: "2026-10-23",
    note: "Referral tu admin cong dong startup jobs, kha nang viet email tot.",
  },
  {
    id: "app-13",
    candidateId: "cand-13",
    candidateName: "Quang Bui",
    candidateHeadline: "Freelance content editor",
    jobId: "job-01",
    jobTitle: "Content Marketing Freelancer",
    company: "Luna Commerce",
    status: "reviewing",
    source: "direct",
    appliedAt: "2026-10-23",
    note: "Can check them case study ve ecommerce.",
  },
];

export const adminReports: ReportItem[] = [
  {
    id: "rep-01",
    jobTitle: "Performance Marketing Executive",
    company: "Seedbox",
    reason: "Mo ta job qua mo ho, thieu budget ro rang",
    status: "reviewing",
    createdAt: "2026-10-21",
  },
  {
    id: "rep-02",
    jobTitle: "Telesales Online",
    company: "GrowFast Edu",
    reason: "Nghieng ve lead-gen affiliate hon la job truyen thong",
    status: "open",
    createdAt: "2026-10-24",
  },
];

export const adminMetrics = [
  { label: "Job cho duyet", value: "12", hint: "3 can xu ly hom nay" },
  { label: "Ti le duyet", value: "76%", hint: "giu chat luong niche dau tien" },
  { label: "Report dang mo", value: "5", hint: "uu tien job co traffic cao" },
  { label: "First apply median", value: "14h", hint: "target < 24h" },
] as const;

export function getAllJobs() {
  return marketplaceJobs;
}

export function getJobBySlug(slug: string) {
  return marketplaceJobs.find((job) => job.slug === slug);
}

export function getFeaturedJobs() {
  return marketplaceJobs.filter((job) => job.status === "published").slice(0, 6);
}

export function getJobsByStatus(status: MarketplaceJobStatus) {
  return marketplaceJobs.filter((job) => job.status === status);
}

export function getCandidateApplications(candidateId: string) {
  return candidateApplications.filter(
    (application) => application.candidateId === candidateId,
  );
}

export function getApplicantsForJob(jobId: string) {
  return hirerApplicants.filter((application) => application.jobId === jobId);
}
