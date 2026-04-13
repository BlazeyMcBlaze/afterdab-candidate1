export const metadata = {
  title: "Afterdab Hosting | High-Performance Game Servers",
  description: "Ryzen 9700X Dedicated Servers. Tier 3 Data Center. Zero Overselling.",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
}