import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";

const RED = "#bd4033";

const reviews = [
  "https://static.wixstatic.com/media/40e4ee_ac844cd9c7d34870a3750067c2f66974~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_eeb8cb03df2d4527a41544b250826c61~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_d0a971609621468485f9edb5cc0f63a0~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_f2c788489afe470ca9d8e62fbe570962~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_ac44822aea314c8f96979b6f511748da~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_08fceb317ba1424b9b5eeb163d2f86df~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_9fca9dedca28462ea95c56be11b3728e~mv2.jpg",
];

const ReviewsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
            Cosa dice chi ha partecipato alle{" "}
            <span className="italic" style={{ color: RED }}>edizioni precedenti</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-5">
            Oltre 300 persone hanno già seguito CORE 101. Ecco alcune delle loro esperienze.
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: RED }} />
            ))}
          </div>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 max-w-5xl mx-auto">
          {reviews.map((src, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden border shadow-sm cursor-zoom-in"
              style={{ borderColor: "hsl(30 20% 90%)" }}
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Recensione ${i + 1}`}
                className="w-full h-auto block transition-opacity hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <X className="w-5 h-5" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selected}
              alt="Recensione"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewsSection;
