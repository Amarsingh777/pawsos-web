export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            NGO & Volunteer Onboarding 🤝
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AnimalSathi brings together compassionate individuals and
            organizations to respond faster, smarter, and together during
            animal emergencies.
          </p>
        </section>

        {/* TWO COLUMNS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* VOLUNTEERS */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-4">
              🐾 Become a Volunteer
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Volunteers are the heart of AnimalSathi. Whether you can rescue,
              provide first aid, or help with coordination, your presence can
              save lives.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Receive real-time SOS alerts near you</li>
              <li>Respond to emergencies based on availability</li>
              <li>Upload rescue updates & after-care photos</li>
              <li>Earn verified volunteer certificates</li>
            </ul>

            <div className="text-sm text-gray-500 mb-6">
              ✔ Background verification required  
              <br />
              ✔ Role-based access enabled
            </div>

            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Join as Volunteer
            </button>
          </div>

          {/* NGOS */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-4">
              🏥 Partner as an NGO
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              NGOs gain access to a structured, location-based emergency feed
              that improves rescue coordination and transparency.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Centralized SOS alerts dashboard</li>
              <li>Assign volunteers to rescue cases</li>
              <li>Track rescue progress & outcomes</li>
              <li>Build credibility with verified impact</li>
            </ul>

            <div className="text-sm text-gray-500 mb-6">
              ✔ NGO verification required  
              <br />
              ✔ Admin-level access provided
            </div>

            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Partner with Us
            </button>
          </div>

        </section>

        {/* PROCESS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            How Onboarding Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <StepCard step="1" text="Apply through the platform" />
            <StepCard step="2" text="Verification & approval" />
            <StepCard step="3" text="Access role-based dashboard" />
            <StepCard step="4" text="Start saving lives" />
          </div>
        </section>

        {/* TRUST */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            Trust & Transparency
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every volunteer and NGO on AnimalSathi goes through a verification
            process. Rescue actions are logged, time-stamped, and supported with
            photographic evidence — ensuring accountability and impact tracking.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-24">
          <p className="text-lg font-medium mb-4">
            Compassion becomes powerful when it’s organized.
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            Together, let’s build India’s strongest animal rescue network.
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
