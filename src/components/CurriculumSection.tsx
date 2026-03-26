import { motion } from "framer-motion";
import { Play } from "lucide-react";

const RED = "#bd4033";

const videos = [
  {
    thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&q=80",
    day: "Giorno 1",
    title: "Il pavimento pelvico - cos'è e dove si trova",
    duration: "12 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&q=80",
    day: "Giorno 2",
    title: "Respira: il diaframma è il tuo primo alleato",
    duration: "10 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=640&q=80",
    day: "Giorno 3",
    title: "Sentire il pavimento pelvico - il primo contatto",
    duration: "14 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=640&q=80",
    day: "Giorno 4",
    title: "Core profondo - diaframma, trasverso e pavimento pelvico",
    duration: "11 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=640&q=80",
    day: "Giorno 5",
    title: "Perdite e sforzi - perché succede e cosa fare",
    duration: "13 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=640&q=80",
    day: "Giorno 6",
    title: "Diastasi addominale - riconoscerla e iniziare il recupero",
    duration: "15 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=640&q=80",
    day: "Giorno 7",
    title: "Pressione addominale - come gestirla nella vita quotidiana",
    duration: "10 min",
  },
  {
    thumb: "https://images.unsplash.com/photo-1593810451137-5dc55105dace?w=640&q=80",
    day: "Giorno 8 - 14",
    title: "Esercizi guidati dal vivo + sessioni di domande",
    duration: "7 video",
  },
];

const CurriculumSection = () => {
  return (
    <section id="programma" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 max-w-2xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
            style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
          >
            ◆ Training live su Telegram - dal 20 aprile
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
            I video del{" "}
            <span className="italic" style={{ color: RED }}>training</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            14 video in 2 settimane - un argomento al giorno, in progressione.
            Ogni video è breve, pratico e pensato per essere seguito anche con pochi minuti a disposizione.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden border flex flex-col"
              style={{ borderColor: "hsl(30 20% 90%)" }}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: RED }}
                  >
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <span
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold font-body text-white"
                  style={{ backgroundColor: RED }}
                >
                  {v.day}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-1 flex-1">
                <p className="text-sm font-semibold font-display text-foreground leading-snug">{v.title}</p>
                <p className="text-xs font-body mt-auto pt-2" style={{ color: RED + "cc" }}>
                  ◇ {v.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#iscrizione"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: RED }}
          >
            Voglio seguire il training dal vivo →
          </a>
          <p className="text-xs text-muted-foreground font-body mt-3">
            ◇ Gratuito - ◇ Dal 20 aprile su Telegram - ◇ Accesso immediato al canale dopo l'iscrizione
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CurriculumSection;
