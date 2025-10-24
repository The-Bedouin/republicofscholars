'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMenu}></div>
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-3 font-bold text-black text-lg" onClick={closeMenu}>
                  <img 
                    src="/republic_of_scholars_logo.png" 
                    alt="Republic of Scholars Logo" 
                    width={32} 
                    height={32} 
                    className="object-contain"
                  />
                  Republic of Scholars
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  <li>
                    <Link 
                      href="/about" 
                      className="block text-lg font-medium text-gray-900 hover:text-[--color-brand] transition-colors duration-200 py-2" 
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/programs" 
                      className="block text-lg font-medium text-gray-900 hover:text-[--color-brand] transition-colors duration-200 py-2" 
                      onClick={closeMenu}
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/ambassadors" 
                      className="block text-lg font-medium text-gray-900 hover:text-[--color-brand] transition-colors duration-200 py-2" 
                      onClick={closeMenu}
                    >
                      Ambassadors
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/resources" 
                      className="block text-lg font-medium text-gray-900 hover:text-[--color-brand] transition-colors duration-200 py-2" 
                      onClick={closeMenu}
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="block text-lg font-medium text-gray-900 hover:text-[--color-brand] transition-colors duration-200 py-2" 
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Donate Button */}
              <div className="p-6 border-t border-gray-200">
                <Link 
                  href="/donate" 
                  className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 bg-[--color-gold] text-white font-semibold hover:bg-[color-mix(in_oklab,_var(--color-gold),_black_12%)] focus:outline-none focus:ring-2 focus:ring-[--color-gold] transition-all duration-200 shadow-sm hover:shadow-md" 
                  onClick={closeMenu}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
