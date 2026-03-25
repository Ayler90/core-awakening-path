import { motion } from "framer-motion";
import { PlayCircle, Dumbbell } from "lucide-react";
import { useState } from "react";

const videos = [
  { day: 1, title: "Introduzione a Core 101", practical: false },
  { day: 2, title: "Il Core Profondo – Anatomia e Funzioni", practical: false },
  { day: 3, title: "Allineamento e Postura", practical: true },
  { day: 4, title: "Il Diaframma – Funzioni e Importanza", practical: false },
  { day: 5, title: "Respirazione Diaframmatica – Esercizio Guidato", practical: true },
  { day: 6, title: "Il Pavimento Pelvico – Cos'è e Funzioni", practical: false },
  { day: 7, title: "Visualizzazioni per il Pavimento Pelvico", practical: true },
  { day: 8, title: "Il Muscolo Trasverso – Funzioni e Importanza", practical: false },
  { day: 9, title: "Pressione Intra-Addominale – Stress Test", practical: true },
  { day: 10, title: "La Diastasi Addominale – Cos'è e Perché Conoscerla", practical: false },
  { day: 11, title: "Auto-Valutazione della Diastasi", practical: true },
  { day: 12, title: "Conoscersi Davvero – Guardarsi è Rivoluzionario", practical: true },
  { day: 13, title: "Stretching per il Pavimento Pelvico", practical: true },
  { day: 14, title: "I Tuoi Prossimi Passi con Core Foundation", practical: false },
];

const CurriculumSection = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedVideos = expanded ? videos : videos.slice(0, 7);

  return (
    <section className="py-20 lg:py-28 bg-warm-peach/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Il Programma <span className="text-primary italic">Completo</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            14 video in 2 settimane — teoria, esercizi pratici guidati e test per conoscere il tuo corpo.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm font-body">
            <span className="flex items-center gap-2 text-muted-foreground">
              <PlayCircle className="w-4 h-4 text-primary" /> Teoria
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Dumbbell className="w-4 h-4 text-secondary" /> Esercizio Pratico
            </span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {displayedVideos.map((video, index) => (
            <motion.div
              key={video.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                video.practical
                  ? "bg-sage-light/40 border-sage/20"
                  : "bg-background border-border"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold font-body ${
                  video.practical
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-accent text-foreground"
                }`}
              >
                {video.day}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground font-body text-sm sm:text-base">
                  {video.title}
                </p>
              </div>
              {video.practical ? (
                <Dumbbell className="w-5 h-5 text-secondary flex-shrink-0" />
              ) : (
                <PlayCircle className="w-5 h-5 text-primary/60 flex-shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-6">
            <button
              onClick={() => setExpanded(true)}
              className="text-primary font-semibold font-body hover:underline transition-all"
            >
              Mostra tutti i 14 video ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurriculumSection;
