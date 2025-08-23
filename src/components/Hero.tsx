import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] grid place-items-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Runway background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-white/80 uppercase tracking-[0.35em] text-xs sm:text-sm mb-4">
          Fashion Show • Addis Ababa
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight">
          Elysian Runway 2025
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          August 30, 2025 • Skylight Hall
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="inline-flex items-center rounded-2xl border border-white/90 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            Reserve Seat
          </a>
          <a
            href="#schedule"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("schedule");
            }}
            className="inline-flex items-center rounded-2xl border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View Highlights
          </a>
        </div>
      </motion.div>
    </section>
  );
}
