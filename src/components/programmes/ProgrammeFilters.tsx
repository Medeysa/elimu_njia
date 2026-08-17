import { SlidersHorizontal, X } from "lucide-react"

type ProgrammeFiltersProps = {
  field: string
  region: string
  institution: string
  duration: string

  fields: string[]
  regions: string[]
  institutions: string[]

  onFieldChange: (value: string) => void
  onRegionChange: (value: string) => void
  onInstitutionChange: (value: string) => void
  onDurationChange: (value: string) => void

  onClear: () => void
}

function ProgrammeFilters({
  field,
  region,
  institution,
  duration,
  fields,
  regions,
  institutions,
  onFieldChange,
  onRegionChange,
  onInstitutionChange,
  onDurationChange,
  onClear,
}: ProgrammeFiltersProps) {
  const hasFilters =
    field !== "" ||
    region !== "" ||
    institution !== "" ||
    duration !== ""

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-[#C62828]" />

          <h2 className="font-bold text-[#07183D]">
            Filters
          </h2>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={onClear}
            className="
              inline-flex items-center gap-1
              text-xs font-semibold text-[#C62828]
              hover:text-[#A91F1F]
            "
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </button>
        )}

      </div>

      {/* Field */}
      <div className="mt-6">
        <label
          htmlFor="field"
          className="mb-2 block text-sm font-semibold text-[#07183D]"
        >
          Field
        </label>

        <select
          id="field"
          value={field}
          onChange={(event) => onFieldChange(event.target.value)}
          className="
            w-full rounded-lg border border-gray-200
            bg-white px-3 py-2.5
            text-sm text-gray-700
            outline-none
            focus:border-[#C62828]
            focus:ring-2 focus:ring-[#C62828]/10
          "
        >
          <option value="">All fields</option>

          {fields.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Region */}
      <div className="mt-5">
        <label
          htmlFor="region"
          className="mb-2 block text-sm font-semibold text-[#07183D]"
        >
          Region
        </label>

        <select
          id="region"
          value={region}
          onChange={(event) => onRegionChange(event.target.value)}
          className="
            w-full rounded-lg border border-gray-200
            bg-white px-3 py-2.5
            text-sm text-gray-700
            outline-none
            focus:border-[#C62828]
            focus:ring-2 focus:ring-[#C62828]/10
          "
        >
          <option value="">All regions</option>

          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Institution */}
      <div className="mt-5">
        <label
          htmlFor="institution"
          className="mb-2 block text-sm font-semibold text-[#07183D]"
        >
          Institution
        </label>

        <select
          id="institution"
          value={institution}
          onChange={(event) => onInstitutionChange(event.target.value)}
          className="
            w-full rounded-lg border border-gray-200
            bg-white px-3 py-2.5
            text-sm text-gray-700
            outline-none
            focus:border-[#C62828]
            focus:ring-2 focus:ring-[#C62828]/10
          "
        >
          <option value="">All institutions</option>

          {institutions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Duration */}
      <div className="mt-5">
        <label
          htmlFor="duration"
          className="mb-2 block text-sm font-semibold text-[#07183D]"
        >
          Duration
        </label>

        <select
          id="duration"
          value={duration}
          onChange={(event) => onDurationChange(event.target.value)}
          className="
            w-full rounded-lg border border-gray-200
            bg-white px-3 py-2.5
            text-sm text-gray-700
            outline-none
            focus:border-[#C62828]
            focus:ring-2 focus:ring-[#C62828]/10
          "
        >
          <option value="">Any duration</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
        </select>
      </div>

    </aside>
  )
}

export default ProgrammeFilters