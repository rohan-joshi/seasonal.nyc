import { redirect } from "next/navigation";
import { MONTH_SLUGS } from "@/lib/produce";

export default function Home() {
  const currentMonth = new Date().getMonth(); // 0-indexed
  redirect(`/months/${MONTH_SLUGS[currentMonth]}`);
}
