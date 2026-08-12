import { useState } from "react"
import { Link } from "@tanstack/react-router"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  HeartPulse,
  FlaskConical,
  Scale,
} from "lucide-react"

const fields = [
  {
    title: "Computing & IT",
    description:
      "Computer science, software engineering and technology programmes.",
    icon: Code2,
  },
  {
    title: "Health Sciences",
    description:
      "Medicine, nursing, pharmacy and other health-related programmes.",
    icon: HeartPulse,
  },
  {
    title: "Engineering",
    description:
      "Explore engineering programmes across Tanzania.",
    icon: Building2,
  },
  {
    title: "Business",
    description:
      "Business, finance, accounting and management programmes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Science",
    description:
      "Explore programmes in mathematics, chemistry, physics and more.",
    icon: FlaskConical,
  },
   {
      title: "Law & Social Sciences",
      description: "Discover law and social science programmes.",
      icon: Scale,
    },
]

function PopularFields() {
  const [activeField, setActiveField] = useState<string | null>(null)

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
            const isActive = activeField === field.title

            return (
              <Link
                key={field.title}
                to="/Programmes"
                onClick={() => setActiveField(field.title)}
                className={`
                  group relative block overflow-hidden
                  rounded-2xl border bg-white p-6
                  transition-all duration-200 ease-out

                  ${
                    isActive
                      ? "border-[#C62828]/40 shadow-xl -translate-y-1"
                      : "border-gray-200"
                  }

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
                    rounded-xl
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-[#C62828] text-white scale-105"
                        : "bg-red-50 text-[#C62828]"
                    }

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
                    text-lg font-bold
                    transition-colors duration-200

                    ${
                      isActive
                        ? "text-[#C62828]"
                        : "text-[#07183D]"
                    }

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
                    text-sm font-semibold
                    transition-colors duration-200

                    ${
                      isActive
                        ? "text-[#C62828]"
                        : "text-[#07183D]"
                    }

                    group-hover:text-[#C62828]
                  `}
                >
                  Explore programmes

                  <ArrowRight
                    className={`
                      h-4 w-4
                      transition-transform duration-200

                      ${
                        isActive
                          ? "translate-x-1"
                          : ""
                      }

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