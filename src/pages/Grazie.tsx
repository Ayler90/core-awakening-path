import { Send, ClipboardList, CalendarPlus, CheckCircle2, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const steps = [
  {
    num: 1,
    icon: Send,
    title: "Entra nel canale Telegram",
    description:
      "Il training si svolge dal vivo sul nostro canale Telegram. Entra subito per non perderti nulla: lì troverai tutti i video, gli esercizi e il supporto diretto di Michela e Moreno.",
    cta: "Entra nel canale Telegram →",
    href: "https://t.me/+PLACEHOLDER",
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Compila il questionario anonimo",
    description:
      "Aiutaci a conoscerti meglio! Rispondi a poche domande (anonime) sulla tua situazione attuale: ci permetterà di personalizzare il training e dedicare più spazio alle sfide più sentite.",
    cta: "Compila il questionario →",
    href: "https://forms.gle/PLACEHOLDER",
  },
  {
    num: 3,
    icon: CalendarPlus,
    title: "Salva la data nel calendario",
    description:
      "Aggiungi l'evento al tuo Google Calendar per ricordarti che si parte il 20 aprile. Non vorrai mica perderti il primo giorno!",
    cta: "Aggiungi al calendario →",
    href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=CORE+101+%E2%80%93+Training+Live&dates=20260420T080000Z/20260420T090000Z&details=Training+gratuito+dal+vivo+su+Telegram+con+Michela+e+Moreno.&sf=true&output=xml",
  },
];

const Grazie = () => {
  return (
    <main>
      {/* Banner top */}
      <div
        className="w-full py-3 px-4 text-center text-white font-body font-semibold text-sm sm:text-base"
        style={{ backgroundColor: "#bd4033" }}
      >
        Sei dentro! Più in basso trovi il link per accedere al canale Telegram.
      </div>
      {/* Hero ringraziamento + video */}
      <section
        className="py-16 lg:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(30 25% 97%), hsl(38 40% 95%), hsl(20 50% 92%))",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          style={{ backgroundColor: "#bd403314" }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl text-center">
          <div>
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
              style={{ backgroundColor: "#bd403318" }}
            >
              <CheckCircle2 className="w-8 h-8" style={{ color: "#bd4033" }} />
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-foreground mb-4">
              Complimenti! 🎉
              <br />
              <span className="italic" style={{ color: "#bd4033" }}>
                Il tuo posto è confermato
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-3">
              Hai appena fatto un passo importante verso il tuo benessere.
              Il training <strong className="text-foreground">CORE 101</strong> inizia il{" "}
              <strong className="text-foreground">20 aprile</strong>, dal vivo su Telegram,
              e noi non vediamo l'ora di accompagnarti in questo percorso. 💛
            </p>

            <p className="text-base text-muted-foreground font-body leading-relaxed mb-5">
              Ti abbiamo inviato un'email di conferma con tutte le informazioni.
            </p>

            {/* Avviso email */}
            <div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border text-left max-w-md mx-auto mb-10"
              style={{
                backgroundColor: "#bd403310",
                borderColor: "#bd403330",
              }}
            >
              <Mail className="w-5 h-5 shrink-0" style={{ color: "#bd4033" }} />
              <p className="text-sm font-body text-foreground">
                <strong>Non trovi l'email?</strong> Controlla nelle cartelle{" "}
                <strong>Spam</strong> e <strong>Promozioni</strong> e, se la trovi lì,
                spostala in <strong>Posta in Arrivo</strong> per non perderti le prossime comunicazioni.
              </p>
            </div>
          </div>

          {/* Video */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-2">
              Un messaggio per te
            </h2>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Vogliamo darti il benvenuto all'interno del training che partirà il 20 aprile e spiegarti cosa faremo insieme.
            </p>
          </div>
        </div>

        {/* Video allargato oltre il container del testo */}
        <div
          className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-muted border border-border shadow-sm">
            {/* Placeholder - sostituire con embed YouTube */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-sm">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#bd403318" }}
                >
                  <svg viewBox="0 0 24 24" fill="#bd4033" className="w-7 h-7 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-foreground">Video di benvenuto</p>
                <p className="text-xs mt-1">Inserisci qui l'embed del video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prossimi passi */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(30 25% 97%) 0%, hsl(0 0% 100%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
              Ecco i tuoi prossimi passi
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Completa questi 3 semplici step per prepararti al meglio al training.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
                    style={{ backgroundColor: "#bd4033" }}
                  >
                    {step.num}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-display text-foreground mb-2 flex items-center gap-2">
                      <step.icon className="w-4 h-4" style={{ color: "#bd4033" }} />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold font-body text-sm transition-all hover:opacity-90 shadow-sm"
                      style={{ backgroundColor: "#bd4033" }}
                    >
                      {step.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Grazie;
