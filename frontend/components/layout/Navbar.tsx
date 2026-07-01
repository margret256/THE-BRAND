"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sports Accessories", href: "/sports-accessories" },
  { label: "Logo Designing", href: "/logo-designing" },
  { label: "Engraving", href: "/engraving" },
  { label: "Printing", href: "/printing" },
  { label: "Gym Wear & Equipment", href: "/gym-wear" },
  { label: "Banners & Posters", href: "/banners-posters" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-[#2a2a2a]">
      <div className="w-full px-8 flex items-center justify-between h-20">
        {/* Logo — flush left, no gap */}
        <Link href="/" className="flex items-center gap-3 min-w-fit">
          <img
            src="/images/logo.jpeg"
            alt="THE BRAND"
            className="h-22 w-auto"
          />
          <span className="text-white font-black text-3xl uppercase tracking-widest whitespace-nowrap">
            {/* THE <span className="text-[#E8001C]">BRAND</span> */}
          </span>
        </Link>

        {/* Desktop Nav Links — centered with flex-1 */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side — flush right */}
        <div className="flex items-center gap-5 min-w-fit">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-white hover:text-[#E8001C] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#E8001C] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Login Button */}
          <Link href="/auth/login" className="btn-primary text-sm px-6 py-2">
            Login
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="text-white hover:text-[#E8001C] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 rounded-full border border-[#2a2a2a] p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#E8001C] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-[#2a2a2a] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm py-2 border-b border-[#2a2a2a]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="btn-primary text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
