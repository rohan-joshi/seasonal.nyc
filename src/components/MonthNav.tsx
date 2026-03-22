import Link from "next/link";
import { MONTHS, MONTH_SLUGS } from "@/lib/produce";

interface Props {
  currentMonth: number; // 1-12
}

export default function MonthNav({ currentMonth }: Props) {
  const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;

  return (
    <div className="flex items-center justify-between">
      <Link
        href={`/months/${MONTH_SLUGS[prevMonth - 1]}`}
        className="flex items-center gap-1.5 text-sm text-[#6b6b6b] hover:text-[#2d4a2d] transition-colors group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">
          ←
        </span>
        {MONTHS[prevMonth - 1]}
      </Link>

      <div className="flex gap-1">
        {MONTH_SLUGS.map((slug, i) => {
          const monthNum = i + 1;
          const isActive = monthNum === currentMonth;
          return (
            <Link
              key={slug}
              href={`/months/${slug}`}
              title={MONTHS[i]}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                isActive
                  ? "bg-[#2d7a3a] scale-150"
                  : "bg-[#c8c0b0] hover:bg-[#8aad6a]"
              }`}
            />
          );
        })}
      </div>

      <Link
        href={`/months/${MONTH_SLUGS[nextMonth - 1]}`}
        className="flex items-center gap-1.5 text-sm text-[#6b6b6b] hover:text-[#2d4a2d] transition-colors group"
      >
        {MONTHS[nextMonth - 1]}
        <span className="group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </Link>
    </div>
  );
}
