import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nguoi tim viec | Viec Online",
  description:
    "Luong san pham danh cho ung vien: tao profile, apply nhanh va theo doi trang thai ung tuyen.",
};

const candidateFeatures = [
  "Onboarding profile ngan gon, de import CV hoac portfolio sau.",
  "Tim job theo remote, part-time, freelance va niche SME.",
  "Apply nhanh tu profile co san, giam friction khi nop ho so.",
  "Theo doi trang thai ung tuyen va job da luu trong dashboard.",
];

export default function CandidatePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Candidate flow
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Huong di san pham cho nguoi tim viec online
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Trang nay la moc MVP de noi tiep onboarding, profile va apply
              flow. Uu tien la cho ung vien hoan thanh profile nhanh va apply
              vao job da duoc kiem duyet.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Tim viec ngay
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Ve trang chu
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.22em] text-emerald-300">
              MVP candidate stack
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {candidateFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
