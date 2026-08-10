import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
});

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.waseet-shop.com";
const title = "وسيط شوب | تصميم وتطوير المواقع والمنصات الرقمية";
const description = "استوديو رقمي يصمّم ويطوّر للشركات السعودية مواقع ومتاجر وتطبيقات ويب سريعة وموثوقة تساعد العملاء على اتخاذ القرار.";
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: "وسيط شوب",
      alternateName: "Waseet Shop",
      url: origin,
      logo: new URL("/logo.svg", origin).toString(),
      email: "waseetshop@gmail.com",
      telephone: "+966500615614",
      description,
      sameAs: [
        "https://www.instagram.com/waseetshop",
        "https://www.tiktok.com/@waseetshop",
        "https://x.com/waseetshop",
        "https://t.me/waseetshop",
        "https://www.facebook.com/waseetshop1",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      name: "وسيط شوب",
      url: origin,
      inLanguage: "ar-SA",
      publisher: { "@id": `${origin}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  icons: { icon: "/logo.svg", apple: "/logo.png" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ar_SA",
    url: "/",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "وسيط شوب — تصميم وتطوير المواقع والمنصات الرقمية" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
