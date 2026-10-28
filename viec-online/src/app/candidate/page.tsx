import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import {
  candidateSummary,
  getCandidateApplications,
} from "@/lib/marketplace-data";
import { getApplicationStatusMeta } from "@/lib/status";

export const metadata: Metadata = {
  title: "Nguoi tim viec | Viec Online",
  description:
    "Luong san pham danh cho ung vien: tao profile, apply nhanh va theo doi trang thai ung tuyen.",
};

export default function CandidatePage() {
  const applications = getCandidateApplications(candidateSummary.id);

  return (
    <DashboardShell
      eyebrow="Candidate dashboard"
      title="Mot luong day du cho nguoi tim viec online"
      description="Trang nay dong vai dashboard overview cho ung vien: profile score, muc tieu thu nhap, danh sach ung tuyen va cac buoc tiep theo de tang ti le duoc shortlist."
      actions={[
        { href: "/candidate/onboarding", label: "Cap nhat profile", primary: true },
        { href: "/candidate/applications", label: "Xem ung tuyen" },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-4">
        <StatCard
          label="Profile score"
          value={`${candidateSummary.profileScore}%`}
          hint="Muc tieu > 90% de apply 1 cham hieu qua hon."
        />
        <StatCard
          label="Ky nang chinh"
          value={candidateSummary.skills.length.toString()}
          hint="Da gom Content, SEO, Landing va Analytics."
        />
        <StatCard
          label="Ung tuyen dang mo"
          value={applications
            .filter((item) => item.status !== "rejected")
            .length.toString()}
          hint="Theo doi de biet job nao can follow-up."
        />
        <StatCard
          label="Muc thu nhap muc tieu"
          value="12-18tr"
          hint="Can hien ro ngay trong profile va cover note."
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard
          title={candidateSummary.name}
          description={`${candidateSummary.headline} • ${candidateSummary.city}`}
        >
          <div className="flex flex-wrap gap-3">
            {candidateSummary.workModes.map((mode) => (
              <StatusBadge key={mode} label={mode} tone="emerald" />
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Ung vien mau cho niche launch dau tien. Phu hop voi cac job content,
            SEO, email va tang truong cho SME. Portfolio co the duoc gan o
            onboarding va dung lam ho so apply mac dinh.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {candidateSummary.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Checklist de tang ty le match"
          description="Nhung viec can lam trong 1-2 ngay dau sau khi user dang ky."
        >
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-5">
              Hoan thien headline, muc thu nhap, 5 ky nang chinh va work mode.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Them 2-3 case study co ket qua cu the de tang ti le shortlist.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Bat thong bao job moi va uu tien apply trong 24 gio dau.
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard
          title="Ung tuyen gan day"
          description="Snapshot nhanh de user thay trang thai va biet can follow-up job nao."
        >
          <div className="grid gap-4">
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
                        {application.company} • {application.appliedAt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <StatusBadge label={meta.label} tone={meta.tone} />
                      <StatusBadge
                        label={
                          application.source === "referral"
                            ? "Referral"
                            : "Direct"
                        }
                        tone={application.source === "referral" ? "violet" : "sky"}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {application.note}
                  </p>
                </article>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
