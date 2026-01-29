import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold text-gray-900">MinApp</h1>
            <div className="hidden md:flex space-x-4">
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            </div>
            <div>
                <Link
                    href="/games"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                    Games
                </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium border border-transparent shadow-sm transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 shadow-sm transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
