import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Building2, MapPin, ArrowRight, Search } from 'lucide-react'
import { programmes } from '../data/programmes'

export const Route = createFileRoute('/Institutions')({
  component: InstitutionsPage,
})

function InstitutionsPage() {
  const [search, setSearch] = useState('')

  // =====================================================
  // INSTITUTIONS DATA
  // =====================================================
  const institutions = Array.from(
    new Map(
      programmes.map((programme) => [
        programme.institution,
        {
          name: programme.institution,
          region: programme.region,
          programmes: programmes.filter(
            (item) => item.institution === programme.institution,
          ).length,
        },
      ]),
    ).values(),
  )

  // =====================================================
  // FILTER INSTITUTIONS
  // =====================================================
  const filteredInstitutions = institutions.filter((institution) => {
    const searchTerm = search.toLowerCase()

    return (
      institution.name.toLowerCase().includes(searchTerm) ||
      institution.region.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Small label */}
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
            Explore
          </p>

          {/* Main heading */}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl lg:text-5xl">
            Institutions
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover universities and higher learning institutions across
            Tanzania.
          </p>

          {/* =================================================
              SEARCH
          ================================================= */}
          <div className="relative mt-7 max-w-3xl">
            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search institutions..."
              className="
                w-full rounded-xl
                border border-gray-300
                bg-white
                py-3.5 pl-12 pr-4
                text-sm text-[#07183D]
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#C62828]
                focus:ring-2
                focus:ring-[#C62828]/20
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          INSTITUTIONS SECTION
      ===================================================== */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#07183D] sm:text-2xl">
                Institutions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Explore institutions and their available programmes.
              </p>
            </div>

            <p className="text-sm font-semibold text-gray-600">
              {filteredInstitutions.length}{' '}
              {filteredInstitutions.length === 1
                ? 'institution'
                : 'institutions'}
            </p>
          </div>

          {/* =================================================
              INSTITUTION CARDS
          ================================================= */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredInstitutions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center sm:col-span-2 lg:col-span-3">
                <Building2 className="mx-auto h-8 w-8 text-gray-400" />

                <h3 className="mt-4 text-base font-semibold text-[#07183D]">
                  No institutions found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try searching with a different institution name or region.
                </p>
              </div>
            ) : (
              filteredInstitutions.map((institution) => (
                <InstitutionCard
                  key={institution.name}
                  name={institution.name}
                  region={institution.region}
                  programmes={institution.programmes}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CHILD ROUTE
          Institution detail page renders here
      ===================================================== */}
      
    </main>
  )
}

/* ============================================================
   INSTITUTION CARD
============================================================ */

type InstitutionCardProps = {
  name: string
  region: string
  programmes: number
}

function InstitutionCard({
  name,
  region,
  programmes,
}: InstitutionCardProps) {
  return (
    <Link
      to="/Institutions/$institution"
      params={{ institution: name }}
      className="
        group w-full text-left
        rounded-2xl
        border border-gray-200
        bg-white
        p-5 sm:p-6
        shadow-sm
        transition-all duration-200 ease-out

        hover:-translate-y-1
        hover:border-[#C62828]/30
        hover:shadow-xl

        active:scale-[0.98]

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#C62828]
        focus-visible:ring-offset-2
      "
    >
      {/* =================================================
          TOP
      ================================================= */}
      <div className="flex items-start justify-between gap-4">
        {/* Institution icon */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-xl
            bg-red-50
            text-[#C62828]
            transition-all duration-200

            group-hover:bg-[#C62828]
            group-hover:text-white
            group-hover:scale-105
          "
        >
          <Building2 className="h-6 w-6" />
        </div>

        {/* Arrow */}
        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-full
            border border-gray-200
            text-gray-500
            transition-all duration-200

            group-hover:border-[#C62828]
            group-hover:bg-[#C62828]
            group-hover:text-white
          "
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* =================================================
          INSTITUTION NAME
      ================================================= */}
      <h3
        className="
          mt-5
          text-lg font-bold
          leading-6
          text-[#07183D]
          transition-colors duration-200
          group-hover:text-[#C62828]
        "
      >
        {name}
      </h3>

      {/* =================================================
          REGION
      ================================================= */}
      <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4 shrink-0 text-[#C62828]" />

        <span>{region}</span>
      </div>

      {/* =================================================
          DIVIDER
      ================================================= */}
      <div className="my-5 border-t border-gray-100" />

      {/* =================================================
          PROGRAMME COUNT
      ================================================= */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400">
            Programmes
          </p>

          <p className="mt-1 text-sm font-bold text-[#07183D]">
            {programmes}
          </p>
        </div>

        <span
          className="
            text-sm font-semibold
            text-[#07183D]
            transition-colors
            group-hover:text-[#C62828]
          "
        >
          View institution
        </span>
      </div>
    </Link>
  )
}

export default InstitutionsPage