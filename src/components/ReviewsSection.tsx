import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 max-w-5xl mx-auto">
          {reviews.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden border shadow-sm"
              style={{ borderColor: "hsl(30 20% 90%)" }}
            >
              <img
                src={src}
                alt={`Recensione ${i + 1}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
