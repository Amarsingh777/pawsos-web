"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [user,setUser] = useState<User | null>(null);
  const [loading,setLoading] = useState(true);

  const router = useRouter();

  useEffect(()=>{

    const unsub = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    });

    return ()=>unsub();

  },[]);


  const handleLogout = async () => {

    await signOut(auth);

    setUser(null);

    router.refresh();

  };

  return (

    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-orange-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="text-xl font-bold text-orange-600 hover:scale-105 transition"
        >
          🐾 AnimalSathi
        </Link>


        {/* NAV LINKS */}

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>

          <Link href="/how-it-works" className="hover:text-orange-600 transition">
            How It Works
          </Link>

          <Link href="/impact" className="hover:text-orange-600 transition">
            Impact
          </Link>


          {/* JOIN US DROPDOWN */}

          <div className="relative group">

            {/* Trigger */}

            <span className="cursor-pointer hover:text-orange-600 py-2 transition">
              Join Us
            </span>

            {/* Dropdown */}

            <div
              className="
              absolute left-0 top-full
              pt-2
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              "
            >
              <div className="bg-white border border-orange-100 rounded-xl shadow-lg w-44 py-2">

                <Link
                  href={user ? "/volunteer-form" : "/auth"}
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


          <Link href="/investors" className="hover:text-orange-600 transition">
            Investors
          </Link>

        </nav>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-3">

          {!loading && user ? (

            /* PROFILE MENU */

            /* PROFILE MENU */
            <div className="relative group">

              {/* Profile Image (Trigger) */}
              <img
                src={user.photoURL || "https://ui-avatars.com/api/?name=User&background=fff4e6&color=ea580c"}
                alt="User Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent group-hover:border-orange-200 transition-colors object-cover"
              />

              {/* Dropdown Container */}
              <div
                className="
                absolute right-0 top-full
                pt-3 /* Creates an invisible bridge so hover doesn't drop */
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                z-50
                "
              >
                {/* Dropdown Card */}
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl w-56 flex flex-col overflow-hidden">
                  
                  {/* Header: User Info */}
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {user.displayName || "Animal Lover"}
                    </p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>

                  {/* Menu Links */}
                  {/* Menu Links */}
                  <div className="py-2 flex flex-col">
                    <Link
                      href="/dashboard?tab=profile"
                      className="px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">👤</span> My Profile
                    </Link>

                    <Link
                      href="/dashboard?tab=reports"
                      className="px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">📋</span> My SOS Reports
                    </Link>

                    <Link
                      href="/dashboard?tab=settings"
                      className="px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">⚙️</span> Settings
                    </Link>
                  </div>

                  {/* Footer: Logout */}
                  <div className="py-2 border-t border-slate-100 bg-white">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">🚪</span> Sign Out
                    </button>
                  </div>

                </div>
              </div>
            </div>

          ) : (

            /* SIGN IN BUTTON */

            <Link
              href="/auth"
              className="border border-orange-400 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-50 transition"
            >
              Sign In
            </Link>

          )}


          {/* GET APP BUTTON */}

          <Link
            href="/download"
            className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all"
          >
            Get the App
          </Link>

        </div>

      </div>

    </header>

  );
}