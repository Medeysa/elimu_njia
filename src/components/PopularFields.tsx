import { Link } from "@tanstack/react-router"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  HeartPulse,
  FlaskConical,
  Scale,
} from "lucide-react"
import { programmes } from "../data/programmes"

const fieldMeta: Record<string, { description: string; icon: LucideIcon }> = {
  "Business & Management": {
    description: "Explore programmes that build leadership, strategy, and business skills.",
    icon: BriefcaseBusiness,
  },
  "Technology & IT": {
    description: "Discover innovative courses in software, systems, and digital transformation.",
    icon: Code2,
  },
  "Health Sciences": {
    description: "Find programmes focused on patient care, wellbeing, and medical science.",
    icon: HeartPulse,
  },
  "Science & Research": {
    description: "Learn about research-driven programmes in scientific discovery and inquiry.",
    icon: FlaskConical,
  },
  "Law & Public Policy": {
    description: "Study regulation, justice, governance, and public service pathways.",
    icon: Scale,
  },

  Engineering: {
    description: "Explore programmes that shape cities, systems, and modern infrastructure.",
    icon: Building2,
  },
  "Computing & IT": {
    description: "Discover innovative courses in software, systems, and digital transformation.",
    icon: Code2,
  },
}

const defaultFieldMeta = {
  description: "Explore programmes in this field.",
  icon: BriefcaseBusiness,
}

function PopularFields() {
  const fieldCategories = [
    ...new Set(
      programmes
        .map((programme) => programme.fieldCategory)
        .filter(Boolean)
    ),
  ]

  const fields = fieldCategories.map((category) => {
    const categoryMeta = fieldMeta[category] ?? defaultFieldMeta

    return {
      title: category,
      description: categoryMeta.description,
      icon: categoryMeta.icon,
    }
  })

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C62828]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#07183D] sm:text-4xl">
              Popular Fields
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Explore popular areas of study and discover programmes that
              match your interests.
            </p>
          </div>

          <Link
            to="/Programmes"
            search={{ category: "" }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C62828] transition-colors hover:text-[#A91F1F]"
          >
            View all programmes

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => {
            const Icon = field.icon
           

            return (
              <Link
                key={field.title}
                to="/Programmes"
                search={{ category: field.title }}
                className={`
                  group relative block overflow-hidden
                  rounded-2xl border border-gray-200 bg-white p-6
                  transition-all duration-200 ease-out

                  hover:-translate-y-1
                  hover:border-[#C62828]/30
                  hover:shadow-xl

                  active:scale-[0.98]

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#C62828]
                  focus-visible:ring-offset-2
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    mb-5 flex h-12 w-12 items-center justify-center
                    rounded-xl bg-red-50 text-[#C62828]
                    transition-all duration-200

                    group-hover:bg-[#C62828]
                    group-hover:text-white
                    group-hover:scale-105

                    group-active:scale-95
                  `}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-lg font-bold text-[#07183D]
                    transition-colors duration-200

                    group-hover:text-[#C62828]
                  `}
                >
                  {field.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {field.description}
                </p>

                {/* Explore */}
                <div
                  className={`
                    mt-5 flex items-center gap-2
                    text-sm font-semibold text-[#07183D]
                    transition-colors duration-200

                    group-hover:text-[#C62828]
                  `}
                >
                  Explore programmes

                  <ArrowRight
                    className={`
                      h-4 w-4
                      transition-transform duration-200

                      group-hover:translate-x-1
                    `}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopularFields