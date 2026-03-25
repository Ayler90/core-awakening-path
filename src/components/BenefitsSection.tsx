import { motion } from "framer-motion";
import { Heart, Wind, Shield, Baby, Zap, Eye } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Pavimento Pelvico",
    description: "Imparerai a sentirlo, capirlo e prendertene cura — con gentilezza, al tuo ritmo.",
  },
  {
    icon: Wind,
    title: "Respirazione Diaframmatica",
    description: "Scoprirai come il respiro è il primo alleato del tuo core — e come usarlo ogni giorno.",
  },
  {
    icon: Shield,
    title: "Core Profondo",
    description: "Capirai come diaframma, pavimento pelvico e trasverso lavorano insieme per sostenerti.",
  },
  {
    icon: Baby,
    title: "Gravidanza & Post Parto",
    description: "Esercizi sicuri e pensati per te, che tu sia in attesa o stia ritrovando il tuo corpo dopo il parto.",
  },
  {
    icon: Zap,
    title: "Esercizi Guidati dal Vivo",
    description: "Video pratici con test e visualizzazioni, guidati da Michela e Moreno sul canale Telegram.",
  },
  {
    icon: Eye,
    title: "Consapevolezza Corporea",
    description: "Un approccio dolce per riconnetterti al tuo corpo, senza giudizio, con curiosità e rispetto.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Cosa imparerai in{" "}
            <span className="text-primary italic">Core 101</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            14 video dal vivo su Telegram per scoprire, capire e iniziare a prenderti cura del tuo corpo — passo dopo passo, con dolcezza.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border hover:shadow-warm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
