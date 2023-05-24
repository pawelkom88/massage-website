import React from "react";
import { aboutMe } from "./data";

export default function About() {
  return (
    <>
      <section className="max-w-[85rem] px-4 mx-auto overflow-hidden pt-8 lg:pt-20 pb-12">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12 order-2 lg:order-1">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="/images/massage-room.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative my-4">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 order-1 lg:order-2">
              <div className="mt-10 lg:mt-0">
                <span className="text-secondary-clr mb-2 block text-lg font-semibold text-center lg:text-left">
                  About me
                </span>
                <h2 className="mt-2 mb-4 text-heading2">Welcome! I&apos;m Edyta James</h2>
                {aboutMe.map(({ id, content }) => {
                  return (
                    <p key={id} className="indent-2 text-justify mb-4">
                      {content}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
