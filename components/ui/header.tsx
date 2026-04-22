"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Simplified container: removed complex pseudo-elements, added standard border & backdrop blur */}
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 border border-gray-700 backdrop-blur-xs">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-none items-center justify-end gap-3">
            <li>
              <a
                href="https://panel.afterdab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm relative bg-gray-800 py-[5px] px-3 text-xs text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Game Panel
              </a>
            </li>
            <li>
              <a
                href="https://billing.afterdab.com"
                className="btn-sm bg-indigo-600 py-[5px] px-3 text-xs text-white shadow-md hover:bg-indigo-500 transition-colors"
              >
                Client Area
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}