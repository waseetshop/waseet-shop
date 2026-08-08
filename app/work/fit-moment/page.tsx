import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waseet-shop.vercel.app";
const pageUrl = `${siteUrl}/work/fit-moment`;
const liveUrl = "https://fit-moment-web.pages.dev/";

export const metadata: Metadata = {
  title: "دراسة حالة لحظة لياقة | وسيط شوب",
  description: "كيف صمم وطوّر وسيط شوب تجربة لحظة لياقة الرقمية لتجمع البرامج والجدول والتسجيل والمتجر في رحلة واضحة ومتجاوبة.",
  alternates: { canonical: "/work/fit-moment" },
  openGraph: {
    title: "لحظة لياقة — دراسة حالة من وسيط شوب",
    description: "منصة رقمية لنادٍ نسائي تجمع التعريف بالبرامج والجدول والتسجيل والمتجر.",
    url: "/work/fit-moment",
    type: "article",
    images: [{ url: "/project-fit-moment.png", width: 1265, height: 712, alt: "واجهة منصة لحظة لياقة" }],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      name: "تصميم وتطوير منصة لحظة لياقة",
      url: pageUrl,
      image: `${siteUrl}/project-fit-moment.png`,
      inLanguage: "ar-SA",
      dateCreated: "2026",
      creator: { "@type": "Organization", name: "وسيط شوب", url: siteUrl },
      about: "تصميم تجربة مستخدم وتطوير منصة ويب لنادٍ رياضي نسائي",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "الأعمال", item: `${siteUrl}/#work` },
        { "@type": "ListItem", position: 3, name: "لحظة لياقة", item: pageUrl },
      ],
    },
  ],
};

const journey = [
  ["01", "اكتشاف البرامج", "تفهم الزائرة خيارات التدريب الشخصي وما يناسب احتياجها."],
  ["02", "مراجعة الجدول", "تصل إلى الفترات والحصص المتاحة ضمن واجهة واحدة."],
  ["03", "التسجيل والدخول", "تنتقل إلى التسجيل أو دخول المتدربات دون تشتيت."],
  ["04", "التسوق", "تصل إلى المنتجات الرياضية والوجبات والمكملات عبر المتجر."],
];

const features = [
  "صفحة تعريفية تبني الثقة وتوضح موقع النادي",
  "عرض برامج التدريب الشخصي بحسب الاحتياج",
  "جدول حصص قابل للتصفية حسب الفترة",
  "مسار تسجيل ودخول للمتدربات",
  "متجر للمنتجات الرياضية والغذائية",
  "تجربة متجاوبة للحاسوب والجوال",
];

