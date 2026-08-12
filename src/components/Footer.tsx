import { GraduationCap, ArrowUpRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import logo from "../assets/tculogo.png"

function Footer() {
  return (
    <footer className="bg-[#07183D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-[#C62828]">
                <img src={logo} alt="TCU Logo" className="h-10 w-10 rounded-full" />
              </div>

              <div>
                <p className="text-lg font-bold">
                  Elimu Njia
                </p>

                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  TCU Admission Explorer
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Explore degree programmes across Tanzania and understand
              your admission options using official requirements.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/Programmes"
                className="flex w-fit items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
              >
                Programmes
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/Institutions"
                className="flex w-fit items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
              >
                Institutions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/Eligibility"
                className="flex w-fit items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
              >
                Check Eligibility
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/Guide"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-white"
              >
                Admission Guide
              </Link>

              <a
                href="#"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-white"
              >
                About Elimu Njia
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Elimu Njia. All rights reserved.
            </p>

            <p>
              TCU Admission Explorer · 2026/2027
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer