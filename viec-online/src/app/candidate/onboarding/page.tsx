import type { Metadata } from "next";

import { saveCandidateProfileAction } from "@/app/actions/marketplace";
import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { getCandidateDashboard } from "@/lib/marketplace-repository";

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

export default async function CandidateOnboardingPage() {
  const { candidate } = await getCandidateDashboard();

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
          description="Form nay da duoc noi vao server action va mock runtime store. Khi doi sang DB that chi can doi repository."
        >
          <form action={saveCandidateProfileAction} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Ho va ten
                </label>
                <input
                  name="name"
                  defaultValue={candidate.name}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Thanh pho
                </label>
                <input
                  name="city"
                  defaultValue={candidate.city}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Headline
                </label>
                <input
                  name="headline"
                  defaultValue={candidate.headline}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Ky nang chinh
                </label>
                <input
                  name="skills"
                  defaultValue={candidate.skills.join(", ")}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Muc thu nhap mong muon
                </label>
                <input
                  name="expectedSalary"
                  defaultValue={candidate.expectedSalary}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Portfolio
                </label>
                <input
                  name="portfolioUrl"
                  defaultValue={candidate.portfolioUrl}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Work mode</p>
              <div className="flex flex-wrap gap-3">
                {["Remote", "Hybrid", "Onsite"].map((mode) => (
                  <label
                    key={mode}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    <input
                      type="checkbox"
                      name="workModes"
                      value={mode}
                      defaultChecked={candidate.workModes.includes(mode)}
                    />
                    {mode}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Luu profile
            </button>
          </form>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
