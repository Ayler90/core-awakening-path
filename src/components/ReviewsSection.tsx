import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  "https://static.wixstatic.com/media/40e4ee_c9a4c60a26834b7baf16e700bcd0701f~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_0ff5c54a7be5472c944fe8cd7f27a17f~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_89afd747e9854ecdb26ede98b1655b34~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_51be0b613ed34d75b6148a1fee19a18c~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_893383b0343e402883453e32267c80a1~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_37fe33255c214efcb53c83991f7fe44d~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_ec6fcc910a4f4b97823a6d3d8ae7a492~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_70262d8f55384722be525f1928ce178d~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_a1aaff28455c4d0b9fec8907bcd294ba~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_42ea3f27301a4aff9c24752753e95b22~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_511006108ec14805a263f7eb6a12f9ac~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_fecef234c765471e895b23c5b95efaf0~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_2e3e27b9bd1441a5981620b22ad3e28c~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_85edb2672088453cb4ab82fdc3aeb86c~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_7d65ce6c722442a68c14021d401fb6cc~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_2f00330b6bc941fe9e37cac1e1cfce85~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_cfe285f75a08460ba1ce6638755bf577~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_e99a635dae764612b79adeae8fdd3d97~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_f5eb2c4e601746e68e543416856e9bdd~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_5d54bf5302f842578977d820dba19079~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_a59749993bd64dd48c80f534fabc6da0~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_3176248c96c844a3b5bfb26be58e3444~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_c35094142e2a427d8116c8f67ab215f2~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_ea6bc538dbdb4c26ac4871248121a3cc~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_229c5b1fff964c18a042e0d239d79cc8~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_e04fdffce1bc433ab719f73b9cbd3b5c~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_975b4cffac624a27b0fce078a81a024c~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_c4fff35773e34825ae5f97e07d6729e8~mv2.jpg",
  "https://static.wixstatic.com/media/40e4ee_645314aee297484c98fe0d1a3a79a6dc~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_b8740286e50342d7a55c0b2e63cdf4cd~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_32fdf895c5124d46bc4460f605be8208~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_a56dc1bed91c4bea9d8eac0c777a4669~mv2.jpeg",
  "https://static.wixstatic.com/media/40e4ee_af738bd091274f2b9d34eafe5edf6387~mv2.jpeg",
];

const VISIBLE_COUNT = 20;

const ReviewsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? reviews : reviews.slice(0, VISIBLE_COUNT);

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
          {visible.map((src, i) => (
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

        {!showAll && reviews.length > VISIBLE_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-sm border-2 transition-all hover:opacity-80"
              style={{ borderColor: RED, color: RED }}
            >
              Leggi tutte le altre recensioni ↓
            </button>
          </div>
        )}

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
