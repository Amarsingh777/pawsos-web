export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            How AnimalSathi Works 🐾
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AnimalSathi (PawSOS) connects citizens, volunteers, and NGOs to ensure
            injured and distressed animals receive help as quickly as possible.
          </p>
        </section>

        {/* STEP 1 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="text-3xl font-bold text-orange-600">1</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Report an Animal Emergency
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any citizen can instantly report an injured, abandoned, or
                distressed animal using the AnimalSathi mobile app. The report
                includes live GPS location, photos, and emergency details.
              </p>
            </div>
          </div>
        </section>

        {/* STEP 2 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="text-3xl font-bold text-orange-600">2</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Nearby Volunteers Get Alerts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Verified volunteers near the incident location receive real-time
                alerts. They can view details on the map and quickly respond if
                they are available.
              </p>
            </div>
          </div>
        </section>

        {/* STEP 3 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="text-3xl font-bold text-orange-600">3</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                NGOs & Rescuers Take Action
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Partner NGOs and rescue teams receive structured, verified
                information. This reduces confusion, improves coordination, and
                speeds up rescue operations.
              </p>
            </div>
          </div>
        </section>

        {/* STEP 4 */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="text-3xl font-bold text-orange-600">4</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Rescue Updates & Transparency
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Once resolved, volunteers or NGOs upload rescue updates with
                before-and-after images. This ensures transparency and builds
                trust within the community.
              </p>
            </div>
          </div>
        </section>

        {/* STEP 5 */}
        <section className="mb-20">
          <div className="flex items-start gap-6">
            <div className="text-3xl font-bold text-orange-600">5</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Impact Tracking & Growth
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AnimalSathi tracks rescues, response times, city-wise growth, and
                volunteer participation. This data helps improve operations and
                demonstrates real-world impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-24">
          <p className="text-lg font-medium mb-4">
            A single report can save a life.
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            Join AnimalSathi. Be the voice for animals.
          </p>
        </section>

      </div>
    </main>
  );
}
