import Image from "next/image";

export default function FeatureCards() {
  return (
    <section className="pt-4 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px]">
          {/* Smart Pantry Card */}
          <SmartPantryCard />

          {/* Daily Digest Card */}
          <DailyDigestCard />

          {/* Comparison Tool Card */}
          <ComparisonToolCard />
        </div>
      </div>
    </section>
  );
}

function SmartPantryCard() {
  return (
    <div className="iso-card bg-gray-200 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 min-h-[350px] sm:min-h-[400px] flex flex-col justify-between relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#2E7D32]/10 rounded-full blur-3xl -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
          <span className="text-gray-600 font-medium text-sm">
            Smart Pantry
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display text-gray-900 mb-4">
          Inventory your health.
        </h3>
      </div>

      {/* UI Preview */}
      <div className="relative z-10 flex justify-center mt-6 sm:mt-8">
        <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-[180px] sm:max-w-[200px]">
          <div className="space-y-3">
            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
            <div className="flex gap-2 mt-4">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-green-100"></div>
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-orange-100"></div>
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-blue-100"></div>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-white text-gray-900 px-6 py-2 rounded-full w-max text-sm font-medium mt-6 sm:mt-8 shadow hover:shadow-lg transition-all">
        Explore
      </button>
    </div>
  );
}

function DailyDigestCard() {
  return (
    <div className="iso-card bg-[#262626] rounded-2xl sm:rounded-[2rem] p-0 min-h-[350px] sm:min-h-[400px] relative overflow-hidden">
      {/* Background Image */}
      <Image
        alt="Healthy food preparation"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/app-images/food-preparation.webp"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

      {/* Badge */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 flex items-center gap-2 z-10">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        <span className="text-white font-medium text-sm">Daily Digest</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-10">
        <h3 className="text-2xl sm:text-3xl font-display text-white mb-2 leading-tight">
          Your daily food insights.
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
          Personalized reports based on what you scanned and consumed today.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-100 transition-all">
          View Demo
        </button>
      </div>
    </div>
  );
}

function ComparisonToolCard() {
  return (
    <div className="iso-card bg-[#2E7D32] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 min-h-[350px] sm:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="text-green-100 font-medium text-sm">
            Comparison Tool
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display text-white mb-4">
          This vs. That
        </h3>
        <p className="text-green-100/80 text-sm">
          Can&apos;t decide? Compare two products side-by-side on 50+ metrics
          instantly.
        </p>
      </div>

      {/* Comparison UI */}
      <div className="flex items-end justify-between mt-6 sm:mt-8 bg-black/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
        <div className="text-left">
          <p className="text-[10px] sm:text-xs text-green-200 uppercase tracking-widest mb-1">
            Product A
          </p>
          <span className="text-3xl sm:text-4xl font-display">92</span>
          <span className="text-xs sm:text-sm text-green-200">/100</span>
        </div>
        <div className="h-10 sm:h-12 w-[1px] bg-white/20"></div>
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-green-200 uppercase tracking-widest mb-1">
            Product B
          </p>
          <span className="text-3xl sm:text-4xl font-display text-green-200">
            64
          </span>
          <span className="text-xs sm:text-sm text-green-200">/100</span>
        </div>
      </div>

      <button className="bg-white text-[#2E7D32] px-6 py-2 rounded-full w-max text-sm font-medium mt-6 sm:mt-8 shadow hover:bg-gray-50 transition-all">
        Compare Now
      </button>
    </div>
  );
}
