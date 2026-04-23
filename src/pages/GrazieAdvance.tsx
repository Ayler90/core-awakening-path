import { Send, CalendarDays, MessageCircle, CheckCircle2, Mail, FolderOpen } from "lucide-react";
import Footer from "@/components/Footer";

const TELEGRAM_URL = "https://t.me/+tPIOWGm1TrxjZjM0";
const DRIVE_URL = "https://drive.google.com/drive/folders/1R-jRr1pMobtVTCUnL6yIyZRwzOvbGFqi";

const GrazieAdvance = () => {
  return (
    <main>
      {/* Banner top */}
      <div
        className="w-full py-3 px-4 text-center text-white font-body font-semibold text-sm sm:text-base"
        style={{ backgroundColor: "#AF2B43" }}
      >
        Sei dentro! Non chiudere la pagina e controlla qui sotto le istruzioni per accedere al percorso.
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
              Il tuo posto a Core Advance è confermato
            </span>
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
            Siamo felicissimi che tu abbia scelto di continuare questo viaggio con noi nel percorso{" "}
            <strong className="text-foreground">Core Advance</strong>, il livello successivo di allenamento del Core.
            Dopo aver costruito solide fondamenta con Core Foundation, ora è il momento di spingere un po' oltre i tuoi limiti,
            lavorando su endurance, resistenza e un rinforzo ancora più profondo del core.
          </p>

          <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
            Grazie per la fiducia che ci hai nuovamente accordato: noi, Michela e Moreno di Officina.MM,
            siamo entusiasti di accompagnarti in questa nuova sfida!
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
                    clicca sul link qui sotto e iscriviti al canale privato di Core Advance su Telegram.
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

                  <div className="flex flex-col gap-5 text-sm text-muted-foreground font-body leading-relaxed">

                    <div>
                      <p className="font-semibold text-foreground mb-1">Durata</p>
                      <p>
                        Per le prossime 4 settimane (a partire dal <strong className="text-foreground">4 maggio</strong>),
                        ogni giorno troverai un video di 10 minuti con esercizi guidati da Michela,
                        studiati per sfidare e rafforzare il tuo Core, migliorando la tua resistenza e il controllo.
                      </p>
                      <p className="mt-2">
                        Nella quinta settimana non verranno più pubblicati video giornalieri:
                        potrai recuperare il materiale arretrato o ripetere gli esercizi che hai trovato più difficili o più utili.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-2">Materiale</p>
                      <p className="mb-3">Oltre al tappetino, useremo anche:</p>
                      <div className="flex flex-col gap-3">
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#AF2B4308" }}
                        >
                          <p className="font-medium text-foreground mb-1">🏐 Palla da Pilates</p>
                          <p>
                            Es.{" "}
                            <a
                              href="https://www.decathlon.it/p/palla-softball-celeste-diametro-240-mm/_/R-p-305188"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline font-medium"
                              style={{ color: "#AF2B43" }}
                            >
                              Decathlon Softball
                            </a>
                            . Se non ce l'hai, puoi sostituirla con un cuscino o fare senza:
                            la sensazione e la resistenza saranno diverse, ma gli esercizi rimarranno efficaci.
                          </p>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#AF2B4308" }}
                        >
                          <p className="font-medium text-foreground mb-1">🎽 Banda Elastica</p>
                          <p>
                            Es.{" "}
                            <a
                              href="https://www.decathlon.it/p/elastico-ginnastica-pilates-100-light-resistenza-2-kg-azzurro/_/R-p-305202?mc=8527896"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline font-medium"
                              style={{ color: "#AF2B43" }}
                            >
                              Decathlon Elastico
                            </a>
                            . Se hai un elastico circolare chiuso, va benissimo lo stesso.
                            Se non hai nulla, ci saranno alternative (es. la cintura dell'accappatoio per alcuni esercizi)
                            o potrai lavorare a corpo libero.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Due momenti Live insieme</p>
                      <p className="mb-3">
                        Due dirette in cui risponderemo alle domande, valuteremo le vostre situazioni e percorsi,
                        condivideremo i progressi e capiremo insieme come proseguire.
                        Troverai il link per accedere alle dirette direttamente nel canale Telegram il giorno della diretta.
                      </p>
                      <div
                        className="rounded-xl p-4"
                        style={{ backgroundColor: "#AF2B4310" }}
                      >
                        <p className="font-semibold text-foreground text-sm mb-1">Segna in agenda:</p>
                        <p className="text-muted-foreground italic">Le date verranno comunicate a breve nel canale Telegram.</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Materiali del percorso</p>
                      <p className="mb-3">
                        Nella cartella Drive trovi i contenuti di Core 101, i Fondamentali di Core Foundation,
                        i video extra e le registrazioni delle dirette.
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

                    <div>
                      <p className="font-semibold text-foreground mb-1">Supporto quotidiano</p>
                      <p>
                        Avrai un supporto diretto e quotidiano tramite il Canale Telegram,
                        dove potrai confrontarti con noi e con la community, fare domande e ricevere feedback in ogni momento.
                      </p>
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
                  <ul className="text-muted-foreground font-body text-sm leading-relaxed list-none flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#AF2B43" }}>•</span>
                      scrivere direttamente nel Canale Telegram commentando i video o i post che verranno pubblicati;
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
              Grazie ancora per essere parte di Core Advance. Questo è il momento di trasformare le solide basi
              che hai costruito in forza e resistenza durature. Non vediamo l'ora di celebrare insieme i tuoi progressi!
            </p>
            <p className="mt-5 font-bold font-display text-foreground text-lg">
              Un abbraccio,
            </p>
            <p className="font-body text-muted-foreground">
              Michela e Moreno
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GrazieAdvance;
