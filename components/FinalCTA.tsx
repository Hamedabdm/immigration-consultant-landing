import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy px-6 py-28 text-cream lg:px-10"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <FadeIn className="relative mx-auto max-w-5xl text-center" delay={0.05}>
        <div dir="rtl">
          <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
            BEGIN YOUR JOURNEY
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.65] text-cream md:text-5xl">
            پرونده مهاجرتی خود را با یک مشاوره دقیق شروع کنید.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-cream/75">
            شرایط شما بررسی می‌شود و مناسب‌ترین مسیر برای اتریش، آلمان یا سوئیس
            با شفافیت توضیح داده خواهد شد. اولین قدم، یک گفت‌وگوی دقیق و هدفمند
            است.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/436607774779"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-xl transition hover:-translate-y-1 hover:bg-[#d6b77f]"
            >
              درخواست مشاوره در واتساپ
            </a>

            <a
              href="tel:+436607774779"
              className="rounded-full border border-cream/20 bg-white/5 px-8 py-4 text-sm font-semibold text-cream backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              تماس مستقیم
            </a>
          </div>

          <p className="mt-8 text-xs leading-7 tracking-[0.12em] text-cream/50 md:tracking-[0.25em]">
            پاسخ‌گویی فارسی‌زبان · بررسی اولیه شرایط · مسیرهای کاری، تحصیلی و
            اقامتی
          </p>
        </div>
      </FadeIn>
    </section>
  );
}