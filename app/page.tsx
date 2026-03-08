import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FCF2DC] text-gray-800">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🐾 PawSOS / AnimalSathi
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Connecting people, volunteers, and NGOs to save animals in emergency situations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5722] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            📲 Get the App
          </a>

          <Link
            href="/volunteer"
            className="border border-[#FF5722] text-[#FF5722] px-6 py-3 rounded-xl font-semibold hover:bg-[#FF5722] hover:text-white transition"
          >
            🤝 Become a Volunteer
          </Link>
        </div>
      </section>

      {/* WHAT IS PAWSOS */}
      <section className="px-6 py-14 bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">
          What is PawSOS?
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600">
          PawSOS is a real-time animal rescue platform where anyone can report animal emergencies,
          nearby volunteers receive alerts, and NGOs can take action faster.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1619983081563-430f636027f1"
              alt="Report SOS"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">🚨 Report SOS</h3>
            <p className="text-gray-600 text-sm">
              Anyone can report an injured or distressed animal with location & photos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Nearby alerts"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">📍 Nearby Alerts</h3>
            <p className="text-gray-600 text-sm">
              Volunteers nearby instantly receive alerts based on location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="Rescue"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">🤝 Rescue & Help</h3>
            <p className="text-gray-600 text-sm">
              Volunteers and NGOs collaborate to rescue and provide support.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Impact
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 text-center">
          <div className="bg-[#FCF2DC] px-8 py-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-[#FF5722]">100+</p>
            <p className="text-gray-600">Animals Helped</p>
          </div>

          <div className="bg-[#FCF2DC] px-8 py-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-[#FF5722]">5+</p>
            <p className="text-gray-600">Cities Covered</p>
          </div>

          <div className="bg-[#FCF2DC] px-8 py-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-[#FF5722]">50+</p>
            <p className="text-gray-600">Active Volunteers</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Join the Movement 🐶❤️
        </h2>

        <p className="text-gray-600 mb-6">
          Together, we can make animal rescue faster, smarter, and more humane.
        </p>

        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF5722] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Download PawSOS App
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} PawSOS / AnimalSathi. All rights reserved.
      </footer>
    </main>
  );
}