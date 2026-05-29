import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "بررسی دقیق شرایط فردی",
    description: "تحصیلی، کاری، اقامتی و هدف مهاجرت شما با دقت بررسی می‌شود.",
  },
  {
    number: "02",
    title: "طراحی مسیر مناسب",
    description:
      "بر اساس مقصد، شرایط و اولویت‌های شما، مسیر مناسب انتخاب می‌شود.",
  },
  {
    number: "03",
    title: "همراهی مرحله‌به‌مرحله",
    description: "از شروع تصمیم تا روشن‌شدن مسیر، کنار شما خواهیم بود.",
  },
];

const trustPoints = [
  "مسیرهای کاری، تحصیلی و اقامتی برای اتریش، آلمان و سوئیس",
  "توضیح شفاف مراحل، مدارک و انتخاب بهترین مسیر",
  "همراهی دقیق برای فارسی‌زبانانی که می‌خواهند مطمئن شروع کنند",
];

export default function About() {
  return (
    <section id="about" className="bg-[#f6f0e6] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn delay={0.05}>
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="rounded-[2rem] border border-navy/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="rounded-[1.7rem] bg-navy p-8 text-cream shadow-2xl">
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.38em] text-gold/90">
                    STRUCTURED GUIDANCE
                  </div>

                  <div className="mt-4 max-w-sm font-serif text-3xl leading-tight text-cream">
                    A thoughtful path,
                    <br />
                    built around you.
                  </div>
                </div>

                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.number}>
                      <div className="flex items-start gap-5" dir="rtl">
                        <div className="min-w-[48px] font-serif text-4xl text-gold/90">
                          {step.number}
                        </div>

                        <div className="pt-1 text-right">
                          <h3 className="text-base font-semibold text-cream md:text-lg">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-cream/72">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index !== steps.length - 1 && (
                        <div className="mt-6 h-px bg-gold/20" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3" dir="rtl">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-right">
                    <div className="text-2xl font-semibold text-gold">3</div>
                    <div className="mt-1 text-sm text-cream/70">
                      کشور هدف اصلی
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-right">
                    <div className="text-2xl font-semibold text-gold">
                      شفاف
                    </div>
                    <div className="mt-1 text-sm text-cream/70">
                      در توضیح مسیر و مراحل
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="text-center lg:text-right" dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              ABOUT THE CONSULTANCY
            </div>

            <h2 className="text-3xl font-semibold leading-[1.7] text-navy md:text-5xl">
              ما فقط پرونده انجام نمی‌دهیم؛
              <br />
              مسیر می‌سازیم.
            </h2>

            <p className="mt-7 text-lg leading-9 text-charcoal/72 md:text-xl md:leading-10">
              مهاجرت یک تصمیم بزرگ است و هر پرونده، مسیر مخصوص خودش را دارد. ما
              شرایط شما را مرحله‌به‌مرحله بررسی می‌کنیم تا مناسب‌ترین راه برای
              تحصیل، کار، اقامت یا امور اداری در اروپا با شفافیت مشخص شود.
            </p>

            <p className="mt-6 text-lg leading-9 text-charcoal/72 md:text-xl md:leading-10">
              تمرکز ما بر ارائه مشاوره دقیق، قانونی و قابل‌پیگیری برای
              فارسی‌زبانانی است که می‌خواهند مسیر خود را در اتریش، آلمان یا
              سوئیس با اطمینان شروع کنند.
            </p>

            <div className="mt-10 grid gap-4">
              {trustPoints.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.3rem] border border-navy/10 bg-white/65 px-5 py-4 shadow-sm backdrop-blur"
                  dir="rtl"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm text-cream">
                    {index + 1}
                  </div>

                  <p className="text-right text-sm leading-7 text-charcoal/75 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}