"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#F2F0E9]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="material-icons-round text-[#2E7D32] text-3xl">
              eco
            </span>
            <span className="font-display font-semibold text-2xl tracking-tight text-gray-900">
              GudForUs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
              href="#how-it-works"
            >
              How it works
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
              href="#for-brands"
            >
              For Brands
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
              href="#science"
            >
              Science
            </a>
            <a
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#2E7D32] hover:bg-[#1B5E20] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(46,125,50,0.3)]"
              href="#get-app"
            >
              Get the App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <span className="material-icons-round text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
                href="#for-brands"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Brands
              </a>
              <a
                className="text-sm font-medium text-gray-600 hover:text-[#2E7D32] transition-colors"
                href="#science"
                onClick={() => setMobileMenuOpen(false)}
              >
                Science
              </a>
              <a
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#2E7D32] hover:bg-[#1B5E20] transition-all shadow-lg w-fit"
                href="#get-app"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get the App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
