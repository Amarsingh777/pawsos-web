export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white text-gray-800 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 mb-6 tracking-tight">
            About AnimalSathi 🐾
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            AnimalSathi (PawSOS) is a technology-driven initiative to help
            injured, abandoned, and distressed animals receive immediate help
            through community-powered rescue.
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="space-y-12">

          {/* MISSION */}
          <section className="group bg-white p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🌱 Our Mission
            </h2>

            <p className="text-gray-700 leading-relaxed text-[17px]">
              Our mission is simple yet powerful — to ensure that no animal
              suffers due to lack of timely help. By connecting citizens,
              volunteers, rescuers, and NGOs on a single platform, AnimalSathi
              enables rapid reporting, real-time location tracking, and
              transparent rescue updates.
            </p>
          </section>

          {/* PROBLEM */}
          <section className="group bg-white p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🚨 The Problem We Solve
            </h2>

            <ul className="text-gray-700 space-y-3 text-[17px] pl-6 list-disc marker:text-orange-500">
              <li>No centralized system to report animal emergencies</li>
              <li>Delayed rescue due to lack of location visibility</li>
              <li>NGOs overwhelmed with unstructured information</li>
              <li>No transparency in rescue outcomes</li>
            </ul>
          </section>

          {/* SOLUTION */}
          <section className="group bg-white p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              💡 Our Solution
            </h2>

            <ul className="text-gray-700 space-y-3 text-[17px] pl-6 list-disc marker:text-orange-500">
              <li>One-tap SOS reporting with live location</li>
              <li>Real-time alerts for nearby volunteers</li>
              <li>Role-based access for NGOs and rescuers</li>
              <li>Verified rescue updates with before/after evidence</li>
            </ul>
          </section>

          {/* IMPACT */}
          <section className="group bg-white p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📊 Our Vision & Impact
            </h2>

            <p className="text-gray-700 leading-relaxed text-[17px]">
              AnimalSathi aims to become India’s largest animal emergency
              response network. With city-wise expansion, NGO partnerships,
              and data-driven insights, we envision saving thousands of lives
              every year while empowering communities to act with compassion.
            </p>
          </section>

        </div>

        {/* CTA */}
        <section className="text-center mt-24 pt-12 border-t border-orange-100">
          <p className="text-xl font-semibold mb-3 text-gray-800">
            Together, we can be the voice for those who cannot speak.
          </p>

          <p className="text-orange-600 font-bold text-xl tracking-wide">
            #BeAnAnimalSathi
          </p>
        </section>

      </div>
    </main>
  );
}