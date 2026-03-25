import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, placeholder: "Screenshot recensione 1" },
  { id: 2, placeholder: "Screenshot recensione 2" },
  { id: 3, placeholder: "Screenshot recensione 3" },
  { id: 4, placeholder: "Screenshot recensione 4" },
  { id: 5, placeholder: "Screenshot recensione 5" },
  { id: 6, placeholder: "Screenshot recensione 6" },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-peach/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Cosa dicono chi ha{" "}
            <span className="text-primary italic">partecipato</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Oltre 300 persone hanno già seguito CORE 101. Ecco alcune delle loro esperienze.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background rounded-xl border border-border shadow-card overflow-hidden aspect-[3/4] flex items-center justify-center"
            >
              {/* Replace with actual screenshot: <img src="..." className="w-full h-full object-cover" /> */}
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💬</span>
                </div>
                <p className="text-sm text-muted-foreground font-body">
                  {review.placeholder}
                </p>
                <p className="text-xs text-muted-foreground/60 font-body mt-2">
                  Inserisci qui lo screenshot
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
