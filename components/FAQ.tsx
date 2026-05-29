import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "آیا قبل از شروع پرونده، شرایط من بررسی می‌شود؟",
    answer:
      "بله. پیش از هر اقدام، اطلاعات اولیه شما بررسی می‌شود تا مشخص شود کدام مسیرها برای شرایط فعلی‌تان قابل بررسی هستند. هدف این است که بدون شناخت پرونده، تصمیم عجولانه گرفته نشود.",
  },
  {
    question: "برای کدام کشورها مشاوره ارائه می‌دهید؟",
    answer:
      "تمرکز اصلی خدمات بر اتریش، آلمان و سوئیس است. با توجه به شرایط شما، مسیرهای تحصیلی، کاری، اقامتی یا اداری مرتبط با هر کشور بررسی می‌شود.",
  },
  {
    question: "آیا امکان مشاوره آنلاین وجود دارد؟",
    answer:
      "بله. امکان هماهنگی مشاوره از طریق تماس، واتساپ یا روش‌های ارتباطی آنلاین وجود دارد تا متقاضیان بتوانند بدون محدودیت مکانی، بررسی اولیه را آغاز کنند.",
  },
  {
    question: "آیا فقط مهاجرت تحصیلی انجام می‌دهید؟",
    answer:
      "خیر. خدمات شامل مهاجرت تحصیلی، مهاجرت کاری، امور اقامتی، امور اداری و راهنمایی در مراحل پس از ورود نیز می‌شود.",
  },
  {
    question: "پرداخت هزینه‌ها چگونه انجام می‌شود؟",
    answer:
      "برای برخی خدمات، امکان پرداخت مرحله‌ای در نظر گرفته می‌شود تا متقاضیان بتوانند مسیر خود را با فشار مالی کمتر و برنامه‌ریزی بهتر آغاز کنند.",
  },
  {
    question: "آیا پس از ورود به اروپا هم راهنمایی ارائه می‌شود؟",
    answer:
      "بله، در صورت نیاز، راهنمایی‌هایی درباره امور اقامت، اسکان، ثبت‌نام‌ها و مراحل اداری پس از ورود نیز ارائه می‌شود.",
  },
  {
    question: "آیا نتیجه پرونده تضمین می‌شود؟",
    answer:
      "خیر. نتیجه نهایی هر پرونده به شرایط فردی، مدارک، قوانین کشور مقصد و تصمیم مراجع مربوطه بستگی دارد. هدف ما بررسی دقیق، راهنمایی شفاف و پیگیری حرفه‌ای مسیر است، نه ارائه وعده‌های غیرواقعی.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn className="text-right" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              FAQ
            </div>

            <h2 className="text-3xl font-semibold leading-[1.6] text-navy md:text-5xl">
              پرسش‌های مهم قبل از شروع مسیر
            </h2>

            <p className="mt-6 text-lg leading-9 text-charcoal/70">
              اگر هنوز نمی‌دانید از کجا باید شروع کنید، این پاسخ‌ها می‌توانند
              تصویر روشن‌تری از روند همکاری به شما بدهند.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4" dir="rtl">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={0.05 * index}>
              <details className="group rounded-[1.5rem] border border-navy/10 bg-white/45 p-6 shadow-sm transition hover:border-gold/60 hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-right">
                  <span className="text-lg font-semibold leading-8 text-navy">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-sm text-gold transition group-open:rotate-45 group-open:bg-gold group-open:text-navy">
                    +
                  </span>
                </summary>

                <div className="mt-5 border-t border-navy/10 pt-5">
                  <p className="text-base leading-8 text-charcoal/65">
                    {faq.answer}
                  </p>

                  <div className="mt-4 text-left font-serif text-3xl text-gold/40">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}