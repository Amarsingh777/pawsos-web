export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-2">
            🐾 AnimalSathi
          </h3>
          <p className="leading-relaxed">
            A community-powered platform enabling fast, transparent,
            and compassionate animal rescue across India.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-600">Home</a></li>
            <li><a href="/about" className="hover:text-orange-600">About</a></li>
            <li><a href="/how-it-works" className="hover:text-orange-600">How It Works</a></li>
            <li><a href="/impact" className="hover:text-orange-600">Impact</a></li>
          </ul>
        </div>

        {/* JOIN */}
        <div>
          <h4 className="font-semibold mb-3">Join Us</h4>
          <ul className="space-y-2">
            <li><a href="/onboarding" className="hover:text-orange-600">Volunteer</a></li>
            <li><a href="/onboarding" className="hover:text-orange-600">NGO Partner</a></li>
            <li><a href="/download" className="hover:text-orange-600">Download App</a></li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <p>Email: animalsathi.app@gmail.com</p>
          <p className="mt-2 text-orange-600 font-medium">
            #BeAnAnimalSathi
          </p>
          <a href="/investors" className="block mt-2 hover:text-orange-600">
            Investors
          </a>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} AnimalSathi. All rights reserved.
      </div>
    </footer>
  );
}
