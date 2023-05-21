import React from "react";

export default function Hero1() {
  return (
    <section
      className="w-full bg-center bg-cover h-[45rem]"
      style={{
        backgroundImage: 'url("/images/massage-table-room.jpg")',
      }}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900/50">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-7xl tracking-wide">
            Proffesional massage
            <br /> service in Newport
          </h1>
          <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Start project
          </button>
        </div>
      </div>
    </section>
  );
}
