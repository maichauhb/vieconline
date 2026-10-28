type StatusTone =
  | "emerald"
  | "amber"
  | "sky"
  | "rose"
  | "slate"
  | "violet";

const toneStyles: Record<StatusTone, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  sky: "bg-sky-50 text-sky-700 border-sky-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
};

type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
};

export function StatusBadge({
  label,
  tone = "slate",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
