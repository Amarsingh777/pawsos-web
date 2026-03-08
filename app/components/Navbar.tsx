import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-orange-600">
          🐾 AnimalSathi
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-orange-600">
            Home
          </Link>

          <Link href="/how-it-works" className="hover:text-orange-600">
            How It Works
          </Link>

          <Link href="/impact" className="hover:text-orange-600">
            Impact
          </Link>

          {/* JOIN US DROPDOWN */}
          {/* JOIN US DROPDOWN */}
<div className="relative">
  <div className="group inline-block">

    {/* Trigger */}
    <span className="cursor-pointer hover:text-orange-600">
      Join Us
    </span>

    {/* Dropdown */}
    <div
      className="
        absolute left-0 top-full
        mt-0
        hidden group-hover:block
        bg-white border rounded-lg shadow-md
        w-44
        z-50
        pointer-events-auto
      "
    >
      <Link
        href="/onboarding"
        className="block px-4 py-2 hover:bg-orange-50"
      >
        Volunteer
      </Link>

      <Link
        href="/onboarding"
        className="block px-4 py-2 hover:bg-orange-50"
      >
        NGO Partner
      </Link>
    </div>
  </div>
</div>




          <Link href="/investors" className="hover:text-orange-600">
            Investors
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/download"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition"
        >
          Get the App
        </Link>
      </div>
    </header>
  );
}
