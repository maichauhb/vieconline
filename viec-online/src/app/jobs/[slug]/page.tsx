import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { applyToJobAction } from "@/app/actions/marketplace";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getJobDetailBySlug,
  getPublicJobs,
} from "@/lib/marketplace-repository";

export function generateStaticParams() {
  return getPublicJobs().then((jobs) => jobs.map((job) => ({ slug: job.slug })));
}

export async function generateMetadata(
  props: PageProps<"/jobs/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const job = await getJobDetailBySlug(slug);

  if (!job || job.status !== "published") {
    return {
      title: "Khong tim thay job | Viec Online",
    };
  }

  return {
    title: `${job.title} | Viec Online`,
    description: job.summary,
  };
}

export default async function JobDetailPage(props: PageProps<"/jobs/[slug]">) {
  const { slug } = await props.params;
  const job = await getJobDetailBySlug(slug);

  if (!job || job.status !== "published") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              {job.workMode}
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              {job.employmentType}
            </span>
            {job.urgent ? (
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Tuyen gap
              </span>
            ) : null}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            {job.title}
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            {job.company} • {job.location}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Muc thu nhap
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {job.salary}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Kieu cong viec
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {job.employmentType}
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Hinh thuc
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {job.workMode}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Mo ta cong viec</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {job.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Ky nang uu tien</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Phu hop voi</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li>Nguoi muon di lam nhanh va phoi hop tu xa.</li>
                <li>Ung vien da co portfolio hoac case study san.</li>
                <li>Nguoi muon tham gia vao startup hoac SME nang dong.</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Apply flow
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Apply 1 cham tu profile candidate
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Form nay da duoc noi vao server action. Khi nop don, candidate
              applications va hirer pipeline se duoc cap nhat trong runtime
              store.
            </p>

            <form action={applyToJobAction} className="mt-6 space-y-4">
              <input type="hidden" name="jobSlug" value={job.slug} />
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Nguon apply
                </label>
                <select
                  name="source"
                  defaultValue="direct"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none ring-0"
                >
                  <option value="direct">Direct</option>
                  <option value="referral">Referral</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Loi nhan ngan
                </label>
                <textarea
                  name="note"
                  rows={5}
                  defaultValue={`Em quan tam vi tri ${job.title} va da co portfolio phu hop voi output cua job nay.`}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 outline-none ring-0"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Nop don ngay
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Referral ready
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Moi job detail page nhu the nay co the gan them referral link,
              tracking click va leaderboard o phase tiep theo.
            </p>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
