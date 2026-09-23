"use client";

import { useState } from "react";
import UnderlineTabs from "../../_components/UnderlineTabs";
import {
  type MediaBudget,
  strategyTabDefs,
  targetList,
  appealList,
  directionList,
  computeDonut,
  mediaRoleTable,
} from "../../_lib/data";
import { card, fieldLabel, tableHead, btnPrimary, btnSecondary, budgetButtonClass } from "../../_lib/ui";

const BUDGETS: MediaBudget[] = ["10", "20", "30"];

export default function StrategyPage() {
  const [tab, setTab] = useState("overall");
  const [budget, setBudget] = useState<MediaBudget>("20");
  const { gradient, legend } = computeDonut(budget);

  return (
    <>
      <UnderlineTabs tabs={strategyTabDefs} active={tab} onChange={setTab} />

      {tab === "overall" && (
        <div className={`${card} p-5.5`}>
          <div className="text-[13px] text-muted mb-3">この物件の総合評価</div>
          <div className="flex gap-4.5 items-start">
            <div className="size-14 shrink-0 border-2 border-accent rounded-lg flex items-center justify-center text-[28px] font-black text-accent">A</div>
            <div>
              <div className="text-base font-extrabold text-accent mb-2">子育てファミリー層を中心に、早期売却が期待できる物件です。</div>
              <div className="text-[13px] text-body leading-[1.9]">周辺の人口構成・競合状況・価格相場を総合的に分析した結果、人気の高いエリアであり、価格・立地・住環境のバランスが良く、高い訴求力を持つ物件です。</div>
            </div>
          </div>
        </div>
      )}

      {tab === "target" && (
        <div className="grid gap-3">
          {targetList.map((t) => (
            <div key={t.num} className={`${card} p-4.5 flex gap-4 items-start`}>
              <div className="size-8 shrink-0 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center">{t.num}</div>
              <div className="flex-1">
                <div className="text-sm font-extrabold text-ink mb-2">{t.title}</div>
                <div className="text-[13px] text-body leading-[1.8]">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "appeal" && (
        <div className={`${card} p-5`}>
          <div className="text-[13px] font-bold text-ink mb-3.5">主な訴求ポイント</div>
          <div className="grid gap-2.5">
            {appealList.map((a, i) => (
              <div key={i} className={fieldLabel}>✓ {a}</div>
            ))}
          </div>
        </div>
      )}

      {tab === "direction" && (
        <div className={`${card} p-5`}>
          <div className="text-[13px] font-bold text-ink mb-3.5">販売の方向性</div>
          <div className="grid gap-2.5">
            {directionList.map((d, i) => (
              <div key={i} className={fieldLabel}>✓ {d}</div>
            ))}
          </div>
        </div>
      )}

      {tab === "media" && (
        <div className="grid gap-4">
          <div className={`${card} p-5`}>
            <div className="text-[13px] font-bold text-ink mb-4">推奨の媒体戦略（総予算{budget}万円の例）</div>
            <div className="flex gap-7 items-center flex-wrap">
              <div className="size-[150px] rounded-full flex items-center justify-center" style={{ background: gradient }}>
                <div className="size-22 rounded-full bg-white flex flex-col items-center justify-center">
                  <div className="text-[11px] text-muted">総予算</div>
                  <div className="text-base font-extrabold text-ink">{budget}万円</div>
                </div>
              </div>
              <div className="grid gap-2.5">
                {legend.map((m, i) => (
                  <div key={i} className={fieldLabel}>
                    <span className="inline-block size-2.5 rounded-full mr-2" style={{ backgroundColor: m.color }} />
                    {m.name}　{m.amt}（{m.pct}%）
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${card} p-5`}>
            <div className="flex justify-between items-center mb-3.5">
              <div className="text-[13px] font-bold text-ink">予算別シミュレーション</div>
              <div className="flex gap-2">
                {BUDGETS.map((b) => (
                  <div key={b} onClick={() => setBudget(b)} className={budgetButtonClass(budget === b)}>
                    {b}万円
                  </div>
                ))}
              </div>
            </div>
            <div className={`${tableHead} grid-cols-[2fr_1fr]`}>
              <div>媒体</div>
              <div>予算目安</div>
            </div>
            {legend.map((m, i) => (
              <div key={i} className="grid grid-cols-[2fr_1fr] gap-2 py-2.5 px-1 border-b border-divider">
                <div className={fieldLabel}>{m.name}</div>
                <div className="text-[13px] text-ink font-bold">{m.amt}</div>
              </div>
            ))}
            <div className="grid grid-cols-[2fr_1fr] gap-2 py-2.5 px-1">
              <div className="text-[13px] font-extrabold text-ink">合計</div>
              <div className="text-sm font-extrabold text-accent">{budget}万円</div>
            </div>
          </div>
          <div className={`${card} p-5`}>
            <div className="text-[13px] font-bold text-ink mb-3.5">媒体ごとの役割と期待効果</div>
            <div className={`${tableHead} grid-cols-[1.2fr_1.3fr_1.8fr]`}>
              <div>媒体</div>
              <div>主なターゲット</div>
              <div>期待できる効果</div>
            </div>
            {mediaRoleTable.map((r, i) => (
              <div key={i} className="grid grid-cols-[1.2fr_1.3fr_1.8fr] gap-2 py-2.5 px-1 border-b border-divider text-[13px] text-body">
                <div>{r.media}</div>
                <div>{r.target}</div>
                <div>{r.effect}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end gap-2.5 mt-5">
        <button className={btnSecondary}>PDFで出力</button>
        <button className={btnPrimary}>このプランで相談する →</button>
      </div>
    </>
  );
}
