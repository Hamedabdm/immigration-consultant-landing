export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-cream/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="group">
          <div className="text-xs tracking-[0.35em] text-gold">
            IMMIGRATION
          </div>
          <div className="mt-1 font-serif text-xl font-semibold tracking-wide text-navy">
            Consultant Austria
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-charcoal/75 md:flex">
          <a href="#services" className="transition hover:text-navy">
            خدمات
          </a>
          <a href="#countries" className="transition hover:text-navy">
            کشورها
          </a>
          <a href="#process" className="transition hover:text-navy">
            مسیر همکاری
          </a>
          <a href="#faq" className="transition hover:text-navy">
            سوالات
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-gold/60 bg-gold px-5 py-2.5 text-sm font-medium text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          درخواست مشاوره
        </a>
      </nav>
    </header>
  );
}