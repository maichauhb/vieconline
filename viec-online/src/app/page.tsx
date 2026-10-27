import Link from "next/link";

import { JobCard } from "@/components/job-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  featuredJobs,
  processSteps,
  roadmapItems,
  stats,
  valueProps,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="flex-1">
        <section className="overflow-hidden border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Marketplace viec online cho SME va startup
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Tim viec online that, tuyen nguoi nhanh, chia se co hoi de tang
                  match.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Viec Online duoc thiet ke cho doanh nghiep nho, startup va
                  nguoi muon tim co hoi linh hoat. Bat dau gon, duyet job ky,
                  toi uu de co ung vien phu hop trong vai ngay.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Kham pha job
                </Link>
                <Link
                  href="/hirer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Dang job cho SME
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-3xl font-semibold text-slate-950">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/15">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
                    North star MVP
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Moi job co it nhat 3 ung vien phu hop trong 7 ngay
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                  Startup-ready
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {roadmapItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-200">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Toi uu cho launch nhanh, do nhu cau that va mo rong dan
                        tu referral + SEO.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Cho nguoi tim viec
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Ho so gon, apply nhanh, job da duoc loc
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {valueProps.candidates.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Cho nguoi giao viec
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Dang job nhanh, nhan ung vien va referral tu cong dong
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {valueProps.hirers.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Featured jobs
                </p>
                <h2 className="text-3xl font-semibold">
                  Nhung job phu hop voi niche launch dau tien
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600">
                  Tap trung vao nhung nhom viec online co nhu cau lap lai va
                  quy trinh tuyen nhanh: content, design, CSKH, sales va
                  marketing.
                </p>
              </div>

              <Link
                href="/jobs"
                className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Xem tat ca job
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featuredJobs.slice(0, 6).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Cach san pham van hanh
            </p>
            <h2 className="text-3xl font-semibold">
              Lean marketplace, du de launch va do traction that
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5"
              >
                <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                  Buoc 0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Giai doan tiep theo
                </p>
                <h2 className="mt-4 text-3xl font-semibold">
                  Scaffold nay san sang de noi tiep auth, database, job posting
                  va apply flow.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Hien tai day la nen landing + route structure cho startup. Buoc
                  tiep theo la gan auth, schema du lieu va dashboard theo vai tro.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/candidate"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Luong ung vien
                </Link>
                <Link
                  href="/hirer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Luong nha tuyen dung
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
