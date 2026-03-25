import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Il training è davvero gratuito?",
    answer:
      "Sì, CORE 101 è completamente gratuito. 14 video in 2 settimane, dal vivo sul nostro canale Telegram. Non ti verrà chiesto nessun pagamento e nessuna carta di credito.",
  },
  {
    question: "Come funziona il training su Telegram?",
    answer:
      "Una volta iscrittə, riceverai il link al nostro canale Telegram. Ogni giorno, a partire dal 20 aprile, pubblicheremo un nuovo video con la lezione del giorno. Potrai guardarlo quando vuoi durante la giornata e fare domande nel gruppo.",
  },
  {
    question: "Devo avere esperienza con il pavimento pelvico?",
    answer:
      "Assolutamente no! CORE 101 è pensato proprio per chi parte da zero. Ti spieghiamo tutto dall'inizio — cos'è il pavimento pelvico, come funziona, e come iniziare a prendertene cura. Non servono conoscenze pregresse.",
  },
  {
    question: "È adatto a chi è in gravidanza o nel post parto?",
    answer:
      "Sì! Il percorso è pensato anche per chi è in gravidanza o nel post parto. Gli esercizi sono sicuri e guidati, e ti aiuteranno a capire meglio il tuo corpo in questa fase così importante.",
  },
  {
    question: "Quanto tempo devo dedicare ogni giorno?",
    answer:
      "Ogni video dura pochi minuti. Ti basteranno circa 10-15 minuti al giorno per guardare la lezione e, nei giorni di esercizio pratico, provare gli esercizi guidati.",
  },
  {
    question: "Posso recuperare i video se ne perdo uno?",
    answer:
      "Sì, i video restano disponibili sul canale Telegram, quindi puoi guardarli al tuo ritmo anche se salti un giorno. Il bello del live è che puoi fare domande in tempo reale!",
  },
  {
    question: "Cos'è Core Foundation e devo iscrivermi?",
    answer:
      "Core Foundation è il nostro percorso avanzato a pagamento — 5 settimane di allenamento quotidiano guidato. È il passo successivo dopo CORE 101, ma non sei obbligatə a iscriverti. Chi partecipa al training live avrà accesso a un bonus esclusivo.",
  },
  {
    question: "Ho un problema specifico (incontinenza, diastasi, prolasso). Questo training fa per me?",
    answer:
      "CORE 101 ti aiuta a capire meglio queste condizioni e a iniziare a lavorarci con consapevolezza. Non sostituisce una visita medica, ma ti dà gli strumenti per comprendere il tuo corpo e iniziare il percorso giusto.",
  },
];

const FaqSection = () => {
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
            Domande{" "}
            <span className="text-primary italic">frequenti</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Tutto quello che vuoi sapere prima di iscriverti. E se hai altre domande, scrivici! 💛
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-5 data-[state=open]:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left font-body font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
