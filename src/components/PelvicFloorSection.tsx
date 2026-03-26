import { motion } from "framer-motion";

const PelvicFloorSection = () => {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 96%)" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{
                backgroundColor: "#bd403312",
                borderColor: "#bd403330",
                color: "#bd4033",
              }}
            >
              ◆ Training live su Telegram - 20 aprile
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
              La causa si chiama{" "}
              <span className="italic" style={{ color: "#bd4033" }}>
                pavimento pelvico
              </span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Forse ne hai sentito parlare. Ma nessuno te lo ha mai spiegato davvero.
            </p>
          </motion.div>

          <div className="space-y-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm"
            >
              <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                Il <strong>pavimento pelvico</strong> è un insieme di muscoli che
                si trova alla base del bacino. È come un'{" "}
                <em style={{ color: "#bd4033" }}>amaca</em> che sostiene i tuoi
                organi interni - vescica, utero, intestino.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Quando funziona bene, non ci pensi nemmeno. Ma quando qualcosa non
                va, il corpo te lo fa sentire: piccole perdite quando ridi o
                starnutisci, una sensazione di pesantezza, la pancia che "spinge
                fuori", difficoltà a trattenere lo stimolo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm"
            >
              <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                La <strong>gravidanza</strong>, il <strong>parto</strong>, ma anche
                la vita quotidiana, lo stress e la postura possono indebolirlo o
                renderlo troppo rigido.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Il bello è che{" "}
                <strong className="text-foreground">si può lavorarci</strong>. Con
                gli esercizi giusti, la respirazione e un po' di consapevolezza,
                puoi ritrovare il contatto con il tuo corpo e migliorare questi
                sintomi. Ed è esattamente quello che faremo insieme in CORE 101.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-6 lg:p-8 border text-center"
              style={{ backgroundColor: "#bd403310", borderColor: "#bd403330" }}
            >
              <p className="text-foreground font-display font-bold text-xl mb-2">
                Vuoi iniziare a capire il tuo corpo?
              </p>
              <p className="text-muted-foreground font-body text-sm mb-5">
                CORE 101 inizia il 20 aprile - dal vivo su Telegram, completamente gratuito.
              </p>
              <a
                href="#iscrizione"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: "#bd4033" }}
              >
                Iscriviti al training gratuito →
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PelvicFloorSection;
