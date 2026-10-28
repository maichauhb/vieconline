import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { hirerSummary } from "@/lib/marketplace-data";

export const metadata: Metadata = {
  title: "Hirer onboarding | Viec Online",
  description:
    "Form onboarding mau cho nha tuyen dung: cong ty, website, niche va cach dang job chuan hoa.",
};

export default function HirerOnboardingPage() {
  return (
    <DashboardShell
      eyebrow="Hirer onboarding"
      title="Khoi tao tai khoan nha tuyen dung theo chuan marketplace"
      description="Flow nay chot 3 thong tin quan trong: ai dang tuyen, cong ty nao, va job thuoc niche nao. Sau do moi mo create job de giu chat luong."
      actions={[
        { href: "/hirer", label: "Ve dashboard" },
        { href: "/hirer/jobs/new", label: "Dang job moi", primary: true },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionCard
          title="Checklist kich hoat"
          description="Nhung thong tin bat buoc de job duoc admin duyet nhanh."
        >
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-5">
              Ten cong ty, website va mo ta ngan ro linh vuc.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Nguoi lien he, email domain cong ty, vai tro trong cong ty.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Chon niche launch dau tien de de seed va do traction.
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Employer profile mock"
          description="Map 1-1 sang `HirerProfile` va `Company` trong Prisma schema."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Nguoi dang tuyen
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {hirerSummary.ownerName}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Chuc danh
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {hirerSummary.title}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Cong ty
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {hirerSummary.companyName}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Trang thai xac minh
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {hirerSummary.verified ? "Verified" : "Pending"}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Mo ta cong ty
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                Thuong hieu ecommerce can growth team gon, uu tien thue nhanh
                cac vai tro content, performance va operations.
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Niches uu tien
              </label>
              <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                {["Content", "Performance", "Design", "CSKH"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
