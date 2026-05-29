import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "مهاجرت کاری",
    subtitle:
      "برای افرادی که می‌خواهند مسیر شغلی خود را در اروپا آغاز یا ادامه دهند.",
    description:
      "بررسی شرایط کاری، مسیرهای ویزای کاری، آماده‌سازی رزومه، راهنمایی برای مدارک و مشاوره درباره تغییر نوع اقامت.",
  },
  {
    number: "02",
    title: "مهاجرت تحصیلی",
    subtitle:
      "برای متقاضیانی که قصد تحصیل در اتریش، آلمان یا سوئیس را دارند.",
    description:
      "راهنمایی در انتخاب مسیر تحصیلی، بررسی شرایط پذیرش، آماده‌سازی مدارک، ثبت‌نام و امور اولیه مربوط به دانشگاه و اقامت دانشجویی.",
  },
  {
    number: "03",
    title: "امور اقامتی و اداری",
    subtitle:
      "برای افرادی که در مسیر اقامت یا زندگی در اروپا نیاز به همراهی دارند.",
    description:
      "مشاوره و راهنمایی در امور اقامت، اسکان، مراحل اداری، تمدید یا تغییر وضعیت و پیگیری پرونده‌های مرتبط.",
  },
  {
    number: "04",
    title: "پرداخت مرحله‌ای",
    subtitle: "برای مدیریت بهتر هزینه‌ها و شروع مسیر با فشار کمتر.",
    description:
      "امکان پرداخت چندمرحله‌ای برای برخی خدمات، با هدف ایجاد انعطاف بیشتر برای متقاضیان و خانواده‌ها.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f2ebdf] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              OUR SERVICES
            </div>

            <h2 className="text-3xl font-semibold leading-[1.6] text-navy md:text-5xl">
              خدمات مهاجرتی، متناسب با مسیر شما
            </h2>

            <p className="mt-6 text-lg leading-9 text-charcoal/70">
              از انتخاب مسیر مناسب تا آماده‌سازی مدارک و پیگیری مراحل اداری،
              خدمات ما برای ساختن یک مسیر روشن و قابل‌پیگیری طراحی شده‌اند.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={0.08 * index}>
              <article
                className="group rounded-[1.5rem] border border-navy/10 bg-cream p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl md:rounded-[2rem] md:p-8"
                dir="rtl"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-navy md:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-charcoal/80 md:mt-4 md:text-base md:leading-8">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="shrink-0 font-serif text-4xl text-gold/80 transition group-hover:text-gold md:text-5xl">
                    {service.number}
                  </div>
                </div>

                <div className="my-5 h-px bg-navy/10 transition group-hover:bg-gold/40 md:my-7" />

                <p className="text-sm leading-7 text-charcoal/65 md:text-base md:leading-8">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}