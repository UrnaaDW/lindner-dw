const projects = [
  {
    title: "ХХБ-ны төв оффис",
    category: "Банкны оффис",
    year: "2013",
    desc: "Худалдаа хөгжлийн банкны төв оффисын интерьер засал, Lindner бүтээгдэхүүний нийлүүлэлт. Өндөрлөгөөтэй шал нийлүүлж, угсралтын ажлыг гүйцэтгэсэн.",
  },
  {
    title: "Капитрон банкны оффис",
    category: "Банкны оффис",
    year: "2022",
    desc: "Капитрон банкны оффисын барилгын интерьер шийдэл, таазны систем. Өндөрлөгөөтэй шал нийлүүлж, угсралт ажлыг гүйцэтгэсэн.",
  },
  {
    title: "Голомт банкны төв оффис",
    category: "Банкны оффис",
    year: "2026",
    desc: "Голомт банкны төв оффисын бүрэн интерьер засал, хана таазны систем. Өндөрлөгөөтэй шал нийлүүлж, угсралтын ажлыг гүйцэтгэсэн.",
  },
  {
    title: "Шунхлай плаза төсөл",
    category: "Оффисын барилга",
    year: "2026",
    desc: "Шунхлай плаза төсөл. Өндөрлөгөөтэй шал нийлүүлж, угсралтын ажлыг гүйцэтгэсэн.",
  },
  {
    title: "Доечевэллэ ХХК-ийн оффис",
    category: "Оффисын барилга",
    year: "2025",
    desc: "Доечевэллэ ХХК-ийн оффис. Өндөрлөгөөтэй шал, метал тааз, шилэн партейшн хана, шилэн хаалгыг нийлүүлж, угсралтын ажлыг гүйцэтгэсэн.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-site px-6 lg:px-20">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
            Хамтарч ажилласан төсөл
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-display mb-4">
            Монгол улсад хамтарч ажилласан төслүүд
          </h2>
          <p className="text-base text-brand-gray max-w-[800px] leading-relaxed">
            Бид "Чанарыг нутагшуулна" уриатайгаар ХБНГУ-ын өндөр технологи,
            чанар стандартад нийцсэн бүтээгдэхүүнийг Монгол улсын зах зээлд
            нэвтрүүлэн, интерьерийн шийдлүүдийг гарган, оффис, үйлчилгээ,
            зочид буудлын төслүүдтэй хамтарч ажиллаж байна.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg overflow-hidden bg-brand-light hover:shadow-xl transition-all duration-300"
            >
              <div className="h-52 bg-[#e0e0e0] flex items-center justify-center relative">
                <div className="px-5 py-2.5 rounded-full bg-brand-red text-white text-sm font-bold">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-black text-white text-xs">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-brand-red uppercase mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
