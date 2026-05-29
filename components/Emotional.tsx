import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Emotional() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28 text-cream lg:px-10">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cream/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn delay={0.05}>
          <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-cream/10 bg-white/10 p-5 shadow-2xl backdrop-blur md:rounded-[2.5rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-gold/20 bg-navy">
             <Image
  src="/images/emotional-clarity-v2.png"
  alt="Europe route map"
  fill
  sizes="(max-width: 768px) 90vw, 430px"
  className="object-cover object-[45%_center] opacity-75"
/>

              <div className="absolute inset-0 bg-gradient-to-b from-navy/45 via-navy/35 to-navy/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/35 via-transparent to-gold/10" />

              <div className="absolute left-8 top-8">
                <div className="text-xs uppercase tracking-[0.4em] text-gold">
                  EUROPE
                </div>
              </div>

              <div className="absolute left-8 right-8 top-24 flex flex-wrap gap-2">
                <span className="rounded-full border border-gold/30 bg-navy/45 px-3 py-1.5 text-xs text-cream/75 backdrop-blur">
                  Austria
                </span>
                <span className="rounded-full border border-gold/30 bg-navy/45 px-3 py-1.5 text-xs text-cream/75 backdrop-blur">
                  Germany
                </span>
                <span className="rounded-full border border-gold/30 bg-navy/45 px-3 py-1.5 text-xs text-cream/75 backdrop-blur">
                  Switzerland
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-6 h-px w-full bg-gold/40" />

                <div className="font-serif text-3xl leading-tight text-cream md:text-4xl">
                  A new chapter begins
                  <br />
                  with clarity.
                </div>

                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Guided path
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="text-center lg:text-right" dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              A NEW CHAPTER
            </div>

            <h2 className="text-3xl font-semibold leading-[1.7] text-cream md:text-5xl">
              مهاجرت فقط جابه‌جایی نیست؛ شروع یک فصل جدید است.
            </h2>

            <p className="mt-7 text-lg leading-9 text-cream/72 md:text-xl md:leading-10">
              پشت هر پرونده مهاجرتی، یک تصمیم بزرگ، یک خانواده، یک آینده و یک
              مسیر تازه قرار دارد. ما تلاش می‌کنیم این مسیر را از یک فرآیند
              مبهم و پراسترس، به مسیری روشن، قابل‌برنامه‌ریزی و قابل‌پیگیری
              تبدیل کنیم.
            </p>

            <p className="mt-6 text-lg leading-9 text-cream/72 md:text-xl md:leading-10">
              با همراهی درست، تصمیم مهاجرت می‌تواند آرام‌تر، شفاف‌تر و
              هدفمندتر پیش برود.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}