export default function FitMomentCaseStudy() {
  return (
    <main className="case-study">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />

      <header className="case-header">
        <a className="brand" href="/" aria-label="وسيط شوب - الرئيسية">
          <Image className="brand-logo" src="/logo.svg" alt="" width={44} height={44} priority />
          <span className="brand-copy"><strong>وسيط شوب</strong><small>دراسة حالة</small></span>
        </a>
        <a href="/#work">العودة إلى الأعمال ←</a>
      </header>

      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="eyebrow"><span /> دراسة حالة · 2026</p>
          <h1>لحظة لياقة<br /><em>Fit Moment</em></h1>
          <p>تجربة رقمية لنادٍ رياضي نسائي في الأحساء، تجمع البرامج والجدول والتسجيل والمتجر في منصة واضحة وسهلة الوصول.</p>
          <a className="button button-primary" href={liveUrl} target="_blank" rel="noreferrer">زيارة المشروع الحي <span>↗</span></a>
        </div>
        <dl className="case-meta">
          <div><dt>القطاع</dt><dd>اللياقة والصحة</dd></div>
          <div><dt>نوع المنتج</dt><dd>Web Platform</dd></div>
          <div><dt>الدور</dt><dd>Strategy · UX/UI · Development</dd></div>
          <div><dt>السوق</dt><dd>الأحساء · السعودية</dd></div>
        </dl>
      </section>

      <section className="case-cover" aria-label="واجهة منصة لحظة لياقة">
        <div className="browser-bar"><span /><span /><span /><small>fit-moment-web.pages.dev</small></div>
        <Image src="/project-fit-moment.png" alt="الصفحة الرئيسية لمنصة لحظة لياقة" fill priority sizes="100vw" />
      </section>

      <section className="case-section case-story">
        <div><p className="case-kicker">المشروع</p><h2>من خدمات متفرقة إلى رحلة رقمية واحدة.</h2></div>
        <div className="case-prose">
          <p>تخدم لحظة لياقة سيدات يبحثن عن تدريب متخصص وتجربة نادي واضحة. المنصة تحتاج إلى تعريف الزائرة بالبرامج والمواعيد والموقع، ثم توجيهها إلى التسجيل أو التسوق دون أن تضيع بين مسارات منفصلة.</p>
          <p>صُممت التجربة لتجعل كل قرار قريبًا: فهم البرنامج، مراجعة الجدول، بدء التسجيل، أو الانتقال إلى المتجر.</p>
        </div>
      </section>

      <section className="case-section case-challenge">
        <article><span>01</span><h3>التحدي</h3><p>جمع المحتوى التدريبي والجدول والتسجيل والمتجر ضمن تجربة لا تبدو مزدحمة، وتحافظ في الوقت نفسه على شخصية العلامة النسائية.</p></article>
        <article><span>02</span><h3>الهدف</h3><p>أن تفهم الزائرة ما يقدمه النادي بسرعة، ثم تصل إلى الخطوة التالية الملائمة لها من دون بحث أو تواصل مشتت.</p></article>
        <article><span>03</span><h3>دور وسيط</h3><p>هيكلة المحتوى، تصميم تجربة وواجهات المستخدم، وتطوير الواجهة المتجاوبة ومسارات التسجيل والمتجر.</p></article>
      </section>

      <section className="case-section case-journey">
        <div className="case-section-heading"><p className="case-kicker">تجربة المستخدم</p><h2>رحلة تقود إلى الهدف<br />بخطوات واضحة.</h2></div>
        <div className="journey-grid">{journey.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="case-responsive">
        <div className="case-desktop"><Image src="/project-fit-moment.png" alt="عرض لحظة لياقة على الحاسوب" fill sizes="70vw" /></div>
        <div className="case-mobile"><span /><Image src="/project-fit-moment.png" alt="عرض لحظة لياقة على الجوال" fill sizes="240px" /></div>
      </section>

      <section className="case-section case-features">
        <div className="case-section-heading"><p className="case-kicker">التنفيذ</p><h2>منصة تخدم أكثر من<br />لحظة في رحلة العميل.</h2></div>
        <div className="feature-list">{features.map((feature, index) => <p key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</p>)}</div>
      </section>

      <section className="case-result">
        <p className="case-kicker">النتيجة</p>
        <blockquote>حوّلنا الخدمات والمحتوى إلى تجربة موحدة تسمح للزائرة بالتعرّف على النادي والوصول إلى هدفها بخطوات واضحة.</blockquote>
        <p>نتيجة وصفية مبنية على نطاق التجربة المنفذة، دون ادعاءات رقمية غير موثقة.</p>
      </section>

      <section className="case-cta">
        <div><p className="case-kicker">مشروعك التالي</p><h2>لديك فكرة تحتاج<br />إلى تجربة أوضح؟</h2></div>
        <div><p>شاركنا الهدف والمرحلة الحالية، وسنساعدك على تحويلهما إلى نطاق عمل مفهوم وقابل للتنفيذ.</p><a className="button button-primary" href="/#contact">احجز جلسة اكتشاف <span>←</span></a></div>
      </section>
    </main>
  );
}
