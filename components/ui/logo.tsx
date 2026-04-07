import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex flex-col items-center justify-center leading-none" aria-label="Afterdab Hosting">
      
      {/* Changed 'font-nacelle' to 'font-sans' and bumped the size to text-2xl for better visibility */}
      <span className="font-mono text-2xl font-bold tracking-wide text-gray-200">
        AfterDab
      </span>
      
      {/* Added 'mt-1' to give it a tiny bit of breathing room */}
      <span className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-indigo-500">
        Hosting
      </span>
      
    </Link>
  );
}