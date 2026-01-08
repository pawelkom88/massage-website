import { generateScheduleByDay } from "@/components/opening-time/OpeningTimes";
import OpeningTimesTable from "@/components/opening-time/OpeningTimesTable";
import {
  fetchContent,
  parseContentfulOpeningHours,
  parseContentfulPrices,
} from "@/contentful/fetchContent";
import { options } from "@/contentful/helpers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newport Massage Therapy Prices - Affordable Massage Sessions",
  description:
    "Discover the pricing details for Healthy Muscles therapy sessions. I offer a range of options, including Hot Stone Therapy. Learn about our discounts, gift vouchers, and more.",
  alternates: {
    canonical: "massage-pricing",
  },
};

const tableBorder = "border px-4 py-2";

export default async function Prices() {
  const draft = await draftMode();
  const prices: any = await fetchContent(
    { preview: draft.isEnabled },
    "prices",
    parseContentfulPrices
  );

  const openingHours: any = await fetchContent(
    { preview: draft.isEnabled },
    "openingTimes",
    parseContentfulOpeningHours
  );

  const scheduleByDay = generateScheduleByDay(openingHours);

  const [{ intro, price, duration, treatmentName, content }] = prices;

  const data = [treatmentName, price, duration];

  return (
    <section className="px-4 max-w-readable mx-auto py-8 text-lg">
      <h1 className="text-heading2 text-center px-4 my-8 uppercase">Prices</h1>
      <p>{intro}</p>
      <br />
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className={tableBorder}>Session</th>
            <th className={tableBorder}>Duration (mins)</th>
            <th className={tableBorder}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data[0].map((_: any, index: number) => (
            <tr key={index} className="text-center">
              <td className={tableBorder}>{data[0][index]}</td>
              <td className={tableBorder}>{data[2][index]}</td>
              <td className={tableBorder}>{data[1][index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <article>{documentToReactComponents(content, options)}</article>
      <div className="flex flex-col">
        <small>* Gift vouchers available</small>
        <small>
          * There is a 48hour cancellation policy - 48hours notice for appointment adjustments or
          cancellations. Same day cancellations will be charged 50% of the price. No show is charged
          full price.
        </small>
        <small>* I supply official receipts for a Health Shield Claim</small>
        <small>* Cardiff University staff discount - £5 off your first 60min appointment.</small>
      </div>
      <br />
      <strong className="text-center">
        I aim to be very flexible with my time to suit you, so please call me on
        <a className="text-primary-clr" href="tel:07525431743">
          {" "}
          07525431743
        </a>{" "}
        and ask for available slots.
      </strong>
      <br />
      <br />
      <Link
        className="block mx-auto underline text-secondary-clr text-center font-bold"
        href="/cancellation-policy">
        Cancellation Policy
      </Link>
      <br />
      <br />
      <OpeningTimesTable scheduleByDay={scheduleByDay} />
    </section>
  );
}
