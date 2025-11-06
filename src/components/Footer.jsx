function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
