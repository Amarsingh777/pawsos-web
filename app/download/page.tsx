export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Download AnimalSathi 🐾
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            India’s community-powered animal emergency response platform.
            Report SOS, connect with volunteers, and save lives — instantly.
          </p>
        </section>

        {/* APP PREVIEW + CONTENT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why AnimalSathi?
            </h2>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>🚨 One-tap SOS reporting for injured animals</li>
              <li>📍 Live location sharing for faster rescue</li>
              <li>🤝 Nearby volunteers & NGO coordination</li>
              <li>📸 Verified rescue updates with transparency</li>
              <li>📊 Real impact tracking across cities</li>
            </ul>

            <div className="mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition"
              >
                📲 Get it on Play Store
              </a>

              <p className="text-sm text-gray-500 mt-3">
                Android • Free • Community-driven
              </p>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[520px] border-8 border-gray-900 rounded-3xl shadow-lg flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-sm">
                App Preview
                <br />
                (Mobile Screenshots)
              </span>
            </div>
          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <StepCard step="1" text="Spot an animal in distress" />
            <StepCard step="2" text="Send SOS with location & photo" />
            <StepCard step="3" text="Nearby volunteers get notified" />
            <StepCard step="4" text="Rescue & recovery updates shared" />
          </div>
        </section>

        {/* TRUST */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            AnimalSathi ensures every rescue is traceable, verified, and
            documented. NGOs, volunteers, and users operate in a structured
            ecosystem — building credibility, accountability, and impact.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="text-center mt-24">
          <p className="text-lg font-medium mb-4">
            One app. One tap. One life saved.
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            Be the reason an animal survives today.
          </p>
        </section>

      </div>
    </main>
  );
}

/* ---------- SMALL COMPONENT ---------- */

function StepCard({
  step,
  text,
}: {
  step: string;
  text: string;
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="text-3xl font-bold text-orange-600 mb-2">
        {step}
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
