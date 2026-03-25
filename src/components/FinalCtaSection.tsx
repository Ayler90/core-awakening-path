import { motion } from "framer-motion";
import { useState } from "react";

const FinalCtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-cta opacity-95" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-6">
            Inizia il tuo percorso{" "}
            <span className="italic">oggi stesso</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body mb-4 leading-relaxed">
            14 video gratuiti per scoprire il tuo core profondo, migliorare la consapevolezza del
            pavimento pelvico e iniziare a lavorare sul tuo corpo con sicurezza.
          </p>
          <p className="text-primary-foreground/70 font-body mb-8">
            CORE 101 è la parte introduttiva e gratuita del{" "}
            <strong className="text-primary-foreground">CORE MASTERPLAN</strong> — il programma
            completo di Michela e Moreno.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email migliore"
                className="flex-1 px-5 py-3.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-lg bg-background text-foreground font-semibold font-body hover:bg-background/90 transition-all whitespace-nowrap shadow-warm"
              >
                Iscriviti Gratis →
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg p-5 max-w-lg mx-auto"
            >
              <p className="text-primary-foreground font-semibold font-body text-lg">
                🌿 Fantastico, ci sei!
              </p>
              <p className="text-primary-foreground/80 font-body mt-1">
                Controlla la tua email per iniziare CORE 101.
              </p>
            </motion.div>
          )}

          <p className="text-sm text-primary-foreground/60 mt-4 font-body">
            ✓ 100% Gratuito · ✓ 14 Video Guidati · ✓ Con Michela & Moreno
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
