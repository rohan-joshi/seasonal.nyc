import Link from "next/link";
import { MONTHS, MONTH_SLUGS, getProduceForMonth } from "@/lib/produce";

export const metadata = {
  title: "All Months · Seasonal NYC",
  description:
    "Browse New York State seasonal produce by month. Find what's at peak and in season at your local farmers market.",
};

export default function MonthsIndexPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      <header className="border-b border-[#e0dbd3] bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-semibold text-[#2d4a2d] tracking-tight">
              seasonal<span className="text-[#5a8a5a]">.nyc</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-[#1a2e1a] mb-2">All Months</h1>
        <p className="text-[#6b6b6b] mb-8">
          New York State seasonal produce guide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {MONTHS.map((name, i) => {
            const monthNum = i + 1;
            const { peak, in_season } = getProduceForMonth(monthNum);
            const total = peak.length + in_season.length;

            return (
              <Link
                key={name}
                href={`/months/${MONTH_SLUGS[i]}`}
                className="bg-white rounded-xl border border-[#e0dbd3] p-4 hover:border-[#8aad6a] hover:shadow-md transition-all"
              >
                <p className="font-semibold text-[#1a2e1a]">{name}</p>
                <p className="text-sm text-[#6b6b6b] mt-1">
                  {total > 0 ? (
                    <>
                      <span className="text-[#2d7a3a] font-medium">
                        {peak.length}
                      </span>{" "}
                      peak,{" "}
                      <span className="font-medium">{in_season.length}</span> in
                      season
                    </>
                  ) : (
                    <span className="text-[#9b9589]">Lean season</span>
                  )}
                </p>
                {/* Mini bar showing peak (dark) vs in_season (light) */}
                {total > 0 && (
                  <div className="flex gap-0.5 mt-2">
                    {Array.from({ length: peak.length }).map((_, j) => (
                      <span
                        key={`p${j}`}
                        className="h-1 flex-1 rounded-full bg-[#2d7a3a]"
                      />
                    ))}
                    {Array.from({ length: in_season.length }).map((_, j) => (
                      <span
                        key={`s${j}`}
                        className="h-1 flex-1 rounded-full bg-[#8aad6a]"
                      />
                    ))}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-[#e0dbd3] mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-[#9b9589]">
          Seasonal availability reflects typical New York State farmers market
          seasons.{" "}
          <a
            href="https://grownyc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#5a8a5a]"
          >
            GrowNYC
          </a>{" "}
          is a great resource for local market info.
        </div>
      </footer>
    </div>
  );
}
