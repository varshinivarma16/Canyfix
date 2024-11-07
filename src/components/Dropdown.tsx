// Igonore this file till now because it use dynamic FAQ which fetch more faq from json file which name is faq.json

"use client";
import React, { useState } from "react";
import list from "../app/faq.json";
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-auto">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-300 p-4 w-full flex items-center justify-between font-semibold text-lg rounded-lg border-4 border-transparent active:border-blue-400"
      >
        Show more Faq&apos;s
        {!isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 11H13V4H11V11H4V13H11V20H13V13H20V11Z"
              fill="#282A2C"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 11H13H11H4V13H11H13H20V11Z"
              fill="#282A2C"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-20 flex flex-col items-start rounded-xl">
          {list.map((item, i) => (
            <div className="m-2 bg-white p-4 rounded-xl" key={i}>
              <h3 className="font-semibold">{item.q}</h3>
              <h3 className="mt-3">{item.a}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;