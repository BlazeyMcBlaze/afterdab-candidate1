import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";

export default function Features() {
  return (
    <section className="relative" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-500),var(--color-gray-50),var(--color-indigo-200),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Select Your Tier
            </h2>
            <p className="text-lg text-indigo-200/65">
              High-frequency Ryzen 9700X hardware for every deployment.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Premium Hosting */}
            <article className="flex flex-col rounded-2xl border border-indigo-500/20 bg-gray-900/50 p-5 transition-all hover:border-indigo-500/50">
              <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Premium Games</h3>
              <p className="mb-6 flex-grow text-xs text-indigo-200/65">DayZ, Arma 3, and Rust. Optimized for high entity counts and simulation stability.</p>
              <a href="https://billing.afterdab.com/products/premium" className="btn-sm w-full bg-indigo-600 py-2 text-center text-white hover:bg-indigo-500 rounded">
                View Plans
              </a>
            </article>

            {/* Minecraft & Source */}
            <article className="flex flex-col rounded-2xl border border-indigo-500/20 bg-gray-900/50 p-5 transition-all hover:border-indigo-500/50">
              <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Minecraft & Source</h3>
              <p className="mb-6 flex-grow text-xs text-indigo-200/65">Paper, Purpur, and GMod. High-clock speeds for peak TPS and low-latency feedback.</p>
              <a href="https://billing.afterdab.com/products/minecraft-source" className="btn-sm w-full bg-indigo-600 py-2 text-center text-white hover:bg-indigo-500 rounded">
                View Plans
              </a>
            </article>

            {/* Casual & Co-op */}
            <article className="flex flex-col rounded-2xl border border-indigo-500/20 bg-gray-900/50 p-5 transition-all hover:border-indigo-500/50">
              <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Casual & Co-op</h3>
              <p className="mb-6 flex-grow text-xs text-indigo-200/65">Valheim, Terraria, and more. Reliable performance for you and your friends.</p>
              <a href="https://billing.afterdab.com/products/casual-coop" className="btn-sm w-full bg-indigo-600 py-2 text-center text-white hover:bg-indigo-500 rounded">
                View Plans
              </a>
            </article>

            {/* Dev Hosting */}
            <article className="flex flex-col rounded-2xl border border-indigo-500/20 bg-gray-900/50 p-5 transition-all hover:border-indigo-500/50">
              <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-200">Dev Hosting</h3>
              <p className="mb-6 flex-grow text-xs text-indigo-200/65">Python, Node.js, and Rust scripts. Isolated environments for bots and APIs.</p>
              <a href="https://billing.afterdab.com/products/dev-hosting" className="btn-sm w-full bg-indigo-600 py-2 text-center text-white hover:bg-indigo-500 rounded">
                View Plans
              </a>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}