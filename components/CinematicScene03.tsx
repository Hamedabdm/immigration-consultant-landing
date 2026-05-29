import Image from "next/image";
import FadeIn from "./FadeIn";

export default function CinematicScene03Test() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-cream">
      <Image
        src="/images/scene-03-documents.png"
        alt="Organized immigration documents and checklist on a professional desk"
        fill
        className="object-cover object-[24%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-navy/82 via-navy/38 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/62 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-end px-6 py-28 lg:px-10">
        <FadeIn className="max-w-xl text-right" delay={0.1}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              DOCUMENTS ALIGN
            </div>

            <h2 className="text-4xl font-semibold leading-[1.6] text-cream md:text-6xl">
              هر پرونده، مسیر مخصوص خودش را دارد.
            </h2>

            <p className="mt-7 text-lg leading-9 text-cream/75 md:text-xl">
              مدارک، شرایط و مراحل پرونده با ساختار مشخص بررسی می‌شوند تا مسیر
              شما شفاف‌تر و قابل‌پیگیری‌تر شود.
            </p>

            <div className="mt-10 flex justify-start">
              <a
                href="#contact"
                className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy shadow-xl transition hover:-translate-y-1 hover:bg-[#d6b77f]"
              >
                بررسی مدارک من
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}