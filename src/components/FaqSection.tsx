import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const RED = "#bd4033";

const faqs = [
  {
    q: "Il training è davvero gratuito?",
    a: "Sì, CORE 101 è completamente gratuito. Nessuna carta di credito richiesta, nessun abbonamento. Ti iscrivi, entri nel canale Telegram e segui i video dal vivo. Fine.",
  },
  {
    q: "Come funziona il training su Telegram?",
    a: "Dopo l'iscrizione riceverai un link per entrare nel canale Telegram dedicato. Dal 20 aprile, ogni giorno troverai un video pubblicato direttamente nel canale - potrai guardarlo quando vuoi, al tuo ritmo.",
  },
  {
    q: "Devo avere esperienza con gli esercizi?",
    a: "No. CORE 101 è pensato per chi parte da zero - o quasi. I video sono progressivi, guidati passo dopo passo, e accessibili anche se non ti sei mai allenata o non sai da dove iniziare.",
  },
  {
    q: "Posso partecipare se sono ancora in gravidanza?",
    a: "Sì. I contenuti sono pensati anche per chi è in gravidanza, sempre con un approccio sicuro e rispettoso del corpo. In caso di dubbi specifici, ti consigliamo di confrontarti con il tuo medico.",
  },
  {
    q: "Quanto tempo devo dedicarci ogni giorno?",
    a: "Ogni video dura circa 10-15 minuti. Non di più. L'obiettivo è creare una routine reale, sostenibile - non aggiungere un'altra cosa impossibile alla tua giornata.",
  },
  {
    q: "Se ho qualche domanda sul training, posso scrivervi?",
    a: "Certo - siamo qui. Puoi scriverci in qualsiasi momento all'indirizzo ciao@officinamm.com e risponderemo il prima possibile.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
            Domande{" "}
            <span className="italic" style={{ color: RED }}>frequenti</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Tutto quello che vuoi sapere prima di iscriverti. E se hai altre domande, scrivici!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: open === i ? RED + "40" : "hsl(30 20% 90%)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                style={{ backgroundColor: open === i ? RED + "06" : "hsl(30 20% 97%)" }}
              >
                <span className="font-semibold font-body text-sm text-foreground leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className="w-4 h-4 shrink-0 transition-transform duration-300"
                  style={{
                    color: RED,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pt-1 text-sm font-body text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
