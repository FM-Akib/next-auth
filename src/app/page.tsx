import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-emerald-400 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in">
          Welcome to NextAuth Showcase
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
          Experience seamless authentication with our modern login solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-300 mb-3">
              GitHub Login
            </h3>
            <p className="text-gray-200">
              Sign in effortlessly using your GitHub account. Secure and fast
              OAuth integration.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-300 mb-3">
              Google Login
            </h3>
            <p className="text-gray-200">
              Use your Google account for a quick and reliable login experience.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-yellow-300 mb-3">
              Credentials Login
            </h3>
            <p className="text-gray-200">
              Securely sign in with email and password, backed by our robust
              database authentication system.
            </p>
          </div>
        </div>

        <div className="animate-pulse">
          <Link
            href="/signin"
            className="inline-block bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 text-lg"
          >
            Get Started - Sign In Now
          </Link>
        </div>

        <p className="mt-8 text-gray-300 text-sm">
          Powered by NextAuth.js | Secure Database-Backed Authentication
        </p>
      </div>
    </div>
  );
}
