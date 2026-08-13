import { Search, X } from "lucide-react"

type ProgrammeSearchProps = {
  value: string
  onChange: (value: string) => void
}

function ProgrammeSearch({
  value,
  onChange,
}: ProgrammeSearchProps) {
  return (
    <div className="relative">
      <Search
        className="
          pointer-events-none absolute left-4 top-1/2
          h-5 w-5 -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search programmes, institutions or fields..."
        aria-label="Search programmes"
        className="
          w-full rounded-xl border border-gray-200
          bg-white py-3.5 pl-12 pr-12
          text-sm text-[#07183D]
          outline-none
          transition-all duration-200

          placeholder:text-gray-400

          focus:border-[#C62828]
          focus:ring-2
          focus:ring-[#C62828]/10
        "
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="
            absolute right-3 top-1/2
            flex h-8 w-8 -translate-y-1/2
            items-center justify-center
            rounded-lg text-gray-400
            transition-colors
            hover:bg-gray-100
            hover:text-[#C62828]
          "
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default ProgrammeSearch