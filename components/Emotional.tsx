import FadeIn from "./FadeIn";

export default function Emotional() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-28 text-cream lg:px-10">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="relative order-2 lg:order-1" delay={0.18}>
          <div className="mx-auto max-w-[460px] rounded-[2.5rem] border border-cream/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#24324d] via-navy to-[#0f1728]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,_rgba(200,164,106,0.28),_transparent_35%)]" />
              <div className="absolute left-8 top-8 text-xs uppercase tracking-[0.35em] text-gold">
                Europe
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px bg-gold/40" />
                <div className="mt-6 font-serif text-4xl leading-tight text-cream">
                  A new chapter begins with clarity.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="order-1 text-right lg:order-2" delay={0.05}>
          <div dir="rtl">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">
              A NEW CHAPTER
            </div>

            <h2 className="text-3xl font-semibold leading-[1.65] text-cream md:text-5xl">
              مهاجرت فقط جابه‌جایی نیست؛ شروع یک فصل جدید است.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-cream/75">
              پشت هر پرونده مهاجرتی، یک تصمیم بزرگ، یک خانواده، یک آینده و یک
              مسیر تازه قرار دارد. ما تلاش می‌کنیم این مسیر از یک فرآیند مبهم و
              پراسترس، به مسیری روشن، قابل‌برنامه‌ریزی و قابل‌پیگیری تبدیل شود.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-9 text-cream/75">
              با همراهی درست، تصمیم مهاجرت می‌تواند آرام‌تر، شفاف‌تر و هدفمندتر
              پیش برود.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}