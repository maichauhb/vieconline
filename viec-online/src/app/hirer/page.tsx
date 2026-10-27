import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nguoi giao viec | Viec Online",
  description:
    "Luong san pham danh cho nha tuyen dung SME: dang job nhanh, nhan ung vien va mo rong bang referral.",
};

const hirerFeatures = [
  "Form dang job toi gian, ro dau viec, ro ky nang va ro ngan sach.",
  "Trang quan ly job, ung vien va trang thai duyet cho startup.",
  "Admin moderation de han che spam va giu chat luong marketplace.",
  "San sang mo them featured listing, subscription va referral tracking.",
];

export default function HirerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Hirer flow
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              SME va startup dang job nhanh, theo doi ung vien gon
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Trang nay la diem dat cho employer onboarding, create job va
              dashboard. Huong nay phu hop voi startup can launch nhanh va do
              duoc toc do nhan apply that.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Xem boi canh market
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
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">
              MVP hirer stack
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {hirerFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
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
