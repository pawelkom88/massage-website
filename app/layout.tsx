import "./globals.css";
import "@fontsource/work-sans";
import "@fontsource/prata";
import "@fontsource/dm-sans";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { draftMode } from "next/headers";
import ExitDraftModeLink from "./ExitDraftModeLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Muscles - Massage Therapy Newport | Relaxation, Sports, Remedial",
  description:
    "Newport's trusted expert in relaxation, sports, and remedial massages. Experience the difference today for a healthier you. (Book now)",
  openGraph: {
    title: "Healthy Muscles - Massage Therapy Newport | Relaxation, Sports, Remedial",
    description:
      "Newport's trusted expert in relaxation, sports, and remedial massages. Experience the difference today for a healthier you. (Book now)",
    url: "healthymuscles.co.uk/",
    siteName: "Healthy Muscles",
    images: [
      {
        url: "https://healthymuscles.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmassage-room.32b52a85.webp&w=800&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "https://healthymuscles.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmassage-room.32b52a85.webp&w=1200&q=75",
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
        {draftMode().isEnabled && (
          <p className="bg-orange-200 py-4 px-[6vw]">
            Draft mode is on! <ExitDraftModeLink className="underline" />
          </p>
        )}
        {children}
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
