import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/Programmes")({
  component: ProgrammesPage,
})

function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      {/* Page header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

          {/* Small label */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C62828] sm:text-sm">
            Explore
          </p>

          {/* Main heading */}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#07183D] sm:text-4xl lg:text-5xl">
            Programmes
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Find degree programmes from universities and other institutions
            across Tanzania.
          </p>

        </div>
      </section>

    </main>
  )
}