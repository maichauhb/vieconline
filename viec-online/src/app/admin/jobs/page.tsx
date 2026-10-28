import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { adminMetrics, adminReports, getAllJobs } from "@/lib/marketplace-data";
import { getJobStatusMeta } from "@/lib/status";

export const metadata: Metadata = {
  title: "Admin moderation | Viec Online",
  description:
    "Khu moderation cho admin duyet job, xem report va theo doi chat luong marketplace.",
};

export default function AdminJobsPage() {
  const jobs = getAllJobs().filter(
    (job) => job.status === "pending" || job.status === "rejected",
  );

  return (
    <DashboardShell
      eyebrow="Admin moderation"
      title="Queue duyet job va kiem soat chat luong marketplace"
      description="Giai doan dau cua startup nen uu tien moderation tay. Trang nay la bo khung cho admin duyet, tu choi hoac flag job co rui ro."
      actions={[
        { href: "/hirer/jobs/new", label: "Tao job test" },
        { href: "/jobs", label: "Xem public listing", primary: true },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {adminMetrics.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            hint={item.hint}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionCard
          title="Moderation queue"
          description="Uu tien review job pending trong 24 gio va reject cac bai qua mo ho."
        >
          <div className="space-y-4">
            {jobs.map((job) => {
              const meta = getJobStatusMeta(job.status);

              return (
                <article
                  key={job.id}
                  className="rounded-[1.5rem] border border-slate-200 p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">
                        {job.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {job.company} • {job.workMode} • {job.salary}
                      </p>
                    </div>
                    <StatusBadge label={meta.label} tone={meta.tone} />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {job.summary}
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Applicants:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.applicants}
                      </span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Referral clicks:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.referralClicks}
                      </span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Created:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.createdAt}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard
          title="Reports dang mo"
          description="Admin can track cac job bi report de tranh spam va mat trust."
        >
          <div className="space-y-4">
            {adminReports.map((report) => (
              <article
                key={report.id}
                className="rounded-[1.5rem] border border-slate-200 p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">
                      {report.jobTitle}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {report.company} • {report.createdAt}
                    </p>
                  </div>
                  <StatusBadge
                    label={report.status}
                    tone={
                      report.status === "resolved"
                        ? "emerald"
                        : report.status === "reviewing"
                          ? "amber"
                          : "rose"
                    }
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {report.reason}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
