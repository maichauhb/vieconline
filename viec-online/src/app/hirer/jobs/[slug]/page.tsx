import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatusBadge } from "@/components/status-badge";
import {
  getAllJobs,
  getApplicantsForJob,
  getJobBySlug,
} from "@/lib/marketplace-data";
import { getApplicationStatusMeta, getJobStatusMeta } from "@/lib/status";

export async function generateMetadata(
  props: PageProps<"/hirer/jobs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const job = getJobBySlug(slug);

  return {
    title: job ? `${job.title} | Hirer dashboard` : "Job detail | Viec Online",
    description: job?.summary ?? "Chi tiet job va applicant pipeline cho hirer.",
  };
}

export function generateStaticParams() {
  return getAllJobs().map((job) => ({
    slug: job.slug,
  }));
}

export default async function HirerJobDetailPage(
  props: PageProps<"/hirer/jobs/[slug]">,
) {
  const { slug } = await props.params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const applicants = getApplicantsForJob(job.id);
  const jobMeta = getJobStatusMeta(job.status);

  return (
    <DashboardShell
      eyebrow="Job detail"
      title={job.title}
      description="Man nay dong vai trung tam van hanh cho tung bai dang: xem status, referral traction va danh sach ung vien dau vao."
      actions={[
        { href: "/hirer/jobs", label: "Ve danh sach jobs" },
        { href: "/hirer/jobs/new", label: "Dang job moi", primary: true },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <SectionCard
          title="Tong quan bai dang"
          description={`${job.company} • ${job.location} • ${job.workMode}`}
        >
          <div className="flex flex-wrap gap-3">
            <StatusBadge label={jobMeta.label} tone={jobMeta.tone} />
            <StatusBadge label={job.employmentType} tone="sky" />
            {job.urgent ? <StatusBadge label="Tuyen gap" tone="amber" /> : null}
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            {job.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
              Applicants:{" "}
              <span className="font-semibold text-slate-950">{job.applicants}</span>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
              Shortlist:{" "}
              <span className="font-semibold text-slate-950">{job.shortlist}</span>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
              First apply:{" "}
              <span className="font-semibold text-slate-950">
                {job.timeToFirstApply}
              </span>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Referral traction"
          description="Khoi KPI cho phan chia se viec trong phase growth."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Referral clicks</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {job.referralClicks}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Referral applies</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {job.referralApplies}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Direct applies</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {job.sourceMix.direct}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Referral mix</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {job.sourceMix.referral}
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard
          title="Danh sach ung vien"
          description="Danh sach nay la phan giao nhau giua job detail va ATS nhe cho startup."
        >
          <div className="space-y-4">
            {applicants.map((applicant) => {
              const meta = getApplicationStatusMeta(applicant.status);

              return (
                <article
                  key={applicant.id}
                  className="rounded-[1.5rem] border border-slate-200 p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">
                        {applicant.candidateName}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {applicant.candidateHeadline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <StatusBadge label={meta.label} tone={meta.tone} />
                      <StatusBadge
                        label={
                          applicant.source === "referral"
                            ? "Referral"
                            : "Direct"
                        }
                        tone={applicant.source === "referral" ? "violet" : "sky"}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {applicant.note}
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
