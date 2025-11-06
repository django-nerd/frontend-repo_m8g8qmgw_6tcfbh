import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500" />
          <span className="text-xl font-semibold tracking-tight text-gray-800">Hello World</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 transition" href="#features">Features</a>
          <a className="hover:text-gray-900 transition" href="#about">About</a>
          <a className="hover:text-gray-900 transition" href="#contact">Contact</a>
          <a
            href="#get-started"
            className="ml-2 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3 text-gray-700">
            <a className="hover:text-gray-900" href="#features" onClick={() => setOpen(false)}>Features</a>
            <a className="hover:text-gray-900" href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="hover:text-gray-900" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
