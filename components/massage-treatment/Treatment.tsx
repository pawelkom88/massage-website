import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { options } from "@/contentful/helpers";
import Image from "next/image";

const notesOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="text-sm text-gray-600 mb-2 leading-relaxed">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="text-sm text-gray-600 mb-4 list-disc space-y-1">
        {children}
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

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

export interface ContentfulImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TreatmentNotes {
  notes: any;
}

export interface MassageTreatmentProps {
  article: {
    title: string;
    price: number[];
    duration: number[];
    description: any;
    images?: ContentfulImage[];
  };
  treatmentNotes?: TreatmentNotes | null;
}

function MassageTreatment({ article, treatmentNotes }: MassageTreatmentProps) {
  const { title, price, duration, description, images } = article;

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
      </p>
      {images?.length ? (
        <div className="max-w-readable mx-auto my-12 columns-1 sm:columns-2 lg:columns-3 gap-3">
          {images.map((image) => (
            <div key={image.src} className="mb-3 break-inside-avoid">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-col max-w-readable mx-auto mb-8 text-left">
        {treatmentNotes?.notes && Array.isArray(treatmentNotes.notes) && treatmentNotes.notes.length > 0 ? (
          treatmentNotes.notes.map((note, index) => (
            <small key={index} className="text-left block">{note}</small>
          ))
        ) : treatmentNotes?.notes?.content ? (
          documentToReactComponents(treatmentNotes.notes, notesOptions)
        ) : (
          <>
            <small className="text-left block">* Gift vouchers available</small>
            <small className="text-left block">
              * There is a 48hour cancellation policy - 48hours notice for appointment adjustments or
              cancellations. Same day cancellations will be charged 50% of the price. No show is
              charged full price.
            </small>
            <small className="text-left block">* I supply official receipts for a Health Shield Claim</small>
            <small className="text-left block">* Cardiff University staff discount - £5 off your first 60min appointment.</small>
          </>
        )}
      </div>
    </section>
  );
}

export default MassageTreatment;
