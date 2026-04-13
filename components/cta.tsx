export default function Cta() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-10 shadow-2xl md:px-12 md:py-16">
          <div className="relative z-20 flex flex-col items-center text-center">
            <h2 className="font-nacelle text-3xl font-bold text-white mb-4">Building something great?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl">
              Host your Discord bots, APIs, and scripts on the same 9700X hardware as our premium game servers. Isolated resources, full SFTP access, and 5.5GHz clock speeds.
            </p>
            <a className="btn bg-white text-indigo-600 hover:bg-gray-100" href="https://billing.afterdab.com/products/dev-hosting">
              Deploy Dev Instance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}