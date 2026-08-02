import Image from "next/image";
import ContactForm from "./contact-form";

const services = [
  {
    number: "01",
    title: "مواقع الشركات",
    text: "واجهات تعريفية راقية تبني الثقة، توضّح قيمة شركتك، وتحوّل الزيارة إلى فرصة تواصل حقيقية.",
    tags: ["هوية رقمية", "تجربة مستخدم", "متجاوب"],
  },
  {
    number: "02",
    title: "المتاجر وصفحات الهبوط",
    text: "تجارب شراء وصفحات حملات مصممة حول رحلة العميل، من أول نقرة حتى اتخاذ القرار.",
    tags: ["رفع التحويل", "تجربة شراء", "تحليلات"],
  },
  {
    number: "03",
    title: "تطبيقات ويب مخصصة",
    text: "أنظمة ومنصات رقمية تبسّط العمليات وتجمع البيانات وتمنح فريقك مساحة حقيقية للنمو.",
    tags: ["لوحات تحكم", "قواعد بيانات", "تكاملات"],
  },
];

const projects = [
  {
    title: "لحظة فن",
    category: "متجر إلكتروني وتجربة شراء",
    description: "منصة عربية لطباعة الصور وتحويل الذكريات الرقمية إلى منتجات ملموسة.",
    image: "/project-art-moment.png",
    href: "https://www.art-moment.com/",
    accent: "coral",
  },
  {
    title: "رواسي دارك العقارية",
    category: "منصة عقارية متكاملة",
    description: "واجهة عقارية تجمع العروض والخدمات الرقمية في تجربة واضحة وموثوقة.",
    image: "/project-rawasi-dark.png",
    href: "https://www.rawasi-dark.com/",
    accent: "sand",
  },
  {
    title: "مدير العقارات",
    category: "تطبيق ويب لإدارة التأجير",
    description: "حل رقمي يساعد الملاك والمستأجرين على متابعة الوحدات والعقود والمدفوعات.",
    image: "/project-rental-manager.png",
    href: "https://rental-manager-hazel.vercel.app/",
    accent: "violet",
  },
];

