import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Building2,
  ChevronDown,
  FileText,
  GraduationCap,
  Landmark,
  Search,
} from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/Guide')({
  component: GuidePage,
})

function GuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const normalizedSearch = search.trim().toLowerCase()

  const faqs = [
    {
      question: 'How do I know which programmes I qualify for?',
      answer:
        'Start by checking your subjects, grades, and points against the admission requirements of each programme. You can also use the eligibility checker to identify programmes that match your qualifications.',
    },
    {
      question:
        'Can I apply for a programme if I do not meet all requirements?',
      answer:
        'Admission requirements are set by the relevant institution and programme. If you do not meet a requirement, check whether the institution provides an alternative pathway or consider programmes with requirements that match your qualifications.',
    },
    {
      question: 'Where can I find the latest application deadlines?',
      answer:
        'Application dates can change from one admission cycle to another. Always confirm the current deadline through the official institution or relevant admission authority before submitting your application.',
    },
    {
      question: 'How should I choose between different universities?',
      answer:
        'Compare the programmes themselves, admission requirements, location, fees, available facilities, learning environment, and your long-term career interests. The best choice depends on what fits your goals and circumstances.',
    },
    {
      question: 'Is the information on this platform official?',
      answer:
        'This platform is designed to help you discover and understand programmes and institutions. For final admission requirements, deadlines, fees, and application procedures, always verify the information through the relevant official source.',
    },
  ]

  const quickStartSteps = [
    {
      number: '01',
      title: 'Know your results',
      description:
        'Understand your A-Level points, subjects, and grades before exploring programmes.',
      keywords: 'results points subjects grades qualifications',
    },
    {
      number: '02',
      title: 'Check your eligibility',
      description:
        'Use the eligibility checker to see which programmes match your qualifications.',
      keywords:
        'eligibility qualifications programmes admission requirements grades subjects',
    },
    {
      number: '03',
      title: 'Explore your options',
      description:
        'Compare programmes and institutions to find options that match your interests and qualifications.',
      keywords:
        'programmes institutions universities explore options courses degrees',
    },
    {
      number: '04',
      title: 'Prepare to apply',
      description:
        'Review programme requirements and follow the official application process for your chosen institution.',
      keywords:
        'application apply requirements admission university deadline application process',
    },
  ]

  const admissionGuides = [
    {
      number: '01',
      title: 'Admission requirements',
      icon: FileText,
      description:
        'Understand the points, subjects, grades, and other requirements that may apply to a programme.',
      action: 'Learn the basics →',
      type: 'programmes',
    },
    {
      number: '02',
      title: 'Understanding programme points',
      icon: GraduationCap,
      description:
        'Learn what minimum points mean and how they compare with the points you obtained from your results.',
      action: 'Understand points →',
      type: 'eligibility',
    },
    {
      number: '03',
      title: 'Choosing a programme',
      icon: GraduationCap,
      description:
        'Consider your interests, qualifications, programme requirements, institution, and future career options.',
      action: 'Explore your options →',
      type: 'programmes',
    },
    {
      number: '04',
      title: 'How applications work',
      icon: FileText,
      description:
        'Understand the general application journey and where to find the official application information.',
      action: 'View application guide →',
      type: 'institutions',
    },
  ]

  const applicationSteps = [
    {
      number: '01',
      title: 'Shortlist programmes',
      description:
        'Compare programmes and institutions based on your qualifications, interests, location, and career goals.',
      keywords: 'programmes institutions qualifications interests location career',
    },
    {
      number: '02',
      title: 'Check requirements',
      description:
        'Review the specific admission requirements, subject combinations, and other conditions for your chosen programme.',
      keywords:
        'requirements admission subjects combinations grades qualifications',
    },
    {
      number: '03',
      title: 'Submit your application',
      description:
        'Follow the official application instructions provided by the institution and submit your application before the deadline.',
      keywords:
        'application submit apply institution deadline official application',
    },
  ]

  const resources = [
    {
      icon: Landmark,
      title: 'Tanzania Commission for Universities',
      description:
        'Find information about universities, higher education, admission guidelines, and recognised institutions.',
      type: 'external',
      href: 'https://www.tcu.go.tz/',
      keywords:
        'TCU Tanzania Commission for Universities universities higher education admission recognised institutions',
    },
    {
      icon: GraduationCap,
      title: 'NACTVET',
      description:
        'Access official information for technical and vocational education and training institutions and programmes.',
      type: 'external',
      href: 'https://www.nactvet.go.tz/',
      keywords:
        'NACTVET technical vocational education training institutions programmes',
    },
    {
      icon: Building2,
      title: 'University websites',
      description:
        "Check each institution's official website for programme details, application instructions, fees, and deadlines.",
      type: 'internal',
      href: '/Institutions',
      keywords:
        'university universities institution institutions websites fees deadlines application programmes',
    },
  ]

  const filteredQuickStartSteps = useMemo(() => {
    if (!normalizedSearch) return quickStartSteps

    return quickStartSteps.filter((step) => {
      const searchableText = `
        ${step.title}
        ${step.description}
        ${step.keywords}
      `.toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const filteredAdmissionGuides = useMemo(() => {
    if (!normalizedSearch) return admissionGuides

    return admissionGuides.filter((guide) => {
      const searchableText = `
        ${guide.title}
        ${guide.description}
        ${guide.action}
      `.toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const filteredApplicationSteps = useMemo(() => {
    if (!normalizedSearch) return applicationSteps

    return applicationSteps.filter((step) => {
      const searchableText = `
        ${step.title}
        ${step.description}
        ${step.keywords}
      `.toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const filteredResources = useMemo(() => {
    if (!normalizedSearch) return resources

    return resources.filter((resource) => {
      const searchableText = `
        ${resource.title}
        ${resource.description}
        ${resource.keywords}
      `.toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const filteredFaqs = useMemo(() => {
    if (!normalizedSearch) return faqs

    return faqs.filter((faq) => {
      const searchableText = `
        ${faq.question}
        ${faq.answer}
      `.toLowerCase()

      return searchableText.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const totalResults =
    filteredQuickStartSteps.length +
    filteredAdmissionGuides.length +
    filteredApplicationSteps.length +
    filteredResources.length +
    filteredFaqs.length

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
            Explore
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl lg:text-5xl">
            Guide
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Your guide to programmes, eligibility, institutions, and university
            admissions across Tanzania.
          </p>

          {/* Search */}
          <div className="relative mt-7 max-w-3xl">
            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the guide..."
              aria-label="Search the guide"
              className="
                w-full rounded-xl
                border border-gray-300
                bg-white
                py-3.5 pl-12 pr-4
                text-sm text-[#07183D]
                shadow-sm
                outline-none
                transition-all duration-200
                placeholder:text-gray-400
                hover:border-gray-400
                focus:border-[#C62828]
                focus:ring-2
                focus:ring-[#C62828]/20
              "
            />
          </div>

          {normalizedSearch && (
            <div className="mt-3 text-sm text-gray-500">
              {totalResults > 0 ? (
                <>
                  Showing{' '}
                  <span className="font-semibold text-[#07183D]">
                    {totalResults}
                  </span>{' '}
                  result{totalResults === 1 ? '' : 's'} for{' '}
                  <span className="font-semibold text-[#C62828]">
                    "{search}"
                  </span>
                </>
              ) : (
                <>
                  No results found for{' '}
                  <span className="font-semibold text-[#C62828]">
                    "{search}"
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          NO RESULTS
      ===================================================== */}
      {normalizedSearch && totalResults === 0 ? (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[#C62828]">
              <Search className="h-7 w-7" aria-hidden="true" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#07183D]">
              No guide content found
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              We couldn't find anything matching your search. Try searching
              for terms like "eligibility", "programme", "application", or
              "university".
            </p>

            <button
              type="button"
              onClick={() => setSearch('')}
              className="
                mt-6 inline-flex items-center justify-center
                rounded-xl
                bg-[#C62828]
                px-5 py-3
                text-sm font-semibold text-white
                shadow-sm
                transition-all duration-200
                hover:bg-[#A91F1F]
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-[#C62828]/30
              "
            >
              Clear search
            </button>
          </div>
        </section>
      ) : (
        <>
          {/* =====================================================
              QUICK START
          ===================================================== */}
          {filteredQuickStartSteps.length > 0 && (
            <section className="py-10 sm:py-12 lg:py-14">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                    Getting started
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07183D] sm:text-3xl">
                    How to get started
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                    Follow these steps to explore programmes, understand your
                    eligibility, and prepare for university applications.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredQuickStartSteps.map((step) => (
                    <div
                      key={step.number}
                      className="
                        rounded-2xl
                        border border-gray-200
                        bg-white
                        p-5
                        shadow-sm
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:border-[#C62828]/30
                        hover:shadow-md
                        sm:p-6
                      "
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-[#C62828]">
                        {step.number}
                      </div>

                      <h3 className="mt-5 text-base font-bold text-[#07183D]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              ADMISSION BASICS
          ===================================================== */}
          {filteredAdmissionGuides.length > 0 && (
            <section className="border-t border-gray-200 bg-white py-10 sm:py-12 lg:py-14">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                      Admission basics
                    </p>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07183D] sm:text-3xl">
                      Understand the basics
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                      Learn the key things to understand before choosing a
                      programme and starting your university application.
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-gray-500">
                    {filteredAdmissionGuides.length} guides
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {filteredAdmissionGuides.map((guide) => {
                    const Icon = guide.icon

                    return (
                      <div
                        key={guide.number}
                        className="
                          group rounded-2xl
                          border border-gray-200
                          bg-[#F5F7FA]
                          p-5
                          transition-all duration-200
                          hover:-translate-y-0.5
                          hover:border-[#C62828]/30
                          hover:bg-white
                          hover:shadow-md
                          sm:p-6
                        "
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#C62828]">
                              {guide.number}
                            </p>

                            <h3 className="mt-2 text-lg font-bold text-[#07183D]">
                              {guide.title}
                            </h3>
                          </div>

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#C62828] shadow-sm transition-colors group-hover:bg-red-50">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                          {guide.description}
                        </p>

                        {guide.type === 'eligibility' ? (
                          <Link
                            to="/Eligibility"
                            className="mt-5 inline-flex text-sm font-semibold text-[#C62828] transition-colors hover:text-[#A91F1F]"
                          >
                            {guide.action}
                          </Link>
                        ) : guide.type === 'institutions' ? (
                          <Link
                            to="/Institutions"
                            search={{ search: '' }}
                            className="mt-5 inline-flex text-sm font-semibold text-[#C62828] transition-colors hover:text-[#A91F1F]"
                          >
                            {guide.action}
                          </Link>
                        ) : (
                          <Link
                            to="/Programmes"
                            search={{ category: '', search: '' }}
                            className="mt-5 inline-flex text-sm font-semibold text-[#C62828] transition-colors hover:text-[#A91F1F]"
                          >
                            {guide.action}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              ELIGIBILITY CHECKER CTA
          ===================================================== */}
          {!normalizedSearch && (
            <section className="pb-10 sm:pb-12 lg:pb-14">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl border border-[#07183D]/10 bg-[#07183D]">
                  <div className="grid items-center gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:px-10 lg:py-12">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-red-300">
                        Not sure where you qualify?
                      </p>

                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Check your programme eligibility
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
                        Enter your qualifications and find programmes that
                        match your academic results and subject requirements.
                      </p>
                    </div>

                    <div className="lg:justify-self-end">
                      <Link
                        to="/Eligibility"
                        className="
                          inline-flex w-full items-center justify-center
                          rounded-xl
                          bg-[#C62828]
                          px-5 py-3
                          text-sm font-semibold text-white
                          shadow-sm
                          transition-all duration-200
                          hover:bg-[#A91F1F]
                          hover:shadow-md
                          focus:outline-none
                          focus:ring-2
                          focus:ring-white/50
                          focus:ring-offset-2
                          focus:ring-offset-[#07183D]
                          sm:w-auto
                        "
                      >
                        Check my eligibility
                        <span className="ml-2" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              APPLICATION PROCESS
          ===================================================== */}
          {filteredApplicationSteps.length > 0 && (
            <section className="pb-10 sm:pb-12 lg:pb-14">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                    Application process
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07183D] sm:text-3xl">
                    From choosing a programme to applying
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                    Once you have found a programme that fits your
                    qualifications, follow these steps to prepare for your
                    application.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {filteredApplicationSteps.map((step) => (
                    <div
                      key={step.number}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-sm font-bold text-[#C62828]">
                          {step.number}
                        </div>

                        <h3 className="text-base font-bold text-[#07183D]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {!normalizedSearch && (
                  <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/60 px-5 py-4 sm:px-6">
                    <div className="flex gap-3">
                      <div className="mt-0.5 shrink-0 text-[#C62828]">
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-sm font-bold shadow-sm"
                          aria-hidden="true"
                        >
                          !
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#07183D]">
                          Always check official information
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Admission requirements, application dates, fees, and
                          procedures can change. Always confirm the latest
                          details through the official institution or admission
                          authority.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* =====================================================
              OFFICIAL RESOURCES
          ===================================================== */}
          {filteredResources.length > 0 && (
            <section className="pb-10 sm:pb-12 lg:pb-14">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                    Official resources
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07183D] sm:text-3xl">
                    Find the information you can trust
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                    Use official sources to confirm admission requirements,
                    application procedures, deadlines, and other important
                    details.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredResources.map((resource) => {
                    const Icon = resource.icon

                    const cardClassName = `
                      group rounded-2xl
                      border border-gray-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-[#C62828]/30
                      hover:shadow-md
                      sm:p-6
                    `

                    const cardContent = (
                      <>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#C62828] transition-colors group-hover:bg-red-100">
                            <Icon
                              className="h-5 w-5"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </div>

                          <span className="text-gray-300 transition-colors group-hover:text-[#C62828]">
                            ↗
                          </span>
                        </div>

                        <h3 className="mt-5 text-base font-bold text-[#07183D]">
                          {resource.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {resource.description}
                        </p>

                        <div className="mt-5 text-sm font-semibold text-[#C62828]">
                          {resource.type === 'internal'
                            ? 'Explore institutions →'
                            : 'Visit official source →'}
                        </div>
                      </>
                    )

                    if (resource.type === 'internal') {
                      return (
                        <Link
                          key={resource.title}
                          to={resource.href}
                          className={cardClassName}
                        >
                          {cardContent}
                        </Link>
                      )
                    }

                    return (
                      <a
                        key={resource.title}
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClassName}
                      >
                        {cardContent}
                      </a>
                    )
                  })}
                </div>

                {!normalizedSearch && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:px-6">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#07183D] text-xs font-bold text-white">
                      i
                    </div>

                    <p className="text-sm leading-6 text-gray-600">
                      <span className="font-semibold text-[#07183D]">
                        Tip:
                      </span>{' '}
                      Use this platform to discover and compare options, then
                      verify important admission information with the relevant
                      official source before applying.
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* =====================================================
              FAQ
          ===================================================== */}
          {filteredFaqs.length > 0 && (
            <section className="pb-12 sm:pb-14 lg:pb-16">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-7 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#C62828]">
                    Frequently asked questions
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#07183D] sm:text-3xl">
                    Questions students often ask
                  </h2>

                  <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                    Quick answers to common questions about programmes,
                    eligibility, and university applications.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = openFaq === index

                    return (
                      <div
                        key={faq.question}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFaq(isOpen ? null : index)
                          }
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${index}`}
                          className="
                            flex w-full items-center justify-between
                            gap-4
                            px-5 py-5
                            text-left
                            transition-colors
                            hover:bg-[#F5F7FA]
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-inset
                            focus-visible:ring-[#C62828]/30
                            sm:px-6
                          "
                        >
                          <span className="text-sm font-semibold text-[#07183D] sm:text-base">
                            {faq.question}
                          </span>

                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-[#C62828] transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {isOpen && (
                          <div
                            id={`faq-answer-${index}`}
                            className="px-5 pb-5 sm:px-6"
                          >
                            <p className="max-w-3xl text-sm leading-6 text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  )
}

export default GuidePage