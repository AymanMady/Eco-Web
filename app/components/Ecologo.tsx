import classNames from "classnames";

type LogoSize = "sm" | "md" | "lg";

const imageSizes: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 40, height: 40 },
  md: { width: 80, height: 80 },
  lg: { width: 120, height: 120 },
};

const textSizes: Record<LogoSize, string> = {
  sm: "text-xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export default function Ecologo({ size = "md" }: { size?: LogoSize }) {
  return (
    <div className="flex items-end -space-x-4">
      <svg
        style={{
          width: imageSizes[size].width,
          height: imageSizes[size].height,
        }}
        className="text-base-content"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
        <path
          d="M30 50 Q40 30, 50 50 T70 50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="30" r="8" fill="currentColor" />
        <path
          d="M50 38 L50 70"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M35 55 L50 70 L65 55"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <p
        className={classNames(
          textSizes[size],
          "text-base-content tracking-tighter select-none"
        )}
      >
        Eco<span className="font-medium text-success">Web</span>
      </p>
    </div>
  );
}

