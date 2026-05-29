const items = [
  {
    label: "Based in Austria",
    text: "دفتر و فعالیت در اتریش",
  },
  {
    label: "Persian Guidance",
    text: "مشاوره تخصصی فارسی‌زبان",
  },
  {
    label: "DACH Focus",
    text: "تمرکز بر اتریش، آلمان و سوئیس",
  },
  {
    label: "Structured Process",
    text: "بررسی پرونده با مسیر مشخص",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-navy/10 bg-white/35 px-6 py-8 backdrop-blur lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="text-right" dir="rtl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">
              {item.label}
            </div>
            <div className="mt-2 text-base font-medium text-navy">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}