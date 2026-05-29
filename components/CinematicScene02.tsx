import Image from "next/image";
import FadeIn from "./FadeIn";

export default function CinematicScene02Test() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy text-cream">
      <Image
        src="/images/scene-02-route.png"
        alt="A golden route on a Europe map with travel planning essentials"
        fill
        className="object-cover object-[42%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-navy/80 via-navy/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-end px-6 py-28 lg:px-10">
        <FadeIn className="max-w-xl text-right" delay={0.1}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              THE ROUTE
            </div>

            <h2 className="text-4xl font-semibold leading-[1.6] text-cream md:text-6xl">
              وقتی مسیر روشن شود، تصمیم‌ها آرام‌تر می‌شوند.
            </h2>

            <p className="mt-7 text-lg leading-9 text-cream/75 md:text-xl">
              ما مسیر مناسب شما را بر اساس شرایط، مقصد و هدف مهاجرتی‌تان
              مرحله‌به‌مرحله بررسی می‌کنیم.
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-2xl text-cream/60">
  ↓
</div>
    </section>
  );
}