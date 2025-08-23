import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = [
  "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?q=80&w=685&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616348490852-d80c545b4f79?q=80&w=685&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659522761051-a6f5317d2859?q=80&w=710&auto=format&fit=crop",
  "https://images.unsplash.com/flagged/photo-1553277004-39d655b57262?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571924849183-a68a3879348d?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1733322991133-2de13aa12c57?q=80&w=687&auto=format&fit=crop",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Gallery
            </h2>
            <p className="mt-3 text-gray-600">
              Moments from past shows and editorials.
            </p>
          </div>
          {/* <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:no-underline"
          >
            Image Credits
          </a> */}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src + i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={src}
                alt="Fashion editorial"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20"
          >
            <X size={28} />
          </button>

          {/* Prev button */}
          <button
            onClick={showPrev}
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt="Fullscreen fashion"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Next button */}
          <button
            onClick={showNext}
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
