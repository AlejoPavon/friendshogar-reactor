export default function ProductLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar Skeleton */}
      <div className="h-16 bg-inverse-surface/80 backdrop-blur-xl" />

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 flex-grow w-full">
        {/* Back Link Skeleton */}
        <div className="h-4 w-40 bg-gray-100 rounded-lg animate-pulse mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Skeleton */}
          <div className="aspect-square bg-gray-100 rounded-3xl animate-pulse" />

          {/* Info Skeleton */}
          <div className="flex flex-col space-y-6">
            {/* Category */}
            <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />

            {/* Title */}
            <div className="space-y-3">
              <div className="h-10 w-4/5 bg-gray-100 rounded-xl animate-pulse" />
              <div className="h-10 w-3/5 bg-gray-100 rounded-xl animate-pulse" />
            </div>

            {/* Description */}
            <div className="space-y-2 pt-4">
              <div className="h-5 w-full bg-gray-50 rounded-lg animate-pulse" />
              <div className="h-5 w-4/5 bg-gray-50 rounded-lg animate-pulse" />
              <div className="h-5 w-3/5 bg-gray-50 rounded-lg animate-pulse" />
            </div>

            {/* Tags */}
            <div className="flex gap-2 pt-4">
              {[60, 80, 50, 70].map((w, i) => (
                <div
                  key={i}
                  className="h-7 rounded-full bg-gray-100 animate-pulse"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>

            {/* Size Selector Skeleton */}
            <div className="mt-auto space-y-6 pt-8">
              <div>
                <div className="h-3 w-32 bg-gray-100 rounded animate-pulse mb-2" />
                <div className="h-14 bg-gray-100 rounded-xl animate-pulse" />
              </div>

              {/* Price */}
              <div>
                <div className="h-3 w-24 bg-gray-100 rounded animate-pulse mb-2" />
                <div className="h-10 w-36 bg-gray-100 rounded-xl animate-pulse" />
              </div>

              {/* CTA Button */}
              <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
