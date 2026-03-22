"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-sm text-[#6b6b6b] hover:text-[#2d4a2d] transition-colors inline-flex items-center gap-1 mb-6"
    >
      ← Back
    </button>
  );
}
