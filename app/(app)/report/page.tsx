"use client";

import { useState } from "react";
import type { ReportKey, ReportFormat } from "../../_lib/data";
import { card, checkLabel } from "../../_lib/ui";

const TEMPLATES: { key: ReportKey; label: string }[] = [
  { key: "strategy", label: "販売戦略レポート（提案資料）" },
  { key: "monitor", label: "定期モニターレポート（A4）" },
  { key: "summary", label: "経営者向けサマリー（A4）" },
  { key: "ad", label: "広告提案資料（パワーポイント形式）" },
];

export default function ReportPage() {
  const [checks, setChecks] = useState<Record<ReportKey, boolean>>({ strategy: true, monitor: false, summary: false, ad: false });
  const [format, setFormat] = useState<ReportFormat>("pdf");
  const [done, setDone] = useState(false);

  const toggle = (key: ReportKey) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
    setDone(false);
  };
  const changeFormat = (f: ReportFormat) => {
    setFormat(f);
    setDone(false);
  };

  return (
    <div className="grid grid-cols-[1.4fr_1fr] gap-5">
      <div className={`${card} p-5.5`}>
        <div className="text-sm font-bold text-ink mb-4">出力するレポートの種類を選択してください</div>
        <div className="text-[13px] text-body font-bold mb-2">レポートテンプレート</div>
        <div className="grid gap-2.5 mb-4.5">
          {TEMPLATES.map((t) => (
            <label key={t.key} className="text-[13px] text-body flex gap-2">
              <input type="checkbox" checked={checks[t.key]} onChange={() => toggle(t.key)} />
              {t.label}
            </label>
          ))}
        </div>
        <div className="text-[13px] text-body font-bold mb-2">出力形式</div>
        <div className="flex gap-5 mb-5">
          <label className={checkLabel}>
            <input type="radio" name="fmt" checked={format === "pdf"} onChange={() => changeFormat("pdf")} />
            PDF形式
          </label>
          <label className={checkLabel}>
            <input type="radio" name="fmt" checked={format === "ppt"} onChange={() => changeFormat("ppt")} />
            PowerPoint形式
          </label>
        </div>
        <button onClick={() => setDone(true)} className="w-full p-3 bg-brand rounded-md text-white text-sm font-bold cursor-pointer">
          レポートを作成する →
        </button>
        {done && (
          <div className="mt-3.5 bg-[#e9f7ee] border border-[#b7e6c6] rounded-lg py-3 px-4 text-[13px] text-[#15803d]">
            レポートを作成しました。ダウンロード準備が完了しています。
          </div>
        )}
      </div>
      <div className={`${card} p-5.5`}>
        <div className="text-[13px] font-bold text-ink mb-3">プレビュー</div>
        <div className="border border-line rounded-lg p-4">
          <div className="text-[11px] text-muted mb-2.5">販売戦略レポート ・ 2025年9月16日</div>
          <div className="aspect-[1/1.3] bg-stripes rounded-md flex items-center justify-center font-mono text-[11px] text-muted">
            レポート表紙イメージ
          </div>
        </div>
      </div>
    </div>
  );
}
