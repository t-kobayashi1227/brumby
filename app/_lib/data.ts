export type PropertyStatus = "注意" | "要改善" | "順調";

export interface PropertyItem {
  name: string;
  price: string;
  days: number;
  views: number;
  inquiries: number;
  tours: number;
  status: PropertyStatus;
}

export interface CompetitorItem {
  price: string;
  location: string;
  land: string;
  building: string;
  layout: string;
  walk: string;
  parking: string;
  features: string;
}

export type ReportKey = "strategy" | "monitor" | "summary" | "ad";
export type ReportFormat = "pdf" | "ppt";
export type MediaBudget = "10" | "20" | "30";

// ---- static mock data ----

export const properties: PropertyItem[] = [
  { name: "中央区上近江 新築戸建", price: "3,780万円", days: 45, views: 386, inquiries: 8, tours: 3, status: "注意" },
  { name: "西区寺尾東 中古戸建", price: "2,480万円", days: 68, views: 210, inquiries: 2, tours: 0, status: "要改善" },
  { name: "江南区亀田 新築戸建", price: "3,280万円", days: 25, views: 420, inquiries: 9, tours: 4, status: "順調" },
  { name: "東区はなみずき 土地", price: "1,980万円", days: 51, views: 168, inquiries: 3, tours: 1, status: "注意" },
  { name: "秋葉区新津 新築戸建", price: "2,980万円", days: 72, views: 134, inquiries: 1, tours: 0, status: "要改善" },
];

export const compData: CompetitorItem[] = [
  { price: "3,580", location: "新潟市中央区○○町", land: "135", building: "102", layout: "4LDK", walk: "12", parking: "2", features: "南向き・太陽光発電付き" },
  { price: "3,420", location: "新潟市中央区△△町", land: "128", building: "98", layout: "4LDK", walk: "18", parking: "2", features: "角地・完成済み" },
  { price: "3,690", location: "新潟市東区□□町", land: "140", building: "105", layout: "4LDK", walk: "9", parking: "3", features: "大手ハウスメーカー施工・全館空調" },
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
  { key: "summary", label: "診断結果" },
  { key: "area", label: "エリア分析" },
  { key: "price", label: "価格相場" },
  { key: "competitor", label: "競合物件" },
  { key: "deals", label: "成約事例" },
  { key: "surroundings", label: "周辺環境" },
];

export const diagnosisSummary = {
  surveyDate: "2025/09/16",
  competition: "やや競合が多い",
  stats: [
    { label: "競合物件数（合計）", value: "32", unit: "件", highlight: false },
    { label: "中心価格帯", value: "約3,500", unit: "万円", highlight: false },
    { label: "対象物件との価格差", value: "+約280", unit: "万円", highlight: true },
  ],
  comment:
    "周辺エリアでは新築戸建の供給が増加しており、価格競争が強まっています。対象物件は競合の中心価格帯よりやや高い位置にありますが、「駐車2台」「小学校徒歩8分」「ZEH仕様」などの強みがあり、価格訴求よりも子育て世帯向けの住環境・性能訴求が有効です。",
  actions: [
    "価格よりも付加価値（ZEH・学校・駐車）を前面に訴求",
    "SNS広告で子育てファミリー層へアプローチ",
    "2週間後に再度競合状況を確認し、戦略を見直す",
  ],
};

export const dealStats = [
  { label: "対象エリアの成約件数", value: "32件", note: "▲ +23%（前月比）", positive: true },
  { label: "平均成約価格", value: "3,580万円", note: "↑ +5%（前月比）", positive: true },
  { label: "平均販売期間", value: "38日", note: "▲ -12日（前月比）", positive: true },
  { label: "最多間取り", value: "4LDK", note: "（12件・37%）", positive: false },
];

