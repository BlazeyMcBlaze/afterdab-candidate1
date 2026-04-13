import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function LegalPage() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-gray-300 py-20">
      {/* Background Aesthetic */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 opacity-50" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Legal Information
          </h1>
          <p className="mt-4 text-gray-400">Afterdab Game and Server Hosting | New Brunswick, Canada</p>
        </div>

        <div className="space-y-16">
          {/* Terms of Service Section */}
          <section id="terms" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-gray-100 border-b border-gray-800 pb-2 mb-6">Terms of Service</h2>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
              <p>This agreement is between you (the "Client") and <strong>Afterdab Game and Server Hosting</strong> (the "Company"). By purchasing or using any service, you agree to these terms.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Resource Abuse:</strong> No crypto-mining, DDoS stressing, or intentional CPU pegging for non-gaming tasks.</li>
                <li><strong>Illegal Content:</strong> No hosting of copyrighted material or content violating Canadian law.</li>
                <li><strong>Network Integrity:</strong> No utilizing Company services for network attacks or malicious software distribution.</li>
                <li><strong>Payments:</strong> All services are pre-paid. Chargebacks result in immediate account termination.</li>
              </ul>
            </div>
          </section>

          {/* Refund Policy Section */}
          <section id="refunds" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-gray-100 border-b border-gray-800 pb-2 mb-6">Refund Policy</h2>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
              <p>We offer a <strong>48-Hour Satisfaction Guarantee</strong>. If the hardware does not meet promised technical specs, a full refund is available within the first 48 hours.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>No refunds after the 48-hour window.</li>
                <li>No refunds for "buyer's remorse" or players leaving.</li>
                <li>Dedicated IPs and account credits are non-refundable.</li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section id="privacy" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-gray-100 border-b border-gray-800 pb-2 mb-6">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
              <p>We respect your privacy. We collect only your name and email for account management and billing.</p>
              <p><strong>Payments:</strong> We do not store credit card data. All payments are processed securely via Stripe.</p>
              <p><strong>Data:</strong> We do not sell your personal data to third parties. We comply with Canadian data privacy standards.</p>
            </div>
          </section>
        </div>

        {/* Return Button */}
        <div className="mt-20 text-center">
          <a className="btn bg-gray-800 text-gray-300 hover:bg-gray-700 px-6 py-2 rounded-lg transition" href="https://billing.afterdab.com">
            Return to Billing
          </a>
        </div>
      </div>
    </section>
  );
}