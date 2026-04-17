export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-500),var(--color-gray-50),var(--color-indigo-200),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Performance-Locked Game & Dev Hosting
            </h1>
            <div className="mx-auto max-w-3xl">
<p
  className="mb-8 text-xl text-indigo-200/65"
  data-aos="fade-up"
  data-aos-delay={200}
>
  Deploy on dedicated Ryzen 9700X cores with DDR5 memory. From high-tick DayZ worlds to automated Python backends, we provide the raw clock speeds your infrastructure demands.
  <br />
  <br />
  All hosted on servers located at the OVH Beauharnois Data Center in Montreal, QC.
</p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 sm:mb-0 sm:w-auto"
                    href="https://billing.afterdab.com/products/game-servers"
                  >
                    <span className="relative inline-flex items-center">
                      Deploy Now
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        {'- >'}
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn w-full bg-gray-800 text-gray-200 hover:bg-gray-700 sm:ml-4 sm:w-auto shadow-sm"
                    href="https://discord.gg/YyBrNQaMEa"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}