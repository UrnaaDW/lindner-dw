import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const globalProjects = [
  {
    title: "Josef Schwarz School",
    location: "Heilbronn, Germany",
    category: "Education",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    description: "Extension and interior fit-out of a modern school building with Lindner ceiling and partition systems.",
  },
  {
    title: "Skypark Business Center",
    location: "Niederanven, Luxembourg",
    category: "Office",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "Complete interior fit-out of a premium office complex including raised floors and metal ceilings.",
  },
  {
    title: "Deutsche Hypo Office",
    location: "Hamburg, Germany",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Modern office interior with Lindner floor systems and glass partitions.",
  },
  {
    title: "Maria Ward Schools",
    location: "Germany",
    category: "Education",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    description: "Educational facility with acoustic ceilings and dry lining solutions.",
  },
  {
    title: "Twickenham Stadium",
    location: "London, UK",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80",
    description: "Major stadium refurbishment with bespoke metal ceiling and facade solutions.",
  },
  {
    title: "Elizabeth Line - Bond Street",
    location: "London, UK",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
    description: "Underground station fit-out with fire-rated ceiling systems and cladding.",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-[140px] pb-24 bg-white">
        <div className="mx-auto max-w-site px-6 lg:px-20">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
              Галерей
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black font-display mb-4">
              Дэлхийн хэмжээнд хамтарч ажилласан төслүүд
            </h1>
            <p className="text-lg text-brand-gray max-w-3xl leading-relaxed">
              Lindner групп дэлхийн 40+ улсад өөрийн бүтээгдэхүүн, технологийг
              нийлүүлэн, томоохон барилга, интерьерийн төслүүдэд хамтарч ажиллаж
              байна. Доечевэллэ ХХК Монгол дахь төлөөлөгчөөрөө энэхүү стандарт,
              чанарыг нутагшуулж байна.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-lg overflow-hidden bg-brand-light hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 bg-[#e0e0e0] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-brand-red text-white text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-brand-gray">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
