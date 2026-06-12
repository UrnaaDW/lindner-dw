export default function Footer() {
  const navItems = ["Нүүр", "Бидний тухай", "Бүтээгдэхүүн", "Төслүүд", "Холбоо барих"];

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-site px-6 lg:px-[60px] py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-brand-red" />
            <span className="text-lg font-bold tracking-wide">ДОЕЧЕВЭЛЛЭ ХХК</span>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © 2025 Доечевэллэ ХХК. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  );
}
