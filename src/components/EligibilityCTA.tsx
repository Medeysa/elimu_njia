import { ArrowRight, GraduationCap } from "lucide-react"
import { Link } from "@tanstack/react-router"

function EligibilityCTA() {
  return (
    <section className="bg-[#F5F7FA] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#07183D] px-6 py-16 sm:px-10 lg:px-16">

        {/* Decorative shapes */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C62828]/20 blur-3xl" />

        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <GraduationCap className="h-7 w-7" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to explore your options?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Enter your A-Level results and discover programmes that may match
            your qualifications across institutions in Tanzania.
          </p>

          {/* Button */}
          <div className=" md:block">
                    <Link
                      to="/Eligibility"
                      className="group inline-flex items-center gap-2 rounded-lg bg-[#C62828] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A91F1F] hover:shadow-md"
                    >
                      Check Eligibility
          
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

        </div>
      </div>
    </section>
  )
}

export default EligibilityCTA