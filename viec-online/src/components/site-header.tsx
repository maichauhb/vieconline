import Link from "next/link";

const navItems = [
  { href: "/jobs", label: "Viec lam" },
  { href: "/candidate", label: "Nguoi tim viec" },
  { href: "/hirer", label: "Nguoi giao viec" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-semibold text-white">
            VO
          </span>
          <div>
            <p className="text-base font-semibold text-slate-950">Viec Online</p>
            <p className="text-sm text-slate-500">viec.online</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/jobs"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Xem job
          </Link>
          <Link
            href="/hirer"
            className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Dang job
          </Link>
        </div>
      </div>
    </header>
  );
}
