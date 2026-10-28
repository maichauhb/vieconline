import type { Metadata } from "next";

import { createJobAction } from "@/app/actions/marketplace";
import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";

export const metadata: Metadata = {
  title: "Dang job moi | Viec Online",
  description:
    "Form dang job cho hirer voi cac field duoc chuan hoa de tang ty le duyet va ti le nhan ung vien phu hop.",
};

export default function NewJobPage() {
  return (
    <DashboardShell
      eyebrow="Create job"
      title="Form dang job toi gian cho startup launch nhanh"
      description="Cau truc form nay duoc thiet ke de map tot voi schema `Job`, giam job mo ho va giup admin duyet nhanh hon."
      actions={[
        { href: "/hirer/jobs", label: "Ve danh sach jobs" },
        { href: "/admin/jobs", label: "Xem moderation queue", primary: true },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Job post form"
          description="Form nay da duoc noi vao server action va mock runtime store. Sau nay chi can doi repository de luu bang Prisma."
        >
          <form action={createJobAction} className="grid gap-5 md:grid-cols-2">
            {[
              ["title", "Tieu de job", "Content Marketing Freelancer"],
              ["employmentType", "Loai hinh", "Part-time"],
              ["workMode", "Work mode", "Remote"],
              ["location", "Location", "TP HCM / Toan quoc"],
              ["salary", "Salary / budget", "8-12 trieu"],
              ["skills", "Skills", "Content, SEO, Ecommerce"],
              ["openings", "So luong can tuyen", "1-2"],
              ["expiresAt", "Deadline", "2026-11-10"],
            ].map(([name, label, value]) => (
              <div key={name} className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  {label}
                </label>
                <input
                  name={name}
                  defaultValue={value}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
            ))}

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Mo ta cong viec
              </label>
              <textarea
                name="description"
                defaultValue="Mo ta dau viec, KPI, timeline, ai se report, va output mong doi. Day la phan quan trong nhat de loc ung vien phu hop."
                rows={6}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 outline-none ring-0"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Tao job cho duyet
              </button>
            </div>
          </form>
        </SectionCard>

        <SectionCard
          title="Guideline duyet nhanh"
          description="Nhung nguyen tac can encode vao validation va moderation."
        >
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-5">
              Tieu de ro vai tro, khong viet chung chung nhu can nguoi lam online.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Mo ta output, KPI va muc luong phai nhin thay trong 1 man hinh.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Neu can lead nhanh, bat referral va thuong theo apply/hire.
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
