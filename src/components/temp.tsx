import { Trash2 } from "lucide-react"

type SubjectGradeRowProps = {
  subject: string
  grade: string
  subjects: string[]
  selectedSubjects: string[]
  showValidation: boolean
  grades: string[]
  onSubjectChange: (value: string) => void
  onGradeChange: (value: string) => void
  onRemove: () => void
}

function SubjectGradeRow({
  subject,

  subjects,
  selectedSubjects,
    showValidation,
  onSubjectChange,
  
  onRemove,
}: SubjectGradeRowProps) {
  const availableSubjectsForRow = subjects.filter(
  (item) =>
    !selectedSubjects.includes(item) || item === subject,
)

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      
      <div className="grid gap-4 sm:grid-cols-[1fr_180px_auto] sm:items-end">

        {/* Subject */}
        <div>
          <label
            htmlFor={`subject-${subject}`}
            className="mb-2 block text-sm font-semibold text-[#07183D]"
          >
            Subject
          </label>

    <select
  id={`subject-${subject}`}
  value={subject}
  onChange={(event) => onSubjectChange(event.target.value)}
  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#07183D] outline-none transition focus:ring-2 focus:ring-[#C62828]/20 ${
    showValidation && !subject
      ? 'border-[#C62828]'
      : 'border-gray-300 focus:border-[#C62828]'
  }`}
>
  <option value="">Select subject</option>

  {availableSubjectsForRow.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ))}
</select>

{showValidation && !subject && (
  <p className="mt-2 text-sm text-[#C62828]">
    Please select a subject.
  </p>
)}
        </div>


        {/* Grade */}
        <div>
          <label
            htmlFor={`grade-${subject}`}
            className="mb-2 block text-sm font-semibold text-[#07183D]"
          >
            Grade
          </label>

        <select
  id={`subject-${subject}`}
  value={subject}
  onChange={(event) => onSubjectChange(event.target.value)}
  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#07183D] outline-none transition focus:ring-2 focus:ring-[#C62828]/20 ${
    showValidation && !subject
      ? 'border-[#C62828]'
      : 'border-gray-300 focus:border-[#C62828]'
  }`}
>
  <option value="">Select subject</option>

  {availableSubjectsForRow.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ))}
</select>

{showValidation && !subject && (
  <p className="mt-2 text-sm text-[#C62828]">
    Please select a subject.
  </p>
)}
        </div>


        {/* Remove */}
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove subject"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-[#C62828] focus:outline-none focus:ring-2 focus:ring-[#C62828]/20 sm:mb-0"
        >
          <Trash2 className="h-4 w-4" />
        </button>

      </div>
    </div>
  )
}

export default SubjectGradeRow



