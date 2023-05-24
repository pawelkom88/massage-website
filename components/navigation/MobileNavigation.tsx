"use client";
import React, { useState } from "react";

export default function MobileNavigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        title="Button"
        type="button"
        className="p-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 dark:text-gray-100">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {toggleMenu && (
        <div className="flex flex-col justify-center items-center fixed inset-0 w-full h-full bg-primary-clr-opacity z-50">
          <ul>
            <li>ads</li>
            <li>asd</li>
            <li>ads</li>
            <li>asd</li>
            <li>ads</li>
          </ul>
        </div>
      )}
    </>
  );
}
