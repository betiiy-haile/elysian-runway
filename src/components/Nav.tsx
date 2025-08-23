import { useState } from "react";
import type { Section } from "../types";

const sections: Section[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "schedule", label: "Highlights" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Register" },
];

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("hero");
          }}
          className="font-semibold tracking-wide text-lg"
        >
          Elysian Runway
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              {s.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
            className="inline-flex items-center rounded-2xl border border-gray-900 px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            Register
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-900"
          aria-label="Toggle menu"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80">
          <div className="px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="text-left px-2 py-2 rounded-xl hover:bg-gray-100"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
