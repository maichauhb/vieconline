import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { candidateSummary } from "@/lib/marketplace-data";

export const metadata: Metadata = {
  title: "Candidate onboarding | Viec Online",
  description:
    "Form onboarding mau cho ung vien: headline, ky nang, muc thu nhap va portfolio.",
};

const steps = [
  "Thong tin co ban",
  "Ky nang va kinh nghiem",
  "Portfolio va CV",
  "Work preferences",
];

export default function CandidateOnboardingPage() {
  return (
    <DashboardShell
      eyebrow="Candidate onboarding"
      title="Hoan thien profile de san sang apply 1 cham"
      description="Day la phien ban MVP cua onboarding flow. UI da duoc chia thanh cac khoi du lieu ro rang de sau nay noi server action hoac form handler that."
      actions={[
        { href: "/candidate", label: "Ve dashboard" },
        { href: "/jobs", label: "Xem jobs", primary: true },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionCard
          title="Tien do onboarding"
          description="Chia nho thanh 4 buoc de giam friction va tang ty le hoan tat."
        >
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-3xl bg-slate-50 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-medium text-slate-950">{step}</p>
                  <p className="text-sm text-slate-500">
                    {index < 2 ? "Nen bat buoc" : "Co the bo sung sau"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Profile form mock"
          description="Cau truc form nay san sang de map 1-1 sang `CandidateProfile` trong Prisma schema."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Ho va ten
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.name}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Thanh pho
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.city}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Headline
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.headline}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Ky nang chinh
              </label>
              <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                {candidateSummary.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Muc thu nhap mong muon
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.expectedSalary}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Work mode
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.workModes.join(", ")}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Portfolio
              </label>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {candidateSummary.portfolioUrl}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-800">
            Buoc tiep theo la doi block form mock nay thanh form submit that
            bang server action, validate va luu vao `CandidateProfile`.
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
