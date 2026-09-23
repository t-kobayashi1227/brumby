export type PropertyStatus = "注意" | "要改善" | "順調";

export interface PropertyItem {
  name: string;
  price: string;
  days: number;
  views: number;
  inquiries: number;
  tours: number;
  status: PropertyStatus;
  nextCheck: string;
}

export interface CompetitorItem {
  price: string;
  location: string;
  land: string;
  building: string;
  layout: string;
}

export type ReportKey = "strategy" | "monitor" | "summary" | "ad";
export type ReportFormat = "pdf" | "ppt";
export type MediaBudget = "10" | "20" | "30";

// ---- static mock data ----

export const properties: PropertyItem[] = [
  { name: "中央区上近江 新築戸建", price: "3,780万円", days: 45, views: 386, inquiries: 8, tours: 3, status: "注意", nextCheck: "9/30" },
  { name: "西区寺尾東 中古戸建", price: "2,480万円", days: 68, views: 210, inquiries: 2, tours: 0, status: "要改善", nextCheck: "9/28" },
  { name: "江南区亀田 新築戸建", price: "3,280万円", days: 25, views: 420, inquiries: 9, tours: 4, status: "順調", nextCheck: "9/27" },
  { name: "東区はなみずき 土地", price: "1,980万円", days: 51, views: 168, inquiries: 3, tours: 1, status: "注意", nextCheck: "9/29" },
  { name: "秋葉区新津 新築戸建", price: "2,980万円", days: 72, views: 134, inquiries: 1, tours: 0, status: "要改善", nextCheck: "9/30" },
];

export const compData: CompetitorItem[] = [
  { price: "3,580", location: "新潟市中央区○○町", land: "135", building: "102", layout: "4LDK" },
  { price: "3,420", location: "新潟市中央区△△町", land: "128", building: "98", layout: "4LDK" },
  { price: "3,690", location: "新潟市東区□□町", land: "140", building: "105", layout: "4LDK" },
];

export const kpis = [
  { label: "登録物件数", value: "5件", delta: "" },
  { label: "今月の閲覧数", value: "1,245件", delta: "↑ +18%" },
  { label: "今月の問合せ数", value: "23件", delta: "↑ +15%" },
  { label: "今月の見学予約", value: "8件", delta: "↑ +33%" },
];

export const regStepDefs = [
  { num: 1, label: "基本情報" },
  { num: 2, label: "立地・設備" },
  { num: 3, label: "写真・間取り" },
  { num: 4, label: "確認" },
];

export const aiResultTabDefs = [
  { key: "area", label: "エリア分析" },
  { key: "price", label: "価格相場" },
  { key: "competitor", label: "競合物件" },
  { key: "deals", label: "成約事例" },
  { key: "surroundings", label: "周辺環境" },
];

export const areaStats = [
  { label: "人口", value: "72,410人", sub: "" },
  { label: "世帯数", value: "31,220世帯", sub: "" },
  { label: "30〜40代の割合", value: "28.6%", sub: "市平均24.1%" },
  { label: "持家率", value: "61.2%", sub: "市平均58.0%" },
];

export const similarProperties = [
  { price: "3,780万円", land: 150, building: 102, layout: "4LDK", built: "2025年", area: "上所駅 徒歩15分" },
  { price: "4,180万円", land: 180, building: 110, layout: "4LDK", built: "2025年", area: "上近江エリア 駅徒歩10分" },
  { price: "3,880万円", land: 158, building: 104, layout: "3LDK", built: "2025年", area: "鳥屋野エリア 駅徒歩18分" },
];

const priceHistData = [
  { label: "<3,000", value: 5 },
  { label: "3,000〜3,500", value: 12 },
  { label: "3,500〜4,000", value: 20 },
  { label: "4,000〜4,500", value: 15 },
  { label: ">4,500", value: 7 },
];
const maxHist = Math.max(...priceHistData.map((p) => p.value));
export const priceHistogram = priceHistData.map((p) => ({
  label: p.label,
  value: p.value,
  height: Math.round((p.value / maxHist) * 120),
}));

export const strategyTabDefs = [
  { key: "overall", label: "総合評価" },
  { key: "target", label: "ターゲット" },
  { key: "appeal", label: "訴求ポイント" },
  { key: "direction", label: "販売の方向性" },
  { key: "media", label: "媒体戦略・予算" },
];

