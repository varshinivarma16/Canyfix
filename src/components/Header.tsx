"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.example.app'; // Replace with your app's Play Store URL
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 md:px-8">
      <div className="flex items-center ml-4 md:ml-12">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={100} height={50} className="h-auto"/>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-grow justify-center items-center gap-8 font-satoshi">
        <ul className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="relative text-[16px] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:flex items-center mr-4 md:mr-6">
        {/* 
        # TODO remove
        <Button onClick={handleDownload}>Download App</Button> */}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex items-center lg:hidden mr-4 md:mr-6">
        <button
          className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white p-4 rounded shadow-lg z-10">
          <ul className="flex flex-col gap-4 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href} className="regular-16 text-black cursor-pointer transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button onClick={handleDownload}>Download App</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
