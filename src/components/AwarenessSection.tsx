import { motion } from "framer-motion";

const AwarenessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-warm-peach/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ma cos'è il{" "}
              <span className="text-primary italic">pavimento pelvico</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Forse ne hai sentito parlare, ma nessuno te lo ha mai spiegato davvero.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-6 lg:p-8 shadow-card border border-border"
            >
              <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                Il <strong>pavimento pelvico</strong> è un insieme di muscoli che si trova alla base del bacino. 
                È come un'<em>amaca</em> che sostiene i tuoi organi interni — vescica, utero, intestino.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Quando funziona bene, non ci pensi nemmeno. Ma quando qualcosa non va, il corpo te lo fa sentire: 
                piccole perdite quando ridi o starnutisci, una sensazione di pesantezza, la pancia che "spinge fuori", 
                difficoltà a trattenere lo stimolo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-6 lg:p-8 shadow-card border border-border"
            >
              <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                🤰 La <strong>gravidanza</strong>, il <strong>parto</strong>, ma anche la vita quotidiana, lo stress 
                e la postura possono indebolirlo o renderlo troppo rigido.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Il bello è che <strong className="text-foreground">si può lavorarci</strong>. Con gli esercizi giusti, 
                la respirazione e un po' di consapevolezza, puoi ritrovare il contatto con il tuo corpo e 
                migliorare questi sintomi. Ed è esattamente quello che faremo insieme in CORE 101. 💛
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-muted-foreground font-body italic text-lg">
                "Non devi convivere con questi sintomi. Meriti di capire il tuo corpo e di sentirti bene."
              </p>
              <p className="text-sm text-primary font-semibold font-body mt-2">— Michela & Moreno</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
