const stats = [
  { value: "2013", label: "Байгуулагдсан" },
  { value: "200+", label: "Хамтарч ажилласан төсөл" },
  { value: "10+", label: "Жил" },
  { value: "100+", label: "Ажилтан" },
];

export default function Stats() {
  return (
    <section className="bg-white border-b border-brand-border">
      <div className="mx-auto max-w-site px-6 lg:px-[60px] py-14">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center min-w-[160px]">
              <p className="text-4xl md:text-5xl font-bold text-brand-black">{stat.value}</p>
              <p className="text-sm text-brand-gray mt-2 font-display">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
