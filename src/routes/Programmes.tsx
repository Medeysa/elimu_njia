import { createFileRoute } from '@tanstack/react-router'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import ProgrammeCard from '../components/programmes/ProgrammeCard'
import ProgrammeSearch from '../components/programmes/ProgrammeSearch'
import { programmes } from '../data/programmes'

export const Route = createFileRoute('/Programmes')({
  component: ProgrammesPage,
})

function ProgrammesPage() {
  const [search, setSearch] = useState('')
  const filteredProgrammes = programmes.filter((programme) => {
    const searchTerm = search.toLowerCase().trim()

    if (!searchTerm) {
      return true
    }

    return (
      programme.name.toLowerCase().includes(searchTerm) ||
      programme.institution.toLowerCase().includes(searchTerm) ||
      programme.region.toLowerCase().includes(searchTerm) ||
      programme.code.toLowerCase().includes(searchTerm)
    )
  })
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
            <ProgrammeSearch value={search} onChange={setSearch} />
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
                    {filteredProgrammes.length}  Programmes
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
                     {filteredProgrammes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-[#07183D]">
                No programmes found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try a different programme name, institution, region or code.
              </p>

              <button
                type="button"
                onClick={() => setSearch('')}
                className="
            mt-5 rounded-lg bg-[#C62828]
            px-4 py-2.5 text-sm font-semibold text-white
            transition-colors
            hover:bg-[#A91F1F]
          "
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid gap-5 lg:grid-cols-2">
              {filteredProgrammes.map((programme) => (
                <ProgrammeCard
                  key={programme.code}
                  code={programme.code}
                  name={programme.name}
                  award={programme.award}
                  institution={programme.institution}
                  region={programme.region}
                  points={programme.points}
                  duration={programme.duration}
                  capacity={programme.capacity}
                />
              ))}
            </div>
          )}
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
