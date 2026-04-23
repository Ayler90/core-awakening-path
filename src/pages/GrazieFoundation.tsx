import { Send, CalendarDays, MessageCircle, CheckCircle2, Mail, FolderOpen } from "lucide-react";
import Footer from "@/components/Footer";

const TELEGRAM_URL = "https://t.me/+3H2hj6ukATQzNmY8";
const DRIVE_URL = "https://drive.google.com/drive/folders/1DiyzjsXZR6snoLVsTu9lCnv9Y2ItJAVY?usp=share_link";

const GrazieFoundation = () => {
  return (
    <main>
      {/* Banner top */}
      <div
        className="w-full py-3 px-4 text-center text-white font-body font-semibold text-sm sm:text-base"
        style={{ backgroundColor: "#AF2B43" }}
      >
        Sei dentro!{" "}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Clicca qui per accedere al canale Telegram
        </a>
        .
      </div>

      {/* Hero ringraziamento */}
      <section
        className="pt-8 pb-16 lg:pt-10 lg:pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(38 40% 95%), hsl(20 50% 92%))" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          style={{ backgroundColor: "#AF2B4314" }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
            style={{ backgroundColor: "#AF2B4318" }}
          >
            <CheckCircle2 className="w-8 h-8" style={{ color: "#AF2B43" }} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-foreground mb-4">
            Ciao e benvenutə! 🎉
            <br />
            <span className="italic" style={{ color: "#AF2B43" }}>
              Il tuo posto è confermato
            </span>
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
            Siamo felicissimi di averti con noi in questo percorso di scoperta e consapevolezza del Core e del Pavimento Pelvico.
            Grazie per aver scelto <strong className="text-foreground">Core Foundation</strong> e per la fiducia che ci hai accordato:
            noi, Michela e Moreno di Officina.MM, non vediamo l'ora di iniziare questo viaggio insieme a te!
          </p>

          <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
            Hai appena ricevuto l'email di conferma di iscrizione al percorso.
          </p>

          {/* Avviso email */}
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border text-left max-w-md mx-auto"
            style={{ backgroundColor: "#AF2B4310", borderColor: "#AF2B4330" }}
          >
            <Mail className="w-5 h-5 shrink-0" style={{ color: "#AF2B43" }} />
            <p className="text-sm font-body text-foreground">
              <strong>Non trovi l'email?</strong> Controlla nelle cartelle{" "}
              <strong>Spam</strong> e <strong>Promozioni</strong> e, se la trovi lì,
              spostala in <strong>Posta in Arrivo</strong>.
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
              Ecco tutto quello che ti serve per cominciare
            </h2>
          </div>

          <div className="flex flex-col gap-6">

            {/* Step 1 — Telegram */}
            <div className="relative bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
                  style={{ backgroundColor: "#AF2B43" }}
                >
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-foreground mb-2 flex items-center gap-2">
                    <Send className="w-4 h-4" style={{ color: "#AF2B43" }} />
                    Unisciti al canale Telegram dedicato
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    Per accedere a tutti i contenuti giornalieri e partecipare alla nostra community,
                    clicca sul link qui sotto e iscriviti al canale privato di Core Foundation su Telegram.
                    Per poter vedere i video a tutto schermo, puoi utilizzare Telegram anche da pc!
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold font-body text-sm transition-all hover:opacity-90 shadow-sm"
                    style={{ backgroundColor: "#AF2B43" }}
                  >
                    Entra nel canale Telegram →
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 — Il tuo percorso */}
            <div className="relative bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
                  style={{ backgroundColor: "#AF2B43" }}
                >
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-foreground mb-3 flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" style={{ color: "#AF2B43" }} />
                    Il tuo percorso: cosa aspettarti
                  </h3>

                  <div className="flex flex-col gap-4 text-sm text-muted-foreground font-body leading-relaxed">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Durata</p>
                      <p>
                        Per le prossime 4 settimane (a partire dal <strong className="text-foreground">4 maggio</strong>),
                        ogni giorno troverai un video di 10 minuti con esercizi guidati da Michela.
                        Insieme lavoreremo sul Core e sul pavimento pelvico attraverso esercizi a corpo libero:
                        ti basta un tappetino e tanta voglia di esplorare.
                      </p>
                      <p className="mt-2">
                        Nella quinta settimana non verranno più pubblicati video giornalieri:
                        potrai recuperare il materiale arretrato o ripetere gli esercizi che hai trovato più difficili o più utili.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Supporto quotidiano</p>
                      <p>
                        Avrai un supporto diretto e quotidiano tramite il Canale Telegram,
                        dove potrai confrontarti con noi e con la community, fare domande e ricevere feedback in ogni momento.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Due momenti Live insieme</p>
                      <p className="mb-3">
                        Due dirette in cui risponderemo alle domande, valuteremo le vostre situazioni e percorsi,
                        condivideremo i progressi e capiremo insieme come proseguire.
                        Troverai il link per accedere alle dirette direttamente nel canale Telegram il giorno della diretta.
                      </p>
                      {/* Date live */}
                      <div
                        className="rounded-xl p-4 flex flex-col gap-2"
                        style={{ backgroundColor: "#AF2B4310", borderLeft: "3px solid #AF2B43" }}
                      >
                        <p className="font-semibold text-foreground text-sm">Segna in agenda:</p>
                        <div className="flex items-center gap-2">
                          <span style={{ color: "#AF2B43" }}>📅</span>
                          <span className="text-foreground font-medium">Mercoledì 13 maggio</span>
                          <span>ore 12.30–13.30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span style={{ color: "#AF2B43" }}>📅</span>
                          <span className="text-foreground font-medium">Martedì 26 maggio</span>
                          <span>ore 12.30–13.30</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Materiali del percorso</p>
                      <p className="mb-3">
                        Nella cartella Drive trovi tutti i video di Core Foundation, i video extra e le registrazioni delle dirette.
                      </p>
                      <a
                        href={DRIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold font-body text-sm transition-all hover:opacity-90 shadow-sm"
                        style={{ backgroundColor: "#AF2B43" }}
                      >
                        <FolderOpen className="w-4 h-4" />
                        Apri la cartella Drive →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 — Domande */}
            <div className="relative bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg text-white"
                  style={{ backgroundColor: "#AF2B43" }}
                >
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-foreground mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" style={{ color: "#AF2B43" }} />
                    Per qualsiasi domanda
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                    Se hai dubbi, domande o vuoi condividere con noi le tue sensazioni durante il percorso puoi:
                  </p>
                  <ul className="text-muted-foreground font-body text-sm leading-relaxed list-none flex flex-col gap-2 mb-0">
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#AF2B43" }}>•</span>
                      scrivere direttamente nel Canale Telegram commentando i video o i post pubblicati;
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#AF2B43" }}>•</span>
                      contattarci in privato su Telegram al contatto{" "}
                      <a
                        href="https://t.me/OfficinaMM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline"
                        style={{ color: "#AF2B43" }}
                      >
                        @OfficinaMM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Firma */}
          <div className="mt-14 text-center">
            <p className="text-base text-muted-foreground font-body leading-relaxed">
              Grazie ancora per aver scelto di fare parte di Core Foundation.
              Questo è solo l'inizio di un bellissimo viaggio: non vediamo l'ora di vedere i tuoi progressi
              e di celebrare insieme ogni traguardo!
            </p>
            <p className="mt-5 font-bold font-display text-foreground text-lg">
              Un abbraccio,
            </p>
            <p className="font-body text-muted-foreground">
              Michela e Moreno — Officina.MM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GrazieFoundation;
