"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import popupImg from "@/public/images/sport-massage-session.jpg";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 10000);
  }, []);

  return (
    <>
      {showPopup && (
        <>
          <div className="fixed w-full h-full inset-0 bg-gray-400 opacity-60"></div>
          <div className="fadeIn fixed inset-x-0 bottom-0 p-4">
            <div className="relative max-w-xl rounded-lg bg-gray-50 p-6 shadow-sm">
              <button
                onClick={() => setShowPopup(false)}
                type="button"
                className="absolute -end-2 -top-2 rounded-full border border-gray-200 hover:border-gray-800 bg-white p-1 text-gray-800 hover:bg-gray-800 hover:text-white">
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Image
                  src={popupImg}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-xl object-cover"
                  alt=""
                />

                <div>
                  <h2 className="text-lg font-medium">
                    Save yourself £5 off your next 60min treatment
                  </h2>

                  <p className="mt-4 text-sm">
                    Simply leave a review on Google by clicking on a button below.
                  </p>

                  <div className="mt-6 sm:text-right">
                    <a
                      href={process.env.NEXT_PUBLIC_ADD_REVIEW_LINK}
                      target="_blank"
                      rel="noreferrer "
                      className="inline-block rounded-lg bg-primary-clr hover:bg-secondary-clr px-5 py-3 text-sm font-medium text-white cursor-pointer">
                      Add review
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
