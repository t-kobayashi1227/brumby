"use client";

import { useState } from "react";
import { planDefs } from "../../_lib/data";
import { planCardClass, planButtonClass } from "../../_lib/ui";

export default function PlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [optionExpanded, setOptionExpanded] = useState(false);

  return (
    <>
      <div className="text-base font-extrabold text-ink mb-4.5">ご利用プラン</div>
      <div className="grid grid-cols-3 gap-4 mb-5.5">
        {planDefs.map((p) => {
          const selected = selectedPlan === p.key;
          return (
            <div key={p.key} className={planCardClass(selected)}>
              <div className="text-sm font-extrabold text-ink mb-2.5">{p.name}</div>
              <div className="text-[13px] text-body mb-4">{p.desc}</div>
              <div className="text-xl font-extrabold text-ink mb-4">{p.price}</div>
              <button onClick={() => setSelectedPlan(p.key)} className={planButtonClass(selected)}>
                {selected ? "選択中 ✓" : "申し込む"}
              </button>
            </div>
          );
        })}
      </div>
      <div className="bg-[#fff8e6] border border-[#f0dba1] rounded-[10px] py-4.5 px-5 flex justify-between items-center gap-4 flex-wrap">
        <div>
          <div className="text-[13px] font-bold text-[#7a5c1e] mb-1">オプション：BRUMBY販売ウォッチ（モニター代行）</div>
          <div className="text-xs text-[#8a6c2e]">競合調査・反響確認・定期レポートを弊社にて代行します。 月額 +10,000円〜（税込）</div>
          {optionExpanded && (
            <div className="text-xs text-[#8a6c2e] mt-2">週1回の競合調査・月次AI診断レポートの送付・反響推移のご報告を専任担当が行います。</div>
          )}
        </div>
        <button
          onClick={() => setOptionExpanded((v) => !v)}
          className="py-[9px] px-4 bg-white border border-[#f0dba1] rounded-md text-[#7a5c1e] text-[13px] font-bold cursor-pointer whitespace-nowrap"
        >
          詳しく見る
        </button>
      </div>
    </>
  );
}
