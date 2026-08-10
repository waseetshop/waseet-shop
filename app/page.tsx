import Image from "next/image";
import ContactForm from "./contact-form";

const services = [
  {
    number: "01",
    title: "لدي شركة وأحتاج موقعًا احترافيًا",
    text: "نبني موقعًا يشرح قيمة شركتك بوضوح، يعزز الثقة، ويحوّل الزيارة إلى فرصة تواصل حقيقية.",
    tags: ["استراتيجية محتوى", "UI/UX", "تطوير متجاوب", "SEO أساسي", "دعم بعد الإطلاق"],
  },
  {
    number: "02",
    title: "لدي منتج أو متجر وأريد زيادة التحويل",
    text: "نصمم رحلة شراء وصفحات حملات تقرّب العميل من القرار، من أول نقرة حتى إتمام الطلب.",
    tags: ["رحلة الشراء", "صفحات المنتجات", "الدفع والشحن", "تتبع التحويل"],
  },
  {
    number: "03",
    title: "لدي فكرة نظام أو منصة",
    text: "نحوّل المتطلبات إلى نظام واضح يبسط العمليات ويجمع البيانات ويمنح فريقك مساحة للنمو.",
    tags: ["تحليل المتطلبات", "لوحات إدارة", "قواعد بيانات", "تكاملات", "اختبار وأمان"],
  },
  {
    number: "04",
    title: "لدي موقع قائم لكنه لا يؤدي جيدًا",
    text: "نراجع المحتوى والتجربة والأداء، ثم نحدد ما يستحق التحسين وما يحتاج إلى إعادة بناء.",
    tags: ["مراجعة UX", "تحسين المحتوى", "رفع الأداء", "إعادة التصميم", "تطوير مرحلي"],
  },
];

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  accent: string;
  deliverables: string[];
  metadata: string;
  role: string;
  status?: string;
  caseStudy?: string;
};

const projects: Project[] = [
  {
    title: "لحظة فن",
    category: "متجر إلكتروني وتجربة شراء",
    description: "منصة عربية لطباعة الصور وتحويل الذكريات الرقمية إلى منتجات ملموسة.",
    image: "/project-art-moment.png",
    href: "https://www.art-moment.com/",
    accent: "coral",
    deliverables: ["واجهة المتجر", "رحلة الشراء", "تتبع الطلبات"],
    metadata: "E-commerce · Custom Platform",
    role: "UX/UI · Development",
  },
  {
    title: "رواسي دارك العقارية",
    category: "منصة عقارية متكاملة",
    description: "واجهة عقارية تجمع العروض والخدمات الرقمية في تجربة واضحة وموثوقة.",
    image: "/project-rawasi-dark.png",
    href: "https://www.rawasi-dark.com/",
    accent: "sand",
    deliverables: ["تجربة المستخدم", "واجهة المنصة", "إدارة العقارات"],
    metadata: "Real Estate · Web Platform",
    role: "Strategy · UX/UI · Development",
  },
  {
    title: "مدير العقارات",
    category: "تطبيق ويب لإدارة التأجير",
    description: "حل رقمي يساعد الملاك والمستأجرين على متابعة الوحدات والعقود والمدفوعات.",
    image: "/project-rental-manager.png",
    href: "https://rental-manager-hazel.vercel.app/",
    accent: "violet",
    deliverables: ["لوحة الإدارة", "حسابات المستأجرين", "متابعة الوحدات"],
    metadata: "PropTech · Web App",
    role: "Product Design · Development",
    status: "منتج تجريبي · مشروع داخلي",
  },
  {
    title: "لحظة لياقة — Fit Moment",
    category: "منصة نادي لياقة ومتجر رقمي",
    description: "تجربة رقمية لنادٍ نسائي تجمع التعريف بالبرامج والجدول والتسجيل والمتجر في مكان واحد.",
    image: "/project-fit-moment.png",
    href: "https://fit-moment-web.pages.dev/",
    accent: "magenta",
    deliverables: ["موقع تعريفي", "تسجيل المتدربات", "متجر إلكتروني", "لوحة دخول"],
    metadata: "Fitness · Web Platform · 2026",
    role: "Strategy · UX/UI · Development",
    caseStudy: "/work/fit-moment",
  },
];

