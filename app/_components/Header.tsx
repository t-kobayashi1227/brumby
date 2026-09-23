"use client";

import { usePathname } from "next/navigation";
import { findPage } from "../_lib/routes";

export default function Header() {
  const title = findPage(usePathname())?.title ?? "";
  return (
    <div className="h-14 shrink-0 bg-white border-b border-line flex items-center px-6 justify-between">
      <div className="text-base font-bold text-ink">{title}</div>
      <div className="size-8 rounded-full bg-[#dde3ee] flex items-center justify-center text-xs text-sub font-bold">担</div>
    </div>
  );
}
