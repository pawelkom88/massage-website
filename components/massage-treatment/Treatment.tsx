import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/contentful/helpers";

interface TreatmentListItemProps {
  duration: number;
  price: number;
}

function TreatmentListItem({ duration, price }: TreatmentListItemProps) {
  return (
    <li className="text-2xl font-bold text-center">
      {duration} mins - £{price}
    </li>
  );
}

interface TreatmentListProps {
  durationArray: number[];
  priceArray: number[];
}

function TreatmentList({ durationArray, priceArray }: TreatmentListProps) {
  return (
    <ul className="space-y-4">
      {durationArray?.map((duration, index) => (
        <TreatmentListItem key={index} duration={duration} price={priceArray[index]} />
      ))}
    </ul>
  );
}

export interface MassageTreatmentProps {
  article: {
    title: string;
    price: number[];
    duration: number[];
    description: any;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    } | null;
  };
}

function MassageTreatment({ article }: MassageTreatmentProps) {
  const { title, price, duration, description } = article;
  return (
    <section className="px-4">
      <h1 className="text-heading2 text-center px-4 my-12 uppercase">{title}</h1>
      {documentToReactComponents(description, options)}
      <br />
      <TreatmentList durationArray={duration} priceArray={price} />
      <br />
      <p className="max-w-readable mx-auto my-12 indent-1.5 text-justify text-lg">
        Complementary cupping therapy available free of charge if requested before treatment and
        subject to availability.
      </p>
      <p className="max-w-readable mx-auto my-12 indent-1.5 text-justify text-lg">
        To book your appointment, please call{" "}
        <a className="text-primary-clr" href="tel:07525431743">
          07525431743
        </a>
        <br />
        <br />
        <div className="flex flex-col">
          <small>* Gift vouchers available</small>
          <small>
            * There is a 48hour cancellation policy - 48hours notice for appointment adjustments or
            cancellations. Same day cancellations will be charged 50% of the price. No show is
            charged full price.
          </small>
          <small>* I supply official receipts for a Health Shield Claim</small>
          <small>* Cardiff University staff discount - £5 off your first 60min appointment.</small>
        </div>
      </p>
    </section>
  );
}

export default MassageTreatment;
