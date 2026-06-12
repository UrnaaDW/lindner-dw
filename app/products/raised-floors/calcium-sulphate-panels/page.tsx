import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const variants = [
  {
    name: "NORTEC",
    desc: "Стандарт өндөрлөгөөтэй шалны кальцийн сульфат хавтан",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    name: "NORTEC aurum",
    desc: "Тогтвортой байдлын хамгийн өндөр шаардлагад нийцсэн шал",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    name: "NORTEC CLT",
    desc: "Хөндлөн давхар модон таазан дээрх өндөрлөгөөтэй шал",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    name: "NORTEC power",
    desc: "Хүнд ачааллын бүс нутагт зориулсан өндөрлөгөөтэй шал",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
  },
  {
    name: "NORTEC sonic",
    desc: "Агаар сорох системтэй өндөрлөгөөтэй шал",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    name: "NORTEC acoustic",
    desc: "Дуу чимээний гүйцэтгэлд зориулсан өндөрлөгөөтэй шал",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
  },
];

const benefits = [
  "Барилгын биологийн эрүүл мэндийн IBR сертификаттай",
  "Галд тэсвэртэй (А1 ангилал, шатдаггүй)",
  "REA болон дахин боловсруулсан гипс ашиглан нөөц хэмнэлттэй",
  "PVC-гүй, бага ууршилттай",
  "Урт наслалттай, дахин засварлах боломжтой",
  "Хуурай угсралт: шууд алхаж болох, хурдан цэвэрхэн суурилуулалт",
];

const applications = [
  "Оффисын барилга",
  "Үйлдвэр, үйлдвэрлэлийн байгууламж",
  "Нисэх онгоцны буудал",
  "Орон сууц",
  "Нийтийн байгууламж",
  "Цэвэр өрөө, дата төв, эмнэлэг, сургууль, музей, зочид буудал",
];

export default function CalciumSulphatePanelsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-[140px] pb-24 bg-white">
        <div className="mx-auto max-w-site px-6 lg:px-20">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
              БҮТЭЭГДЭХҮҮН
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black font-display mb-6">
              Кальцийн сульфат хавтан
            </h1>
            <p className="text-lg text-brand-gray max-w-3xl leading-relaxed mb-8">
              Lindner-ийн кальцийн сульфат хавтангууд нь орчин үеийн шалны
              бүтээцэд зориулсан бат бөх, эрүүл өндөрлөгөөтэй шалны суурийг
              хангадаг. Өндөр тогтвортой байдал, галд тэсвэртэй, шалны хучилтын
              олон янзын сонголтыг санал болгодог.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 bg-brand-light rounded-lg"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span className="text-sm text-brand-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black font-display mb-8">
              NORTEC бүтээгдэхүүний төрлүүд
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {variants.map((variant) => (
                <div
                  key={variant.name}
                  className="group rounded-lg overflow-hidden bg-brand-light hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-black mb-2">{variant.name}</h3>
                    <p className="text-sm text-brand-gray">{variant.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-black font-display mb-6">
              Хэрэглээ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((app) => (
                <div
                  key={app}
                  className="px-5 py-4 bg-white border border-brand-border rounded-lg text-brand-black font-medium"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-black rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
              Илүү дэлгэрэнгүй мэдээлэл
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Lindner-ийн кальцийн сульфат хавтангийн техникийн мэдээлэл,
              каталог, угсралтын зааврыг албан ёсны сайтаас үзнэ үү.
            </p>
            <a
              href="https://www.lindner-group.com/en/products/floors/raised-floors/calcium-sulphate-panels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded bg-brand-red text-white font-semibold hover:bg-red-700 transition-colors"
            >
              Lindner сайт руу үсрэх →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
