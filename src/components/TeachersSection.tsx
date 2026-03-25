import { motion } from "framer-motion";
import { Send } from "lucide-react";

const TeachersSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Chi ti <span className="text-primary italic">accompagnerà</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Due professionisti che hanno aiutato centinaia di persone a ritrovare il contatto con il proprio corpo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              name: "Michela",
              role: "Esperta in Pavimento Pelvico e Core",
              description:
                "Con passione e delicatezza, Michela ti guida nell'esplorazione del tuo corpo. Sa quanto possa essere difficile parlare di certi argomenti — e per questo crea uno spazio sicuro, dove ogni domanda è benvenuta e ogni passo è rispettato.",
              imagePlaceholder: "M",
            },
            {
              name: "Moreno",
              role: "Specialista in Movimento Funzionale",
              description:
                "Moreno porta chiarezza e competenza in ogni lezione. Con un approccio professionale ma accessibile, ti accompagna negli esercizi pratici con attenzione al dettaglio e rispetto per il tuo corpo.",
              imagePlaceholder: "M",
            },
          ].map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border text-center"
            >
              {/* Replace with actual photo: <img src="..." /> */}
              <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 text-4xl font-display text-primary font-bold border-4 border-primary/20">
                {teacher.imagePlaceholder}
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-1">
                {teacher.name}
              </h3>
              <p className="text-sm text-primary font-semibold font-body mb-4">
                {teacher.role}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                {teacher.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-sage-light/50 text-sage-dark rounded-full px-5 py-2.5 font-body text-sm">
            <Send className="w-4 h-4" />
            Ti aspettiamo dal vivo sul canale Telegram il <strong>20 aprile</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachersSection;
