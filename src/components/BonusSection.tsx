import { motion } from "framer-motion";
import { Gift, ArrowRight, Calendar, MessageCircle, Video } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-6">
              <Gift className="w-4 h-4" />
              Anteprima Esclusiva
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Dopo CORE 101, si apre{" "}
              <span className="text-primary italic">Core Foundation</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              CORE 101 è solo l'inizio. Al termine del training gratuito, apriremo le iscrizioni a{" "}
              <strong className="text-foreground">CORE FOUNDATION</strong> — il percorso completo per 
              allenare il tuo pavimento pelvico e core profondo con esercizi quotidiani guidati.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-accent/40 to-warm-peach/40 rounded-2xl p-6 lg:p-8 border border-primary/15 mb-8"
          >
            <div className="flex items-start gap-3 mb-5">
              <Gift className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">
                  🎁 Bonus speciale per chi partecipa al training live
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Chi segue CORE 101 dal vivo su Telegram avrà accesso a un <strong className="text-foreground">bonus esclusivo</strong> riservato 
                  solo ai partecipanti del training. I dettagli verranno svelati durante il percorso!
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Video,
                title: "5 settimane",
                description: "Video guidati da 10 min al giorno, progressivi e mirati",
              },
              {
                icon: MessageCircle,
                title: "Supporto quotidiano",
                description: "Gruppo Telegram dedicato con contatto diretto ogni giorno",
              },
              {
                icon: Calendar,
                title: "2 LIVE in diretta",
                description: "Sessioni dal vivo per confrontarti e allenarti insieme",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-xl p-5 border border-border text-center"
              >
                <feature.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h4 className="font-semibold font-body text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href="https://www.officinamm.com/iscrizione"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:underline transition-all"
            >
              Scopri di più su Core Foundation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
