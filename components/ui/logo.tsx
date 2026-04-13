import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Afterdab">
      <Image 
        src={LogoImg} 
        alt="Afterdab Logo" 
        width={32} // Adjust this based on your logo's shape
        height={32} 
        priority 
        className="rounded-sm"
      />
      <span className="font-nacelle text-xl font-bold tracking-tight text-white hover:text-[#39ff14] transition-colors">
        Afterdab
      </span>
    </Link>
  );
}