import FadeIn from "./FadeIn";

const countries = [
  {
    name: "Austria",
    title: "اتریش؛ کیفیت زندگی بالا، مسیرهای تحصیلی و اقامتی روشن",
    description:
      "اتریش با دانشگاه‌های معتبر، هزینه‌های تحصیلی منطقی، کیفیت زندگی بالا و موقعیت مرکزی در اروپا، یکی از گزینه‌های جدی برای متقاضیان تحصیل، کار و اقامت است.",
    points: [
      "زبان اصلی: آلمانی",
      "مناسب برای: تحصیل، کار، اقامت",
      "شهرهای مهم: Vienna · Linz · Graz",
    ],
  },
  {
    name: "Germany",
    title: "آلمان؛ اقتصاد قدرتمند، بازار کار گسترده و فرصت‌های تحصیلی متنوع",
    description:
      "آلمان به‌دلیل دانشگاه‌های معتبر، بازار کار بزرگ و مسیرهای متنوع شغلی و تحصیلی، یکی از مهم‌ترین مقاصد مهاجرتی در اروپا محسوب می‌شود.",
    points: [
      "زبان اصلی: آلمانی",
      "مناسب برای: کار، تحصیل، آینده شغلی",
      "ویژگی کلیدی: فرصت‌های گسترده",
    ],
  },
  {
    name: "Switzerland",
    title: "سوئیس؛ استاندارد بالا، ثبات اقتصادی و مسیرهای تخصصی‌تر",
    description:
      "سوئیس با کیفیت زندگی بسیار بالا، ساختار اقتصادی پایدار و فضای حرفه‌ای بین‌المللی، گزینه‌ای خاص‌تر برای افرادی است که به‌دنبال مسیرهای دقیق‌تر و تخصصی‌تر هستند.",
    points: [
      "زبان‌های اصلی: آلمانی، فرانسوی، ایتالیایی",
      "مناسب برای: مسیرهای تخصصی و حرفه‌ای",
      "ویژگی کلیدی: استاندارد زندگی بالا",
    ],
  },
];

export default function Countries() {
  return (
    <section id="countries" className="bg-cream px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl text-right" delay={0.05}>
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
                className="group relative min-h-[460px] overflow-hidden rounded-[1.5rem] bg-navy p-6 text-cream shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:min-h-[520px] md:rounded-[2rem] md:p-8"
                dir="rtl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,164,106,0.26),_transparent_35%),linear-gradient(145deg,_rgba(22,34,56,0.95),_rgba(15,23,40,1))]" />
                <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="text-left font-serif text-4xl text-gold/90 md:text-5xl">
                      {country.name}
                    </div>

                    <div className="mt-8 h-px bg-gold/35 md:mt-12" />

                    <h3 className="mt-6 text-xl font-semibold leading-[1.65] text-cream md:mt-8 md:text-2xl md:leading-[1.55]">
                      {country.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-cream/70 md:mt-5 md:text-base md:leading-8">
                      {country.description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-3 md:mt-10">
                    {country.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-full border border-cream/10 bg-white/5 px-4 py-2 text-sm text-cream/75"
                      >
                        {point}
                      </div>
                    ))}

                    <a
                      href="#contact"
                      className="mt-6 inline-flex rounded-full border border-gold/50 px-5 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-navy"
                    >
                      بررسی مسیر {country.name}
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