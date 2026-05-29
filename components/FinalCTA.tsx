import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream px-6 py-28 lg:px-10"
    >
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn delay={0.05}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-cream shadow-2xl md:rounded-[2.5rem] md:px-12 md:py-20">
            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cream/5 blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
              <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
                BEGIN YOUR JOURNEY
              </div>

              <h2 className="text-3xl font-semibold leading-[1.7] md:text-5xl">
                پرونده مهاجرتی خود را با یک مشاوره دقیق شروع کنید
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-9 text-cream/72 md:text-lg md:leading-10">
                شرایط شما بررسی می‌شود و مناسب‌ترین مسیر برای اتریش، آلمان یا
                سوئیس با شفافیت توضیح داده خواهد شد. اولین قدم، یک گفت‌وگوی
                دقیق و هدفمند است
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/436607774779"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold text-navy shadow-xl transition hover:-translate-y-1 hover:bg-[#d6b77f] sm:w-auto"
                >
                  درخواست مشاوره در واتساپ
                </a>

                <a
                  href="tel:+436607774779"
                  className="w-full rounded-full border border-cream/25 bg-white/5 px-8 py-4 text-center text-sm font-semibold text-cream backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:bg-white/10 sm:w-auto"
                >
                  تماس مستقیم
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs leading-6 text-cream/45">
                <span>پاسخ‌گویی فارسی‌زبان</span>
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>بررسی اولیه شرایط</span>
                <span className="h-1 w-1 rounded-full bg-gold/60" />
                <span>مسیرهای کاری، تحصیلی و اقامتی</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}