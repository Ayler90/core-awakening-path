import { CheckCircle2, Mail, ClipboardList, Send } from "lucide-react";
import Footer from "@/components/Footer";

const RED = "#AF2B43";

const steps = [
  {
    num: 1,
    icon: Mail,
    title: "Controlla la tua email",
    description:
      "La guida gratuita è in arrivo nella tua casella di posta. Troverai il PDF da scaricare e il link per accedere al mini training via email. Se non la vedi, controlla nelle cartelle Spam e Promozioni.",
    cta: null,
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Compila il questionario anonimo",
    description:
      "Rispondi a poche domande sulla tua situazione attuale: a che punto ti trovi nel post parto, quali sfide stai affrontando, cosa vorresti migliorare. Ci aiuta a capire dove sei e a creare contenuti davvero utili per te.",
    cta: "Compila il questionario →",
    href: "https://forms.gle/placeholder",
  },
  {
    num: 3,
    icon: Send,
    title: "Entra nel canale Telegram gratuito",
    description:
      "Un canale dedicato a chi vuole imparare a prendersi cura del proprio pavimento pelvico e del core, al proprio ritmo. Video, esercizi e contenuti per chi vuole capire il proprio corpo senza fretta e senza pressione.",
    cta: "Entra nel canale Telegram →",
    href: "https://t.me/+CcCDqr5HPWY5NzE0",
  },
];

const GrazieRitrovareCorpo = () => {
  return (
    <main>
      {/* Banner top */}
      <div
        className="w-full py-3 px-4 text-center text-white font-body font-semibold text-sm sm:text-base"
        style={{ backgroundColor: RED }}
      >
        Ci siamo! Controlla la tua email per accedere alla guida gratuita.
      </div>

      {/* Hero */}
      <section
        className="pt-8 pb-16 lg:pt-10 lg:pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(38 40% 95%), hsl(20 50% 92%))",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          style={{ backgroundColor: RED + "14" }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl text-center">

          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
            style={{ backgroundColor: RED + "18" }}
          >
            <CheckCircle2 className="w-8 h-8" style={{ color: RED }} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-foreground mb-4">
            Grazie!{" "}
            <span className="italic" style={{ color: RED }}>
              La guida è in arrivo.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-3">
            Hai appena fatto il primo passo. Tra pochi minuti riceverai nella tua email{" "}
            <strong className="text-foreground">la guida PDF</strong>.
          </p>

          <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
            Nel frattempo, leggi qui sotto cosa fare adesso per iniziare subito.
          </p>

          {/* Avviso email */}
          <div
            className="inline-flex items-start gap-3 px-6 py-4 rounded-xl border text-left max-w-md mx-auto"
            style={{ backgroundColor: RED + "10", borderColor: RED + "30" }}
          >
            <Mail className="w-5 h-5 shrink-0 mt-0.5" style={{ color: RED }} />
            <p className="text-sm font-body text-foreground">
              <strong>Non trovi l'email?</strong> Controlla nelle cartelle{" "}
              <strong>Spam</strong> e <strong>Promozioni</strong> e, se la trovi lì,
              spostala in <strong>Posta in Arrivo</strong> per ricevere anche i prossimi contenuti.
            </p>
          </div>

        </div>
      </section>

      {/* Prossimi passi */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, hsl(30 25% 97%) 0%, hsl(0 0% 100%) 100%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
              Ecco cosa fare adesso
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Tre piccoli passi per iniziare subito e far parte della community.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
                    style={{ backgroundColor: RED }}
                  >
                    {step.num}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-display text-foreground mb-2 flex items-center gap-2">
                      <step.icon className="w-4 h-4" style={{ color: RED }} />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.cta && step.href && (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold font-body text-sm transition-all hover:opacity-90 shadow-sm"
                        style={{ backgroundColor: RED }}
                      >
                        {step.cta}
                      </a>
                    )}
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

export default GrazieRitrovareCorpo;