const process = [
  ["01", "نكتشف", "جلسة مركزة لفهم مشروعك، جمهورك، وأهداف النمو التي يجب أن يخدمها الموقع."],
  ["02", "نصمّم", "نحوّل الفكرة إلى تجربة واضحة وهوية بصرية تحافظ على شخصية علامتك."],
  ["03", "نطوّر", "نبني الواجهات والأنظمة الخلفية بأداء سريع وبنية قابلة للتوسع."],
  ["04", "نطلق", "نختبر التفاصيل، نربط النطاق، ونبقى معك بعد الإطلاق للدعم والتحسين."],
];

const benefits = [
  "ملكية كاملة للمشروع",
  "متوافق مع الجوال",
  "لوحة إدارة سهلة",
  "ربط النطاق والاستضافة",
  "تدريب بعد التسليم",
  "دعم بعد الإطلاق",
];

const handoff = [
  "الكود المصدري كاملًا",
  "حسابات الاستضافة تحت ملكيتك",
  "النطاق تحت سيطرتك",
  "ملفات التصميم عند الاتفاق عليها",
  "بيانات الدخول موثقة",
  "لوحة الإدارة مع شرح الاستخدام",
  "دليل تسليم بروابط المشروع",
  "تدريب على إدارة المحتوى عند الحاجة",
  "دعم بعد الإطلاق وفق المدة المتفق عليها",
];

const projectFlow = ["الاكتشاف", "المحتوى", "المخطط", "التصميم", "التطوير", "الاختبار", "الإطلاق"];

