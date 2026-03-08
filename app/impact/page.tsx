export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Our Impact 🐾
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            AnimalSathi is building a transparent, data-driven animal rescue
            ecosystem. Every SOS, rescue, and volunteer action contributes
            to measurable real-world impact.
          </p>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <StatCard value="1,200+" label="SOS Alerts Raised" />
          <StatCard value="870+" label="Animals Rescued" />
          <StatCard value="18" label="Cities Covered" />
          <StatCard value="450+" label="Active Volunteers" />
        </section>

        {/* CITY REACH */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">
            📍 City-wise Reach
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            {[
              "Delhi NCR",
              "Mumbai",
              "Bengaluru",
              "Pune",
              "Jaipur",
              "Chandigarh",
              "Lucknow",
              "More coming soon…",
            ].map((city, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 text-center bg-gray-50"
              >
                {city}
              </div>
            ))}
          </div>
        </section>

        {/* NGO + VOLUNTEERS */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">
            🤝 Community Strength
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="NGO Partners"
              text="AnimalSathi collaborates with verified NGOs to ensure
              professional rescue, treatment, and rehabilitation with
              full transparency."
            />
            <InfoCard
              title="Volunteer Network"
              text="Our volunteers act as first responders, location scouts,
              and rescue coordinators — making fast response possible."
            />
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">
            🔍 Transparency & Trust
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-4xl">
            <li>Before & after rescue photo verification</li>
            <li>Status tracking for every SOS case</li>
            <li>Role-based actions (user, volunteer, NGO)</li>
            <li>Data-driven reporting for partners & donors</li>
          </ul>
        </section>

        {/* FUTURE IMPACT */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-6">
            🌱 Scaling Impact
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Our long-term vision is to create India’s largest verified
            animal emergency dataset — enabling smarter rescues,
            better policies, and nationwide collaboration between
            citizens, NGOs, and authorities.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <p className="text-lg font-medium mb-3">
            Impact is not just numbers.
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            It’s every life saved, together.
          </p>
        </section>

      </div>
    </main>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
      <div className="text-3xl font-bold text-orange-600 mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-700">
        {label}
      </div>
    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border rounded-lg p-6 bg-gray-50">
      <h3 className="text-lg font-semibold mb-3 text-orange-600">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
