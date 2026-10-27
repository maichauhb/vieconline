import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm text-slate-600 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-950">Viec Online</p>
          <p className="max-w-md leading-7">
            Nen tang ket noi viec online cho SME, startup, freelancer va nguoi
            muon tim co hoi linh hoat.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-950">San pham</p>
          <div className="flex flex-col gap-2">
            <Link href="/jobs" className="transition hover:text-slate-950">
              Viec lam
            </Link>
            <Link href="/candidate" className="transition hover:text-slate-950">
              Ho so ung vien
            </Link>
            <Link href="/hirer" className="transition hover:text-slate-950">
              Dang viec
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-slate-950">Huong tang truong</p>
          <ul className="space-y-2 leading-6">
            <li>SEO job page va landing theo niche</li>
            <li>Referral chia se viec qua cong dong</li>
            <li>Duyet job de giu chat luong ngay tu dau</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
