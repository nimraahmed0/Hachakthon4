'use client';

import Link from "next/link";
import { FaSearch, FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm flex flex-wrap items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between px-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span>mhhasanul@gmail.com</span>
          </a>
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Utilities */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Links */}
          <a href="/login" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span>Login</span>
          </a>
          <a href="/signup" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <span>Signup</span>
          </a>
          <a href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span>Wishlist</span>
          </a>
          <a href="/cart" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-6 px-4 md:px-16 items-center max-w-screen-xl mx-auto">
      {/* Logo */}
      <h2 className="font-bold text-black text-center md:text-left text-2xl md:text-xl font-inter md:w-auto">
        Hekto
      </h2>

      {/* Navigation */}
      <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto text-black">
        <li>
          <Link href="/">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pages">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Pages</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Product</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="font-poppins text-lg font-bold hover:text-gray-600">Contact</a>
          </Link>
        </li>
      </ul>

      {/* Search */}
      <div className="flex mt-4 md:mt-0">
        <div className="flex items-center bg-white rounded shadow px-3 py-1">
          <input
            type="text"
            className="flex-grow text-sm text-gray-700 focus:outline-none"
            placeholder="Search"
          />
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};
