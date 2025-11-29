interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="glass-card flex items-center gap-3 px-4 py-3">
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-base-100/20">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-base-content/70 tabular-nums">
        {safeValue}%
      </span>
    </div>
  );
}
