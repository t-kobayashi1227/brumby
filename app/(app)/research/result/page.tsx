"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UnderlineTabs from "../../../_components/UnderlineTabs";
import {
  aiResultTabDefs,
  diagnosisSummary,
  areaStats,
  similarProperties,
  priceHistogram,
  properties,
  dealStats,
  dealCases,
  dealAppealPoints,
  dealSuccessPoints,
  surroundingSummary,
  nearbyFacilities,
  surroundingScores,
} from "../../../_lib/data";
import { card, btnPrimary, btnSecondary, statBox } from "../../../_lib/ui";

/** 150 → "150.0㎡（約45.4坪）" (1㎡ = 0.3025坪) */
function withTsubo(sqm: number): string {
  return `${sqm.toFixed(1)}㎡（約${(sqm * 0.3025).toFixed(1)}坪）`;
}

/** "2025/08/20" → "2025年08月20日" */
function formatJpDate(date: string): string {
  const [y, m, d] = date.split("/");
  return `${y}年${m}月${d}日`;
}

export default function ResearchResultPage() {
  const [tab, setTab] = useState("summary");
  const [dealIdx, setDealIdx] = useState(0);
  const activeDeal = dealCases[dealIdx];
  const targetProperty = properties[0];
  return (
    <>
      <UnderlineTabs tabs={aiResultTabDefs} active={tab} onChange={setTab} />

      {tab === "summary" && (
        <div className={`${card} p-5`}>
          <div className="flex justify-between items-baseline mb-3.5">
            <div className="text-sm font-bold text-ink">AI競合診断結果</div>
            <div className="text-xs text-muted">調査日：{diagnosisSummary.surveyDate}</div>
          </div>
          <div className="flex items-center gap-3 bg-[#fff4e0] border border-[#f6d9a8] rounded-lg py-4 px-5 mb-4">
            <span className="text-[28px] leading-none text-[#e8920c]">⚠</span>
            <span className="text-lg font-extrabold text-ink">
              競争環境：<span className="text-[#e6303e]">{diagnosisSummary.competition}</span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {diagnosisSummary.stats.map((s) => (
              <div key={s.label} className={`${statBox} p-3.5 text-center`}>
                <div className="text-xs text-muted mb-1.5">{s.label}</div>
                <div className={`font-extrabold ${s.highlight ? "text-[#e6303e]" : "text-ink"}`}>
                  <span className="text-xl">{s.value}</span>
                  <span className="text-xs ml-0.5">{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[13px] font-bold text-ink mb-2">AIの分析コメント</div>
          <p className="text-[13px] text-body leading-relaxed mb-5">{diagnosisSummary.comment}</p>
          <div className="text-[13px] font-bold text-brand mb-2">推奨アクション</div>
          <ol className="grid gap-2">
            {diagnosisSummary.actions.map((a, i) => (
              <li key={a} className="flex items-center gap-3 border border-line rounded-lg py-2 px-3 text-[13px] text-body">
                <span className="flex items-center justify-center w-6 h-6 shrink-0 rounded-full bg-brand text-white text-xs font-bold">
                  {i + 1}
                </span>
                {a}
              </li>
            ))}
          </ol>
        </div>
      )}

      {tab === "area" && (
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden">
            <Image src="/map.png" alt="エリアマップ" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
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
      )}

      {tab === "competitor" && (
        <div className={`${card} p-4.5`}>
          <div className="text-[13px] font-bold text-ink mb-1.5">現在販売中の類似物件（新潟市中央区・上所周辺）</div>
          <div className="grid grid-cols-3 gap-3.5 mt-3">
            {similarProperties.map((p, i) => (
              <div key={i} className="border border-canvas rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src="/house.jpg" alt="物件写真" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
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

      {tab === "deals" && (
        <>
          <div className="flex gap-3.5 items-start bg-[#fff8e6] border border-[#f3dfa1] rounded-[10px] py-4 px-4.5 mb-4">
            <div className="text-[22px]">💡</div>
            <div>
              <div className="text-[13px] font-extrabold text-[#7a5c1e] mb-1">AIからの示唆</div>
              <div className="text-xs text-[#7a5c1e]">
                近隣エリアでは、土地100㎡以上・築5年以内の4LDK物件が平均38日で成約しており、3,200万円〜3,800万円の価格帯が需要の中心です。
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3.5 mb-4.5">
            {dealStats.map((s) => (
              <div key={s.label} className={`${card} p-3.5`}>
                <div className="text-xs text-muted mb-1.5">{s.label}</div>
                <div className="text-[22px] font-extrabold text-ink">{s.value}</div>
                <div className={`text-xs mt-1 ${s.positive ? "text-[#1a8a4a]" : "text-muted"}`}>{s.note}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[1.5fr_1fr] gap-4">
            <div className={`${card} p-4.5`}>
              <div className="text-sm font-bold text-ink mb-3">成約事例一覧（直近6ヵ月）</div>
              <div className="grid grid-cols-[1.8fr_1fr_1fr_.8fr_1fr_1fr] gap-1.5 text-[11px] text-muted px-1 pb-2 border-b border-canvas">
                <div>物件名・所在地</div>
                <div>成約価格</div>
                <div>面積</div>
                <div>間取り</div>
                <div>築年数</div>
                <div>成約日</div>
              </div>
              {dealCases.map((d, i) => (
                <div
                  key={d.name}
                  onClick={() => setDealIdx(i)}
                  className={`grid grid-cols-[1.8fr_1fr_1fr_.8fr_1fr_1fr] gap-1.5 items-center py-2.5 px-1 border-b border-divider cursor-pointer ${dealIdx === i ? "bg-[#eef4ff]" : ""}`}
                >
                  <div>
                    <div className="text-xs text-ink font-semibold">{d.name}</div>
                    <div className="text-[11px] text-muted">{d.type}</div>
                  </div>
                  <div className="text-xs text-accent font-bold">{d.price}</div>
                  <div className="text-[11px] text-sub">
                    {d.land}㎡/{d.building}㎡
                  </div>
                  <div className="text-xs text-sub">{d.layout}</div>
                  <div className="text-xs text-sub">{d.age}</div>
                  <div className="text-[11px] text-sub">{d.date}</div>
                </div>
              ))}
            </div>
            <div className={`${card} p-4.5`}>
              <div className="text-sm font-bold text-ink mb-3">成約事例の詳細</div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <Image src="/house.jpg" alt={activeDeal.name} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="text-sm font-extrabold text-ink mb-0.5">{activeDeal.name}</div>
              <div className="text-[11px] text-muted mb-2">{activeDeal.type}</div>
              <div className="text-xl font-extrabold text-accent mb-2.5">成約価格 {activeDeal.price}</div>
              <div className="grid grid-cols-2 gap-x-2 mb-3.5 text-xs">
                {[
                  ["土地面積", withTsubo(activeDeal.land)],
                  ["建物面積", withTsubo(activeDeal.building)],
                  ["間取り", activeDeal.layout],
                  ["築年数", activeDeal.age],
                  ["販売期間", `${activeDeal.salesDays}日`],
                  ["成約日", formatJpDate(activeDeal.date)],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[64px_1fr] border-b border-line">
                    <div className="bg-subtle text-muted py-2 px-2.5">{label}</div>
                    <div className="text-ink py-2 px-2.5">{value}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-[#eefaf3] border border-[#cdeedb] rounded-lg py-3 px-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#157347] mb-2">
                    <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full border-2 border-[#1a8a4a] text-[10px] leading-none">✓</span>
                    主な訴求ポイント
                  </div>
                  <ul className="grid gap-1.5">
                    {dealAppealPoints.map((p) => (
                      <li key={p} className="flex gap-1.5 text-[11px] text-ink">
                        <span className="mt-[5px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#1a8a4a]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#fff6ea] border border-[#f6dfbd] rounded-lg py-3 px-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#c2410c] mb-2">
                    <span className="text-sm leading-none">📊</span>
                    成約のポイント（AI分析）
                  </div>
                  <ul className="grid gap-1.5">
                    {dealSuccessPoints.map((p) => (
                      <li key={p} className="flex gap-1.5 text-[11px] text-ink">
                        <span className="mt-[5px] w-1.5 h-1.5 shrink-0 rounded-full bg-ink" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "surroundings" && (
        <>
          <div className="flex gap-3.5 items-start bg-[#fff8e6] border border-[#f3dfa1] rounded-[10px] py-4 px-4.5 mb-4">
            <div className="text-[22px]">💡</div>
            <div>
              <div className="text-[13px] font-extrabold text-[#7a5c1e] mb-1">AIの総合コメント</div>
              <div className="text-xs text-[#7a5c1e]">
                教育施設・商業施設・公園がバランスよく揃っており、子育てファミリーに人気のエリアです。駅徒歩12分で都心へのアクセスも良好です。
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[.9fr_1.3fr_1fr] gap-4 mb-4">
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2.5">
                <Image src="/house.jpg" alt={targetProperty.name} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
              </div>
              <div className="text-[13px] font-extrabold text-ink">{targetProperty.name}</div>
              <div className="text-lg font-extrabold text-accent mb-3">{targetProperty.price}</div>
              <div className="text-[13px] font-bold text-ink mb-2">周辺環境の概要（半径1km圏内）</div>
              <div className="grid gap-2">
                {surroundingSummary.map((r) => (
                  <div key={r.label} className="flex gap-2 text-xs text-body">
                    <div className="w-[18px]">{r.icon}</div>
                    <div>
                      <div className="text-[11px] text-muted">{r.label}</div>
                      <div>{r.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${card} p-4`}>
              <div className="text-[13px] font-bold text-ink mb-2.5">周辺施設マップ（半径1km圏内）</div>
              <div className="relative aspect-[5/4] rounded-lg overflow-hidden">
                <Image src="/map.png" alt="周辺施設マップ" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className={`${card} p-4`}>
              <div className="text-[13px] font-bold text-ink mb-2.5">主な周辺施設一覧（距離の近い順）</div>
              <div className="grid gap-2.5">
                {nearbyFacilities.map((f, i) => (
                  <div key={f.name} className="flex gap-2.5 items-center">
                    <div className="flex items-center justify-center w-[22px] h-[22px] shrink-0 rounded-full bg-brand text-white text-[11px] font-bold">
                      {i + 1}
                    </div>
                    <div className="w-9 h-9 shrink-0 rounded-md bg-stripes" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-ink">{f.name}</div>
                      <div className="text-[11px] text-muted">
                        {f.type}・徒歩{f.minutes}分（約{f.distance}）
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3.5">
            {surroundingScores.map((sc) => (
              <div key={sc.label} className={`${card} p-3.5 flex gap-2.5 items-center`}>
                <Image src={sc.icon} alt="" width={52} height={52} className="shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="text-xs font-bold text-ink">{sc.label}</div>
                    <div className={`text-lg font-extrabold ${sc.scoreColor}`}>
                      {sc.score}
                      <span className="text-[11px] font-bold"> / 5.0</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-body">{sc.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}


      <div className="flex justify-end gap-2.5 mt-5">
        <button className={btnSecondary}>レポートを出力する（PDF）</button>
        <Link href="/strategy" className={btnPrimary}>
          販売戦略を作成する →
        </Link>
      </div>
    </>
  );
}
