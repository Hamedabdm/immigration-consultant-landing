import FadeIn from "./FadeIn";

const countries = [
  {
    flag: "🇦🇹",
    name: "Austria",
    faName: "اتریش",
    title: "کیفیت زندگی بالا و مسیرهای روشن تحصیلی و اقامتی",
    description:
      "اتریش با دانشگاه‌های معتبر، هزینه‌های منطقی‌تر و موقعیت مرکزی در اروپا، یکی از گزینه‌های جدی برای شروع مسیر تحصیل، کار و اقامت است.",
    points: ["تحصیل و اقامت", "شهرهای Vienna · Linz · Graz", "زبان اصلی: آلمانی"],
    accent: "from-red-500/20",
  },
  {
    flag: "🇩🇪",
    name: "Germany",
    faName: "آلمان",
    title: "اقتصاد قدرتمند، بازار کار گسترده و فرصت‌های متنوع",
    description:
      "آلمان برای بسیاری از متقاضیان، به‌دلیل دانشگاه‌های معتبر، بازار کار بزرگ و مسیرهای متنوع شغلی، یکی از مهم‌ترین مقاصد مهاجرتی اروپاست.",
    points: ["کار و آینده شغلی", "دانشگاه‌های معتبر", "فرصت‌های گسترده"],
    accent: "from-yellow-500/20",
  },
  {
    flag: "🇨🇭",
    name: "Switzerland",
    faName: "سوئیس",
    title: "ثبات اقتصادی، استاندارد بالا و مسیرهای تخصصی‌تر",
    description:
      "سوئیس با کیفیت زندگی بسیار بالا، ساختار اقتصادی پایدار و فضای حرفه‌ای بین‌المللی، گزینه‌ای خاص‌تر برای مسیرهای دقیق‌تر و تخصصی‌تر است.",
    points: ["کیفیت زندگی بالا", "مسیرهای تخصصی", "ثبات و برنامه‌ریزی"],
    accent: "from-red-600/20",
  },
];

export default function Countries() {
  return (
    <section id="countries" className="relative overflow-hidden bg-cream px-6 py-28 lg:px-10">
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              DESTINATIONS
            </div>

            <h2 className="text-3xl font-semibold leading-[1.6] text-navy md:text-5xl">
              سه مسیر اصلی برای آینده‌ای جدید در اروپا
            </h2>

            <p className="mt-6 text-lg leading-9 text-charcoal/70">
              اتریش، آلمان و سوئیس هرکدام شرایط، فرصت‌ها و مسیرهای متفاوتی
              دارند. انتخاب درست، از بررسی دقیق شرایط فردی شما شروع می‌شود.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {countries.map((country, index) => (
            <FadeIn key={country.name} delay={0.1 * index}>
              <article
                className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-navy/10 bg-white/45 p-6 text-right shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl md:p-8"
                dir="rtl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${country.accent} via-transparent to-transparent opacity-80`}
                />
                <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-navy/10 bg-cream text-4xl shadow-sm transition group-hover:scale-105">
                        {country.flag}
                      </div>

                      <div className="text-left">
                        <div className="font-serif text-4xl text-gold md:text-5xl">
                          {country.name}
                        </div>
                        <div className="mt-2 text-sm font-medium text-charcoal/55">
                          {country.faName}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 h-px bg-navy/10 transition group-hover:bg-gold/40" />

                    <h3 className="mt-7 text-2xl font-semibold leading-[1.6] text-navy">
                      {country.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-charcoal/65">
                      {country.description}
                    </p>
                  </div>

                  <div className="mt-9">
                    <div className="space-y-3">
                      {country.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center justify-between gap-4 rounded-full border border-navy/10 bg-cream/70 px-4 py-2.5 text-sm text-charcoal/70"
                        >
                          <span>{point}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-7 inline-flex rounded-full border border-navy/15 bg-navy px-5 py-3 text-sm font-medium text-cream transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      بررسی مسیر {country.faName}
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}