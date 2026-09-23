"use client";

import { useState } from "react";
import Link from "next/link";
import UnderlineTabs from "../../../_components/UnderlineTabs";
import { type PropertyItem, monitorDetailTabDefs, competitionTrend } from "../../../_lib/data";
import { card, statBox, emptyState } from "../../../_lib/ui";

export default function MonitorDetail({ property }: { property: PropertyItem }) {
  const [tab, setTab] = useState("competition");
  const activeLabel = monitorDetailTabDefs.find((t) => t.key === tab)?.label;

  return (
    <>
      <Link href="/monitor" className="inline-block text-[13px] text-body mb-3">
        ← 一覧に戻る
      </Link>
      <div className="text-[17px] font-extrabold text-ink mb-4">
        {property.name}　{property.price}
      </div>
      <UnderlineTabs tabs={monitorDetailTabDefs} active={tab} onChange={setTab} />

      {tab === "competition" ? (
        <div className={`${card} p-5`}>
          <div className="text-[13px] font-bold text-ink mb-4">競合物件数の推移</div>
          <div className="flex items-end gap-5 h-35 mb-5">
            {competitionTrend.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="text-xs text-ink font-bold">{b.value}</div>
                <div className="w-9 bg-chart rounded-t" style={{ height: b.height }} />
                <div className="text-[11px] text-muted">{b.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#fef8ea] rounded-lg py-3 px-4 text-[13px] text-[#7a5c1e]">競合物件数が直近2週間で5件減少しています。</div>
        </div>
      ) : (
        <div className={emptyState}>「{activeLabel}」の内容がここに表示されます。</div>
      )}

      <div className={`${statBox} py-3.5 px-4.5 mt-4 text-[13px] text-body leading-[1.8]`}>
        <b className="text-ink">AIの見解：</b> 競合物件数が減少しており、市場在庫が減っている可能性があります。周辺相場では大幅な価格変更は見られず、広告出稿の強化を推奨します。
      </div>
    </>
  );
}
