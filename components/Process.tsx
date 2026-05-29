import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "درخواست مشاوره",
    description:
      "شما از طریق فرم، واتساپ یا تماس مستقیم درخواست مشاوره ثبت می‌کنید.",
  },
  {
    number: "02",
    title: "بررسی اولیه شرایط",
    description:
      "اطلاعات اولیه شما بررسی می‌شود تا مشخص شود کدام مسیرها برای شرایط فعلی‌تان قابل بررسی هستند.",
  },
  {
    number: "03",
    title: "انتخاب مسیر مناسب",
    description:
      "بر اساس هدف، سابقه تحصیلی یا کاری، وضعیت زبان، بودجه و کشور مقصد، مسیر مناسب‌تر پیشنهاد می‌شود.",
  },
  {
    number: "04",
    title: "آماده‌سازی مدارک",
    description:
      "مدارک لازم مرحله‌به‌مرحله مشخص می‌شود و برای آماده‌سازی پرونده، راهنمایی دقیق دریافت می‌کنید.",
  },
  {
    number: "05",
    title: "اقدام و پیگیری پرونده",
    description:
      "پس از تکمیل مدارک، فرآیند اقدام آغاز می‌شود و وضعیت پرونده در مراحل مختلف پیگیری خواهد شد.",
  },
  {
    number: "06",
    title: "همراهی در مراحل بعدی",
    description:
      "در صورت نیاز، برای امور پس از ورود، اقامت، اسکان یا مسائل اداری نیز راهنمایی دریافت می‌کنید.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f2ebdf] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              THE PROCESS
            </div>

            <h2 className="text-3xl font-semibold leading-[1.6] text-navy md:text-5xl">
              مسیر همکاری با ما چگونه پیش می‌رود؟
            </h2>

            <p className="mt-6 text-lg leading-9 text-charcoal/70">
              از اولین تماس تا بررسی شرایط و انتخاب مسیر مناسب، هر مرحله با هدف
              کاهش ابهام، افزایش شفافیت و آماده‌سازی دقیق پرونده انجام می‌شود.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/30 lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className={[
                    "relative grid gap-6 lg:grid-cols-2",
                    isLeft ? "" : "lg:[&>div:first-child]:col-start-2",
                  ].join(" ")}
                >
                  <FadeIn
                    delay={0.08 * index}
                    className={[
                      "rounded-[1.5rem] border border-navy/10 bg-cream p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl md:rounded-[2rem] md:p-8",
                      isLeft ? "lg:mr-12" : "lg:ml-12",
                    ].join(" ")}
                  >
                    <div dir="rtl">
                      <div className="flex items-center justify-between gap-6">
                        <h3 className="text-xl font-semibold text-navy md:text-2xl">
                          {step.title}
                        </h3>

                        <div className="font-serif text-4xl text-gold md:text-5xl">
                          {step.number}
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-charcoal/65 md:mt-6 md:text-base md:leading-8">
                        {step.description}
                      </p>
                    </div>
                  </FadeIn>

                  <div className="absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#f2ebdf] bg-gold lg:block" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}