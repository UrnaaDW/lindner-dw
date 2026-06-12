export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-site px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-[520px] h-[360px] lg:h-[420px] rounded-lg bg-brand-light flex items-center justify-center">
            <div className="w-48 h-48 rounded-lg bg-brand-black" />
          </div>

          <div className="flex-1 max-w-[680px]">
            <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
              Бидний тухай
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-display leading-tight mb-6">
              Lindner брэндийн
              <br />
              Монгол дахь төлөөлөгч
            </h2>
            <p className="text-base text-brand-gray leading-[1.7] mb-6">
              Бид "Чанарыг нутагшуулна" уриатайгаар ХБНГУ-ын өндөр технологи,
              чанар стандартад нийцсэн бүтээгдэхүүнийг Монгол улсын зах зээлд
              нэвтрүүлэн, интерьерийн шийдлүүдийг гарган, оффис, үйлчилгээ,
              зочид буудлын төслүүдтэй хамтарч ажиллаж байна.
            </p>
            <div className="w-16 h-[3px] bg-brand-gold mb-8" />
            <div className="flex gap-10">
              {[
                ["2013", "Байгуулагдсан"],
                ["200+", "Төслүүд"],
                ["100+", "Ажилтан"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-brand-black">{value}</p>
                  <p className="text-xs text-brand-gray mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
