import { useState } from "react"
import { Link } from "@tanstack/react-router"
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react"
import logo from "../assets/tculogo.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#07183D] text-white transition-colors duration-200 group-hover:bg-[#C62828]">
            <img src={logo} alt="TCU Logo" className="h-11 w-11" />
          </div>

          <div className="min-w-0">
            <h1 className="text-lg font-bold leading-tight text-[#07183D]">
              Elimu Njia
            </h1>

            <p className="truncate text-[9px] font-semibold uppercase tracking-wider text-[#C62828] sm:text-[10px]">
              TCU Admission Explorer
            </p>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-1 md:flex">

          <NavItem to="/" label="Home" exact />

          <NavItem
            to="/programmes"
            label="Programmes"
          />

          <NavItem
            to="/institutions"
            label="Institutions"
          />

          <NavItem
            to="/guide"
            label="Guide"
          />

        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <Link
            to="/Eligibility"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#C62828] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A91F1F] hover:shadow-md"
          >
            Check Eligibility

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-lg p-2.5 text-[#07183D] transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <div className="flex flex-col gap-1">

              <MobileItem
                to="/"
                label="Home"
                onClick={closeMenu}
                exact
              />

              <MobileItem
                to="/programmes"
                label="Programmes"
                onClick={closeMenu}
              />

              <MobileItem
                to="/institutions"
                label="Institutions"
                onClick={closeMenu}
              />

              <MobileItem
                to="/guide"
                label="Guide"
                onClick={closeMenu}
              />

              {/* MOBILE CTA */}
              <Link
                to="/Eligibility"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#C62828] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#A91F1F] active:scale-[0.98]"
              >
                Check Eligibility

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  )
}


/* ================================
   DESKTOP NAV ITEM
================================ */

type NavItemProps = {
  to: string
  label: string
  exact?: boolean
}

function NavItem({
  to,
  label,
  exact = false,
}: NavItemProps) {
  return (
    <Link
      to={to}
      activeOptions={{
        exact,
      }}
      className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-[#07183D]"
      activeProps={{
        className:
          "group relative rounded-lg bg-red-50 px-4 py-2.5 text-sm font-semibold text-[#C62828]",
      }}
    >
      {label}

      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#C62828] transition-all duration-200 group-hover:w-5/6" />
    </Link>
  )
}


/* ================================
   MOBILE NAV ITEM
================================ */

type MobileItemProps = {
  to: string
  label: string
  onClick: () => void
  exact?: boolean
}

function MobileItem({
  to,
  label,
  onClick,
  exact = false,
}: MobileItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeOptions={{
        exact,
      }}
      className="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-red-50 hover:text-[#C62828] active:scale-[0.98]"
      activeProps={{
        className:
          "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-[#C62828]",
      }}
    >
      {label}
    </Link>
  )
}

export default Navbar