import { createFileRoute } from '@tanstack/react-router'
import { GraduationCap } from 'lucide-react'
import { useState } from 'react'

import SubjectGradeRow from '../components/eligibility/SubjectGradeRow.tsx'

export const Route = createFileRoute('/Eligibility')({
  component: EligibilityPage,
})

function EligibilityPage() {
  const [subjects, setSubjects] = useState<
    {
      id: number
      subject: string
      grade: string
    }[]
  >([])

  const availableSubjects = [
    'Biology',
    'Chemistry',
    'Physics',
    'Mathematics',
    'Geography',
    'History',
    'Economics',
    'English Language',
    'Kiswahili',
  ]

  const availableGrades = ['A', 'B', 'C', 'D', 'E', 'S', 'F']

  const gradePoints: Record<string, number> = {
    A: 3,
    B: 2,
    C: 2,
    D: 1,
    E: 1,
    S: 0,
    F: 0,
  }

  const totalPoints = subjects.reduce((total, item) => {
    return total + (gradePoints[item.grade] ?? 0)
  }, 0)

  const addSubject = () => {
    if (subjects.length >= 6) return

    setSubjects((current) => [
      ...current,
      {
        id: Date.now(),
        subject: '',
        grade: '',
      },
    ])
  }

  const removeSubject = (id: number) => {
    setSubjects((current) => current.filter((item) => item.id !== id))
  }

  const updateSubject = (id: number, value: string) => {
    setSubjects((current) =>
      current.map((item) =>
        item.id === id ? { ...item, subject: value } : item,
      ),
    )
  }

  const updateGrade = (id: number, value: string) => {
    setSubjects((current) =>
      current.map((item) =>
        item.id === id ? { ...item, grade: value } : item,
      ),
    )
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =====================================================
          PAGE INTRODUCTION
          Same left alignment as the Programmes page
      ===================================================== */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#C62828]">
              <GraduationCap className="h-6 w-6" />
            </div>

            {/* Small heading */}
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
              Eligibility Checker
            </p>

            {/* Main heading */}
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#07183D] sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
              Find programmes you qualify for
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#405674] sm:text-lg">
              Enter your A-Level results and discover degree programmes that
              may be available to you.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ELIGIBILITY CONTENT
      ===================================================== */}
      <section className="py-8 sm:py-10 lg:py-12">
        {/* Keep the form narrower than the page intro */}
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              EXAMINATION YEAR
          ================================================= */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-[#07183D] sm:text-2xl">
              Your examination details
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Select the examination year used for your A-Level results.
            </p>

            {/* Select */}
            <div className="mt-6 w-full max-w-xl">
              <label
                htmlFor="exam-year"
                className="mb-2 block text-sm font-semibold text-[#07183D]"
              >
                Examination year
              </label>

              <select
                id="exam-year"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#07183D] outline-none transition focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20"
              >
                <option value="">Select examination year</option>

                <option value="2025/2026">2025/2026</option>

                <option value="2024/2025">2024/2025</option>
              </select>
            </div>
          </div>

          {/* =================================================
              A-LEVEL RESULTS
          ================================================= */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#07183D] sm:text-2xl">
                  Your A-Level results
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                  Add between 2 and 6 subjects and select the grade you
                  received in each subject.
                </p>
              </div>

              <span className="shrink-0 text-sm font-medium text-gray-500">
                {subjects.length} / 6 subjects
              </span>
            </div>

            {/* =============================================
                NO SUBJECTS
            ============================================= */}
            {subjects.length === 0 ? (
              <div className="mt-7 rounded-xl border border-dashed border-gray-300 bg-[#F9FAFB] px-4 py-10 text-center sm:px-5">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-[#07183D]">
                  No subjects added yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Add your A-Level subjects and grades to calculate your
                  current points.
                </p>

                <button
                  type="button"
                  onClick={addSubject}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#C62828] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A91F1F] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 focus:ring-offset-2 sm:w-auto"
                >
                  + Add subject
                </button>
              </div>
            ) : (
              /* =============================================
                 SUBJECT LIST
              ============================================= */
              <div className="mt-7 space-y-4">
                {subjects.map((item) => (
                  <SubjectGradeRow
                    key={item.id}
                    subject={item.subject}
                    grade={item.grade}
                    subjects={availableSubjects}
                    selectedSubjects={subjects
                      .map((item) => item.subject)
                      .filter(Boolean)}
                    grades={availableGrades}
                    onSubjectChange={(value: string) =>
                      updateSubject(item.id, value)
                    }
                    onGradeChange={(value: string) =>
                      updateGrade(item.id, value)
                    }
                    onRemove={() => removeSubject(item.id)}
                  />
                ))}

                {/* Add another subject */}
                {subjects.length < 6 && (
                  <button
                    type="button"
                    onClick={addSubject}
                    className="w-full rounded-xl border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-[#C62828] transition hover:border-[#C62828] hover:bg-red-50"
                  >
                    + Add another subject
                  </button>
                )}
              </div>
            )}
          </div>

          {/* =================================================
              CURRENT POINTS
          ================================================= */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Points */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Current points
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-[#07183D] sm:text-4xl">
                    {totalPoints}
                  </p>

                  <span className="text-sm font-medium text-gray-500">
                    {totalPoints === 1 ? 'point' : 'points'}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Based on your selected grades.
                </p>
              </div>

              {/* Eligibility button */}
              <button
                type="button"
                disabled={subjects.length < 2}
                className="w-full rounded-xl bg-[#C62828] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A91F1F] focus:outline-none focus:ring-2 focus:ring-[#C62828]/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
              >
                Check my eligibility →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EligibilityPage