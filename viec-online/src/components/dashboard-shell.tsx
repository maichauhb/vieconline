import type { ReactNode } from "react";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type DashboardShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: { href: string; label: string; primary?: boolean }[];
  children: ReactNode;
};

export function DashboardShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {description}
              </p>
            </div>

            {actions?.length ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={
                      action.primary
                        ? "inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        : "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                    }
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <div className="mt-10">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}
