const contactInfo = [
  {
    title: "Хаяг",
    value:
      "Монгол улс, Улаанбаатар хот, Хан-уул дүүргийн 20-р хороо, Үйлдвэр /17042/, Чингисийн өргөн чөлөө, 112/5 тоот",
  },
  { title: "Утас", value: "+976-80081414" },
  { title: "И-мэйл", value: "urnaa@deutschewelle.mn" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-light py-24 lg:py-28">
      <div className="mx-auto max-w-site px-6 lg:px-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[3px] text-brand-red uppercase mb-4">
            Холбоо барих
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black font-display">
            Бидэнтэй холбогдох
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="w-full lg:w-[520px] space-y-8">
            {contactInfo.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-bold text-brand-black mb-1">{item.title}</h3>
                <p className="text-base text-brand-gray leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <form className="flex-1 space-y-5">
            {[
              { label: "Нэр", type: "text" },
              { label: "И-мэйл", type: "email" },
              { label: "Мессеж", type: "textarea" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium text-brand-black mb-1.5">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white border border-brand-border focus:outline-none focus:border-brand-black transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full h-[50px] px-4 rounded-md bg-white border border-brand-border focus:outline-none focus:border-brand-black transition-colors"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full h-14 rounded-md bg-brand-black text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Илгээх
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
