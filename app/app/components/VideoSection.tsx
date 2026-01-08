import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden group cursor-pointer h-[350px] sm:h-[450px] md:h-[600px]">
          {/* Background Image */}
          <Image
            alt="Person shopping for fresh produce in a market"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/app-images/shopping-image.webp"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Live Badge */}
          <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm sm:text-base font-medium tracking-wide">
              Live Scanner Demo
            </span>
          </div>

          {/* Duration */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white/80 font-mono text-xs sm:text-sm">
            00:00 / 01:45
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons-round text-white text-3xl sm:text-4xl md:text-5xl ml-1 sm:ml-2">
                play_arrow
              </span>
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 max-w-lg">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-display font-medium mb-1 sm:mb-2">
              The Grocery Store Decoder
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              A film offering a raw glimpse into how clarity changes consumption
              habits forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
