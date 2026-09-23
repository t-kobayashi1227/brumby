import Link from "next/link";
import { card, fieldLabel, input, checkLabel, btnPrimary, btnSecondary } from "../../../_lib/ui";

export default function ResearchInputPage() {
  return (
    <div className={`${card} p-6 max-w-[640px]`}>
      <div className="text-sm font-bold text-ink mb-4">検索結果の入力</div>
      <div className="grid grid-cols-2 gap-3.5 mb-3.5">
        <div>
          <label className={fieldLabel}>調査日</label>
          <input type="date" defaultValue="2025-09-16" className={input} />
        </div>
        <div />
        <div>
          <label className={fieldLabel}>SUUMOの検索結果</label>
          <input defaultValue="18" className={input} />
        </div>
        <div>
          <label className={fieldLabel}>アットホームの検索結果</label>
          <input defaultValue="14" className={input} />
        </div>
      </div>
      <div className="text-[13px] text-body mb-2">価格帯（全体の傾向）</div>
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <input defaultValue="3,280 万円" className="py-[9px] px-3 border border-field rounded-md text-[13px]" />
        <input defaultValue="3,500 万円前後" className="py-[9px] px-3 border border-field rounded-md text-[13px]" />
        <input defaultValue="4,180 万円" className="py-[9px] px-3 border border-field rounded-md text-[13px]" />
      </div>
      <div className="text-[13px] text-body mb-2">市場を見た印象（複数選択可）</div>
      <div className="grid grid-cols-2 gap-2">
        <label className={checkLabel}>
          <input type="checkbox" defaultChecked />
          競合が多い
        </label>
        <label className={checkLabel}>
          <input type="checkbox" defaultChecked />
          値下げ物件が目立つ
        </label>
        <label className={checkLabel}>
          <input type="checkbox" defaultChecked />
          新築物件が多い
        </label>
        <label className={checkLabel}>
          <input type="checkbox" />
          完成済み物件が多い
        </label>
      </div>
      <div className="flex justify-between mt-6">
        <Link href="/research" className={btnSecondary}>
          戻る
        </Link>
        <Link href="/research/detail" className={btnPrimary}>
          次へ
        </Link>
      </div>
    </div>
  );
}
