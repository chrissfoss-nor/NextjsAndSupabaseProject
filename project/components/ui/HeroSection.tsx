import Link from "next/link";

export function HeroSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Build and share your ideas with{" "}
            <span className="text-blue-600">MinApp</span>
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            A modern platform for sharing your thoughts and connecting with
            others. Join thousands of developers and creators building the
            future together.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link
              href="/register"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-medium border border-transparent shadow-sm transition-colors"
            >
              Sign up for free
            </Link>
            <Link
              href="/login"
              className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md text-base font-medium border border-gray-300 shadow-sm transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>

        <FeaturesGrid />
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const features = [
    {
      icon: "📝",
      title: "Create posts",
      description:
        "Write and share your thoughts with a clean, distraction-free editor.",
    },
    {
      icon: "👥",
      title: "Build community",
      description:
        "Connect with like-minded people and grow your network organically.",
    },
    {
      icon: "🔒",
      title: "Stay secure",
      description:
        "Your data is protected with industry-standard security practices.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
        >
          <div className="text-2xl mb-3">{feature.icon}</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
