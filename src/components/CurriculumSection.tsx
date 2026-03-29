import { Play } from "lucide-react";

const RED = "#bd4033";

const videos = [
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_6693434b49a043ef8db54847dd7a1386~mv2.png",
    day: "Introduzione",
    title: "Il pavimento pelvico - cos'è e dove si trova",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_d1b08dd959a0472e84eb8da0073bf187~mv2.png",
    day: "Giorno 1",
    title: "Respira: il diaframma è il tuo primo alleato",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_aefdd7284001497d935aae477c55f3ba~mv2.png",
    day: "Giorno 2",
    title: "Sentire il pavimento pelvico - il primo contatto",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_dedaece22b414536b7afd87caeacbebc~mv2.png",
    day: "Giorno 3",
    title: "Core profondo - diaframma, trasverso e pavimento pelvico",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_931754391e2f4cb3894e45f7f4a0f541~mv2.png",
    day: "Giorno 4",
    title: "Perdite e sforzi - perché succede e cosa fare",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_0181bc66abb849b788f2892420e1f5a3~mv2.png",
    day: "Giorno 5",
    title: "Diastasi addominale - riconoscerla e iniziare il recupero",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_9ec8af03953d441fad166c0353ae0a22~mv2.png",
    day: "Giorno 6",
    title: "Pressione addominale - come gestirla nella vita quotidiana",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_22d552b114704159bd83588cf694e905~mv2.png",
    day: "Giorno 7",
    title: "Esercizi guidati dal vivo - prima sessione",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_b80e8a94931f4c7fac047e78781c12c4~mv2.png",
    day: "Giorno 8",
    title: "Rilascio e mobilità - sciogliere le tensioni",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_defd223bb7634f70adb6a72d060184ef~mv2.png",
    day: "Giorno 9",
    title: "Integrazione nel quotidiano - abitudini che supportano il recupero",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_be6d0b9f501f4f16ae635745ffc72366~mv2.png",
    day: "Giorno 10",
    title: "Esercizi guidati dal vivo - seconda sessione",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_a8ab5e5c3e55410b966440970f71346b~mv2.png",
    day: "Giorno 11",
    title: "Connessione corpo-mente - ritrovare la fiducia nel tuo corpo",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_b4c5d57aea3c4c5ea80ba46f39d4571d~mv2.png",
    day: "Giorno 12",
    title: "Domande dal vivo - sessione di Q&A con Michela e Moreno",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_cb2d1d643a584fe087a6481c250bd982~mv2.png",
    day: "Giorno 13",
    title: "Chiusura e prossimi passi - cosa fare dopo CORE 101",
  },
  {
    thumb: "https://static.wixstatic.com/media/40e4ee_b1b85528436b49219582f1696d6f6cb2~mv2.png",
    day: "Giorno 14",
    title: "Recap finale e prossimi passi",
  },
];

const CurriculumSection = () => {
  return (
    <section id="programma" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div
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
            14 video in 2 settimane, un argomento al giorno in progressione.
            Ogni video è breve, pratico e pensato per essere seguito anche con pochi minuti a disposizione.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-12">
          {videos.map((v, i) => (
            <div
              key={i}
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
              </div>
            </div>
          ))}
        </div>

        <div
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
        </div>

      </div>
    </section>
  );
};

export default CurriculumSection;
