import {
  ArrowRight,
  Building2,
  Clock3,
  MapPin,
  Trophy,
} from "lucide-react"

type ProgrammeCardProps = {
  name: string
  award: string
  institution: string
  region: string
  code: string
  points: number
  duration: string
  capacity: number
}

function ProgrammeCard({
  name,
  award,
  institution,
  region,
  code,
  points,
  duration,
  capacity,
}: ProgrammeCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C62828]/30 hover:shadow-md sm:p-6">

      {/* Top section */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">

          <h3 className="text-base font-bold leading-6 text-[#07183D] transition-colors duration-200 group-hover:text-[#C62828] sm:text-lg">
            {name}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {award}
          </p>

        </div>

        <button
          type="button"
          aria-label={`View ${name}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 group-hover:border-[#C62828] group-hover:bg-[#C62828] group-hover:text-white"
        >
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>


      {/* Institution information */}
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Building2 className="h-4 w-4 shrink-0 text-[#C62828]" />
          <span>{institution}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 shrink-0 text-[#C62828]" />
          <span>{region}</span>
        </div>

      </div>


      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />


      {/* Programme metadata */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        {/* Code */}
        <div>
          <p className="text-xs font-medium text-gray-400">
            Code
          </p>

          <p className="mt-1 truncate text-sm font-semibold text-[#07183D]">
            {code}
          </p>
        </div>


        {/* Points */}
        <div>
          <p className="text-xs font-medium text-gray-400">
            Minimum points
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <Trophy className="h-4 w-4 text-[#C62828]" />

            <p className="text-sm font-semibold text-[#07183D]">
              {points} points
            </p>
          </div>
        </div>


        {/* Duration */}
        <div>
          <p className="text-xs font-medium text-gray-400">
            Duration
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-[#C62828]" />

            <p className="text-sm font-semibold text-[#07183D]">
              {duration}
            </p>
          </div>
        </div>


        {/* Capacity */}
        <div>
          <p className="text-xs font-medium text-gray-400">
            Capacity
          </p>

          <p className="mt-1 text-sm font-semibold text-[#07183D]">
            {capacity} places
          </p>
        </div>

      </div>

    </article>
  )
}

export default ProgrammeCard