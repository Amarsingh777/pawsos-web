export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            About AnimalSathi 🐾
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AnimalSathi (PawSOS) is a technology-driven initiative to help
            injured, abandoned, and distressed animals receive immediate help
            through community-powered rescue.
          </p>
        </section>

        {/* MISSION */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            🌱 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple yet powerful — to ensure that no animal suffers
            due to lack of timely help. By connecting citizens, volunteers,
            rescuers, and NGOs on a single platform, AnimalSathi enables rapid
            reporting, real-time location tracking, and transparent rescue
            updates.
          </p>
        </section>

        {/* PROBLEM */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            🚨 The Problem We Solve
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>No centralized system to report animal emergencies</li>
            <li>Delayed rescue due to lack of location visibility</li>
            <li>NGOs overwhelmed with unstructured information</li>
            <li>No transparency in rescue outcomes</li>
          </ul>
        </section>

        {/* SOLUTION */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            💡 Our Solution
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>One-tap SOS reporting with live location</li>
            <li>Real-time alerts for nearby volunteers</li>
            <li>Role-based access for NGOs and rescuers</li>
            <li>Verified rescue updates with before/after evidence</li>
          </ul>
        </section>

        {/* IMPACT */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            📊 Our Vision & Impact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            AnimalSathi aims to become India’s largest animal emergency response
            network. With city-wise expansion, NGO partnerships, and data-driven
            insights, we envision saving thousands of lives every year while
            empowering communities to act with compassion.
          </p>
        </section>

        {/* FOOTER CTA */}
        <section className="text-center mt-20">
          <p className="text-lg font-medium mb-4">
            Together, we can be the voice for those who cannot speak.
          </p>
          <p className="text-orange-600 font-semibold">
            #BeAnAnimalSathi
          </p>
        </section>

      </div>
    </main>
  );
}
