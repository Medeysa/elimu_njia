function Stats() {
  const statistics = [
    {
      value: "93",
      label: "Institutions",
    },
    {
      value: "980+",
      label: "Programmes",
    },
    {
      value: "128,528",
      label: "Places",
    },
    {
      value: "27",
      label: "Subjects",
    },
  ]

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 divide-x divide-gray-200 md:grid-cols-4">

          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="px-4 text-center first:pl-0 last:pr-0"
            >
              <p className="text-3xl font-bold text-[#07183D] sm:text-4xl">
                {statistic.value}
              </p>

              <p className="mt-2 text-sm font-medium text-gray-500">
                {statistic.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Stats