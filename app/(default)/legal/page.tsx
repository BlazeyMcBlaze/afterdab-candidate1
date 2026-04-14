import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export const metadata = {
  title: "Legal | Afterdab Game and Server Hosting",
  description: "Terms of Service, Privacy Policy, Refund Policy, and Promotional Terms.",
};

export default function Legal() {
  return (
    <section className="relative overflow-hidden">
      {/* Background shape matching Hero/Cta */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h1 
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Legal & Policies
            </h1>
            <p className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Afterdab Game and Server Hosting — New Brunswick, Canada.
            </p>
          </div>

          {/* Content grid - Adjusted to 2x2 for the 4th section */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="400">
            
            {/* Terms of Service */}
            <div>
              <h2 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">Terms of Service</h2>
              <div className="text-sm text-gray-400 space-y-4">
                <p>By using <strong>Afterdab Game and Server Hosting</strong>, you agree to our Acceptable Use Policy. Resource abuse (crypto-mining/DDoS) results in immediate termination.</p>
                <p>Users must comply with all game-specific EULAs (Minecraft, DayZ, etc.).</p>
              </div>
            </div>

            {/* Refund Policy */}
            <div>
              <h2 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">Refund Policy</h2>
              <div className="text-sm text-gray-400 space-y-4">
                <p>We offer a <strong>48-hour satisfaction guarantee</strong>. If the hardware fails to meet our technical standards, a full refund is available.</p>
                <p>No refunds are issued for "buyer's remorse" or service cancellations after the 48-hour window.</p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">Privacy Policy</h2>
              <div className="text-sm text-gray-400 space-y-4">
                <p>We collect only essential account data (Name/Email). <strong>We do not store credit card information</strong>; all payments are handled by Stripe.</p>
                <p>Your data is never sold. We operate under New Brunswick, Canada jurisdiction.</p>
              </div>
            </div>

            {/* Promotional Offers & Coupons */}
            <div>
              <h2 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">Promotions & Coupons</h2>
              <div className="text-sm text-gray-400 space-y-4">
                <p>Discount codes (e.g., <strong>FIRSTDAB</strong>) are valid for new deployments only. Lifetime discounts apply to the recurring cost of the specific service at purchase; cancellation voids the discount.</p>
                <p>Introductory "step-down" offers (e.g., 50% off month one) are subject to manual verification and will be adjusted for subsequent billing cycles as advertised.</p>
                <p>Only one promotional code may be applied per service. Coupons cannot be stacked.</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA to return */}
          <div className="mt-16 border-t border-gray-800 pt-8">
             <a className="text-indigo-500 hover:text-indigo-400 transition-colors font-medium inline-flex items-center" href="https://billing.afterdab.com">
                Back to Billing <span className="ml-1">{'->'}</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}