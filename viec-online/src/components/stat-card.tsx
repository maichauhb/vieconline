type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      {hint ? (
        <p className="mt-2 text-sm leading-6 text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}
