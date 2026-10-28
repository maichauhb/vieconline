import { getFeaturedJobs } from "@/lib/marketplace-data";

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

export const featuredJobs: JobItem[] = getFeaturedJobs().map((job, index) => ({
  id: index + 1,
  title: job.title,
  slug: job.slug,
  company: job.company,
  location: job.location,
  type: job.employmentType,
  mode: job.workMode,
  salary: job.salary,
  summary: job.summary,
  description: job.description,
  skills: job.skills,
  urgent: job.urgent,
}));

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
