export default function Hero() {
  return (
    <section className="pt-[90px] bg-brand-black">
      <div className="mx-auto max-w-site px-6 lg:px-[60px] py-32 lg:py-44 flex flex-col items-center text-center gap-5">
        <p className="text-xs font-semibold tracking-[4px] text-brand-gold uppercase">
          Lindner Group · Монгол
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white font-display max-w-[900px] leading-tight">
          Барилгын шинэ шийдлүүд
        </h1>
        <p className="text-lg md:text-xl text-[#cccccc] max-w-[680px] leading-relaxed">
          2013 оноос хойш ХБНГУ-ын Lindner группын Монгол дахь албан ёсны төлөөлөгч
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded bg-brand-red text-white font-semibold hover:bg-red-700 transition-colors"
          >
            Төслүүдийг үзэх
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors"
          >
            Бидний тухай
          </a>
        </div>
      </div>
    </section>
  );
}