const faqs = [
  ["كم تستغرق مدة التنفيذ؟", "تتحدد المدة بعد جلسة الاكتشاف وفق حجم المحتوى والوظائف والتكاملات، ثم تظهر بوضوح في خطة المشروع قبل البدء."],
  ["هل أملك الموقع والكود؟", "نعم، تُسلّم الملفات والحسابات المتفق عليها بعد اكتمال المشروع، ويكون النطاق والاستضافة تحت ملكيتك."],
  ["هل تساعدون في كتابة المحتوى؟", "نساعد في هيكلة الصفحات وصياغة الرسائل الأساسية، ويمكن إدراج كتابة المحتوى الكاملة ضمن نطاق المشروع."],
  ["هل يمكن تطوير موقع قائم؟", "نعم، نبدأ بمراجعة الموقع الحالي ثم نحدد ما إذا كان الأنسب تحسينه أو إعادة بنائه دون افتراض حل مسبق."],
  ["ماذا يحدث بعد الإطلاق؟", "نقدّم تدريبًا وتسليمًا منظمًا وفترة دعم متفقًا عليها، مع إمكانية إضافة خطة عناية أو تطوير مستمر."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const socialLinks = [
  { label: "إنستغرام", href: "https://www.instagram.com/waseetshop", icon: "/instagram icon.svg" },
  { label: "تيك توك", href: "https://www.tiktok.com/@waseetshop", icon: "/tiktok icon.png" },
  { label: "X", href: "https://x.com/waseetshop", icon: "/x icon.svg" },
  { label: "واتساب", href: "https://wa.me/966500615614", icon: "/whatsapp icon.svg" },
  { label: "قناة تيليجرام", href: "https://t.me/waseetshop", icon: "/telegram icon.svg" },
  { label: "فيسبوك", href: "https://www.facebook.com/waseetshop1", icon: "/Facebook icon.svg" },
  { label: "البريد الإلكتروني", href: "mailto:waseetshop@gmail.com", icon: "/gmail icon.svg" },
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="وسيط شوب - الرئيسية">
          <Image className="brand-logo" src="/logo.svg" alt="" width={46} height={46} priority />
          <span className="brand-copy">
            <strong>وسيط شوب</strong>
            <small>تصميم وتطوير المنتجات الرقمية</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="#services">خدماتنا</a>
          <a href="#work">أعمالنا</a>
          <a href="#process">كيف نعمل</a>
          <a href="#about">عن وسيط</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </nav>
        <a className="header-cta" href="#contact">
          احجز جلسة اكتشاف مجانية <span>↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="فتح قائمة التنقل"><span /><span /></summary>
          <nav aria-label="التنقل للجوال">
            <a href="#services">خدماتنا</a>
            <a href="#work">أعمالنا</a>
            <a href="#process">كيف نعمل</a>
            <a href="#about">عن وسيط</a>
            <a href="#faq">الأسئلة الشائعة</a>
            <a href="#contact">احجز جلسة اكتشاف مجانية</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> تصميم وتطوير مواقع ومنصات للشركات السعودية</p>
          <h1>نبني موقعًا يحوّل حضور شركتك<br /><em>إلى فرص حقيقية.</em></h1>
          <p className="hero-audience">للشركات والمنصات التي تحتاج أكثر من قالب جاهز.</p>
          <p className="hero-text">
            من استراتيجية المحتوى وتجربة المستخدم إلى التصميم والتطوير والإطلاق، نصنع منصات سريعة وموثوقة تعكس علامتك وتساعد عملاءك على اتخاذ القرار.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">احجز جلسة اكتشاف مجانية <span>←</span></a>
            <a className="button button-ghost" href="#work">استعرض الأعمال</a>
          </div>
          <p className="hero-trust"><span>تصميم مخصص</span><i /><span>ملكية كاملة</span><i /><span>دعم بعد الإطلاق</span></p>
        </div>

        <div className="hero-visual" aria-label="معاينة مشروع رقمي على الحاسوب والجوال">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="showcase-desktop">
            <div className="showcase-bar"><span /><span /><span /><small>rawasi-dark.com</small></div>
            <div className="showcase-screen">
              <Image src="/project-rawasi-dark.png" alt="واجهة منصة رواسي دارك العقارية" fill priority sizes="(max-width: 760px) 92vw, 44vw" />
            </div>
          </div>
          <div className="showcase-phone">
            <span className="phone-notch" />
            <Image src="/project-rawasi-dark.png" alt="عرض متجاوب لمنصة رواسي دارك" fill sizes="170px" />
          </div>
          <div className="float-card float-speed"><span>UX</span><p><b>تصميم وتجربة مبنية حول المستخدم</b></p></div>
          <div className="float-card float-live"><i /><span>تطوير متجاوب لكل الشاشات</span></div>
        </div>

        <div className="hero-strip" aria-label="مزايانا">
          <span>تصميم استثنائي</span><i />
          <span>سرعة وأداء</span><i />
          <span>حماية وموثوقية</span><i />
          <span>دعم مستمر</span>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading dark-text">
          <div><div className="section-label"><span>01</span> أعمال مختارة</div><h2>من الفكرة إلى منتج<br /><em>يعمل في العالم الحقيقي.</em></h2></div>
          <p>نماذج حقيقية من قطاعات العقار والتجارة واللياقة وإدارة الممتلكات.</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <a className={`project-card ${project.accent}`} href={project.caseStudy ?? project.href} target={project.caseStudy ? undefined : "_blank"} rel={project.caseStudy ? undefined : "noreferrer"} key={project.title}>
              <div className="project-preview">
                <div className="browser-bar"><span /><span /><span /><small>{project.href.replace("https://", "")}</small></div>
                <Image src={project.image} alt={`معاينة مشروع ${project.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
              <div className="project-meta">
                <span>0{index + 1}</span>
                <div>
                  {project.status && <span className="project-status">{project.status}</span>}
                  <small>{project.category}</small>
                  <h3>{project.title}</h3>
                  <p className="project-metadata" dir="ltr">{project.metadata}</p>
                  <p>{project.description}</p>
                  <div className="project-role"><b>الدور</b><span dir="ltr">{project.role}</span></div>
                  <div className="project-deliverables">{project.deliverables.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.caseStudy && <span className="case-study-link">اقرأ دراسة الحالة ←</span>}
                </div>
                <b aria-label={project.caseStudy ? "قراءة دراسة الحالة" : "زيارة المشروع"}>↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about section" id="why">
        <div className="section-label"><span>02</span> لماذا وسيط؟</div>
        <div className="about-grid">
          <h2>لا نبني صفحات جميلة فقط.<br /><em>نبني أداة نمو.</em></h2>
          <div className="about-copy">
            <p>خبرتنا في السوق الرقمي علّمتنا أن الموقع الناجح لا يُقاس بمظهره وحده، بل بقدرته على بناء الثقة وتوجيه العميل نحو القرار.</p>
            <p>لذلك نجمع بين التفكير التجاري، التصميم المدروس، والتطوير المتين لنقدّم منصة تعمل لصالح مشروعك كل يوم.</p>
          </div>
        </div>
        <div className="pillars">
          <article><span>✦</span><h3>نفهم عملك أولاً</h3><p>كل قرار تصميم يبدأ من هدف تجاري واضح، لا من قالب جاهز.</p></article>
          <article><span>↗</span><h3>نصمّم للتحويل</h3><p>نرتب المحتوى والمسارات لتقريب الزائر من الخطوة التالية.</p></article>
          <article><span>⌁</span><h3>نبني للمستقبل</h3><p>بنية مرنة وسريعة تستوعب تطور مشروعك دون إعادة البداية.</p></article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><div className="section-label light"><span>03</span> المسار المناسب لك</div><h2>أين مشروعك<br /><em>الآن؟</em></h2></div>
          <p>اختر الوصف الأقرب إلى مرحلتك، وسنحوّله إلى نطاق واضح بدل إغراقك بالمصطلحات التقنية.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-title"><h3>{service.title}</h3><span>↗</span></div>
              <p>{service.text}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="benefit-bar" aria-label="مزايا التسليم">
          <p><small>ما يهمك بعد الإطلاق</small><strong>مشروع واضح الملكية وسهل الإدارة.</strong></p>
          <div className="benefit-list">{benefits.map((benefit) => <span key={benefit}>✓ {benefit}</span>)}</div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-intro">
          <div className="section-label light"><span>04</span> منهجية العمل</div>
          <h2>رحلة واضحة.<br /><em>من أول لقاء حتى الإطلاق.</em></h2>
          <p>تعرف في كل مرحلة ماذا نعمل، ولماذا، وما الذي ستستلمه بعدها.</p>
          <a href="#contact">احجز جلسة اكتشاف مجانية <span>←</span></a>
        </div>
        <div className="process-steps">
          {process.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <div className="project-visibility">
          <div><small>إدارة المشروع</small><h3>مشروعك لن يدخل صندوقًا أسود.</h3><p>تعرف في أي مرحلة نحن، وما المطلوب منك، وما الذي سيُسلّم بعد ذلك.</p></div>
          <ol>{projectFlow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
        </div>
      </section>

      <section className="handoff section" id="handoff">
        <div className="section-heading dark-text">
          <div><div className="section-label"><span>05</span> ما الذي ستستلمه؟</div><h2>المشروع لك.<br /><em>وليس رهينة عندنا.</em></h2></div>
          <p>تستلم المشروع وحساباته بطريقة منظمة تساعدك على الإدارة والتطوير مستقبلًا، وفق البنود المحددة في عرضك.</p>
        </div>
        <div className="handoff-grid">
          {handoff.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
        </div>
      </section>

      <section className="studio-about section" id="about">
        <div className="section-label light"><span>06</span> عن وسيط شوب</div>
        <div className="studio-about-grid">
          <h2>استوديو رقمي سعودي<br /><em>قريب من عملك.</em></h2>
          <div>
            <p>وسيط شوب استوديو سعودي لتصميم وتطوير المنتجات الرقمية. نعمل مباشرة مع أصحاب المشاريع والشركات من فهم الفكرة حتى الإطلاق، دون انتقال المشروع بين عدة جهات.</p>
            <ul>
              <li>التصميم والتطوير وإدارة المشروع ضمن مسار واحد.</li>
              <li>تواصل مباشر وقرارات واضحة طوال التنفيذ.</li>
              <li>حلول مصممة للاحتياج، لا قوالب جاهزة.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading dark-text">
          <div><div className="section-label"><span>07</span> الأسئلة الشائعة</div><h2>إجابات واضحة<br /><em>قبل أن نبدأ.</em></h2></div>
          <p>تفاصيل أولية تساعدك على معرفة طريقة العمل، بينما تُحسم المدة والنطاق بعد فهم مشروعك.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-label"><span>08</span> احجز جلسة اكتشاف مجانية</div>
          <h2>لديك فكرة تستحق<br /><em>واجهة أقوى؟</em></h2>
          <p>شاركنا تفاصيل مشروعك، وسنرتب معك جلسة قصيرة لفهم الاحتياج واقتراح الخطوة الأنسب.</p>
          <div className="contact-note"><span>✓</span><p><b>الاستشارة الأولى مجانية — حديث مباشر وعملي دون التزامات.</b></p></div>
          <div className="direct-contact">
            <a href="https://wa.me/966500615614" target="_blank" rel="noreferrer"><b>واتساب</b><span dir="ltr">0500615614</span></a>
            <a href="mailto:waseetshop@gmail.com"><b>البريد</b><span>waseetshop@gmail.com</span></a>
          </div>
        </div>
        <div className="contact-form-stack">
          <ContactForm />
          <div className="after-submit">
            <h3>ماذا يحدث بعد إرسال الطلب؟</h3>
            <ol>
              <li><span>01</span><p><b>نراجع التفاصيل</b><small>نفهم الهدف والنطاق الأولي للمشروع.</small></p></li>
              <li><span>02</span><p><b>نتواصل عبر واتساب</b><small>نستوضح أي معلومات ناقصة ونرتب الموعد.</small></p></li>
              <li><span>03</span><p><b>نعقد جلسة اكتشاف</b><small>نناقش الاحتياج والخيارات والأولويات.</small></p></li>
              <li><span>04</span><p><b>تحصل على نطاق واضح</b><small>عرض مناسب بالمراحل والمخرجات المتفق عليها.</small></p></li>
            </ol>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <Image className="brand-logo" src="/logo.svg" alt="" width={52} height={52} />
          <span className="brand-copy"><strong>وسيط شوب</strong><small>تصميم وتطوير المنتجات الرقمية</small></span>
        </a>
        <div className="footer-contact">
          <p>استوديو رقمي لتصميم وتطوير المواقع والمنصات التي تحوّل الحضور إلى فرص حقيقية.</p>
          <a href="mailto:waseetshop@gmail.com">waseetshop@gmail.com</a>
          <a href="tel:+966500615614" dir="ltr">+966 50 061 5614</a>
        </div>
        <div className="footer-links"><a href="#services">الخدمات</a><a href="#work">الأعمال</a><a href="#process">المنهجية</a><a href="#about">عن وسيط</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">تواصل معنا</a></div>
        <div className="social-links" aria-label="حسابات وسيط شوب">
          {socialLinks.map((social) => <a href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} aria-label={social.label} title={social.label} key={social.label}><Image src={social.icon} alt="" width={22} height={22} /></a>)}
        </div>
        <div className="footer-bottom"><span>© 2026 وسيط شوب. جميع الحقوق محفوظة.</span><span><a href="/privacy">سياسة الخصوصية</a> · <a href="/terms">الشروط والأحكام</a> · <a href="#top">العودة للأعلى ↑</a></span></div>
      </footer>
    </main>
  );
}
