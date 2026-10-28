import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatusBadge } from "@/components/status-badge";
import {
  candidateSummary,
  getCandidateApplications,
} from "@/lib/marketplace-data";
import { getApplicationStatusMeta } from "@/lib/status";

export const metadata: Metadata = {
  title: "Ung tuyen cua toi | Viec Online",
  description:
    "Bang theo doi ung tuyen cho candidate voi trang thai, nguon apply va ghi chu follow-up.",
};

export default function CandidateApplicationsPage() {
  const applications = getCandidateApplications(candidateSummary.id);

  return (
    <DashboardShell
      eyebrow="Applications"
      title="Theo doi toan bo ung tuyen tren mot man hinh"
      description="Trang nay la phien ban MVP cua khu quan ly ung tuyen. Moi item co trang thai, source va ghi chu de sau nay noi email updates hoac automation."
      actions={[
        { href: "/candidate", label: "Ve dashboard" },
        { href: "/jobs", label: "Apply them", primary: true },
      ]}
    >
      <SectionCard
        title="Bang ung tuyen"
        description="Mac dinh uu tien hien nhung don moi nhat va cac job con dang mo."
      >
        <div className="space-y-4">
          {applications.map((application) => {
            const meta = getApplicationStatusMeta(application.status);

            return (
              <article
                key={application.id}
                className="rounded-[1.5rem] border border-slate-200 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">
                      {application.jobTitle}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {application.company} • Nop ngay {application.appliedAt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <StatusBadge label={meta.label} tone={meta.tone} />
                    <StatusBadge
                      label={
                        application.source === "referral"
                          ? "Qua referral"
                          : "Nop truc tiep"
                      }
                      tone={application.source === "referral" ? "violet" : "sky"}
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_220px]">
                  <p className="text-sm leading-7 text-slate-600">
                    {application.note}
                  </p>
                  <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    <p className="font-medium text-slate-950">Buoc tiep theo</p>
                    <p className="mt-1">
                      {application.status === "shortlisted"
                        ? "Chuan bi case study va tin nhan follow-up."
                        : application.status === "reviewing"
                          ? "Cho nha tuyen dung review, khong can spam."
                          : "Can toi uu profile de match tot hon o lan sau."}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
