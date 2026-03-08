export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Investor Vision 🚀
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            AnimalSathi (PawSOS) is building India’s first structured,
            tech-enabled animal emergency response ecosystem —
            scalable, transparent, and impact-driven.
          </p>
        </section>

        {/* PROBLEM */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            ❌ The Problem
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>No centralized platform for animal emergency reporting</li>
            <li>NGOs depend on calls, WhatsApp & incomplete information</li>
            <li>Delayed rescues due to lack of real-time coordination</li>
            <li>No data, accountability, or measurable impact</li>
          </ul>
        </section>

        {/* SOLUTION */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            ✅ Our Solution
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            AnimalSathi connects citizens, volunteers, NGOs, and administrators
            on one platform. SOS alerts include live location, images, urgency,
            and verified rescue updates — creating a fast, accountable,
            and scalable rescue workflow.
          </p>
        </section>

        {/* MARKET OPPORTUNITY */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            📈 Market Opportunity
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            India has over <strong>30+ million stray animals</strong> and
            thousands of NGOs operating without technology support.
            Government bodies, CSR initiatives, animal welfare organizations,
            and donors actively seek transparent, data-driven platforms.
          </p>
        </section>

        {/* BUSINESS MODEL */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            💼 Sustainability & Revenue Model
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>NGO subscriptions for advanced rescue management</li>
            <li>CSR partnerships & sponsored rescue campaigns</li>
            <li>Donations with transparent utilization tracking</li>
            <li>City & government dashboard licensing</li>
            <li>Premium volunteer & training modules (future)</li>
          </ul>
        </section>

        {/* ROADMAP */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">
            🛣️ Product Roadmap
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RoadmapCard
              title="Phase 1"
              points={[
                "Public SOS reporting",
                "Volunteer onboarding",
                "Basic NGO workflows",
                "Live rescue tracking",
              ]}
            />
            <RoadmapCard
              title="Phase 2"
              points={[
                "NGO dashboards",
                "City-wise analytics",
                "Donor transparency tools",
                "Admin moderation system",
              ]}
            />
            <RoadmapCard
              title="Phase 3"
              points={[
                "AI-based urgency detection",
                "Government partnerships",
                "Pan-India expansion",
                "International scaling",
              ]}
            />
          </div>
        </section>

        {/* IMPACT */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            🌍 Impact Vision
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl">
            AnimalSathi aims to save thousands of animal lives annually while
            creating the largest verified animal welfare dataset in India.
            Our goal is to empower communities, enable NGOs, and support
            policymakers with real data.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-24">
          <p className="text-lg font-medium mb-4">
            We’re building infrastructure for compassion.
          </p>
          <p className="text-orange-600 font-semibold text-lg">
            Let’s create impact at scale — together.
          </p>
        </section>

      </div>
    </main>
  );
}

/* ---------- COMPONENT ---------- */

function RoadmapCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-orange-600 mb-4">
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
