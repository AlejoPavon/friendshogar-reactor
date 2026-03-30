export default function CatalogoLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar Skeleton */}
      <div className="h-16 bg-inverse-surface/80 backdrop-blur-xl" />

      {/* Hero Skeleton */}
      <section className="bg-inverse-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="h-3 w-32 bg-white/10 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-14 w-72 bg-white/10 rounded-2xl mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 max-w-full bg-white/5 rounded-xl mx-auto animate-pulse" />
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Search Skeleton */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="h-14 bg-white border border-gray-100 rounded-2xl animate-pulse" />
          </div>

          {/* Tabs Skeleton */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[80, 100, 90, 95, 85, 120].map((w, i) => (
              <div
                key={i}
                className="h-10 rounded-full bg-gray-100 animate-pulse"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
                <div className="p-6 space-y-4">
                  <div className="h-5 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-gray-50 rounded-lg animate-pulse" />
                  <div className="h-4 w-2/3 bg-gray-50 rounded-lg animate-pulse" />
                  <div className="pt-4">
                    <div className="h-3 w-16 bg-gray-100 rounded animate-pulse mb-2" />
                    <div className="h-8 w-28 bg-gray-100 rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
