import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("host") ?? "localhost:5173";
  const protocol = headerStore.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "وسيط شوب | منصات رقمية مصممة للنمو";
  const description = "نصمّم ونطوّر للشركات مواقع ومتاجر وتطبيقات ويب سريعة وموثوقة، مبنية لتحويل الزوّار إلى فرص ومبيعات.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ar_SA",
      url: origin,
      images: [{ url: new URL("/og.png", origin).toString(), width: 1792, height: 921, alt: "وسيط شوب — موقع يليق بعلامتك ويعمل من أجل نموها" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", origin).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
