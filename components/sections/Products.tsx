import Link from "next/link";

const products = [
  {
    icon: "▭",
    title: "Таазны систем",
    desc: "Металл, бүтээц болон гэрэлтүүлэг бүхий таазны шийдлүүд",
    href: "/products/ceilings/metal-ceilings",
  },
  {
    icon: "▌",
    title: "Шилэн хана",
    desc: "Оффис, үйлчилгээний зориулалттай шилэн хана, хаалганы шийдлүүд",
    href: "/products/partitions/glass-partitions",
  },
  {
    icon: "▬",
    title: "Өндөрлөгөөтэй шал",
    desc: "Кабель менежмент, дуу чимээ багтаах өндөрлөгөөтэй шалны систем",
    href: "/products/raised-floors/calcium-sulphate-panels",
  },
  {
    icon: "▐",
    title: "Шилэн хаалга",
    desc: "Галд тэсвэртэй, дуу чимээгүй шилэн хаалганы систем",
    href: "/products/doors/glass-doors",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-brand-light py-24 lg:py-28">
      <div className="mx-auto max-w-site px-6 lg:px-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
            Бүтээгдэхүүн
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-display">
            Lindner бүтээгдэхүүний ангилал
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block bg-white rounded-lg p-7 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-brand-black mb-2">{item.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed mb-4">{item.desc}</p>
              <span className="text-sm font-semibold text-brand-red group-hover:underline">
                Дэлгэрэнгүй →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