export const dealCases = [
  { name: "新潟市中央区上近江2丁目", type: "新築戸建", price: "3,780万円", land: 150, building: 102, layout: "4LDK", age: "1年", salesDays: 28, date: "2025/08/20" },
  { name: "新潟市中央区女池南3丁目", type: "新築戸建", price: "3,480万円", land: 135.2, building: 98.5, layout: "4LDK", age: "2年", salesDays: 45, date: "2025/08/12" },
  { name: "新潟市中央区上近江1丁目", type: "中古戸建", price: "3,200万円", land: 165.3, building: 105.1, layout: "4LDK", age: "5年", salesDays: 52, date: "2025/07/28" },
  { name: "新潟市中央区鳥屋野2丁目", type: "新築戸建", price: "3,880万円", land: 158, building: 104, layout: "4LDK", age: "新築", salesDays: 25, date: "2025/07/18" },
  { name: "新潟市中央区上所3丁目", type: "中古戸建", price: "2,980万円", land: 142.5, building: 96.3, layout: "3LDK", age: "8年", salesDays: 68, date: "2025/07/05" },
  { name: "新潟市中央区関屋1丁目", type: "新築戸建", price: "3,650万円", land: 138, building: 101, layout: "4LDK", age: "1年", salesDays: 31, date: "2025/06/28" },
];

export const dealAppealPoints = ["南向きで日当たり良好", "駐車場2台分", "小学校まで徒歩8分", "周辺に商業施設が充実", "ZEH仕様・省エネ性能"];

export const dealSuccessPoints = [
  "同エリアの同規模物件と比較して価格が適正",
  "築浅・4LDKの需要が高く早期成約につながった",
  "南向き・駐車場2台が購入者の決め手",
  "周辺環境（学校・商業施設）が評価された",
  "内覧から成約までの期間が短い傾向",
];

export const surroundingSummary = [
  { icon: "🚉", label: "鉄道・交通", value: "駅 徒歩12分 / バス停 徒歩3分" },
  { icon: "🏫", label: "教育施設", value: "保育園3件 / 小学校2件 / 中学校1件" },
  { icon: "🛒", label: "商業施設", value: "スーパー4件 / コンビニ6件 / ドラッグストア3件" },
  { icon: "🏥", label: "医療施設", value: "病院2件 / クリニック8件" },
  { icon: "🌳", label: "公園・レジャー", value: "公園5件 / 大型公園1件" },
  { icon: "🍽️", label: "飲食・その他", value: "飲食店15件 / 金融機関6件" },
];

export const nearbyFacilities = [
  { name: "上近江保育園", type: "保育園", minutes: 3, distance: "240m" },
  { name: "上近江小学校", type: "小学校", minutes: 6, distance: "480m" },
  { name: "鳥屋野中学校", type: "中学校", minutes: 14, distance: "1.1km" },
];

export const surroundingScores = [
  { label: "教育環境", score: "4.5", desc: "保育園・小中学校が近く、子育てしやすい環境です。", icon: "/education_icon.png", scoreColor: "text-[#1a8a4a]" },
  { label: "生活利便性", score: "4.3", desc: "スーパー・コンビニ・ドラッグストアが充実しています。", icon: "/life_icon.png", scoreColor: "text-[#e8920c]" },
  { label: "交通利便性", score: "4.0", desc: "駅徒歩12分で都心へのアクセスも良好です。", icon: "/traffic_icon.png", scoreColor: "text-[#e6303e]" },
  { label: "住環境・自然", score: "4.2", desc: "公園や緑地が多く、落ち着いた住環境です。", icon: "/nature_icon.png", scoreColor: "text-[#1a8a4a]" },
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
  { key: "media", label: "媒体戦略・予算" },
];

export const targetList = [
  {
    num: 1,
    title: "30〜40代 子育てファミリー（最重点）",
    desc: ["新潟市内または近隣在住、賃貸からの住み替え層", "世帯年収600〜800万円程度", "小学校徒歩圏・駐車2台・4LDKに関心"],
  },
  {
    num: 2,
    title: "20代後半〜30代前半の共働き夫婦",
    desc: ["利便性の高いエリアでの新築を検討", "世帯年収500〜700万円程度", "駅近・買い物・通勤の利便性を重視"],
  },
  {
    num: 3,
    title: "中央区・周辺エリアの住み替え層",
    desc: ["現在の住まいが手狭になったファミリー層", "築10年以上の戸建・マンションからの住み替え"],
  },
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
