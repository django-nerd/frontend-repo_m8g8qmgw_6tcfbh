const features = [
  {
    title: 'Modular Components',
    desc: 'Each section is isolated, easy to maintain, and simple to extend.',
  },
  {
    title: 'Tailwind Design',
    desc: 'Utility-first styles for rapid, consistent UI development.',
  },
  {
    title: 'Responsive by Default',
    desc: 'Looks great on phones, tablets, and desktops without extra work.',
  },
  {
    title: 'Ready to Extend',
    desc: 'Hook up your API and ship features quickly.',
  },
]

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Features</h2>
      <p className="mt-2 text-gray-600">A few highlights of this starter.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
