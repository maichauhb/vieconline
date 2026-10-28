import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard-shell";
import { SectionCard } from "@/components/section-card";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { getHirerDashboard } from "@/lib/marketplace-repository";
import { getJobStatusMeta } from "@/lib/status";

export const metadata: Metadata = {
  title: "Nguoi giao viec | Viec Online",
  description:
    "Luong san pham danh cho nha tuyen dung SME: dang job nhanh, nhan ung vien va mo rong bang referral.",
};

export const instant = false;

export default async function HirerPage(props: PageProps<"/hirer">) {
  const data = await getHirerDashboard();
  const searchParams = await props.searchParams;
  const publishedJobs = data.jobs.filter((job) => job.status === "published");
  const pendingJobs = data.jobs.filter((job) => job.status === "pending");
  const pausedJobs = data.jobs.filter((job) => job.status === "paused");

  return (
    <DashboardShell
      eyebrow="Hirer dashboard"
      title="Trang dieu hanh gon cho SME va startup dang tuyen"
      description="Trang overview nay giup nha tuyen dung xem nhanh pipeline: job dang hien, job cho duyet, so luong ung vien va referral traction."
      actions={[
        { href: "/hirer/jobs/new", label: "Dang job moi", primary: true },
        { href: "/hirer/jobs", label: "Quan ly jobs" },
      ]}
    >
      {searchParams.pipeline ? (
        <div className="mb-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
          Pipeline ung vien da duoc cap nhat.
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-4">
        <StatCard
          label="Cong ty"
          value={data.hirer.companyName}
          hint={data.hirer.verified ? "Da xac minh" : "Chua xac minh"}
        />
        <StatCard
          label="Job dang hien"
          value={publishedJobs.length.toString()}
          hint="Nen giu 2-4 job dang hien de khong loang lead."
        />
        <StatCard
          label="Cho duyet"
          value={pendingJobs.length.toString()}
          hint="Admin can review trong 24 gio."
        />
        <StatCard
          label="Tam dung"
          value={pausedJobs.length.toString()}
          hint="Co the mo lai khi can tiep lead."
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard
          title={`${data.hirer.ownerName} • ${data.hirer.title}`}
          description="Ho so nha tuyen dung mau cho startup launch phase."
        >
          <div className="flex flex-wrap gap-3">
            <StatusBadge
              label={data.hirer.verified ? "Verified" : "Pending"}
              tone={data.hirer.verified ? "emerald" : "amber"}
            />
            <StatusBadge label={`${data.hirer.activeJobs} active jobs`} tone="sky" />
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Vai tro nay can di qua onboarding, tao cong ty, chon niche job va
            dang bai theo form chuan hoa de ti le first apply nhanh hon.
          </p>
        </SectionCard>

        <SectionCard
          title="Nguyen tac post job hieu qua"
          description="Nhung guideline nen encode vao onboarding va form dang job."
        >
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-5">
              Mo ta ro output, timeline, KPI va skills bat buoc.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Ghi budget hoac salary range de giam ung vien khong phu hop.
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              Bat referral voi job can lead nhanh tu cong dong.
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard
          title="Snapshot cac job chinh"
          description="Preview nhanh de nha tuyen dung nhay vao job detail, applicant list va cap nhat pipeline."
        >
          <div className="grid gap-4">
            {publishedJobs.slice(0, 3).map((job) => {
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
                        {job.location} • {job.workMode} • {job.createdAt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <StatusBadge label={meta.label} tone={meta.tone} />
                      <StatusBadge label={`${job.applicants} applicants`} tone="sky" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      First apply: <span className="font-semibold text-slate-950">{job.timeToFirstApply}</span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Referral applies: <span className="font-semibold text-slate-950">{job.referralApplies}</span>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                      Shortlist: <span className="font-semibold text-slate-950">{job.shortlist}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
