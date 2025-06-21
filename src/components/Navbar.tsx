import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import Logout from "@/components/Logout";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-yellow-300">
              NextAuth App
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <div className="relative group">
                {/* User Profile Dropdown */}
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Image
                    src={session.user.image || "/user.png"}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="hidden md:block text-sm font-medium">
                    {session.user.name || "User"}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-emerald-800 rounded-md shadow-lg py-1 hidden group-hover:block z-10">
                  <div className="px-4 py-2 text-sm text-white border-b">
                    <p className="font-medium">{session.user.name}</p>
                    <p className="text-xs text-white">{session.user.email}</p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                  >
                    Dashboard
                  </Link>
                  <div className="block px-4 py-2 text-sm text-white ">
                    <Logout />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  href="/signin"
                  className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
