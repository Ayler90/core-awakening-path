import { useState } from "react";
import { Send, ClipboardList, CalendarPlus, CheckCircle2, Mail, Volume2 } from "lucide-react";
import Footer from "@/components/Footer";

const WELCOME_VIDEO_ID = "8-m4nPExp78";

const steps = [
  {
    num: 1,
    icon: Send,
    title: "Entra nel canale Telegram",
    description:
      "Il training si svolge sul nostro canale Telegram. Entra subito per non perderti nulla: lì troverai tutti i video, gli esercizi e il supporto diretto di Michela e Moreno.",
    cta: "Entra nel canale Telegram →",
    href: "https://t.me/+Cg5q-RPnxH03ZWFk",
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Compila il questionario anonimo",
    description:
      "Aiutaci a conoscerti meglio! Rispondi a poche domande (anonime) sulla tua situazione attuale: ci permetterà di personalizzare il training e dedicare più spazio alle sfide più sentite.",
    cta: "Compila il questionario →",
    href: "https://forms.gle/cCA6tkb5jRxbA6yP9",
  },
  {
    num: 3,
    icon: CalendarPlus,
    title: "Salva la data nel calendario",
    description:
      "Aggiungi l'evento al tuo Google Calendar per ricordarti che si parte il 20 aprile. Non vorrai mica perderti il primo giorno!",
    cta: "Aggiungi al calendario →",
    href: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Training+Gratuito+CORE+101+-+Con+Michela+e+Moreno&dates=20260420T080000Z/20260503T210000Z&details=CORE+101+%C3%A8+il+training+gratuito+di+2+settimane+con+14+video+sul+pavimento+pelvico%2C+con+assistenza+live+su+Telegram+con+Michela+e+Moreno+-+per+capire+cosa+succede+nel+tuo+corpo+e+iniziare+a+prendertene+cura%2C+con+dolcezza+e+senza+stress.%0A%0AAccedi+al+canale+Telegram+dove+verranno+condivisi+i+video%3A+https%3A%2F%2Ft.me%2F%2BCg5q-RPnxH03ZWFk&sf=true&output=xml",
  },
];

const Grazie = () => {
  const [playing, setPlaying] = useState(false);

  const videoSrc = `https://www.youtube.com/embed/${WELCOME_VIDEO_ID}?autoplay=1&rel=0&playsinline=1`;
  const thumbSrc = `https://img.youtube.com/vi/${WELCOME_VIDEO_ID}/maxresdefault.jpg`;

  return (
    <main>
      {/* Banner top */}
      <div
        className="w-full py-3 px-4 text-center text-white font-body font-semibold text-sm sm:text-base"
        style={{ backgroundColor: "#bd4033" }}
      >
        Sei dentro!{" "}
        <a
          href="https://t.me/+Cg5q-RPnxH03ZWFk"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Clicca qui per accedere al canale Telegram
        </a>
        .
      </div>

      {/* Hero ringraziamento + video */}
      <section
        className="pt-8 pb-16 lg:pt-10 lg:pb-20 relative overflow-hidden"
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
              <strong className="text-foreground">20 aprile</strong>, 1 video al giorno
              e l'assistenza live con Michela e Moreno sul Canale Telegram. 💛
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

          {/* Video header */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-2">
              Un messaggio per te
            </h2>
            <p className="text-muted-foreground font-body text-sm mb-4">
              Vogliamo darti il benvenuto all'interno del training che partirà il 20 aprile e spiegarti cosa faremo insieme.
            </p>
          </div>
        </div>

        {/* Video player */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-border">
            <div className="aspect-video bg-black">
              {playing ? (
                <iframe
                  src={videoSrc}
                  title="Messaggio di benvenuto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={thumbSrc}
                    alt="Video di benvenuto"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={() => setPlaying(true)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold font-body text-sm text-white shadow-lg transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#bd4033" }}
                    >
                      <Volume2 className="w-4 h-4" />
                      Clicca qui per ascoltare il video
                    </button>
                  </div>
                </>
              )}
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
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-3">
              Ecco i tuoi prossimi passi
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Completa questi 3 semplici step per prepararti al meglio al training.
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