export const targetList = [
  { num: 1, title: "30〜40代 子育てファミリー（最重点）", desc: "新潟市内または近隣在住、賃貸からの住み替え層／世帯年収600〜800万円程度／小学校徒歩圏・駐車2台・4LDKに関心" },
  { num: 2, title: "20代後半〜30代前半の共働き夫婦", desc: "利便性の高いエリアでの新築を検討／世帯年収500〜700万円程度／駅近・買い物・通勤の利便性を重視" },
  { num: 3, title: "中央区・周辺エリアの住み替え層", desc: "現在の住まいが手狭になったファミリー層／築10年以上の戸建・マンションからの住み替え" },
];

export const appealList = [
  "小学校徒歩8分・子育て環境の良さ",
  "家族が集まる広い4LDK・駐車2台",
  "ZEH・省エネ性能で快適な暮らし",
  "駅や商業施設へのアクセス",
];

export const directionList = [
  "価格は周辺相場と同水準で訴求",
  "子育て・住環境を前面に",
  "Webと周辺販促の組み合わせ",
  "見学会での体験訴求が有効",
];

interface MediaItem {
  name: string;
  pct: number;
  amt: string;
  color: string;
}

export const budgetPlans: Record<MediaBudget, { items: MediaItem[] }> = {
  "10": {
    items: [
      { name: "Instagram・Facebook広告", pct: 40, amt: "4万円", color: "#3b6fd6" },
      { name: "ポスティング（エリア配布）", pct: 25, amt: "2.5万円", color: "#f2a93b" },
      { name: "物件専用LP", pct: 20, amt: "2万円", color: "#4caf7d" },
      { name: "チラシ制作・印刷", pct: 15, amt: "1.5万円", color: "#9b7bd1" },
    ],
  },
  "20": {
    items: [
      { name: "Instagram・Facebook広告", pct: 40, amt: "8万円", color: "#3b6fd6" },
      { name: "ポスティング（エリア配布）", pct: 25, amt: "5万円", color: "#f2a93b" },
      { name: "物件専用LP", pct: 20, amt: "4万円", color: "#4caf7d" },
      { name: "チラシ制作・印刷", pct: 15, amt: "3万円", color: "#9b7bd1" },
    ],
  },
  "30": {
    items: [
      { name: "Instagram・Facebook広告", pct: 40, amt: "12万円", color: "#3b6fd6" },
      { name: "ポスティング（エリア配布）", pct: 25, amt: "7.5万円", color: "#f2a93b" },
      { name: "物件専用LP", pct: 20, amt: "6万円", color: "#4caf7d" },
      { name: "チラシ制作・印刷", pct: 15, amt: "4.5万円", color: "#9b7bd1" },
    ],
  },
};

export function computeDonut(budget: MediaBudget) {
  const items = budgetPlans[budget].items;
  let acc = 0;
  const stops = items
    .map((it) => {
      const start = acc;
      acc += it.pct;
      return `${it.color} ${start}% ${acc}%`;
    })
    .join(", ");
  return { gradient: `conic-gradient(${stops})`, legend: items };
}

export const mediaRoleTable = [
  { media: "Instagram・Facebook広告", target: "30〜40代ファミリー", effect: "認知拡大・見学予約への誘導" },
  { media: "ポスティング", target: "周辺1〜2kmの住み替え層", effect: "地域での認知・問い合わせ増加" },
  { media: "物件専用LP", target: "検討層全般", effect: "詳細情報の提供・見学予約獲得" },
  { media: "チラシ制作・印刷", target: "現地周辺・イベント告知", effect: "見学会集客・信頼感の向上" },
];

export const monitorFilterDefs = [
  { key: "all", label: "すべて" },
  { key: "順調", label: "順調" },
  { key: "注意", label: "注意" },
  { key: "要改善", label: "要改善" },
];

export const monitorDetailTabDefs = [
  { key: "summary", label: "サマリー" },
  { key: "response", label: "反響推移" },
  { key: "competition", label: "競合の変化" },
  { key: "ai", label: "AI診断" },
  { key: "history", label: "履歴" },
];

const trendData = [
  { label: "9/1", value: 32 },
  { label: "9/16", value: 28 },
  { label: "9/30", value: 25 },
  { label: "10/14", value: 23 },
];
const maxTrend = Math.max(...trendData.map((t) => t.value));
export const competitionTrend = trendData.map((t) => ({
  label: t.label,
  value: t.value,
  height: Math.round((t.value / maxTrend) * 100),
}));

export const planDefs = [
  { key: "spot", name: "スポットプラン", desc: "1物件から気軽にAI分析", price: "4,980円（税込）" },
  { key: "strategy", name: "販売戦略プラン", desc: "新規物件の販売戦略をAIで作成", price: "月額 19,800円（税込）" },
  { key: "monitor", name: "販売戦略＋モニタープラン", desc: "売れるまでAIが継続サポート", price: "月額 19,800円（税込）" },
];
