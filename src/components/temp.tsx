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

 const Icon = field.icon
            const isActive = activeField === field.title


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

          import {
            ArrowRight,
            BriefcaseBusiness,
            Building2,
            Code2,
            HeartPulse,
            FlaskConical,
            Scale,
          } from "lucide-react"