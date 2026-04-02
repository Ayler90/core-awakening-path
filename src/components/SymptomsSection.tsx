const symptoms = [
  {
    icon: "◆",
    title: "Piccole perdite di pipì",
    description:
      "Quando ridi, starnutisci, tossisci o salti. Usi il salvaslip tutti i giorni e hai smesso di correre o fare sport per paura.",
  },
  {
    icon: "◆",
    title: "Sensazione di pesantezza o pressione",
    description:
      "Quella sensazione che qualcosa prema verso il basso nella zona pelvica - a fine giornata o dopo essere statə in piedi a lungo.",
  },
  {
    icon: "◆",
    title: "Pancia gonfia o che non torna",
    description:
      "L'addome sembra non rispondere più, come se avesse perso forza e tonicità. A volte noti un rigonfiamento o un avvallamento al centro.",
  },
  {
    icon: "◆",
    title: "Difficoltà a trattenere lo stimolo",
    description:
      "Devi correre in bagno appena senti lo stimolo, senza riuscire ad aspettare. O al contrario, fai fatica ad andare e devi spingere.",
  },
  {
    icon: "◆",
    title: "Dolore o disagio nei rapporti",
    description:
      "Tensione, fastidio o dolore durante o dopo i rapporti sessuali - qualcosa che prima non c'era e che ora limita la tua intimità.",
  },
  {
    icon: "◆",
    title: "Disconnessione dal tuo corpo",
    description:
      "Senti quella zona come staccata, lontana. Provi a muoverla ma non riesci a sentirla. È come se non fosse più tua.",
  },
];

const SymptomsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{
                backgroundColor: "#AF2B4312",
                borderColor: "#AF2B4330",
                color: "#AF2B43",
              }}
            >
              ◆ Training Gratuito su Telegram - inizia il 20 aprile
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
              Ti suona familiare{" "}
              <span className="italic" style={{ color: "#AF2B43" }}>
                una di queste situazioni?
              </span>
            </h2>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              Non sei solə - e soprattutto non è colpa tua. Questi sintomi sono
              comuni, ma <strong className="text-foreground">non devi conviverci</strong>.
              Il primo passo è capire da dove vengono.
            </p>

            <div className="space-y-4 mb-10">
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <span className="text-sm mt-0.5 shrink-0 font-bold" style={{ color: "#AF2B43" }}>
                    {s.icon}
                  </span>
                  <div>
                    <p className="font-semibold font-body text-foreground text-sm mb-0.5">{s.title}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#iscrizione"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "#AF2B43" }}
            >
              Voglio capire cosa succede nel mio corpo →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ Gratuito - ◇ Un video al giorno su Telegram - ◇ Inizia il 20 aprile
            </p>
          </div>

          <div
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
              <img
                src="https://static.wixstatic.com/media/40e4ee_099ddad35f02472f98e0cd77f22c89a0~mv2.png"
                alt="Donna che si prende cura del proprio corpo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-4 rounded-xl p-4 shadow-lg border border-white/20"
              style={{ backgroundColor: "#AF2B43" }}
            >
              <p className="text-white font-semibold font-body text-sm">+300 persone</p>
              <p className="text-white/80 font-body text-xs">hanno già partecipato</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
