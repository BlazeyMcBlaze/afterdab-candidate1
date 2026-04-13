import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 py-8 md:flex-row md:py-12 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          
          {/* Brand & Copyright block */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <div className="text-sm text-indigo-200/65 text-center md:text-left">
              &copy; {new Date().getFullYear()} Afterdab Hosting.<br />
              Raw Performance. No Bullshit.
            </div>
          </div>

          {/* Lobotomized Flat Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a className="text-gray-300 hover:text-indigo-500 transition-colors" href="https://billing.afterdab.com">
              Client Area
            </a>
            <a className="text-gray-300 hover:text-indigo-500 transition-colors" href="https://panel.afterdab.com">
              Game Panel
            </a>
            <a className="text-gray-300 hover:text-indigo-500 transition-colors" href="https://discord.gg/7stnzqABNv" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <Link className="text-gray-500 hover:text-indigo-500 transition-colors" href="/legal">
              Legal
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}