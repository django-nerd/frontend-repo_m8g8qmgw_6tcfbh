function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-200">New</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Hello World, beautifully crafted
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A clean starter showcasing a structured React app with modular components and elegant Tailwind styling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700">Get Started</a>
            <a href="#features" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 p-1 shadow-lg">
            <div className="h-full w-full rounded-lg bg-white grid place-items-center">
              <div className="text-center p-6">
                <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">Demo</p>
                <p className="mt-2 text-2xl font-bold text-gray-800">Hello World</p>
                <p className="mt-1 text-gray-500">This is a minimal interactive starter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
