export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Cole Dawson — Web Developer</span>
        <a href="#cta" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
          Hire Me
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-teal-600 font-semibold mb-4">Freelance Developer</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Websites that load fast and convert</h1>
        <p className="text-lg text-slate-600 mb-10">I design and build fast, accessible websites for small businesses and startups.</p>
        <a href="#cta" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition">
          Get a Free Quote
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Fast by Default</h3>
          <p className="text-slate-600">Every site ships with a 90+ performance score.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Modern Stack</h3>
          <p className="text-slate-600">React, Tailwind, and clean, maintainable code.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Fixed Pricing</h3>
          <p className="text-slate-600">Clear scope and price agreed before any work starts.</p>
        </div>
      </section>

      <section id="cta" className="bg-teal-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="mb-8 text-teal-100">Usually reply within one business day.</p>
        <a href="#" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Get a Free Quote
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Cole Dawson — Web Developer. All rights reserved.
      </footer>
    </div>
  )
}
