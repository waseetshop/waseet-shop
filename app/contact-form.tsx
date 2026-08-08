"use client";

import { FormEvent, useRef, useState } from "react";

const whatsappNumber = "966560301744";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function nextStep() {
    const currentSection = formRef.current?.querySelector(`[data-step="${step}"]`);
    const fields = currentSection?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea") ?? [];
    const isValid = Array.from(fields).every((field) => field.reportValidity());
    if (isValid) setStep((current) => Math.min(current + 1, 3));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "السلام عليكم، أرغب في حجز جلسة اكتشاف مع وسيط شوب.",
      "",
      `الاسم: ${data.get("name")}`,
      `الشركة: ${data.get("company") || "غير مذكورة"}`,
      `رقم الجوال: ${data.get("phone")}`,
      `البريد: ${data.get("email") || "غير مذكور"}`,
      `نوع المشروع: ${data.get("projectType")}`,
      `الموقع الحالي: ${data.get("currentSite") || "لا يوجد"}`,
      `مرحلة المشروع: ${data.get("stage")}`,
      `الهدف الرئيسي: ${data.get("goal")}`,
      `الميزانية: ${data.get("budget") || "تُحدد بعد الجلسة"}`,
      `موعد الإطلاق: ${data.get("launch") || "مرن"}`,
      `تفاصيل إضافية: ${data.get("details") || "لا توجد"}`,
    ];

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    setMessage("تم تجهيز طلبك. لإكمال الإرسال، اضغط زر «إرسال» داخل واتساب.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-progress" aria-label={`الخطوة ${step} من 3`}>
        {[1, 2, 3].map((item) => <span className={item <= step ? "active" : ""} key={item}>{item}</span>)}
      </div>

      <fieldset data-step="1" hidden={step !== 1}>
        <legend>بياناتك</legend>
        <div className="form-row">
          <label><span>الاسم</span><input name="name" type="text" placeholder="اسمك الكريم" autoComplete="name" required /></label>
          <label><span>الشركة أو المؤسسة</span><input name="company" type="text" placeholder="اسم الجهة — اختياري" autoComplete="organization" /></label>
        </div>
        <div className="form-row">
          <label><span>رقم الجوال</span><input name="phone" type="tel" inputMode="tel" placeholder="05xxxxxxxx" autoComplete="tel" required /></label>
          <label><span>البريد الإلكتروني</span><input name="email" type="email" placeholder="name@company.com" autoComplete="email" /></label>
        </div>
        <button type="button" onClick={nextStep}>التالي: تفاصيل المشروع <span>←</span></button>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2}>
        <legend>المشروع</legend>
        <label><span>نوع المشروع</span><select name="projectType" defaultValue="" required><option value="" disabled>اختر نوع المشروع</option><option>موقع شركة أو مؤسسة</option><option>متجر إلكتروني</option><option>صفحة هبوط</option><option>تطبيق ويب مخصص</option><option>تطوير موقع قائم</option><option>أخرى</option></select></label>
        <label><span>هل يوجد موقع حالي؟</span><input name="currentSite" type="url" dir="ltr" placeholder="https:// — اختياري" /></label>
        <div className="form-row">
          <label><span>مرحلة المشروع</span><select name="stage" defaultValue="" required><option value="" disabled>اختر المرحلة</option><option>فكرة أولية</option><option>محتوى وهوية جاهزان</option><option>تصميم جاهز ويحتاج تطويرًا</option><option>موقع قائم يحتاج تحسينًا</option></select></label>
          <label><span>الهدف الرئيسي</span><select name="goal" defaultValue="" required><option value="" disabled>اختر الهدف</option><option>توليد فرص ومبيعات</option><option>بناء الثقة والتعريف</option><option>بيع المنتجات</option><option>أتمتة العمليات</option><option>إطلاق منتج رقمي</option></select></label>
        </div>
        <div className="form-actions"><button type="button" className="button-back" onClick={() => setStep(1)}>السابق</button><button type="button" onClick={nextStep}>التالي: النطاق <span>←</span></button></div>
      </fieldset>

      <fieldset data-step="3" hidden={step !== 3}>
        <legend>النطاق المتوقع</legend>
        <div className="form-row">
          <label><span>الميزانية — اختيارية</span><select name="budget" defaultValue=""><option value="">تُحدد بعد الجلسة</option><option>أقل من 5,000 ر.س</option><option>5,000 — 10,000 ر.س</option><option>10,000 — 25,000 ر.س</option><option>أكثر من 25,000 ر.س</option></select></label>
          <label><span>موعد الإطلاق المتوقع</span><select name="launch" defaultValue=""><option value="">مرن</option><option>خلال شهر</option><option>خلال 2–3 أشهر</option><option>خلال 3–6 أشهر</option></select></label>
        </div>
        <label><span>أخبرنا عن فكرتك</span><textarea name="details" rows={5} placeholder="ما الذي تريد بناءه؟ وما أهم هدف للمشروع؟" /></label>
        <div className="form-actions"><button type="button" className="button-back" onClick={() => setStep(2)}>السابق</button><button type="submit">فتح واتساب لإكمال الإرسال <span>↗</span></button></div>
      </fieldset>

      <p className="form-status" role="status" aria-live="polite">{message}</p>
    </form>
  );
}
