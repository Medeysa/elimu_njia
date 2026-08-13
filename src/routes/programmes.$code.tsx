import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  BookOpen,
  Building2,
  Clock3,
  FileText,
  GraduationCap,
  MapPin,
  Users,
} from 'lucide-react'

export const Route = createFileRoute('/programmes/$code')({
  component: ProgrammeDetailPage,
})

function ProgrammeDetailPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =========================
          TOP
      ========================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Back */}
          <Link
            to="/Programmes"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-[#C62828]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to programmes
          </Link>

          {/* Programme heading */}
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C62828]">
              Programme
            </p>

            <h1 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-[#07183D] sm:text-3xl lg:text-4xl">
              Bachelor of Medicine and Surgery
            </h1>

            <p className="mt-2 text-base text-gray-600 sm:text-lg">
              Doctor of Medicine
            </p>

            {/* Institution */}
            <div className="mt-5 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#C62828]" />
                <div>Muhimbili University of Health and Allied Sciences</div>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C62828]" />
                <span>Dar es Salaam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTENT
      ========================== */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <ProgrammeStat
              icon={<GraduationCap className="h-5 w-5" />}
              label="Minimum points"
              value="4 points"
            />

            <ProgrammeStat
              icon={<Clock3 className="h-5 w-5" />}
              label="Duration"
              value="5 years"
            />

            <ProgrammeStat
              icon={<Users className="h-5 w-5" />}
              label="Capacity"
              value="120 places"
            />

            <ProgrammeStat
              icon={<FileText className="h-5 w-5" />}
              label="Programme code"
              value="MD001"
            />
          </div>

          {/* Main content */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
            {/* Requirements */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#C62828]">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#07183D] sm:text-xl">
                    Entry requirements
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Official requirements from the admission guidebook.
                  </p>
                </div>
              </div>

              {/* Official text */}
              <div className="mt-7 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:p-5">
                <p className="text-sm leading-7 text-gray-700">
                  Candidates must have the required qualifications in the
                  relevant subjects as specified in the official admission
                  guidebook. The requirements shown here should be read together
                  with the full official wording.
                </p>
              </div>

              {/* Grade conditions */}
              <div className="mt-8">
                <h3 className="text-base font-bold text-[#07183D]">
                  Grade conditions
                </h3>

                <div className="mt-4 space-y-3">
                  <GradeCondition subject="Chemistry" condition="At least C" />

                  <GradeCondition subject="Biology" condition="At least D" />

                  <GradeCondition subject="Physics" condition="At least E" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              {/* Guidebook */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#C62828]">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-bold text-[#07183D]">
                      Guidebook source
                    </h2>

                    <p className="text-sm text-gray-500">Official reference</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-xs font-medium text-gray-400">
                    Guidebook page
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#07183D]">
                    Page 145
                  </p>
                </div>
              </div>

              {/* Important note */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h2 className="text-sm font-bold text-amber-900">Important</h2>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  The eligibility result is only a guide. Always read the
                  official requirement wording before making your application
                  decision.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

/* =========================
   STAT COMPONENT
========================== */

function ProgrammeStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#C62828]">
        {icon}
      </div>

      <p className="mt-4 text-xs font-medium text-gray-400">{label}</p>

      <p className="mt-1 text-sm font-bold text-[#07183D] sm:text-base">
        {value}
      </p>
    </div>
  )
}

/* =========================
   GRADE CONDITION
========================== */

function GradeCondition({
  subject,
  condition,
}: {
  subject: string
  condition: string
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
      <span className="text-sm font-medium text-gray-700">{subject}</span>

      <span className="text-sm font-semibold text-[#07183D]">{condition}</span>
    </div>
  )
}
