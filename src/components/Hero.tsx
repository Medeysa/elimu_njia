import { Search, ArrowRight, Building2, BookOpen, Layers3 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { programmes } from '../data/programmes'

type SearchSuggestion = {
  type: 'programme' | 'institution' | 'field'
  label: string
  subtitle: string
}

function Hero() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // =====================================================
  // BUILD SEARCH SUGGESTIONS FROM MOCK DATA
  // =====================================================

  const suggestions = useMemo<SearchSuggestion[]>(() => {
    const query = search.trim().toLowerCase()

    if (!query) return []

    const results: SearchSuggestion[] = []

    // -----------------------------------------------------
    // PROGRAMMES
    // -----------------------------------------------------

    programmes
      .filter(
        (programme) =>
          programme.name.toLowerCase().includes(query) ||
          programme.code.toLowerCase().includes(query),
      )
      .slice(0, 4)
      .forEach((programme) => {
        results.push({
          type: 'programme',
          label: programme.name,
          subtitle: `${programme.code} · ${programme.institution}`,
        })
      })

    // -----------------------------------------------------
    // INSTITUTIONS
    // -----------------------------------------------------

    const institutions = [
      ...new Set(programmes.map((programme) => programme.institution)),
    ]

    institutions
      .filter((institution) =>
        institution.toLowerCase().includes(query),
      )
      .slice(0, 3)
      .forEach((institution) => {
        results.push({
          type: 'institution',
          label: institution,
          subtitle: 'Institution',
        })
      })

    // -----------------------------------------------------
    // FIELDS
    // -----------------------------------------------------

    const fields = [
      ...new Set(programmes.map((programme) => programme.field)),
    ]

    fields
      .filter((field) =>
        field.toLowerCase().includes(query),
      )
      .slice(0, 3)
      .forEach((field) => {
        results.push({
          type: 'field',
          label: field,
          subtitle: 'Field of study',
        })
      })

    return results.slice(0, 7)
  }, [search])

  // =====================================================
  // SEARCH SUBMIT
  // =====================================================

  const handleSearch = () => {
    const query = search.trim()

    if (!query) {
      navigate({
        to: '/Programmes',
        search: {
          search: '',
          category: '',
        },
      })

      return
    }

    const normalizedQuery = query.toLowerCase()

    const institutions = [
      ...new Set(programmes.map((programme) => programme.institution)),
    ]

    const fields = [
      ...new Set(programmes.map((programme) => programme.field)),
    ]

    // -----------------------------------------------------
    // EXACT / STRONG INSTITUTION MATCH
    // -----------------------------------------------------

    const institutionMatch = institutions.find(
      (institution) =>
        institution.toLowerCase() === normalizedQuery ||
        institution.toLowerCase().includes(normalizedQuery),
    )

    if (institutionMatch) {
      navigate({
        to: '/Institutions',
        search: {
          search: query,
        },
      })

      return
    }

    // -----------------------------------------------------
    // FIELD MATCH
    // -----------------------------------------------------

    const fieldMatch = fields.find(
      (field) =>
        field.toLowerCase() === normalizedQuery ||
        field.toLowerCase().includes(normalizedQuery),
    )

    if (fieldMatch) {
      navigate({
        to: '/Programmes',
        search: {
          search: query,
          category: '',
        },
      })

      return
    }

    // -----------------------------------------------------
    // PROGRAMME / GENERAL SEARCH
    // -----------------------------------------------------

    navigate({
      to: '/Programmes',
      search: {
        search: query,
        category: '',
      },
    })
  }

  // =====================================================
  // SUGGESTION CLICK
  // =====================================================

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearch(suggestion.label)
    setIsFocused(false)

    if (suggestion.type === 'institution') {
      navigate({
        to: '/Institutions',
        search: {
          search: suggestion.label,
        },
      })

      return
    }

    navigate({
      to: '/Programmes',
      search: {
        search: suggestion.label,
        category: '',
      },
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#07183D]">
      {/* Decorative red shape */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C62828]/20 blur-3xl" />

      {/* Decorative blue shape */}
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

          {/* =====================================================
              SEARCH
          ===================================================== */}

          <div className="relative mx-auto mt-10 max-w-3xl">

            <div className="flex flex-col gap-3 rounded-xl bg-white p-2 shadow-2xl sm:flex-row">

              {/* Input */}
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search className="h-5 w-5 shrink-0 text-gray-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                  placeholder="Search programmes, institutions or fields..."
                  className="w-full bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
                />
              </div>

              {/* Search button */}
              <button
                type="button"
                onClick={handleSearch}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#C62828] px-7 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A91F1F] hover:shadow-lg"
              >
                Search
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* =================================================
                SEARCH SUGGESTIONS
            ================================================= */}

            {isFocused && search.trim() && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-2xl">

                {suggestions.map((suggestion, index) => (
                  <button
                    key={`${suggestion.type}-${suggestion.label}-${index}`}
                    type="button"
                    onMouseDown={(event) => {
                      event.preventDefault()
                      handleSuggestionClick(suggestion)
                    }}
                    className="flex w-full items-center gap-3 border-b border-gray-100 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-[#F5F7FA]"
                  >

                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#C62828]">

                      {suggestion.type === 'programme' && (
                        <BookOpen className="h-4 w-4" />
                      )}

                      {suggestion.type === 'institution' && (
                        <Building2 className="h-4 w-4" />
                      )}

                      {suggestion.type === 'field' && (
                        <Layers3 className="h-4 w-4" />
                      )}

                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold text-[#07183D]">
                        {suggestion.label}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-gray-500">
                        {suggestion.subtitle}
                      </p>

                    </div>

                    <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" />
                  </button>
                ))}

              </div>
            )}

            {/* No results */}
            {isFocused &&
              search.trim() &&
              suggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left shadow-2xl">
                  <p className="text-sm font-semibold text-[#07183D]">
                    No results found
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Try searching for a programme, institution, or field.
                  </p>
                </div>
              )}
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