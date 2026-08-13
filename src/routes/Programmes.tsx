import { createFileRoute } from '@tanstack/react-router'
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react'
import ProgrammeCard from '../components/programmes/ProgrammeCard'
import { programmes } from '../data/programmes'

export const Route = createFileRoute('/Programmes')({
  component: ProgrammesPage,
})


function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C62828] sm:text-sm">
            Explore
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl lg:text-5xl">
            Programmes
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Find degree programmes from universities and other institutions
            across Tanzania.
          </p>

          {/* Search */}
          <div className="mt-7 w-full max-w-3xl sm:mt-8">
            <div className="flex items-center rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 focus-within:border-[#C62828] focus-within:ring-2 focus-within:ring-[#C62828]/10">
              <Search
                className="ml-4 h-5 w-5 shrink-0 text-gray-400"
                aria-hidden="true"
              />

              <input
                type="search"
                placeholder="Search programmes, institutions or code..."
                aria-label="Search programmes"
                className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          RESULTS AREA
      ========================== */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Mobile filters button */}
          <button
            type="button"
            className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#07183D] shadow-sm transition-colors hover:border-[#C62828] hover:text-[#C62828] sm:w-auto lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          {/* Desktop layout */}
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            {/* =========================
                FILTER SIDEBAR
            ========================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-bold text-[#07183D]">Filters</h2>

                <div className="mt-5 space-y-5">
                  {/* Field */}
                  <FilterSelect label="Field" value="All fields" />

                  {/* Region */}
                  <FilterSelect label="Region" value="All regions" />

                  {/* Institution */}
                  <FilterSelect label="Institution" value="All institutions" />

                  {/* Duration */}
                  <FilterSelect label="Duration" value="Any duration" />
                </div>
              </div>
            </aside>

            {/* =========================
                RESULTS
            ========================== */}
            <div>
              {/* Results heading */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#07183D] sm:text-xl">
                    980 programmes
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Browse degree programmes across Tanzania.
                  </p>
                </div>

                {/* Sort */}
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 transition-colors hover:border-[#C62828] sm:w-auto"
                >
                  <span>Recommended</span>

                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
              </div>

              {/* Placeholder */}
              <div className="space-y-4">
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:border-[#C62828] hover:text-[#C62828]"
                  >
                    ←
                    <span className="sr-only sm:not-sr-only sm:ml-1">
                      Previous
                    </span>
                  </button>

                  <button
                    type="button"
                    className="h-9 w-9 rounded-lg bg-[#C62828] text-sm font-semibold text-white"
                  >
                    1
                  </button>

                  <button
                    type="button"
                    className="hidden h-9 w-9 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 transition-colors hover:border-[#C62828] hover:text-[#C62828] sm:block"
                  >
                    2
                  </button>

                  <button
                    type="button"
                    className="hidden h-9 w-9 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 transition-colors hover:border-[#C62828] hover:text-[#C62828] sm:block"
                  >
                    3
                  </button>

                  <span className="px-1 text-sm text-gray-400">...</span>

                  <button
                    type="button"
                    className="h-9 w-9 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-600 transition-colors hover:border-[#C62828] hover:text-[#C62828]"
                  >
                    49
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-[#C62828] hover:text-[#C62828]"
                  >
                    <span className="sr-only sm:not-sr-only sm:mr-1">Next</span>
                    →
                  </button>
                </div>
                {programmes.map((programme) => (
                  <ProgrammeCard key={programme.code} {...programme} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* =========================
   FILTER SELECT
========================== */

function FilterSelect({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left text-sm text-gray-600 transition-colors hover:border-[#C62828]"
      >
        <span className="truncate">{value}</span>

        <ChevronDown className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
      </button>
    </div>
  )
}
