import Link from "next/link";
import Image from "next/image";

import AfterdabIcon from "@/public/images/icon.png"; 

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Afterdab Hosting">
      {/* The crisp, transparent icon */}
      <Image 
        src={AfterdabIcon} 
        alt="Afterdab Icon" 
        width={36} 
        height={36} 
        className="rounded-md" 
        priority 
      />
      {/* The HTML-rendered text */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-nacelle text-lg font-bold tracking-wide text-gray-200">
          AFTERDAB
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-indigo-500">
          Hosting
        </span>
      </div>
    </Link>
  );
}