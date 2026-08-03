"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("النموذج جاهز — أضف رقم واتساب أو بريد الاستقبال لتفعيل إرسال الطلبات.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label><span>الاسم</span><input name="name" type="text" placeholder="اسمك الكريم" required /></label>
        <label><span>رقم الجوال</span><input name="phone" type="tel" inputMode="tel" placeholder="05xxxxxxxx" required /></label>
      </div>
      <label><span>نوع المشروع</span><select name="projectType" defaultValue="" required><option value="" disabled>اختر نوع المشروع</option><option>موقع شركة أو مؤسسة</option><option>متجر إلكتروني</option><option>صفحة هبوط</option><option>تطبيق ويب مخصص</option><option>أخرى</option></select></label>
      <label><span>الميزانية المتوقعة</span><select name="budget" defaultValue="" required><option value="" disabled>اختر النطاق المناسب</option><option>أقل من 5,000 ر.س</option><option>5,000 — 10,000 ر.س</option><option>10,000 — 25,000 ر.س</option><option>أكثر من 25,000 ر.س</option></select></label>
      <label><span>أخبرنا عن فكرتك</span><textarea name="details" rows={4} placeholder="ما الذي تريد بناءه؟ وما أهم هدف للمشروع؟" /></label>
      <button type="submit">احجز جلسة اكتشاف مجانية <span>←</span></button>
      <p className="form-status" role="status" aria-live="polite">{message}</p>
    </form>
  );
}
