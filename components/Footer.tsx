export default function Footer() {
  return (
    <footer className="bg-[#0f1728] px-6 py-14 text-cream lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-cream/10 pt-10 text-right md:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr] md:text-right">
        <div className="text-right" dir="rtl">
          <div className="text-xs uppercase tracking-[0.35em] text-gold">
            IMMIGRATION
          </div>
          <div className="mt-2 font-serif text-2xl font-semibold text-cream">
            Consultant Austria
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/60">
            مشاوره تخصصی مهاجرت، اقامت و مسیر قانونی زندگی در اروپا
          </p>
        </div>

        <div className="text-right" dir="rtl">
          <h3 className="text-sm font-semibold text-gold">تماس مستقیم</h3>
          <div className="mt-4 space-y-2 text-sm text-cream/65">
  <a
    href="tel:+436607774779"
    dir="ltr"
    className="block transition hover:text-gold"
  >
    +43 660 7774779
  </a>
  <a
    href="tel:+491601857580"
    dir="ltr"
    className="block transition hover:text-gold"
  >
    +49 160 1857580
  </a>
</div>
        </div>

        <div className="text-right" dir="rtl">
          <h3 className="text-sm font-semibold text-gold">دفتر اتریش</h3>
          <p dir="ltr" className="mt-4 text-sm leading-7 text-cream/65">
  Wildbergstraße 15
  <br />
  4040 Linz
  <br />
  Austria
</p>
        </div>

        <div className="text-right" dir="rtl">
          <h3 className="text-sm font-semibold text-gold">لینک‌ها</h3>
          <div className="mt-4 space-y-2 text-sm text-cream/65">
            <a href="#services" className="block transition hover:text-gold">
              خدمات
            </a>
            <a href="#countries" className="block transition hover:text-gold">
              کشورها
            </a>
            <a href="#process" className="block transition hover:text-gold">
              مسیر همکاری
            </a>
            <a href="#faq" className="block transition hover:text-gold">
              سوالات متداول
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-cream/10 pt-6 text-sm text-cream/45 md:flex-row md:items-center md:justify-between">
        <div>© 2026 Immigration Consultant Austria. All rights reserved.</div>
        <div className="flex gap-5">
          <a
            href="https://wa.me/436607774779"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gold"
          >
            WhatsApp
          </a>
          <a href="#" className="transition hover:text-gold">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}