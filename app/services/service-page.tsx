import type { Metadata } from "next";
import Image from "next/image";
import { serviceList, type ServiceDefinition } from "./service-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.waseet-shop.com";

export function serviceMetadata(service: ServiceDefinition): Metadata {
  const path = `/services/${service.slug}`;
  return {
    title: `${service.shortTitle} | وسيط شوب`,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.shortTitle} — وسيط شوب`,
      description: service.description,
      url: path,
      type: "website",
      images: [{ url: "/og.png", width: 1730, height: 909, alt: `${service.shortTitle} من وسيط شوب` }],
    },
    twitter: { card: "summary_large_image", title: `${service.shortTitle} — وسيط شوب`, description: service.description, images: ["/og.png"] },
  };
}

function StructuredData({ service }: { service: ServiceDefinition }) {
  const pageUrl = `${siteUrl}/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.shortTitle,
        description: service.description,
        url: pageUrl,
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        provider: { "@type": "Organization", name: "وسيط شوب", url: siteUrl },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "الخدمات", item: `${siteUrl}/#services` },
          { "@type": "ListItem", position: 3, name: service.shortTitle, item: pageUrl },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ServicePage({ service }: { service: ServiceDefinition }) {
  const otherServices = serviceList.filter((item) => item.slug !== service.slug);

  return (
    <main className="service-page">
      <StructuredData service={service} />

      <header className="service-header">
        <a className="brand" href="/" aria-label="وسيط شوب - الرئيسية">
          <Image className="brand-logo" src="/logo.svg" alt="" width={44} height={44} priority />
          <span className="brand-copy"><strong>وسيط شوب</strong><small>تصميم وتطوير المنتجات الرقمية</small></span>
        </a>
        <nav aria-label="التنقل داخل صفحة الخدمة">
          <a href="#scope">ما سننفذ</a>
          <a href="#deliverables">المخرجات</a>
          <a href="#faq">الأسئلة</a>
        </nav>
        <a className="service-header-cta" href="/#contact">ابدأ مشروعك <span>↗</span></a>
      </header>

      <section className="service-hero">
        <div className="service-hero-copy">
          <p className="service-breadcrumb"><a href="/">الرئيسية</a><span>/</span><a href="/#services">الخدمات</a><span>/</span>{service.shortTitle}</p>
          <p className="eyebrow"><span /> {service.accent}</p>
          <h1>{service.title}</h1>
          <p className="service-lead">{service.description}</p>
          <div className="service-actions">
            <a className="button button-primary" href="/#contact">احجز جلسة اكتشاف <span>←</span></a>
            <a className="button button-ghost" href="#fit">هل تناسبك الخدمة؟</a>
          </div>
        </div>
        <aside className="service-hero-aside" aria-label="ملخص الخدمة">
          <span>{service.number}</span>
          <small>خدمة متكاملة</small>
          <strong>استراتيجية</strong>
          <strong>تجربة وتصميم</strong>
          <strong>تطوير وإطلاق</strong>
          <p>نحدد التقنية والمدة بعد فهم الاحتياج، لا قبل ذلك.</p>
        </aside>
      </section>

      <section className="service-fit service-shell" id="fit">
        <div className="service-section-title"><p className="service-kicker">لمن هذه الخدمة؟</p><h2>عندما تحتاج الواجهة أن تعمل لصالح المشروع، لا أن تكون مجرد حضور.</h2></div>
        <div className="service-fit-copy"><p>{service.audience}</p><a href="/#contact">ناقش احتياجك معنا <span>←</span></a></div>
      </section>

      <section className="service-problems service-shell">
        <div className="service-section-heading"><div><p className="service-kicker">المشاكل التي تحلها</p><h2>علامات تقول إن الوقت حان<br />لبناء تجربة أوضح.</h2></div><p>لا نفترض أن الحل هو مزيد من الصفحات. نبدأ بالمشكلة ثم نبني أقل نطاق يحقق الهدف بوضوح.</p></div>
        <div className="service-problem-grid">
          {service.problems.map((problem, index) => <article key={problem.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}
        </div>
      </section>

      <section className="service-scope service-shell" id="scope">
        <div className="service-section-title"><p className="service-kicker">ماذا سننفذ؟</p><h2>نطاق يجمع القرار والتصميم والتنفيذ في مسار واحد.</h2></div>
        <ol className="service-scope-list">
          {service.implementation.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
        </ol>
      </section>

      <section className="service-deliverables service-shell" id="deliverables">
        <div className="service-section-heading"><div><p className="service-kicker">ما الذي ستستلمه؟</p><h2>مخرجات واضحة، وحسابات تحت سيطرتك.</h2></div><p>تُثبت التفاصيل النهائية في عرض المشروع، مع توضيح ما يدخل في كل مرحلة وما يحتاجه فريقك بعدها.</p></div>
        <div className="service-deliverable-grid">
          {service.deliverables.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className="service-phases service-shell">
        <div className="service-section-heading"><div><p className="service-kicker">مراحل العمل</p><h2>تعرف أين نحن،<br />وماذا يأتي بعد ذلك.</h2></div><p>نراجع المخرجات في نقاط واضحة خلال المشروع حتى لا تتحول الملاحظات المهمة إلى مفاجآت متأخرة.</p></div>
        <div className="service-phase-list">
          {service.phases.map((phase, index) => <article key={phase.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{phase.title}</h3><p>{phase.text}</p></div></article>)}
        </div>
      </section>

      <section className="service-work service-shell">
        <div className="service-section-heading"><div><p className="service-kicker">أعمال ذات صلة</p><h2>مشاريع تعكس جوانب<br />من هذه الخدمة.</h2></div><p>أمثلة على نطاقات وتجارب نفذناها، مع اختلاف أهداف واحتياجات كل مشروع.</p></div>
        <div className="service-projects">
          {service.projects.map((project) => {
            const external = project.href.startsWith("http");
            return <a key={project.title} href={project.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><b>{project.linkLabel} <span>↗</span></b></a>;
          })}
        </div>
      </section>

      <section className="service-faq service-shell" id="faq">
        <div className="service-section-heading"><div><p className="service-kicker">الأسئلة الشائعة</p><h2>ما تحتاج معرفته<br />قبل البداية.</h2></div><p>نثبت المدة والتكلفة والتفاصيل التقنية بعد جلسة الاكتشاف، لأن النطاق الحقيقي يختلف من مشروع لآخر.</p></div>
        <div className="faq-list">
          {service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="service-other service-shell">
        <p className="service-kicker">خدمات أخرى</p>
        <div>{otherServices.map((item) => <a key={item.slug} href={`/services/${item.slug}`}><span>{item.number}</span><strong>{item.shortTitle}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="service-cta">
        <div><p className="service-kicker">الخطوة التالية</p><h2>{service.ctaTitle}</h2></div>
        <div><p>{service.ctaText}</p><a className="button button-primary" href="/#contact">احجز جلسة اكتشاف مجانية <span>←</span></a></div>
      </section>

      <footer className="service-footer">
        <a className="brand" href="/"><Image className="brand-logo" src="/logo.svg" alt="" width={44} height={44} /><span className="brand-copy"><strong>وسيط شوب</strong><small>تصميم وتطوير المنتجات الرقمية</small></span></a>
        <p>نبني مواقع ومنصات تحوّل الحضور الرقمي إلى فرص حقيقية.</p>
        <div><a href="mailto:waseetshop@gmail.com">waseetshop@gmail.com</a><a href="tel:+966500615614" dir="ltr">+966 50 061 5614</a></div>
      </footer>
    </main>
  );
}
