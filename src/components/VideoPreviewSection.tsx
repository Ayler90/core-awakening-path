import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  { day: 1, title: "Introduzione a Core 101" },
  { day: 2, title: "Il Core Profondo – Anatomia e Funzioni" },
  { day: 3, title: "Allineamento e Postura" },
  { day: 4, title: "Il Diaframma – Funzioni e Importanza" },
  { day: 5, title: "Respirazione Diaframmatica – Esercizio Guidato" },
  { day: 6, title: "Il Pavimento Pelvico – Cos'è e Funzioni" },
  { day: 7, title: "Visualizzazioni per il Pavimento Pelvico" },
  { day: 8, title: "Il Muscolo Trasverso – Funzioni e Importanza" },
  { day: 9, title: "Pressione Intra-Addominale – Stress Test" },
  { day: 10, title: "La Diastasi Addominale – Cos'è e Perché Conoscerla" },
  { day: 11, title: "Auto-Valutazione della Diastasi" },
  { day: 12, title: "Conoscersi Davvero – Guardarsi è Rivoluzionario" },
  { day: 13, title: "Stretching per il Pavimento Pelvico" },
  { day: 14, title: "I Tuoi Prossimi Passi con Core Foundation" },
];

const VideoPreviewSection = () => {
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
            Ecco le <span className="text-primary italic">14 lezioni</span> che ti aspettano
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Ogni giorno un nuovo video sul canale Telegram — teoria ed esercizi pratici guidati, dal vivo con Michela e Moreno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group relative bg-muted rounded-xl overflow-hidden aspect-video border border-border hover:shadow-warm transition-all cursor-pointer"
            >
              {/* Placeholder for video cover — replace src with actual YouTube thumbnails */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-primary/40 group-hover:text-primary/70 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3 pt-8">
                <span className="text-xs font-bold text-primary-foreground/80 font-body uppercase tracking-wide">
                  Giorno {video.day}
                </span>
                <p className="text-sm font-semibold text-primary-foreground font-body leading-snug mt-0.5">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPreviewSection;
