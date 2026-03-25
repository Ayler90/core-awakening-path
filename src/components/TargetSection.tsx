import { motion } from "framer-motion";
import { Check } from "lucide-react";

const targets = [
  "Soffri di incontinenza, prolasso o urgenza",
  "Hai scoperto di avere una diastasi addominale",
  "Sei in gravidanza o nel post parto",
  "Vuoi capire meglio il tuo pavimento pelvico",
  "Senti tensione, pesantezza o fastidio nella zona pelvica",
  "Vuoi iniziare ad allenarti partendo dal centro, con consapevolezza",
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
              Questo percorso è per te{" "}
              <span className="text-primary italic">se...</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              CORE 101 è pensato per chiunque voglia iniziare a prendersi cura
              del proprio core profondo in modo sicuro e consapevole, guidatə da
              professionisti del settore.
            </p>
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
