import { programmes } from "../data/programmes"
import { createFileRoute, Link } from "@tanstack/react-router"
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  Target,
  TriangleAlert,
} from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/Eligibility/results")({
  validateSearch: (search: Record<string, unknown>) => ({
    examYear: String(search.examYear ?? ""),
    totalPoints: Number(search.totalPoints ?? 0),
  }),

  component: EligibilityResultsPage,
})

const resultCounts = {
  qualify: 12,
  pointsShort: 5,
  gradeShort: 3,
  reviewWording: 2,
}

function EligibilityResultsPage() {
  const { examYear, totalPoints } = Route.useSearch()

  const [activeCategory, setActiveCategory] = useState<
    "qualify" | "pointsShort" | "gradeShort" | "reviewWording"
  >("qualify")

  const programmeCategories: Record<
    string,
    "qualify" | "pointsShort" | "gradeShort" | "reviewWording"
  > = {
    MD001: "gradeShort",
    CS001: "qualify",
    ENG001: "pointsShort",
    BUS001: "qualify",
    NUR001: "gradeShort",
    STAT001: "reviewWording",
  }

  const filteredProgrammes = programmes.filter(
    (programme) =>
      programmeCategories[programme.code] === activeCategory,
  )

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C62828]">
            Eligibility Checker
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl">
            Your Eligibility Results
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Here are the programmes based on the A-Level results you entered.
          </p>
        </div>
      </section>

      {/* =====================================================
          RESULTS CONTENT
      ===================================================== */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* =================================================
              RESULT COUNT CARDS
          ================================================= */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* You qualify */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <span className="text-3xl font-bold text-[#07183D]">
                  {resultCounts.qualify}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#07183D]">
                You qualify
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Programmes you meet the requirements for.
              </p>
            </div>

            {/* Points short */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Target className="h-5 w-5" />
                </div>

                <span className="text-3xl font-bold text-[#07183D]">
                  {resultCounts.pointsShort}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#07183D]">
                Points just short
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Programmes where your points are slightly below the requirement.
              </p>
            </div>

            {/* Grade short */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <TriangleAlert className="h-5 w-5" />
                </div>

                <span className="text-3xl font-bold text-[#07183D]">
                  {resultCounts.gradeShort}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#07183D]">
                One grade short
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Programmes blocked by a specific grade condition.
              </p>
            </div>

            {/* Review wording */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileText className="h-5 w-5" />
                </div>

                <span className="text-3xl font-bold text-[#07183D]">
                  {resultCounts.reviewWording}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-[#07183D]">
                Read the wording
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Programmes requiring you to review the official wording.
              </p>
            </div>
          </div>

          {/* =================================================
              RESULT SUMMARY
          ================================================= */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
              Exam year: {examYear}
            </span>

            <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#C62828]">
              Your points: {totalPoints}
            </span>
          </div>

          {/* =================================================
              TABS
          ================================================= */}
          <div className="mt-10 border-b border-gray-200">
            <div className="flex gap-6 overflow-x-auto">

              {/* You qualify */}
              <button
                type="button"
                onClick={() => setActiveCategory("qualify")}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                  activeCategory === "qualify"
                    ? "border-[#C62828] text-[#C62828]"
                    : "border-transparent text-gray-500 hover:text-[#07183D]"
                }`}
              >
                You qualify
              </button>

              {/* Points just short */}
              <button
                type="button"
                onClick={() => setActiveCategory("pointsShort")}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                  activeCategory === "pointsShort"
                    ? "border-[#C62828] text-[#C62828]"
                    : "border-transparent text-gray-500 hover:text-[#07183D]"
                }`}
              >
                Points just short
              </button>

              {/* One grade short */}
              <button
                type="button"
                onClick={() => setActiveCategory("gradeShort")}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                  activeCategory === "gradeShort"
                    ? "border-[#C62828] text-[#C62828]"
                    : "border-transparent text-gray-500 hover:text-[#07183D]"
                }`}
              >
                One grade short
              </button>

              {/* Read the wording */}
              <button
                type="button"
                onClick={() => setActiveCategory("reviewWording")}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-semibold transition ${
                  activeCategory === "reviewWording"
                    ? "border-[#C62828] text-[#C62828]"
                    : "border-transparent text-gray-500 hover:text-[#07183D]"
                }`}
              >
                Read the wording
              </button>

            </div>
          </div>

          {/* =================================================
              PROGRAMME LIST
          ================================================= */}
          <div className="mt-6 space-y-4">
            {filteredProgrammes.map((programme) => {
              const category = programmeCategories[programme.code]

              const isQualified = category === "qualify"
              const isPointsShort = category === "pointsShort"
              const isGradeShort = category === "gradeShort"

              return (
                <div
                  key={programme.code}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                >
                  {/* =================================================
                      TOP
                  ================================================= */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {programme.code}
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-[#07183D] sm:text-xl">
                        {programme.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-600">
                        {programme.institution} · {programme.region}
                      </p>
                    </div>

                    {/* =================================================
                        STATUS
                    ================================================= */}
                    {isQualified && (
                      <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                        <CheckCircle2 className="h-4 w-4" />
                        You qualify
                      </div>
                    )}

                    {isPointsShort && (
                      <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                        <Target className="h-4 w-4" />
                        Points just short
                      </div>
                    )}

                    {isGradeShort && (
                      <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
                        <TriangleAlert className="h-4 w-4" />
                        One grade short
                      </div>
                    )}

                    {!isQualified &&
                      !isPointsShort &&
                      !isGradeShort && (
                        <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                          <FileText className="h-4 w-4" />
                          Read the wording
                        </div>
                      )}
                  </div>

                  {/* =================================================
                      PROGRAMME INFORMATION
                  ================================================= */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Your points */}
                    <div className="rounded-xl bg-[#F5F7FA] px-4 py-3">
                      <p className="text-xs text-gray-500">
                        Your points
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#07183D]">
                        {totalPoints}
                      </p>
                    </div>

                    {/* Required points */}
                    <div className="rounded-xl bg-[#F5F7FA] px-4 py-3">
                      <p className="text-xs text-gray-500">
                        Required points
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#07183D]">
                        {programme.points}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="rounded-xl bg-[#F5F7FA] px-4 py-3">
                      <p className="text-xs text-gray-500">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#07183D]">
                        {programme.duration}
                      </p>
                    </div>

                    {/* Capacity */}
                    <div className="rounded-xl bg-[#F5F7FA] px-4 py-3">
                      <p className="text-xs text-gray-500">
                        Capacity
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#07183D]">
                        {programme.capacity}
                      </p>
                    </div>

                  </div>

                  {/* =================================================
                      GRADE REQUIREMENTS
                  ================================================= */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Required grades
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {programme.gradeConditions.map((condition) => (
                        <span
                          key={condition.subject}
                          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                        >
                          {condition.subject}: {condition.condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================= */}
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <Link
                      to="/programmes/$code"
                      params={{ code: programme.code }}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C62828]"
                    >
                      View programme

                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </main>
  )
}