"use client";

import { useState } from "react";
import Link from "next/link";
import StatusBadge from "../../_components/StatusBadge";
import { properties, monitorFilterDefs } from "../../_lib/data";
import { card, fieldLabel, tableHead, pillFilterClass } from "../../_lib/ui";

export default function MonitorPage() {
  const [filter, setFilter] = useState("all");
  const rows = properties.map((p, id) => ({ p, id })).filter(({ p }) => filter === "all" || p.status === filter);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className={fieldLabel}>販売中の物件をチェック。得点の変化を見逃さず、最適な一手をご提案します。</div>
        <Link href="/properties/new" className="py-[9px] px-4 bg-brand rounded-md text-white text-[13px] font-bold whitespace-nowrap">
          ＋ 新しい物件を登録
        </Link>
      </div>
      <div className="flex gap-2 mb-4">
        {monitorFilterDefs.map((f) => (
          <div key={f.key} onClick={() => setFilter(f.key)} className={pillFilterClass(filter === f.key)}>
            {f.label}
          </div>
        ))}
      </div>
      <div className={`${card} p-5`}>
        <div className={`${tableHead} grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]`}>
          <div>物件名</div>
          <div>販売期間</div>
          <div>閲覧数</div>
          <div>問合せ</div>
          <div>見学</div>
          <div>AI診断</div>
          <div>次回確認</div>
        </div>
        {rows.map(({ p, id }) => (
          <Link
            key={id}
            href={`/monitor/${id}`}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 py-3 px-1 border-b border-divider items-center"
          >
            <div className="text-[13px] text-ink font-semibold">{p.name}</div>
            <div className="text-[13px] text-sub">{p.days}日</div>
            <div className="text-[13px] text-sub">{p.views}</div>
            <div className="text-[13px] text-sub">{p.inquiries}</div>
            <div className="text-[13px] text-sub">{p.tours}</div>
            <div>
              <StatusBadge status={p.status} />
            </div>
            <div className="text-xs text-muted">{p.nextCheck}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
