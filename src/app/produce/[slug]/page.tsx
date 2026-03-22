import { notFound } from "next/navigation";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import {
  PRODUCE,
  getProduceBySlug,
  getMonthsForProduce,
  MONTH_SLUGS,
  MONTHS,
} from "@/lib/produce";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getProduceBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.name} · Seasonal NYC`,
    description: item.description,
  };
}

const MONTH_ABBR = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

export default async function ProducePage({ params }: Props) {
  const { slug } = await params;
  const item = getProduceBySlug(slug);
  if (!item) notFound();

  const monthData = getMonthsForProduce(slug);
  const peakMonths = monthData
    .filter((m) => m.season === "peak")
    .map((m) => m.monthName);
  const inSeasonMonths = monthData
    .filter((m) => m.season === "in_season")
    .map((m) => m.monthName);

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

      <main className="max-w-2xl mx-auto px-4 py-10">
        <BackButton />

        <div className="mb-6">
          <p className="text-xs font-medium text-[#5a8a5a] uppercase tracking-widest mb-1">
            {item.category}
          </p>
          <h1 className="text-3xl font-bold text-[#1a2e1a] tracking-tight">
            {item.name}
          </h1>
        </div>

        <p className="text-[#4a4a4a] leading-relaxed mb-8">{item.description}</p>

        {/* Season calendar */}
        <div className="bg-white rounded-2xl border border-[#e0dbd3] p-5 mb-8">
          <h2 className="text-sm font-semibold text-[#1a2e1a] mb-4">
            New York Season
          </h2>
          <div className="grid grid-cols-12 gap-1">
            {MONTH_ABBR.map((abbr, i) => {
              const monthNum = i + 1;
              const season = item.months[monthNum];
              return (
                <Link
                  key={abbr}
                  href={`/months/${MONTH_SLUGS[i]}`}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div
                    className={`w-full aspect-square rounded-md transition-all ${
                      season === "peak"
                        ? "bg-[#2d7a3a]"
                        : season === "in_season"
                        ? "bg-[#8aad6a]"
                        : "bg-[#ede9e3]"
                    } group-hover:opacity-80`}
                  />
                  <span className="text-[10px] text-[#9b9589] leading-none">
                    {abbr}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#2d7a3a]" />
              <span className="text-xs text-[#6b6b6b]">Peak</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#8aad6a]" />
              <span className="text-xs text-[#6b6b6b]">In season</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-[#ede9e3]" />
              <span className="text-xs text-[#6b6b6b]">Out of season</span>
            </div>
          </div>
        </div>

        {/* Peak / In season summary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {peakMonths.length > 0 && (
            <div className="bg-[#eef7ee] rounded-xl border border-[#b2d9b2] p-4">
              <p className="text-xs font-semibold text-[#2d7a3a] uppercase tracking-wider mb-2">
                Peak Season
              </p>
              <p className="text-sm text-[#2d4a2d] leading-relaxed">
                {peakMonths.join(", ")}
              </p>
            </div>
          )}
          {inSeasonMonths.length > 0 && (
            <div className="bg-white rounded-xl border border-[#ddd8d0] p-4">
              <p className="text-xs font-semibold text-[#8aad6a] uppercase tracking-wider mb-2">
                Also Available
              </p>
              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                {inSeasonMonths.join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Browse months that have this item */}
        <div>
          <h2 className="text-sm font-semibold text-[#1a2e1a] mb-3">
            Browse months with {item.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(item.months).map(([monthNum, season]) => {
              const idx = parseInt(monthNum) - 1;
              return (
                <Link
                  key={monthNum}
                  href={`/months/${MONTH_SLUGS[idx]}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    season === "peak"
                      ? "bg-[#eef7ee] text-[#2d7a3a] border border-[#b2d9b2] hover:bg-[#dcf0dc]"
                      : "bg-white text-[#4a4a4a] border border-[#ddd8d0] hover:border-[#8aad6a]"
                  }`}
                >
                  {MONTHS[idx]}
                  {season === "peak" && (
                    <span className="ml-1 text-xs opacity-70">●</span>
                  )}
                </Link>
              );
            })}
          </div>
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
