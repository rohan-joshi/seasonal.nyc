import Link from "next/link";
import { ProduceItem } from "@/lib/produce";

interface Props {
  item: ProduceItem;
  status: "peak" | "in_season" | "coming_next";
}

const statusStyles = {
  peak: "bg-[#eef7ee] border-[#b2d9b2] hover:border-[#2d7a3a] hover:shadow-md",
  in_season:
    "bg-white border-[#ddd8d0] hover:border-[#8aad6a] hover:shadow-md",
  coming_next:
    "bg-[#f5f3f0] border-dashed border-[#c8c0b0] opacity-70 hover:opacity-100",
};

export default function ProduceCard({ item, status }: Props) {
  return (
    <Link
      href={`/produce/${item.slug}`}
      className={`rounded-xl border p-4 flex flex-col gap-2 transition-all duration-150 ${statusStyles[status]}`}
    >
      <span className="font-medium text-[#1a2e1a] text-sm leading-tight">
        {item.name}
      </span>
      <span className="text-xs text-[#9b9589] capitalize">
        {item.category}
      </span>
    </Link>
  );
}
