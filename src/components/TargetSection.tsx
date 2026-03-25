import { motion } from "framer-motion";
import { Check, Users } from "lucide-react";

const targets = [
  "Hai piccole perdite quando ridi, starnutisci o fai sforzi",
  "Senti pesantezza o fastidio nella zona pelvica",
  "Hai scoperto di avere una diastasi addominale",
  "Sei in gravidanza o nel post parto e vuoi prenderti cura del tuo corpo",
  "La tua pancia \"spinge fuori\" e non capisci perché",
  "Vuoi capire cosa succede nel tuo corpo e iniziare a stare meglio",
];

const TargetSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Ti riconosci in{" "}
              <span className="text-primary italic">qualcuna di queste situazioni?</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Non sei sola. Sono situazioni più comuni di quanto pensi — e il primo passo è capire cosa sta succedendo.
              CORE 101 è qui per questo. 💛
            </p>
            <div className="flex items-center gap-2 text-sm font-body text-muted-foreground bg-accent/30 rounded-lg p-3">
              <Users className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Oltre <strong className="text-foreground">300 persone</strong> si sono già iscritte nelle edizioni precedenti</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {targets.map((target, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                </div>
                <p className="text-foreground font-body">{target}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
