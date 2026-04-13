"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Site branding - Now uses the PNG logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://panel.afterdab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm relative bg-gray-800 py-[5px] text-xs text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Game Panel
              </a>
            </li>
            <li>
              <a
                href="https://billing.afterdab.com"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 py-[5px] text-xs text-white shadow-md hover:from-indigo-500 hover:to-indigo-400"
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