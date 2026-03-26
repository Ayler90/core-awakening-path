import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const RED = "#bd4033";

const placeholders = [
  { label: "Screenshot recensione 1" },
  { label: "Screenshot recensione 2" },
  { label: "Screenshot recensione 3" },
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

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-3 py-16 px-6 text-center"
              style={{ borderColor: RED + "30", backgroundColor: RED + "06" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: RED + "15" }}
              >
                <MessageSquare className="w-5 h-5" style={{ color: RED }} />
              </div>
              <p className="text-sm font-semibold font-body" style={{ color: RED }}>{p.label}</p>
              <p className="text-xs text-muted-foreground font-body">Inserisci qui lo screenshot</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
