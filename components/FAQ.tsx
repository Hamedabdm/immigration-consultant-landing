"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "آیا قبل از شروع پرونده، شرایط من بررسی می‌شود؟",
    answer:
      "بله. قبل از شروع هر مسیر، شرایط اولیه شما بررسی می‌شود تا مشخص شود کدام گزینه‌ها برای وضعیت فعلی‌تان قابل بررسی هستند.",
  },
  {
    question: "برای کدام کشورها مشاوره ارائه می‌دهید؟",
    answer:
      "تمرکز اصلی روی مسیرهای مهاجرتی اتریش، آلمان و سوئیس است. انتخاب کشور مناسب بر اساس هدف، سابقه، وضعیت زبان، بودجه و شرایط فردی بررسی می‌شود.",
  },
  {
    question: "آیا امکان مشاوره آنلاین وجود دارد؟",
    answer:
      "بله. امکان هماهنگی مشاوره از طریق واتساپ یا تماس آنلاین وجود دارد تا متقاضیان خارج از شهر یا کشور نیز بتوانند مسیر خود را بررسی کنند.",
  },
  {
    question: "آیا فقط مهاجرت تحصیلی انجام می‌دهید؟",
    answer:
      "خیر. خدمات شامل مسیرهای کاری، تحصیلی، اقامتی و برخی امور اداری مرتبط با زندگی و اقامت در اروپا می‌شود.",
  },
  {
    question: "پرداخت هزینه‌ها چگونه انجام می‌شود؟",
    answer:
      "برای برخی خدمات، امکان پرداخت مرحله‌ای وجود دارد تا شروع مسیر برای متقاضیان و خانواده‌ها با فشار کمتری همراه باشد.",
  },
  {
    question: "آیا پس از ورود به اروپا هم راهنمایی ارائه می‌شود؟",
    answer:
      "در صورت نیاز، برای برخی امور پس از ورود مانند اقامت، اسکان، تمدید یا مراحل اداری نیز راهنمایی ارائه می‌شود.",
  },
  {
    question: "آیا نتیجه پرونده تضمین می‌شود؟",
    answer:
      "خیر. نتیجه نهایی هر پرونده به قوانین، شرایط فردی، مدارک، تصمیم مراجع مربوطه و عوامل بیرونی بستگی دارد. تمرکز ما روی بررسی دقیق، شفاف‌سازی مسیر و آماده‌سازی بهتر پرونده است.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cream px-6 py-28 lg:px-10"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn className="text-center lg:text-right" delay={0.05}>
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

            <div className="mt-10 hidden rounded-[2rem] border border-navy/10 bg-white/45 p-6 text-right shadow-sm backdrop-blur lg:block">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">
                BEFORE YOU START
              </div>
              <p className="mt-4 text-sm leading-7 text-charcoal/65">
                هدف این بخش، شفاف‌سازی اولیه است. برای بررسی دقیق شرایط، بهتر
                است درخواست مشاوره ثبت شود.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={item.question} delay={0.04 * index}>
                <article
                  className={[
                    "group overflow-hidden rounded-[1.5rem] border bg-white/55 text-right shadow-sm backdrop-blur transition duration-300",
                    isOpen
                      ? "border-gold/50 shadow-xl"
                      : "border-navy/10 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg",
                  ].join(" ")}
                  dir="rtl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-right md:px-7 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="hidden font-serif text-2xl text-gold/70 md:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-base font-semibold leading-8 text-navy md:text-lg">
                        {item.question}
                      </h3>
                    </div>

                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl transition duration-300",
                        isOpen
                          ? "border-gold bg-gold text-navy rotate-45"
                          : "border-gold/35 bg-cream text-gold group-hover:border-gold",
                      ].join(" ")}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={[
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-navy/10 px-5 pb-6 pt-5 md:px-7">
                        <p className="text-sm leading-8 text-charcoal/70 md:text-base md:leading-9">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}