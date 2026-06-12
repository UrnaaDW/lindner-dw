"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Нүүр", href: "/" },
  { label: "Бидний тухай", href: "/#about" },
  { label: "Бүтээгдэхүүн", href: "/#products" },
  { label: "Төслүүд", href: "/#projects" },
  { label: "Галерей", href: "/gallery" },
  { label: "Холбоо барих", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="mx-auto max-w-site px-6 lg:px-[60px]">
        <div className="flex h-[90px] items-center justify-between">
          <a href="/" className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-brand-red" />
            <span className="text-[22px] font-bold text-brand-black font-display tracking-wide">
              ДОЕЧЕВЭЛЛЭ
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-brand-black hover:text-brand-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.lindner-group.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2.5 rounded bg-brand-light text-sm font-semibold text-brand-red hover:bg-brand-border transition-colors"
            >
              Lindner
            </a>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-brand-black py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.lindner-group.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-brand-light text-sm font-semibold text-brand-red w-fit"
              onClick={() => setOpen(false)}
            >
              Lindner
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
