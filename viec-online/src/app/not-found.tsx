import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
          404
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Khong tim thay noi dung ban dang can
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Route nay chua duoc khoi tao hoac slug job khong ton tai trong du lieu
          seed hien tai.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Ve trang chu
          </Link>
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
          >
            Xem job
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
