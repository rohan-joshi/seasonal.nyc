import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MONTH_SLUGS,
  MONTHS,
  getMonthNumber,
  getProduceForMonth,
} from "@/lib/produce";
import ProduceCard from "@/components/ProduceCard";
import MonthNav from "@/components/MonthNav";

interface Props {
  params: Promise<{ month: string }>;
}

export async function generateStaticParams() {
  return MONTH_SLUGS.map((month) => ({ month }));
}

export async function generateMetadata({ params }: Props) {
  const { month } = await params;
  const monthNum = getMonthNumber(month);
  if (!monthNum) return {};
  const monthName = MONTHS[monthNum - 1];
  return {
    title: `What's in Season in ${monthName} · Seasonal NYC`,
    description: `New York State seasonal produce guide for ${monthName}. Find what's at peak, in season, and coming next at your local farmers market.`,
  };
}

export default async function MonthPage({ params }: Props) {
  const { month } = await params;
  const monthNum = getMonthNumber(month);
  if (!monthNum || monthNum < 1) notFound();

  const monthName = MONTHS[monthNum - 1];
  const { peak, in_season, coming_next } = getProduceForMonth(monthNum);

  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Header */}
      <header className="border-b border-[#e0dbd3] bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🌿</span>
            <span className="font-semibold text-[#2d4a2d] tracking-tight">
              seasonal<span className="text-[#5a8a5a]">.nyc</span>
            </span>
          </Link>
          <Link
            href="/months"
            className="text-sm text-[#6b6b6b] hover:text-[#2d4a2d] transition-colors"
          >
            All months →
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Month nav + title */}
        <MonthNav currentMonth={monthNum} />

        <div className="mt-8 mb-10">
          <p className="text-sm font-medium text-[#5a8a5a] uppercase tracking-widest mb-1">
            New York State
          </p>
          <h1 className="text-4xl font-bold text-[#1a2e1a] tracking-tight">
            {monthName}
          </h1>
          <p className="mt-2 text-[#6b6b6b]">
            {peak.length + in_season.length} items in season
          </p>
        </div>

        {/* Peak season */}
        {peak.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2d7a3a]" />
              <h2 className="text-lg font-semibold text-[#1a2e1a]">
                Peak Season
              </h2>
              <span className="text-sm text-[#6b6b6b] ml-1">
                ({peak.length})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {peak.map((item) => (
                <ProduceCard key={item.slug} item={item} status="peak" />
              ))}
            </div>
          </section>
        )}

        {/* In season */}
        {in_season.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8aad6a]" />
              <h2 className="text-lg font-semibold text-[#1a2e1a]">
                In Season
              </h2>
              <span className="text-sm text-[#6b6b6b] ml-1">
                ({in_season.length})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {in_season.map((item) => (
                <ProduceCard key={item.slug} item={item} status="in_season" />
              ))}
            </div>
          </section>
        )}

        {/* Coming next month */}
        {coming_next.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8c0b0]" />
              <h2 className="text-lg font-semibold text-[#1a2e1a]">
                Coming in{" "}
                {MONTHS[monthNum === 12 ? 0 : monthNum]}
              </h2>
              <span className="text-sm text-[#6b6b6b] ml-1">
                ({coming_next.length})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {coming_next.map((item) => (
                <ProduceCard
                  key={item.slug}
                  item={item}
                  status="coming_next"
                />
              ))}
            </div>
          </section>
        )}

        {peak.length === 0 && in_season.length === 0 && (
          <div className="text-center py-20 text-[#6b6b6b]">
            <p className="text-4xl mb-4">❄️</p>
            <p className="text-lg font-medium">Lean pickings this month.</p>
            <p className="text-sm mt-1">
              Check stored vegetables and root cellars — or visit a winter
              market.
            </p>
          </div>
        )}
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
