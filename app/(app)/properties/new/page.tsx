"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { regStepDefs } from "../../../_lib/data";
import { card, fieldLabel, input, checkLabel, btnPrimary, btnSecondary, stripePlaceholder, stepClass } from "../../../_lib/ui";

const LAST_STEP = regStepDefs.length;

export default function NewPropertyPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const back = () => (step > 1 ? setStep(step - 1) : router.push("/dashboard"));
  const next = () => setStep(Math.min(LAST_STEP, step + 1));
  const finish = () => router.push("/dashboard");

  return (
    <>
      <div className="flex gap-2 mb-5">
        {regStepDefs.map((s) => (
          <div key={s.num} className={stepClass(step === s.num)}>
            {s.num}. {s.label}
          </div>
        ))}
      </div>
      <div className={`${card} p-6 max-w-[640px]`}>
        {step === 1 && (
          <>
            <div className="text-[15px] font-bold text-ink mb-4">基本情報</div>
            <div className="grid gap-3.5">
              <div>
                <label className={fieldLabel}>物件名</label>
                <input defaultValue="中央区上近江 新築戸建" className={input} />
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className={fieldLabel}>物件種別</label>
                  <select className={input}>
                    <option>新築戸建</option>
                    <option>中古戸建</option>
                    <option>土地</option>
                  </select>
                </div>
                <div>
                  <label className={fieldLabel}>販売価格（万円）</label>
                  <input defaultValue="3,780" className={input} />
                </div>
              </div>
              <div>
                <label className={fieldLabel}>所在地</label>
                <input defaultValue="新潟市中央区上近江1丁目" className={input} />
              </div>
              <div>
                <label className={fieldLabel}>交通</label>
                <input defaultValue="JR上所駅 徒歩12分" className={input} />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="text-[15px] font-bold text-ink mb-4">立地・設備</div>
            <div className="grid gap-3.5">
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className={fieldLabel}>間取り</label>
                  <input defaultValue="4LDK" className={input} />
                </div>
                <div>
                  <label className={fieldLabel}>築年数</label>
                  <input defaultValue="2025年6月（新築）" className={input} />
                </div>
              </div>
              <div>
                <label className="text-[13px] text-body mb-1.5 block">主な特徴</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={checkLabel}>
                    <input type="checkbox" defaultChecked />
                    ZEH
                  </label>
                  <label className={checkLabel}>
                    <input type="checkbox" defaultChecked />
                    駐車2台
                  </label>
                  <label className={checkLabel}>
                    <input type="checkbox" />
                    長期優良住宅
                  </label>
                  <label className={checkLabel}>
                    <input type="checkbox" defaultChecked />
                    小学校徒歩8分
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="text-[15px] font-bold text-ink mb-4">写真・間取り</div>
            <div className="grid grid-cols-3 gap-3">
              <div className={`${stripePlaceholder} aspect-[4/3] rounded-lg text-[11px]`}>外観写真</div>
              <div className={`${stripePlaceholder} aspect-[4/3] rounded-lg text-[11px]`}>内観写真</div>
              <div className={`${stripePlaceholder} aspect-[4/3] rounded-lg text-[11px]`}>間取り図</div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="text-[15px] font-bold text-ink mb-4">確認</div>
            <div className="text-[13px] text-body leading-[1.9]">
              物件名：中央区上近江 新築戸建
              <br />
              販売価格：3,780万円
              <br />
              所在地：新潟市中央区上近江1丁目
              <br />
              間取り：4LDK
            </div>
          </>
        )}
        <div className="flex justify-between mt-6">
          <button onClick={back} className={btnSecondary}>
            戻る
          </button>
          {step !== LAST_STEP ? (
            <button onClick={next} className={btnPrimary}>
              次へ
            </button>
          ) : (
            <button onClick={finish} className={btnPrimary}>
              登録する
            </button>
          )}
        </div>
      </div>
    </>
  );
}
