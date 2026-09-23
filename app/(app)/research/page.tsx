import Link from "next/link";
import { card } from "../../_lib/ui";

export default function ResearchConditionsPage() {
  return (
    <>
      <div className="bg-[#fff8e6] border border-[#f3dfa1] rounded-[10px] py-4 px-4.5 mb-4.5 text-[13px] text-[#7a5c1e]">
        ⚠ AIが競合検索条件を提案しました。この条件でSUUMO・アットホームで検索してください。
      </div>
      <div className="grid grid-cols-[1.4fr_1fr] gap-4">
        <div className={`${card} p-4.5`}>
          <div className="text-sm font-bold text-ink mb-3">検索条件（直接競合）</div>
          <div className="grid gap-2 text-[13px] text-body">
            <div className="flex justify-between border-b border-divider pb-2">
              <span className="text-muted">エリア</span>
              <span>新潟市中央区（+隣接エリア）</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span className="text-muted">物件種別</span>
              <span>新築一戸建て</span>
            </div>
            <div className="flex justify-between border-b border-divider pb-2">
              <span className="text-muted">価格</span>
              <span>3,300〜4,200万円</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">間取り</span>
              <span>3LDK〜4LDK</span>
            </div>
          </div>
        </div>
        <div className={`${card} p-4.5`}>
          <div className="text-sm font-bold text-ink mb-3">調査サイトへ移動</div>
          <button className="w-full p-[11px] bg-[#00a651] rounded-md text-white font-bold text-[13px] mb-2.5 cursor-pointer">SUUMOで検索</button>
          <button className="w-full p-[11px] bg-[#e6303e] rounded-md text-white font-bold text-[13px] cursor-pointer">at homeで検索</button>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Link href="/research/input" className="py-2.5 px-5.5 bg-brand rounded-md text-white text-[13px] font-bold">
          次へ
        </Link>
      </div>
    </>
  );
}
