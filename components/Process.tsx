import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "درخواست مشاوره",
    description:
      "شما از طریق فرم، واتساپ یا تماس مستقیم درخواست مشاوره ثبت می‌کنید.",
    label: "First Contact",
  },
  {
    number: "02",
    title: "بررسی اولیه شرایط",
    description:
      "اطلاعات اولیه شما بررسی می‌شود تا مشخص شود کدام مسیرها برای شرایط فعلی‌تان قابل بررسی هستند.",
    label: "Case Review",
  },
  {
    number: "03",
    title: "انتخاب مسیر مناسب",
    description:
      "بر اساس هدف، سابقه تحصیلی یا کاری، وضعیت زبان، بودجه و کشور مقصد، مسیر مناسب‌تر پیشنهاد می‌شود.",
    label: "Strategy",
  },
  {
    number: "04",
    title: "آماده‌سازی مدارک",
    description:
      "مدارک لازم مرحله‌به‌مرحله مشخص می‌شود و برای آماده‌سازی پرونده، راهنمایی دقیق دریافت می‌کنید.",
    label: "Documents",
  },
  {
    number: "05",
    title: "اقدام و پیگیری پرونده",
    description:
      "پس از تکمیل مدارک، فرآیند اقدام آغاز می‌شود و وضعیت پرونده در مراحل مختلف پیگیری خواهد شد.",
    label: "Submission",
  },
  {
    number: "06",
    title: "همراهی در مراحل بعدی",
    description:
      "در صورت نیاز، برای امور پس از ورود، اقامت، اسکان یا مسائل اداری نیز راهنمایی دریافت می‌کنید.",
    label: "Aftercare",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f2ebdf] px-6 py-28 lg:px-10"
    >
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
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
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block" />

          <div className="grid gap-6 lg:gap-10">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <FadeIn key={step.number} delay={0.06 * index}>
                  <article
                    className={[
                      "relative grid items-center gap-6 lg:grid-cols-2",
                      isLeft ? "" : "lg:[&>div:first-child]:col-start-2",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "group relative overflow-hidden rounded-[2rem] border border-navy/10 bg-cream/80 p-6 text-right shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl md:p-8",
                        isLeft ? "lg:mr-12" : "lg:ml-12",
                      ].join(" ")}
                      dir="rtl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gold/10 opacity-80" />
                      <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
                              {step.label}
                            </div>

                            <h3 className="text-xl font-semibold text-navy md:text-2xl">
                              {step.title}
                            </h3>
                          </div>

                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white/60 font-serif text-3xl text-gold shadow-sm transition group-hover:scale-105 group-hover:bg-navy">
                            {step.number}
                          </div>
                        </div>

                        <div className="my-6 h-px bg-navy/10 transition group-hover:bg-gold/40" />

                        <p className="text-sm leading-7 text-charcoal/65 md:text-base md:leading-8">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#f2ebdf] bg-gold shadow-lg lg:block" />
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}