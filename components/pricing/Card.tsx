import React from "react";
export default function Card({}) {
  return (
    <section className="flex flex-col px-6 sm:px-8 lg:py-8">
      <h3 className="mt-5 text-lg text-black">Wannabe</h3>
      <p className="mt-2 text-sm text-gray-500">Good for those trying to get there.</p>
      <p className="order-first text-5xl font-light tracking-tight text-black">PRICE</p>
      <ul role="list" className="flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3">
        {/* MAP */}
        <li className="flex items-center">
          <svg width={25} fill='#32584d' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 40 40" id="tick">
            <path d="M15.48 28.62a1 1 0 0 1-.71-.29l-7.54-7.54a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l6.83 6.83L32.12 9.57a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.42L16.18 28.33a1 1 0 0 1-.7.29Z"></path>
          </svg>
          <span className="ml-4"> Connect 1 websites </span>
        </li>

        <li className="flex items-center">
          icon
          <span className="ml-4"> Connect up to 2 bank accounts </span>
        </li>
        <li className="flex items-center">
          icon
          <span className="ml-4"> Track up to 15 credit cards </span>
        </li>
        <li className="flex items-center">
          icon
          <span className="ml-4"> Analytics support </span>
        </li>
        <li className="flex items-center">
          icon
          <span className="ml-4"> Export up to 3 months data </span>
        </li>
      </ul>
      {/* <a className="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" aria-label="Wannabe tier" href="/register">
              Get started
            </a> */}
    </section>
  );
}