const process = [
  ["01", "نكتشف", "جلسة مركزة لفهم مشروعك، جمهورك، وأهداف النمو التي يجب أن يخدمها الموقع."],
  ["02", "نصمّم", "نحوّل الفكرة إلى تجربة واضحة وهوية بصرية تحافظ على شخصية علامتك."],
  ["03", "نطوّر", "نبني الواجهات والأنظمة الخلفية بأداء سريع وبنية قابلة للتوسع."],
  ["04", "نطلق", "نختبر التفاصيل، نربط النطاق، ونبقى معك بعد الإطلاق للدعم والتحسين."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="وسيط شوب - الرئيسية">
          <span className="brand-mark"><i /></span>
          <span className="brand-copy">
            <strong>وسيط</strong>
            <small>WASEET SHOP</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <a href="#services">خدماتنا</a>
          <a href="#work">أعمالنا</a>
          <a href="#process">كيف نعمل</a>
          <a href="#about">عن وسيط</a>
        </nav>
        <a className="header-cta" href="#contact">
          ابدأ مشروعك <span>↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="فتح قائمة التنقل"><span /><span /></summary>
          <nav aria-label="التنقل للجوال">
            <a href="#services">خدماتنا</a>
            <a href="#work">أعمالنا</a>
            <a href="#process">كيف نعمل</a>
            <a href="#contact">ابدأ مشروعك</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> شريكك التقني للنمو</p>
          <h1>موقع يليق بعلامتك.<br /><em>ويعمل من أجل نموها.</em></h1>
          <p className="hero-text">
            نصمّم ونطوّر للشركات مواقع ومنصات رقمية سريعة وموثوقة، مبنية لتحويل الزوّار إلى فرص ومبيعات.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">احصل على استشارة مجانية <span>←</span></a>
            <a className="button button-ghost" href="#work">شاهد أعمالنا</a>
          </div>
          <div className="hero-trust">
            <div className="avatars" aria-hidden="true"><span>و</span><span>ش</span><span>ن</span><span>+</span></div>
            <p><strong>حلول مصممة للسوق المحلي</strong><small>من الفكرة حتى الإطلاق والدعم</small></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="معاينة لمنصة رقمية حديثة">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="dash-logo"><span /><b>نمو</b></div>
              <div className="dash-nav"><i /><i /><i /></div>
              <div className="dash-button" />
            </div>
            <div className="dashboard-body">
              <span className="mini-kicker">لوحة أداء مشروعك</span>
              <h2>قرارات أوضح.<br />نمو أسرع.</h2>
              <p>تجربة رقمية مصممة حول عملائك وأهدافك.</p>
              <div className="dash-cta"><span /><span /></div>
            </div>
            <div className="data-panel">
              <div className="data-head"><span>معدل التحويل</span><b>+38%</b></div>
              <div className="bars"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="data-foot"><span>هذا الشهر</span><strong>أداء متصاعد</strong></div>
            </div>
          </div>
          <div className="float-card float-speed"><span>⚡</span><p><b>أداء سريع</b><small>تجربة بلا انتظار</small></p></div>
          <div className="float-card float-live"><i /><span>الموقع يعمل بكفاءة</span></div>
        </div>

        <div className="hero-strip" aria-label="مزايانا">
          <span>تصميم استثنائي</span><i />
          <span>سرعة وأداء</span><i />
          <span>حماية وموثوقية</span><i />
          <span>دعم مستمر</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>01</span> لماذا وسيط؟</div>
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
          <div><div className="section-label light"><span>02</span> خدماتنا</div><h2>كل ما تحتاجه لبناء<br /><em>حضور رقمي مؤثر.</em></h2></div>
          <p>من الواجهة الأولى إلى النظام الخلفي، ننفذ التجربة كاملة بمعايير احترافية.</p>
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
        <div className="tech-bar">
          <p><small>بنية تقنية موثوقة</small>أدوات عالمية. تنفيذ محلي محترف.</p>
          <div className="tech-logos"><span>▲ Vercel</span><span>◈ Supabase</span><span>◉ GitHub</span><span>GoDaddy</span></div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading dark-text">
          <div><div className="section-label"><span>03</span> أعمال مختارة</div><h2>من الفكرة إلى منتج<br /><em>يعمل في العالم الحقيقي.</em></h2></div>
          <p>نماذج من منصات صممناها وطوّرناها لتخدم أهدافًا وتجارب مختلفة.</p>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-preview">
                <div className="browser-bar"><span /><span /><span /><small>{project.href.replace("https://", "")}</small></div>
                <Image src={project.image} alt={`معاينة مشروع ${project.title}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
              <div className="project-meta">
                <span>0{index + 1}</span>
                <div><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p></div>
                <b>↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="process-intro">
          <div className="section-label light"><span>04</span> منهجية العمل</div>
          <h2>رحلة واضحة.<br /><em>من أول لقاء حتى الإطلاق.</em></h2>
          <p>تعرف في كل مرحلة ماذا نعمل، ولماذا، وما الذي ستستلمه بعدها.</p>
          <a href="#contact">لنبدأ الحديث <span>←</span></a>
        </div>
        <div className="process-steps">
          {process.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy">
          <div className="section-label"><span>05</span> ابدأ مشروعك</div>
          <h2>لديك فكرة تستحق<br /><em>واجهة أقوى؟</em></h2>
          <p>شاركنا تفاصيل مشروعك، وسنرتب معك جلسة قصيرة لفهم الاحتياج واقتراح الخطوة الأنسب.</p>
          <div className="contact-note"><span>✓</span><p><b>الاستشارة الأولى مجانية</b><small>حديث مباشر وعملي دون التزامات.</small></p></div>
        </div>
        <ContactForm />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><i /></span>
          <span className="brand-copy"><strong>وسيط</strong><small>WASEET SHOP</small></span>
        </a>
        <p>نصمّم ونبني منصات رقمية<br />تحوّل الحضور إلى نمو.</p>
        <div className="footer-links"><a href="#services">الخدمات</a><a href="#work">الأعمال</a><a href="#process">المنهجية</a><a href="#contact">تواصل معنا</a></div>
        <div className="footer-bottom"><span>© 2026 وسيط شوب. جميع الحقوق محفوظة.</span><a href="#top">العودة للأعلى ↑</a></div>
      </footer>
    </main>
  );
}
