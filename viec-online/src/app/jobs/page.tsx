import type { Metadata } from "next";

import { JobCard } from "@/components/job-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { featuredJobs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Viec lam | Viec Online",
  description:
    "Danh sach viec online cho SME va startup: content, design, sales, CSKH va marketing.",
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Jobs listing
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight">
            Viec online duoc curating cho niche launch dau tien
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Ban listing nay hien dang dung du lieu seed de khoi dong startup.
            Buoc tiep theo co the noi vao database that va search/filter thoi
            gian thuc.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Remote", "Part-time", "Freelance", "Content", "Design", "Sales"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
