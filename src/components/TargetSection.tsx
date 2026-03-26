import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const RED = "#bd4033";

const items = [
  "Hai piccole perdite quando ridi, starnutisci o fai sforzi",
  "Senti pesantezza o fastidio nella zona pelvica",
  "Hai scoperto di avere una diastasi addominale",
  "Sei in gravidanza o nel post parto e vuoi prenderti cura del tuo corpo",
  'La tua pancia "spinge fuori" e non capisci perché',
  "Vuoi capire cosa succede nel tuo corpo e iniziare a stare meglio",
];

const TargetSection = () => {
  return (
    <>
      {/* BLOCCO A – checklist */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-5 leading-tight">
                Ti riconosci in{" "}
                <span className="italic" style={{ color: RED }}>
                  qualcuna di queste situazioni?
                </span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-7">
                Non sei solə. Sono situazioni più comuni di quanto pensi - e
                il primo passo è capire cosa sta succedendo. CORE 101 è qui per questo.
              </p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body border"
                style={{
                  backgroundColor: RED + "0e",
                  borderColor: RED + "28",
                  color: "hsl(var(--foreground))",
                }}
              >
                <span style={{ color: RED }}>👥</span>
                Oltre <strong style={{ color: RED }}>300 donnə</strong> si sono già iscrittə nelle edizioni precedenti
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: RED }} />
                  <span className="text-sm font-body text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>

          </div>
        </div>
      </section>

      {/* BLOCCO B – immagine a tutto schermo con riquadro centrale */}
      <section className="relative w-full min-h-[520px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80"
          alt="Donna in momento di cura di sé nel post parto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(30,15,10,0.62) 0%, rgba(80,30,20,0.45) 100%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto px-6 py-12 sm:px-14 sm:py-14 text-center rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
            style={{
              backgroundColor: RED + "25",
              borderColor: RED + "60",
              color: "#ffd6d0",
            }}
          >
            ◆ Training live su Telegram - dal 20 aprile
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4 leading-tight">
            Il tuo corpo non è rotto.
            <br />
            Ha solo bisogno di essere{" "}
            <span className="italic" style={{ color: "#ffb3a7" }}>ascoltato.</span>
          </h3>

          <p className="text-white/80 font-body leading-relaxed mb-8 text-sm sm:text-base">
            Con CORE 101 impari a riconoscere i segnali del tuo corpo, a
            capire cosa sta succedendo e a iniziare a muoverti con
            consapevolezza - dal vivo con Michela e Moreno, ogni giorno per 2 settimane.
          </p>

          <a
            href="#iscrizione"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: RED }}
          >
            Voglio iscrivermi gratis →
          </a>

          <p className="text-white/50 font-body text-xs mt-4">
            ◇ Gratuito - ◇ Inizia il 20 aprile - ◇ Su Telegram
          </p>
        </motion.div>

      </section>
    </>
  );
};

export default TargetSection;
