import Link from "next/link";

import type { JobItem } from "@/lib/site-data";

type JobCardProps = {
  job: JobItem;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-950/10">
      <div className="flex flex-wrap items-center gap-2">
        {job.urgent ? (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            Tuyen gap
          </span>
        ) : null}
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {job.mode}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {job.type}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-slate-950">{job.title}</h3>
        <p className="text-sm text-slate-500">
          {job.company} • {job.location}
        </p>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{job.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Muc thu nhap
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-950">
            {job.salary}
          </p>
        </div>

        <Link
          href={`/jobs/${job.slug}`}
          className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Xem chi tiet
        </Link>
      </div>
    </article>
  );
}
