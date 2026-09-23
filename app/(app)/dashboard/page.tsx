import Link from "next/link";
import StatusBadge from "../../_components/StatusBadge";
import { kpis, properties } from "../../_lib/data";
import { card, tableHead } from "../../_lib/ui";

export default function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-5">
        {kpis.map((k, i) => (
          <div key={i} className={`${card} py-4 px-4.5`}>
            <div className="text-[13px] text-muted mb-2">{k.label}</div>
            <div className="text-2xl font-extrabold text-ink">{k.value}</div>
            <div className="text-xs text-[#1a8a4a] mt-1.5">{k.delta}</div>
          </div>
        ))}
      </div>
      <div className={`${card} p-5`}>
        <div className="text-[15px] font-bold text-ink mb-3.5">販売中物件の状況</div>
        <div className={`${tableHead} grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]`}>
          <div>物件名</div>
          <div>価格</div>
          <div>掲載日数</div>
          <div>問合せ</div>
          <div>見学</div>
          <div>AI診断</div>
        </div>
        {properties.map((p, i) => (
          <Link
            key={i}
            href={`/monitor/${i}`}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-2 py-3 px-1 border-b border-divider items-center"
          >
            <div className="text-[13px] text-ink font-semibold">{p.name}</div>
            <div className="text-[13px] text-ink">{p.price}</div>
            <div className="text-[13px] text-sub">{p.days}日</div>
            <div className="text-[13px] text-sub">{p.inquiries}</div>
            <div className="text-[13px] text-sub">{p.tours}</div>
            <div>
              <StatusBadge status={p.status} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
