"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`fixed md:hidden top-16 right-4 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-lg border transition-colors ${
          open 
            ? "bg-[#0e46a5] text-white border-[#0e46a5]" 
            : "bg-white text-black border-gray-200"
        }`}
     >
        <i className="fas fa-bars"></i>
        <span className="text-sm font-semibold">Menu</span>
      </button>

      {open && (
        <div className="fixed md:hidden top-28 right-4 z-50 w-64 max-w-[90vw] rounded-xl border border-[#0e46a5] bg-[#0e46a5] text-white shadow-xl">
          <nav className="p-3">
            <ul className="space-y-1 text-sm font-medium">
              <li>
                <Link href="/" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>Home</span>
                  <i className="fas fa-home text-white/70"></i>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>About</span>
                  <i className="fas fa-info-circle text-white/70"></i>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>Programs</span>
                  <i className="fas fa-list text-white/70"></i>
                </Link>
              </li>
              <li>
                <Link href="/ambassadors" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>Ambassadors</span>
                  <i className="fas fa-users text-white/70"></i>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>Resources</span>
                  <i className="fas fa-book text-white/70"></i>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a5bb8] text-white">
                  <span>Contact</span>
                  <i className="fas fa-envelope text-white/70"></i>
                </Link>
              </li>
            </ul>

            <div className="mt-3">
              <Link
                href="/donate"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[--color-gold] px-3 py-2 text-sm font-semibold text-white hover:bg-[color-mix(in_oklab,_var(--color-gold),_black_12%)]"
              >
                <i className="fas fa-heart"></i>
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}


