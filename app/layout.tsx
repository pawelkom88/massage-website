import "./globals.css";
import "@fontsource/work-sans";
import "@fontsource/prata";
import "@fontsource/dm-sans";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Muscles - Massage Therapy Newport | Relaxation, Sports, Remedial",
  description:
    "Newport's trusted expert in relaxation, sports, and remedial massages. Experience the difference today for a healthier you. (Book now)",

  metadataBase: new URL("https://healthymuscles.co.uk/"),
  alternates: {
    canonical: "https://healthymuscles.co.uk/",
  },
  openGraph: {
    title: "Healthy Muscles - Massage Therapy Newport | Relaxation, Sports, Remedial",
    description:
      "Newport's trusted expert in relaxation, sports, and remedial massages. Experience the difference today for a healthier you. (Book now)",
    url: "healthymuscles.co.uk/",
    siteName: "Healthy Muscles",
    images: [
      {
        url: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmassage-room.32b52a85.webp&w=800&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmassage-room.32b52a85.webp&w=1200&q=75",
        width: 1800,
        height: 1600,
        alt: "Healthy Muscles",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <MobileNavigation />
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
