import FadeIn from "./FadeIn";

type IconName = "briefcase" | "graduation" | "document" | "wallet";

const services: {
  number: string;
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}[] = [
  {
    number: "01",
    icon: "briefcase",
    title: "مهاجرت کاری",
    subtitle:
      "برای افرادی که می‌خواهند مسیر شغلی خود را در اروپا آغاز یا ادامه دهند.",
    description:
      "بررسی شرایط کاری، مسیرهای ویزای کاری، آماده‌سازی رزومه، راهنمایی برای مدارک و مشاوره درباره تغییر نوع اقامت.",
    features: ["بررسی شرایط کاری", "مسیرهای ویزای کاری", "راهنمایی رزومه و مدارک"],
  },
  {
    number: "02",
    icon: "graduation",
    title: "مهاجرت تحصیلی",
    subtitle:
      "برای متقاضیانی که قصد تحصیل در اتریش، آلمان یا سوئیس را دارند.",
    description:
      "راهنمایی در انتخاب مسیر تحصیلی، بررسی شرایط پذیرش، آماده‌سازی مدارک، ثبت‌نام و امور اولیه مربوط به دانشگاه و اقامت دانشجویی.",
    features: ["انتخاب مسیر تحصیلی", "بررسی شرایط پذیرش", "آماده‌سازی مدارک"],
  },
  {
    number: "03",
    icon: "document",
    title: "امور اقامتی و اداری",
    subtitle:
      "برای افرادی که در مسیر اقامت یا زندگی در اروپا نیاز به همراهی دارند.",
    description:
      "مشاوره و راهنمایی در امور اقامت، اسکان، مراحل اداری، تمدید یا تغییر وضعیت و پیگیری پرونده‌های مرتبط.",
    features: ["تمدید یا تغییر وضعیت", "پیگیری پرونده", "راهنمایی مراحل اداری"],
  },
  {
    number: "04",
    icon: "wallet",
    title: "پرداخت مرحله‌ای",
    subtitle: "برای مدیریت بهتر هزینه‌ها و شروع مسیر با فشار کمتر.",
    description:
      "امکان پرداخت چندمرحله‌ای برای برخی خدمات، با هدف ایجاد انعطاف بیشتر برای متقاضیان و خانواده‌ها.",
    features: ["انعطاف در پرداخت", "مدیریت بهتر هزینه", "شروع آسان‌تر مسیر"],
  },
];

function ServiceIcon({ name }: { name: IconName }) {
  const commonProps = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "briefcase") {
    return (
      <svg {...commonProps}>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <path d="M4 7h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1Z" />
        <path d="M3 13h18" />
        <path d="M10 13v1a2 2 0 0 0 4 0v-1" />
      </svg>
    );
  }

  if (name === "graduation") {
    return (
      <svg {...commonProps}>
        <path d="M22 9 12 4 2 9l10 5 10-5Z" />
        <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
        <path d="M22 9v6" />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg {...commonProps}>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
        <path d="M9 9h2" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
      <path d="M4 7l2-4h12l2 4" />
      <path d="M16 13h4v4h-4a2 2 0 0 1 0-4Z" />
      <path d="M8 11h5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f2ebdf] px-6 py-28 lg:px-10"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
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
                className="group relative h-full overflow-hidden rounded-[2rem] border border-navy/10 bg-cream/75 p-6 text-right shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-2xl md:p-8"
                dir="rtl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gold/10 opacity-80" />
                <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/20" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white/55 text-gold shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-navy group-hover:text-gold">
                        <ServiceIcon name={service.icon} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-navy md:text-2xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm font-medium leading-7 text-charcoal/75 md:text-base md:leading-8">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div 
                    className="hidden shrink-0 font-serif text-5xl text-gold/35 transition group-hover:text-gold md:block">
                      {service.number}
                    </div>
                  </div>

                  <div className="my-6 h-px bg-navy/10 transition group-hover:bg-gold/40 md:my-7" />

                  <p className="text-sm leading-7 text-charcoal/65 md:text-base md:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-2xl border border-navy/10 bg-white/45 px-4 py-3 text-center text-xs leading-6 text-charcoal/70 transition group-hover:border-gold/30"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-navy/10 pt-5">
                    <span className="text-xs uppercase tracking-[0.25em] text-gold">
                      SERVICE {service.number}
                    </span>

                    <a
                      href="#contact"
                      className="rounded-full border border-navy/15 bg-navy px-5 py-3 text-sm font-medium text-cream transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      درخواست راهنمایی
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