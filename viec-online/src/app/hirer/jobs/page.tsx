import type { Metadata } from "next";
import Link from "next/link";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatusBadge } from "@/components/status-badge";
import { getAllJobs } from "@/lib/marketplace-data";
import { getJobStatusMeta } from "@/lib/status";

export const metadata: Metadata = {
  title: "Quan ly jobs | Viec Online",
  description:
    "Danh sach job cua nha tuyen dung voi status, applicants, referral traction va diem dieu huong sang job detail.",
};

export default function HirerJobsPage() {
  const jobs = getAllJobs();

  return (
    <DashboardShell
      eyebrow="Job management"
      title="Quan ly toan bo bai dang tren mot man hinh"
      description="Ban nay dong vai ATS lite cho startup: xem status, lead volume, shortlist va referral traction cua tung bai dang."
      actions={[
        { href: "/hirer", label: "Ve dashboard" },
        { href: "/hirer/jobs/new", label: "Dang job moi", primary: true },
      ]}
    >
      <SectionCard
        title="Tat ca bai dang"
        description="Danh sach nay co the noi tiep sang pagination, filter va server query tu Prisma."
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
                      {job.company} • {job.workMode} • {job.employmentType}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <StatusBadge label={meta.label} tone={meta.tone} />
                    <StatusBadge label={`${job.applicants} applicants`} tone="sky" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div className="grid gap-3 md:grid-cols-4">
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Shortlist:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.shortlist}
                      </span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Referral clicks:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.referralClicks}
                      </span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Referral applies:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.referralApplies}
                      </span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Het han:{" "}
                      <span className="font-semibold text-slate-950">
                        {job.expiresAt}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/hirer/jobs/${job.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Xem chi tiet
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
