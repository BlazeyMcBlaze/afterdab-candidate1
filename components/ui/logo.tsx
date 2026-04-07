import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex flex-col justify-center leading-none" aria-label="Afterdab Hosting">
      <span className="font-nacelle text-xl font-bold tracking-wide text-gray-200">
        AFTERDAB
      </span>
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-indigo-500">
        Hosting
      </span>
    </Link>
  );
}