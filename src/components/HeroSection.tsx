import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-wellness.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/40 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage-light/50 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-20 lg:pt-20 lg:pb-28 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-sage-dark text-sm font-semibold tracking-wide uppercase font-body">
            Percorso Gratuito · 14 Video · 2 Settimane
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
              Scopri il tuo{" "}
              <span className="text-primary italic">Core Profondo</span>
              <br />
              in 14 giorni
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-4">
              Un percorso gratuito con <strong className="text-foreground">Michela e Moreno</strong> per
              ritrovare consapevolezza del pavimento pelvico e della parete addominale.
            </p>
            <p className="text-base text-muted-foreground font-body mb-8">
              Ideale per chi soffre di <em>diastasi</em>, <em>incontinenza</em>, <em>prolasso</em> o
              vuole prendersi cura del proprio corpo in gravidanza e nel post parto.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email migliore"
                  className="flex-1 px-5 py-3.5 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-lg gradient-cta text-primary-foreground font-semibold font-body shadow-warm hover:opacity-90 transition-all whitespace-nowrap"
                >
                  Iscriviti Gratis →
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage-light/60 border border-sage/20 rounded-lg p-5 max-w-lg"
              >
                <p className="text-sage-dark font-semibold font-body text-lg">🌿 Sei dentro!</p>
                <p className="text-muted-foreground font-body mt-1">
                  Controlla la tua email per iniziare il percorso.
                </p>
              </motion.div>
            )}

            <p className="text-sm text-muted-foreground mt-4 font-body">
              ✓ Completamente gratuito · ✓ Nessuna carta richiesta · ✓ Accesso immediato
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img
                src={heroImage}
                alt="Esercizio di respirazione e consapevolezza del core profondo"
                className="w-full h-auto object-cover aspect-[16/10]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border"
            >
              <p className="text-sm font-semibold text-foreground font-body">Con Michela & Moreno</p>
              <p className="text-xs text-muted-foreground font-body">OfficinaMM</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
