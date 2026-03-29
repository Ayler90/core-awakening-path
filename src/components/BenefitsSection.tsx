import { Droplets, Weight, CircleDashed, Zap, Heart, Eye } from "lucide-react";

const RED = "#bd4033";
const VIOLET = "#6b5fa6";

const benefits = [
  {
    icon: <Droplets className="w-5 h-5" />,
    color: RED,
    title: "Perdi pipì quando ridi, starnutisci o salti",
    text: "Nel training live capirai perché succede davvero - non è inevitabile - e inizierai a lavorare sulla coordinazione tra respiro, pavimento pelvico e core per ridurre le perdite nella vita quotidiana.",
  },
  {
    icon: <Weight className="w-5 h-5" />,
    color: VIOLET,
    title: "Senti pesantezza o pressione in vagina",
    text: "Scoprirai cosa provoca quella sensazione di \"pallina\" o discesa, come gestire la pressione addominale con strategie pratiche - e perché certi movimenti peggiorano i sintomi e come cambiarli.",
  },
  {
    icon: <CircleDashed className="w-5 h-5" />,
    color: RED,
    title: "La pancia è gonfia e senti un avvallamento al centro",
    text: "Michela e Moreno ti guidano - dal vivo su Telegram - nel capire cos'è la diastasi, cosa aggrava la separazione e quali abitudini quotidiane puoi cambiare subito per iniziare il recupero.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    color: VIOLET,
    title: "Non sai da dove iniziare e hai paura di fare danni",
    text: "14 video in 2 settimane - dal 20 aprile - costruiti in progressione. Niente salti nel vuoto, niente contraddizioni: un filo conduttore chiaro per tornare a muoverti con fiducia.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    color: RED,
    title: "Senti il tuo corpo come qualcosa di estraneo",
    text: "Lavorerai sulla consapevolezza corporea - imparare a sentire il pavimento pelvico, a respirare con il diaframma, a ritrovare il contatto con l'addome - senza fretta e senza giudizio.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    color: VIOLET,
    title: "Hai provato esercizi a caso ma non hai visto risultati",
    text: "Con CORE 101 ogni video ha un perché. Capirai come respiro, pavimento pelvico e core profondo lavorano insieme - e potrai finalmente smettere di fare cose a caso sperando che funzionino.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
            Cosa imparerai in{" "}
            <span className="italic" style={{ color: VIOLET }}>Core 101</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            14 video dal vivo su Telegram per scoprire, capire e iniziare a
            prenderti cura del tuo corpo - passo dopo passo, con dolcezza.
            Inizia il{" "}
            <span className="font-semibold" style={{ color: RED }}>20 aprile</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "hsl(30 20% 97%)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: b.color + "18", color: b.color }}
              >
                {b.icon}
              </div>
              <h3 className="font-bold font-display text-base text-foreground leading-snug">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.text}</p>
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
            Iscriviti gratis al training →
          </a>
          <p className="text-xs text-muted-foreground font-body mt-3">
            ◇ Training live dal 20 aprile su Telegram - ◇ 100% gratuito
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
