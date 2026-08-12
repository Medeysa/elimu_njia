import { Search, ArrowRight } from "lucide-react"


function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07183D]">
      
      {/* Decorative red shape */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C62828]/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-4xl text-center">

          {/* Small label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-[#C62828]" />
            TCU Admission Explorer
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find the right degree
            <span className="block text-[#E53935]">
              with your A-Level results
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore university programmes across Tanzania, check admission
            requirements, and discover where your A-Level results can take you.
          </p>

          {/* Search box */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-xl bg-white p-2 shadow-2xl sm:flex-row">

            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="h-5 w-5 shrink-0 text-gray-400" />

              <input
                type="text"
                placeholder="Search programmes, institutions or fields..."
                className="w-full bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#C62828] px-7 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A91F1F] hover:shadow-lg"
            >
              Search
              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

          {/* Supporting text */}
          <p className="mt-5 text-sm text-gray-400">
            Browse 980+ programmes from 93 institutions across Tanzania.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Hero