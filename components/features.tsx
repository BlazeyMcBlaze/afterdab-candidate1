import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative" id="pricing">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                The Hardware
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Performance-Locked. Period.
            </h2>
            <p className="text-lg text-indigo-200/65">
              We don't oversell cores or use legacy hardware. Every Afterdab instance runs on a dedicated Ryzen 9700X with ultra-fast DDR5 memory.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">9700X Single-Core Power</h3>
              <p className="text-indigo-200/65">5.5GHz boost clocks ensure high-tick stability for DayZ, Rust, and Minecraft modpacks.</p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">DDR5 RAM Baseline</h3>
              <p className="text-indigo-200/65">Next-gen memory bandwidth reduces world-gen stutter and improves database response times.</p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">NVMe SSD Arrays</h3>
              <p className="text-indigo-200/65">Zero bottleneck storage. Large modpacks and heavy world data load in seconds, not minutes.</p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">OVH Game Anti-DDoS</h3>
              <p className="text-indigo-200/65">Stay online during attacks. We use OVH's specialized Game filtering to block malicious traffic at the edge.</p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Developer First</h3>
              <p className="text-indigo-200/65" id="free-tier">Full SFTP access, MySQL databases, and isolated environments for Python, Node, and Rust scripts.</p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Maritimes Peering</h3>
              <p className="text-indigo-200/65">Direct fiber backbone from Montreal ensures the lowest possible latency for Atlantic Canadian gamers.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}