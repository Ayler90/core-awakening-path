import { motion } from "framer-motion";

const TeachersSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            I tuoi <span className="text-primary italic">Insegnanti</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            {
              name: "Michela",
              role: "Esperta in Pavimento Pelvico e Core",
              description:
                "Guida con passione e delicatezza nell'esplorazione del corpo, aiutandoti a ritrovare consapevolezza e fiducia nel tuo pavimento pelvico.",
              emoji: "🌸",
            },
            {
              name: "Moreno",
              role: "Specialista in Movimento Funzionale",
              description:
                "Con un approccio attento e professionale, ti accompagna in esercizi mirati per rafforzare il core profondo in modo sicuro.",
              emoji: "🌿",
            },
          ].map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 text-3xl">
                {teacher.emoji}
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
      </div>
    </section>
  );
};

export default TeachersSection;
