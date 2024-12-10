'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
    } else {
      setMessage("✅ You have successfully subscribed!");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="bg-gray-100 py-16 text-gray-600">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Section */}
        <div>
          <h1 className="text-[#151875] text-3xl font-bold mb-4">Hekto</h1>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-7">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSendEmail}
              className="bg-pink-600 text-white px-4 py-1 text-sm font-medium rounded-md hover:bg-pink-700 transition-colors"
            >
              SignUp
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          <p className="mt-4 text-gray-500">Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 ">
            <li className="space-y-2 cursor-pointer hover:text-pink-500">Laptops & Computers</li>
            <li className="space-y-2 cursor-pointer hover:text-pink-500">Cameras & Photography</li>
            <li className="space-y-2 cursor-pointer hover:text-pink-500">Smart Phones & Tablets</li>
            <li className="space-y-2 cursor-pointer hover:text-pink-500">Video Games & Consoles</li>
            <li className="cursor-pointer hover:text-pink-500">Waterproof Headphones</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-pink-500"><Link href="/myaccount">My Account</Link></li>
            <li className="cursor-pointer hover:text-pink-500"><Link href="/about">About</Link>Discount</li>
            <li className="cursor-pointer hover:text-pink-500"><Link href="/faq">Faq</Link></li>
            <li className="cursor-pointer hover:text-pink-500"><Link href="/404">404 Not Found</Link></li>
            <li className="cursor-pointer hover:text-pink-500"><Link href="/about"></Link></li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-pink-500"><Link href="/blog">Blog</Link></li>
            <li className="cursor-pointer hover:text-pink-500">Browse the Shop</li>
            <li className="cursor-pointer hover:text-pink-500">Category</li>
            <li className="cursor-pointer hover:text-pink-500">Pre-Built Pages</li>
            <li className="cursor-pointer hover:text-pink-500">Visual Composer Elements</li>
            <li className="cursor-pointer hover:text-pink-500">WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <p className="text-gray-500">&copy; Website - All Rights Reserved. Nimra Ahmed</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com/" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-blue-700">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-blue-700">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;