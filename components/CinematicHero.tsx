import Image from "next/image";
import FadeIn from "./FadeIn";

export default function CinematicHeroTest() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-cream">
      <Image
        src="/images/scene-01-uncertainty.png"
        alt="Immigration documents on a quiet desk"
        fill
        priority
        className="object-cover object-[28%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-navy/75 via-navy/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-end px-6 py-28 lg:px-10">
        <FadeIn className="max-w-xl text-right" delay={0.1}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              THE UNCERTAINTY
            </div>

            <h1 className="text-4xl font-semibold leading-[1.6] text-cream md:text-6xl">
              مهاجرت با یک سؤال شروع می‌شود.
            </h1>

            <p className="mt-7 text-lg leading-9 text-cream/75 md:text-xl">
              وقتی مسیر هنوز روشن نیست، هر تصمیم سنگین‌تر به‌نظر می‌رسد.
            </p>

            <div className="mt-10 flex justify-start">
              <a
                href="#contact"
                className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-xl transition hover:-translate-y-1 hover:bg-[#d6b77f]"
              >
                شروع مشاوره
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}