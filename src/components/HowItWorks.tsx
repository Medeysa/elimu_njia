import {
  FileText,
  Search,
  BadgeCheck,
  ArrowRight,
} from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter your results",
      description:
        "Add your A-Level exam year, subjects and grades to get started.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Explore programmes",
      description:
        "Browse degree programmes from universities and other institutions across Tanzania.",
      icon: Search,
    },
    {
      number: "03",
      title: "Check eligibility",
      description:
        "Let the system compare your results with the official admission requirements.",
      icon: BadgeCheck,
    },
    {
      number: "04",
      title: "Choose your options",
      description:
        "Review your results and discover programmes that may be suitable for you.",
      icon: ArrowRight,
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C62828]">
            Simple process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#07183D] sm:text-4xl">
            How Elimu Njia works
          </h2>

          <p className="mt-4 text-gray-600">
            From your A-Level results to a shortlist of programmes, we make
            the process easier to understand.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 md:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="relative text-center md:text-left"
              >

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] right-[-20px] top-8 hidden border-t border-dashed border-gray-300 md:block" />
                )}

                {/* Icon + Number */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#07183D] text-white md:mx-0">
                  <Icon className="h-6 w-6" />

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#C62828] text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mt-6 text-lg font-bold text-[#07183D]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks