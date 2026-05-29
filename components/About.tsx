import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="bg-cream px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="relative order-2 lg:order-1" delay={0.15}>
          <div className="rounded-[2rem] border border-navy/10 bg-white/45 p-6 shadow-xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-navy p-6 text-cream md:p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-gold">
                Structured Guidance
              </div>

              <div className="mt-8 space-y-6 md:mt-10 md:space-y-8">
                <div>
                  <div className="text-3xl font-semibold text-gold md:text-4xl">
                    01
                  </div>
                  <p className="mt-3 text-sm leading-7 text-cream/75">
                    بررسی دقیق شرایط فردی، تحصیلی، کاری و اقامتی
                  </p>
                </div>

                <div className="h-px bg-gold/30" />

                <div>
                  <div className="text-3xl font-semibold text-gold md:text-4xl">
                    02
                  </div>
                  <p className="mt-3 text-sm leading-7 text-cream/75">
                    انتخاب مسیر مناسب بر اساس کشور مقصد و هدف مهاجرت
                  </p>
                </div>

                <div className="h-px bg-gold/30" />

                <div>
                  <div className="text-3xl font-semibold text-gold md:text-4xl">
                    03
                  </div>
                  <p className="mt-3 text-sm leading-7 text-cream/75">
                    همراهی مرحله‌به‌مرحله تا شفاف شدن مسیر پرونده
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="order-1 text-right lg:order-2" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              ABOUT THE CONSULTANCY
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.6] text-navy md:text-5xl">
              ما فقط پرونده انجام نمی‌دهیم؛ مسیر می‌سازیم.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-charcoal/75">
              مهاجرت یک تصمیم بزرگ است و هر پرونده، مسیر مخصوص خودش را دارد.
              ما شرایط شما را مرحله‌به‌مرحله بررسی می‌کنیم تا مناسب‌ترین راه
              برای تحصیل، کار، اقامت یا امور اداری در اروپا با شفافیت مشخص شود.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-9 text-charcoal/75">
              تمرکز ما بر ارائه مشاوره دقیق، قانونی و قابل‌پیگیری برای
              فارسی‌زبانانی است که می‌خواهند مسیر خود را در اتریش، آلمان یا
              سوئیس با اطمینان شروع کنند.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}