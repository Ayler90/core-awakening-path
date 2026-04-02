import { Droplets, Weight, CircleDashed, Zap, Heart, Eye } from "lucide-react";

const RED = "#AF2B43";
const VIOLET = "#61438C";

const benefits = [
  {
    icon: <Droplets className="w-5 h-5" />,
    color: RED,
    title: "Come ridurre le perdite di pipì nella vita quotidiana",
    text: "Nel training capirai perché succede davvero e inizierai a lavorare sulla coordinazione tra respiro, pavimento pelvico e core per ridurre le perdite nella vita quotidiana.",
  },
  {
    icon: <Weight className="w-5 h-5" />,
    color: VIOLET,
    title: "Come gestire la pressione pelvica con strategie pratiche",
    text: "Scoprirai cosa provoca quella sensazione di \"pallina\" o discesa, come gestire la pressione addominale con strategie pratiche - e perché certi movimenti peggiorano i sintomi e come cambiarli.",
  },
  {
    icon: <CircleDashed className="w-5 h-5" />,
    color: RED,
    title: "Cos'è la diastasi e come iniziare il recupero",
    text: "Ti guideremo nel capire cos'è la diastasi, cosa aggrava la separazione e quali abitudini quotidiane puoi cambiare subito per iniziare il recupero.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    color: VIOLET,
    title: "Come postura e allineamento influenzano il pavimento pelvico",
    text: "Scoprirai come le abitudini posturali di ogni giorno - stare seduta, camminare, sollevare pesi - influenzano direttamente il tuo core profondo e il pavimento pelvico, e come piccoli aggiustamenti possono fare una grande differenza.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    color: RED,
    title: "Ritrovare il contatto con il tuo pavimento pelvico",
    text: "Lavorerai sulla consapevolezza corporea - imparare a sentire il pavimento pelvico, a respirare con il diaframma, a ritrovare il contatto con l'addome - senza fretta e senza giudizio.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    color: VIOLET,
    title: "Come respiro, core e pavimento pelvico lavorano insieme",
    text: "Con CORE 101 ogni video ha un perché. Capirai come respiro, pavimento pelvico e core profondo lavorano insieme - e potrai finalmente smettere di fare cose a caso sperando che funzionino.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="pt-20 lg:pt-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
            Cosa imparerai in{" "}
            <span className="italic" style={{ color: VIOLET }}>Core 101</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            14 video sul pavimento pelvico in 2 settimane, con assistenza live su Telegram con Michela e Moreno.
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
            ◇ Training Gratuito su Telegram - dal 20 aprile - ◇ 100% gratuito
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
