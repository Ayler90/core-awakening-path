const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        style={{ backgroundColor: "#AF2B4314" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        style={{ backgroundColor: "hsl(145 20% 42% / 0.08)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-8 pb-20 lg:pt-12 lg:pb-28 relative z-10">

        <div className="flex justify-start mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border"
            style={{
              backgroundColor: "#AF2B4318",
              borderColor: "#AF2B4340",
              color: "#AF2B43",
            }}
          >
            ◆ Training Gratuito su Telegram · Inizia il 20 aprile
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
              Perdite, pesantezza,{" "}
              <br className="hidden sm:block" />
              pancia che non torna?{" "}
              <span className="italic" style={{ color: "#AF2B43" }}>
                Non sei solə.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Forse senti che qualcosa è cambiato nel tuo corpo - piccole perdite
              quando ridi o starnutisci, una sensazione di pesantezza, la pancia
              che non risponde più. E non sai da dove iniziare.
            </p>

            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              <strong className="text-foreground">CORE 101</strong> è un training
              gratuito di{" "}
              <strong className="text-foreground">
                2 settimane con 14 video, uno al giorno, sul pavimento pelvico
              </strong>
              , con assistenza live su Telegram con Michela e Moreno - per capire
              cosa succede nel tuo corpo e iniziare a prendertene cura, con dolcezza
              e senza stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#iscrizione"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-white font-semibold font-body text-base shadow-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: "#AF2B43" }}
              >
                Voglio iscrivermi →
              </a>
              <a
                href="#programma"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 font-semibold font-body text-base transition-all hover:bg-foreground/5"
                style={{ borderColor: "#AF2B43", color: "#AF2B43" }}
              >
                Scopri il programma ↓
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-5 font-body">
              ✓ Completamente gratuito · ✓ Assistenza live su Telegram · ✓ Nessuna carta richiesta
            </p>
          </div>

          <div
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://static.wixstatic.com/media/40e4ee_c8cad788f7294407857ed26ec7565041~mv2.png"
                alt="Illustrazione del pavimento pelvico"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border max-w-xs">
              <p className="text-sm font-bold font-display leading-snug" style={{ color: "#AF2B43" }}>
                Problemi di pipì, difficoltà nei rapporti sessuali o senti che qualcosa non va?
              </p>
              <p className="text-xs text-muted-foreground font-body mt-0.5">Il training fa per te</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
