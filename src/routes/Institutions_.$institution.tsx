import { createFileRoute, Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Building2,
  Clock3,
  MapPin,
  Trophy,
} from "lucide-react"

import { programmes } from "../data/programmes"

export const Route = createFileRoute("/Institutions_/$institution")({
  component: InstitutionDetailsPage,
})

function InstitutionDetailsPage() {
  const { institution } = Route.useParams()

  const institutionProgrammes = programmes.filter(
    (programme) =>
      programme.institution === institution,
  )

  const institutionData = institutionProgrammes[0]

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          {/* Back */}
          <Link
            to="/Institutions"
            search={{ search: "" }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C62828] transition-colors hover:text-[#A91F1F]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

            Back to institutions
          </Link>


          {/* Institution information */}
          
            <div className="mt-7">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#C62828]">
                  <Building2 className="h-7 w-7" />
                </div>


                {/* Text */}
                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                    Institution
                  </p>

                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl lg:text-5xl">
                    {institutionData.institution}
                  </h1>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-[#C62828]" />

                    {institutionData.region}
                  </div>

                </div>

              </div>

            </div>
          

        </div>
      </section>


      {/* =====================================================
          PROGRAMMES
      ===================================================== */}
      <section className="py-10 sm:py-12 lg:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-7">

            <h2 className="text-2xl font-bold text-[#07183D] sm:text-3xl">
              Programmes
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Programmes offered by this institution.
            </p>

          </div>


          {/* Programme cards */}
          <div className="grid gap-5 lg:grid-cols-2">

            {institutionProgrammes.map((programme) => (

              <Link
                key={programme.code}
                to="/programmes/$code"
                params={{ code: programme.code }}
                className="
                  group rounded-2xl
                  border border-gray-200
                  bg-white p-5
                  shadow-sm
                  transition-all duration-200

                  hover:-translate-y-1
                  hover:border-[#C62828]/30
                  hover:shadow-xl

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C62828]
                  focus-visible:ring-offset-2
                  sm:p-6
                "
              >

                {/* Programme name */}
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-lg font-bold leading-6 text-[#07183D] transition-colors group-hover:text-[#C62828]">
                      {programme.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {programme.award}
                    </p>

                  </div>

                  <span className="shrink-0 text-sm font-semibold text-[#C62828]">
                    {programme.code}
                  </span>

                </div>


                {/* Divider */}
                <div className="my-5 border-t border-gray-100" />


                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Minimum points
                    </p>

                    <div className="mt-1 flex items-center gap-1.5">

                      <Trophy className="h-4 w-4 text-[#C62828]" />

                      <p className="text-sm font-semibold text-[#07183D]">
                        {programme.points}
                      </p>

                    </div>
                  </div>


                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Duration
                    </p>

                    <div className="mt-1 flex items-center gap-1.5">

                      <Clock3 className="h-4 w-4 text-[#C62828]" />

                      <p className="text-sm font-semibold text-[#07183D]">
                        {programme.duration}
                      </p>

                    </div>
                  </div>


                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Capacity
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#07183D]">
                      {programme.capacity} places
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>


          {/* No programmes */}
          {institutionProgrammes.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">

              <Building2 className="mx-auto h-8 w-8 text-gray-400" />

              <h3 className="mt-4 text-base font-semibold text-[#07183D]">
                Institution not found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                We could not find programmes for this institution.
              </p>

            </div>
          )}

        </div>

      </section>

    </main>
  )
}

export default InstitutionDetailsPage