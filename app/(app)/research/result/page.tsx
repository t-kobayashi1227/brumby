"use client";

import { useState } from "react";
import Link from "next/link";
import UnderlineTabs from "../../../_components/UnderlineTabs";
import { aiResultTabDefs, areaStats, similarProperties, priceHistogram } from "../../../_lib/data";
import { card, btnPrimary, btnSecondary, statBox, emptyState, stripePlaceholder } from "../../../_lib/ui";

export default function ResearchResultPage() {
  const [tab, setTab] = useState("area");
  const activeLabel = aiResultTabDefs.find((t) => t.key === tab)?.label;
  return (
    <>
      <UnderlineTabs tabs={aiResultTabDefs} active={tab} onChange={setTab} />

      {tab === "area" && (
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className={`${stripePlaceholder} aspect-[4/3] rounded-[10px] text-[11px]`}>[ エリアマップ：半径3km・対象物件と競合物件 ]</div>
            <div className={`${card} p-4.5`}>
              <div className="text-[13px] font-bold text-ink mb-3.5">エリアの基本データ（半径3km圏）</div>
              <div className="grid grid-cols-2 gap-3">
                {areaStats.map((a, i) => (
                  <div key={i} className={`${statBox} p-3`}>
                    <div className="text-xs text-muted mb-1.5">{a.label}</div>
                    <div className="text-[17px] font-extrabold text-ink">{a.value}</div>
                    <div className="text-[11px] text-muted mt-0.5">{a.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${card} p-4.5`}>
            <div className="text-[13px] font-bold text-ink mb-1.5">現在販売中の類似物件（新潟市中央区・上所周辺）</div>
            <div className="grid grid-cols-3 gap-3.5 mt-3">
              {similarProperties.map((p, i) => (
                <div key={i} className="border border-canvas rounded-lg overflow-hidden">
                  <div className={`${stripePlaceholder} aspect-[4/3] text-[10px]`}>物件写真</div>
                  <div className="py-2.5 px-3">
                    <div className="text-sm font-extrabold text-accent mb-1">価格 {p.price}</div>
                    <div className="text-xs text-body">土地{p.land}㎡　建物{p.building}㎡</div>
                    <div className="text-xs text-body">間取り{p.layout}　築{p.built}</div>
                    <div className="text-xs text-muted mt-1">{p.area}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "price" && (
        <div className={`${card} p-5`}>
          <div className="text-[13px] font-bold text-ink mb-3.5">周辺の価格相場（新築戸建）</div>
          <div className="grid grid-cols-3 gap-3.5 mb-5">
            <div className={`${statBox} p-3.5`}>
              <div className="text-xs text-muted mb-1.5">平均価格</div>
              <div className="text-xl font-extrabold text-ink">3,850万円</div>
            </div>
            <div className={`${statBox} p-3.5`}>
              <div className="text-xs text-muted mb-1.5">価格帯</div>
              <div className="text-xl font-extrabold text-ink">3,200〜4,480万円</div>
            </div>
            <div className={`${statBox} p-3.5`}>
              <div className="text-xs text-muted mb-1.5">直近1年の成約件数</div>
              <div className="text-xl font-extrabold text-ink">28件</div>
            </div>
          </div>
          <div className="flex items-end gap-4 h-40">
            {priceHistogram.map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="text-xs text-ink font-bold">{b.value}</div>
                <div className="w-full bg-chart rounded-t" style={{ height: b.height }} />
                <div className="text-[11px] text-muted text-center">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab !== "area" && tab !== "price" && <div className={emptyState}>「{activeLabel}」の詳細データがここに表示されます。</div>}

      <div className="flex justify-end gap-2.5 mt-5">
        <button className={btnSecondary}>レポートを出力する（PDF）</button>
        <Link href="/strategy" className={btnPrimary}>
          販売戦略を作成する →
        </Link>
      </div>
    </>
  );
}
