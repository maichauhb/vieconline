import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-950/5">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
