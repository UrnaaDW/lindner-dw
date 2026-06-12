import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const variants = [
  { name: "Post Cap Ceilings", desc: "Уян хатан өрөөний суурийг бүрдүүлдэг", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Hook-On Ceilings", desc: "Олон янзын шийдэл бүхий таазны систем", image: "https://images.unsplash.com/photo-1486406146926-c8112a89af12?w=600&q=80" },
  { name: "Corridor Ceilings", desc: "Харагдах байдал болон функцэд анхаарсан", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
  { name: "Cassette Ceilings", desc: "Дөрвөлжин хэлбэрт чанар", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80" },
  { name: "Expanded Metal Ceilings", desc: "Өрөө бүрт сүрлэг харагдах байдал", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" },
  { name: "Baffle Ceilings", desc: "Нээлттэй, дуу чимээ дарах шийдэл", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" },
];

const benefits = [
  "Дотор болон гадна хэрэглээнд тохиромжтой",
  "Тогтвортой барилга байгуулалт",
  "Галд тэсвэртэй, бөмбөрцгөн цохилтод тэсвэртэй сонголтууд",
  "Дизайны өргөн сонголт",
  "Цэвэрлэхэд хялбар, урт наслалттай",
  "Хүнд ачаалал, дуу чимээ, бөмбөрцгөн цохилтын шаардлагад нийцсэн",
];

const applications = [
  "Оффисын барилга",
  "Нисэх онгоцны буудал",
  "Дата төв",
  "Эмнэлэг",
  "Сургууль",
  "Зочид буудал",
  "Худалдааны төв",
  "Спортын заал",
];

export default function MetalCeilingsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-[140px] pb-24 bg-white">
        <div className="mx-auto max-w-site px-6 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">БҮТЭЭГДЭХҮҮН / ТААЗНЫ СИСТЕМ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black font-display mb-6">Металл таазны систем</h1>
            <p className="text-lg text-brand-gray max-w-3xl leading-relaxed mb-8">
              Lindner металл таазнууд нь таазны системд тавигдах шаардлагын адил олон янз байдаг. Металл кассет таазнаас эхлээд сүлжмэл металл тааз, металл сүүдрэвч тааз хүртэл бүтээцийн болон дизайны шаардлагад нийцсэн хамгийн сайн шийдлийг санал болгодог.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 bg-brand-light rounded-lg">
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span className="text-sm text-brand-black">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black font-display mb-8">Бүтээгдэхүүний төрлүүд</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {variants.map((v) => (
                <div key={v.name} className="group rounded-lg overflow-hidden bg-brand-light hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden"><img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-black mb-2">{v.name}</h3>
                    <p className="text-sm text-brand-gray">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black font-display mb-6">Хэрэглээ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {applications.map((a) => (
                <div key={a} className="px-5 py-4 bg-white border border-brand-border rounded-lg text-brand-black font-medium">{a}</div>
              ))}
            </div>
          </div>

          <div className="bg-brand-black rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">Илүү дэлгэрэнгүй мэдээлэл</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Lindner-ийн металл таазны системийн техникийн мэдээлэл, каталог, угсралтын зааврыг албан ёсны сайтаас үзнэ үү.</p>
            <a href="https://www.lindner-group.com/en/products/ceilings/metal-ceilings" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded bg-brand-red text-white font-semibold hover:bg-red-700 transition-colors">Lindner сайт руу үсрэх →</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
