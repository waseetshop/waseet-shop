import type { Metadata } from "next";
import "./globals.css";

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://waseet-shop.vercel.app";
const title = "وسيط شوب | تصميم وتطوير المواقع والمنصات الرقمية";
const description = "استوديو رقمي يصمّم ويطوّر للشركات السعودية مواقع ومتاجر وتطبيقات ويب سريعة وموثوقة تساعد العملاء على اتخاذ القرار.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  icons: { icon: "/logo.png", apple: "/logo.png" },
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
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
