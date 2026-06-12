import { useState, useEffect, useRef } from "react";
import {
  Download, BookOpen, Users, ChevronDown,
  FileText, Compass, Heart, Zap, Eye, RotateCcw, Activity,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const RED = "#AF2B43";
const VIOLET = "#61438C";

// ─── Infinite Slider ──────────────────────────────────────────────────────────

const sliderItems = [
  "◆ Guida PDF gratuita",
  "◇ Video guidati inclusi",
  "◆ 7 giorni per ritrovare il tuo corpo",
  "◇ Connessione · Controllo · Sicurezza",
  "◆ Nessuna carta richiesta",
  "◇ Pavimento pelvico · Respiro · Diastasi",
  "◆ Di Michela e Moreno",
  "◇ Ripartire davvero dalle basi",
  "◆ Con Officina.MM",
  "◇ Scaricabile subito",
];

const SliderStrip = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const animate = () => {
      pos -= 0.5;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...sliderItems, ...sliderItems];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-border" style={{ backgroundColor: RED }}>
      <div ref={trackRef} className="flex gap-0 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center text-sm font-semibold font-body text-white px-8 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const RitrovareCorpoPostParto = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-16">
      <NavBar showCountdown={false} ctaText="Scarica gratis →" ctaHref="#scarica" />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6 pt-10 pb-20 lg:pt-14 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "18", borderColor: RED + "40", color: RED }}
              >
                ◆ Guida PDF gratuita · Con video guidati
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
                Dopo il parto, tutti ti dicono di tornare come prima.{" "}
                <br className="hidden sm:block" />
                <span className="italic" style={{ color: RED }}>
                  Ma il tuo corpo non torna. Evolve.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                Vedi corpi che sembrano recuperare in poche settimane, routine perfette,
                allenamenti intensi già dopo poco tempo. Ma quello che non si vede è il processo reale.
                Il tempo che serve. I passaggi fondamentali che rimangono invisibili.
              </p>

              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                <strong className="text-foreground">7 giorni per ritrovare il tuo corpo dopo il parto</strong> è
                una guida gratuita con video guidati per ritrovare connessione, controllo e sicurezza
                nei movimenti — ripartendo davvero dalle basi, senza fretta e senza pressione.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#scarica"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-white font-semibold font-body text-base shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  <Download className="w-4 h-4" />
                  Voglio la guida gratuita →
                </a>
                <a
                  href="#cosa-trovi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 font-semibold font-body text-base transition-all hover:bg-foreground/5"
                  style={{ borderColor: RED, color: RED }}
                >
                  Scopri i 7 giorni ↓
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-5 font-body">
                ✓ PDF + video gratuiti · ✓ Scaricabile subito · ✓ Nessuna carta richiesta
              </p>
            </div>

            <div className="relative">
              {/* Placeholder — sostituire con immagine reale */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                style={{ backgroundColor: RED + "10" }}
              >
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 mx-auto mb-3" style={{ color: RED + "60" }} />
                  <p className="text-sm font-body" style={{ color: RED + "80" }}>Immagine hero</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border max-w-xs">
                <p className="text-sm font-bold font-display leading-snug" style={{ color: RED }}>
                  Il corpo non ha bisogno di tornare indietro. Ha bisogno di essere accompagnato in avanti.
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">Guida gratuita di Officina.MM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── HERO BENEFITS ────────────────────────────────────────────────── */}
      <section className="py-6" style={{ background: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Eye className="w-6 h-6" />, text: "Ritrovare la connessione con il corpo" },
              { icon: <Activity className="w-6 h-6" />, text: "Pavimento pelvico, respiro e diastasi" },
              { icon: <BookOpen className="w-6 h-6" />, text: "7 giorni con video guidati" },
              { icon: <RotateCcw className="w-6 h-6" />, text: "Dal tappetino alla vita reale" },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: RED + "15", color: RED }}
                >
                  {b.icon}
                </div>
                <p className="text-base font-semibold font-body text-foreground leading-snug">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SLIDER ───────────────────────────────────────────────────────── */}
      <SliderStrip />

      {/* ─── DOWNLOAD SECTION ─────────────────────────────────────────────── */}
      <section
        id="scarica"
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(20 50% 94%))" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto"
            style={{ backgroundColor: RED }}
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.35)", color: "white" }}
                >
                  ◆ Guida PDF + video guidati – gratis
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3 leading-tight">
                  Scarica gratis{" "}
                  <span className="italic">
                    7 giorni per ritrovare il tuo corpo dopo il parto
                  </span>
                </h2>

                <p className="font-body leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Una guida con video guidati per ritrovare connessione, controllo e sicurezza
                  nei movimenti — ripartendo davvero dalle basi, senza fretta e senza pressione.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: <FileText className="w-3.5 h-3.5" />, text: "PDF + video guidati" },
                    { icon: <BookOpen className="w-3.5 h-3.5" />, text: "7 giorni pratici" },
                    { icon: <Compass className="w-3.5 h-3.5" />, text: "Dalle basi, con metodo" },
                    { icon: <Users className="w-3.5 h-3.5" />, text: "100% gratuito" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-body" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <span style={{ color: "rgba(255,255,255,0.9)" }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                {/* ⬇ Inserire qui il form MailerLite */}
                <div
                  className="rounded-xl p-5 border text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <p className="text-white/70 text-sm font-body">
                    Form MailerLite da integrare
                  </p>
                </div>

                <p className="text-xs font-body mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  ✓ Completamente gratuita – ✓ Nessuna carta richiesta – ✓ Puoi cancellarti quando vuoi
                </p>
              </div>

              <div className="relative">
                {/* Placeholder — sostituire con foto Michela e Moreno */}
                <div
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <p className="text-white/50 text-sm font-body">Foto Michela e Moreno</p>
                </div>
                <div
                  className="absolute -bottom-5 -left-4 rounded-xl p-4 shadow-lg border"
                  style={{ backgroundColor: "hsl(30 25% 97%)", borderColor: RED + "20" }}
                >
                  <p className="font-bold font-display text-sm" style={{ color: RED }}>Michela & Moreno</p>
                  <p className="text-xs text-muted-foreground font-body">Officina.MM</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SYMPTOMS SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
              >
                ◆ Guida gratuita per il post parto
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Ti suona familiare{" "}
                <span className="italic" style={{ color: RED }}>
                  una di queste situazioni?
                </span>
              </h2>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Non sei solə. Dopo il parto è normale sentirsi così — anche se nessuno te lo dice davvero.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Senti quella zona 'non più tua'",
                    desc: "L'addome, il pavimento pelvico: è come se non rispondessero più allo stesso modo. Come se mancasse qualcosa. Come se non fossero più tuoi.",
                  },
                  {
                    title: "Vedi le altre 'già tornate in forma' e non sai cosa stai sbagliando",
                    desc: "Sui social sembrano recuperare tutte in fretta. Routine perfette, allenamenti intensi. Ma quello che non si vede è il processo reale — e i passaggi invisibili che mancano.",
                  },
                  {
                    title: "Hai perdite, senso di peso o fastidi — e ti rispondono 'è normale'",
                    desc: "'Del resto, hai partorito.' Ma normale non significa che tu debba ignorarli o accettarli per sempre.",
                  },
                  {
                    title: "Vuoi fare qualcosa, ma hai paura di sbagliare",
                    desc: "Vorresti muoverti, riprendere a sentirti bene. Ma hai paura di fare esercizi sbagliati e peggiorare qualcosa — e così non sai da dove iniziare.",
                  },
                  {
                    title: "Gli esercizi li fai, ma nella vita di ogni giorno perdi il controllo",
                    desc: "Sul tappetino sembra di andare bene. Ma poi, quando prendi in braccio il bambino, ti pieghi, cammini… trattieni il respiro e spingi senza accorgertene.",
                  },
                  {
                    title: "Ti senti in ritardo, in colpa, o semplicemente smarritə",
                    desc: "Sai che dovresti 'fare qualcosa', ma non sai cosa. E intanto il tempo passa e quella sensazione di essere indietro non si toglie.",
                  },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                    <span className="text-sm mt-0.5 shrink-0 font-bold" style={{ color: RED }}>◆</span>
                    <div>
                      <p className="font-semibold font-body text-foreground text-sm mb-0.5">{s.title}</p>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#scarica"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: RED }}
              >
                Voglio ritrovare il mio corpo →
              </a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                ◇ PDF + video gratuiti – ◇ 7 giorni pratici – ◇ Di Michela e Moreno, Officina.MM
              </p>
            </div>

            <div className="relative">
              {/* Placeholder — sostituire con immagine */}
              <div
                className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                style={{ backgroundColor: RED + "10" }}
              >
                <p className="text-sm font-body" style={{ color: RED + "80" }}>Immagine sezione</p>
              </div>
              <div
                className="absolute -bottom-5 -right-4 rounded-xl p-4 shadow-lg border border-white/20"
                style={{ backgroundColor: RED }}
              >
                <p className="text-white font-semibold font-body text-sm">Non tornare come prima.</p>
                <p className="text-white/80 font-body text-xs">Vai avanti, nel tuo corpo di adesso.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── EDUCATIONAL SECTION ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 96%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-12">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
              >
                ◆ La verità che quasi nessuno dice
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                Il corpo non torna com'era.{" "}
                <span className="italic" style={{ color: RED }}>
                  Non può. Evolve.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                E prendersi cura di lui adesso non è un extra. È la base per stare bene nel tuo corpo — e nella tua maternità.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  Durante la gravidanza il tuo corpo viene guardato con meraviglia. Poi, dopo il parto,
                  arriva un messaggio sottile ma continuo: <em style={{ color: RED }}>"torna come prima, il prima possibile."</em>
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Quello che non si vede — e che nessuno dice — è il processo reale. I tessuti che si sono
                  allungati, adattati, trasformati. Il sistema nervoso che ha dovuto riorganizzarsi.
                  Il corpo che ha fatto qualcosa di enorme e ha bisogno di tempo, ascolto e stimoli giusti.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  Il primo passo non è <strong>"rinforzare"</strong>, <strong>"allenare"</strong> o <strong>"sistemare"</strong>.
                  È molto più semplice — e molto più potente:{" "}
                  <em style={{ color: RED }}>tornare a sentire. Riconnetterti a te e al tuo corpo.</em>
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Senza connessione, non può esserci controllo efficace. È da qui che il recupero riprende —
                  e questa guida ti accompagna esattamente da questo punto, giorno dopo giorno.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 lg:p-8 border text-center"
                style={{ backgroundColor: RED + "10", borderColor: RED + "30" }}
              >
                <p className="text-foreground font-display font-bold text-xl mb-2">
                  Pronta a ripartire davvero dalle basi?
                </p>
                <p className="text-muted-foreground font-body text-sm mb-5">
                  Scarica la guida gratuita di Michela e Moreno — 7 giorni con video guidati per ritrovare il tuo corpo.
                </p>
                <a
                  href="#scarica"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  Scarica la guida gratuita →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── BENEFITS SECTION ─────────────────────────────────────────────── */}
      <section className="pt-20 lg:pt-28 bg-background" id="cosa-trovi">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              Cosa imparerai in{" "}
              <span className="italic" style={{ color: VIOLET }}>questi 7 giorni</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Non esercizi a caso. Un percorso con una logica: prima senti, poi coordini, poi integri nella vita reale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: <Eye className="w-5 h-5" />,
                color: RED,
                title: "Tornare a sentire il tuo corpo",
                text: "La consapevolezza corporea è il punto di partenza di tutto. Prima ancora di rinforzare, imparerai a riconnetterti — a sentire cosa c'è, come risponde, cosa è cambiato.",
              },
              {
                icon: <Compass className="w-5 h-5" />,
                color: VIOLET,
                title: "Capire postura e schemi post parto",
                text: "Durante la gravidanza il corpo ha trovato nuovi equilibri — e dopo il parto questi schemi non spariscono da soli. Imparerai a ridare spazio e allineamento senza sforzo.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                color: RED,
                title: "Usare il respiro come alleato",
                text: "Il respiro è uno degli strumenti più potenti che hai. Quando torna funzionale, il pavimento pelvico si muove in modo più naturale, l'addome si attiva e le pressioni si gestiscono meglio.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                color: VIOLET,
                title: "Capire il pavimento pelvico davvero",
                text: "Non è solo 'stringere i kegel'. Il pavimento pelvico funziona bene quando è elastico e sa attivarsi e lasciar andare nel momento giusto. Imparerai a ritrovare il contatto con questa zona.",
              },
              {
                icon: <Activity className="w-5 h-5" />,
                color: RED,
                title: "Fare chiarezza sulla pancia e la diastasi",
                text: "Il recupero non passa dal fare di più, ma dal fare nel modo giusto. Imparerai come coinvolgere l'addome in modo sicuro ed efficace, senza forzare e senza paura.",
              },
              {
                icon: <RotateCcw className="w-5 h-5" />,
                color: VIOLET,
                title: "Portare il recupero nella vita reale",
                text: "Non vivi sul tappetino. Imparerai a integrare quello che hai imparato nei movimenti di ogni giorno — prendere in braccio, piegarti, camminare — in modo automatico e naturale.",
              },
            ].map((b, i) => (
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

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <Download className="w-4 h-4" />
              Scarica gratis i 7 giorni →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ PDF + video gratuiti – ◇ 7 giorni pratici – ◇ Di Michela e Moreno, Officina.MM
            </p>
          </div>

        </div>
      </section>

      {/* ─── CURRICULUM SECTION (7 giorni) ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-4 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Guida PDF + video guidati – gratis
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              I 7 giorni{" "}
              <span className="italic" style={{ color: RED }}>della guida</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ogni giorno un tema, un video e una pratica. Una progressione pensata per costruire
              basi solide, passo dopo passo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
            {[
              {
                num: "Giorno 1",
                title: "Tornare a sentire il tuo corpo",
                desc: "La riconnessione è la base di tutto. Prima ancora di allenare, impari a percepire e riconoscere il tuo corpo di adesso.",
              },
              {
                num: "Giorno 2",
                title: "Quel modo di stare nel corpo che è cambiato",
                desc: "Gli schemi posturali della gravidanza non spariscono da soli. Lavoriamo per ridare spazio e allineamento, senza sforzo.",
              },
              {
                num: "Giorno 3",
                title: "Il respiro che ti aiuta davvero",
                desc: "Quando il respiro torna funzionale, tutto cambia: il pavimento pelvico si muove meglio, l'addome si attiva, le pressioni si gestiscono.",
              },
              {
                num: "Giorno 4",
                title: "Il pavimento pelvico: quello che nessuno ti spiega",
                desc: "Non solo 'stringere'. Il pavimento pelvico funziona bene quando sa attivarsi e lasciar andare nel momento giusto. Iniziamo dal contatto.",
              },
              {
                num: "Giorno 5",
                title: "La pancia e la diastasi: fare chiarezza",
                desc: "Cosa sta succedendo davvero all'addome e come lavorarci in modo sicuro, efficace e rispettoso — senza fretta e senza paura.",
              },
              {
                num: "Giorno 6",
                title: "Muoverti nella vita reale, non solo negli esercizi",
                desc: "Non si vive sul tappetino. Porti quello che hai imparato nei movimenti quotidiani: prendere in braccio, piegarti, camminare.",
              },
              {
                num: "Giorno 7",
                title: "Da dove riparti, davvero",
                desc: "Una routine completa che unisce tutto. E la direzione per continuare con metodo, progressione e la guida giusta.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col gap-3"
                style={{ borderColor: "hsl(30 20% 90%)", backgroundColor: "hsl(30 20% 97%)" }}
              >
                <span
                  className="text-xs font-bold font-body px-2.5 py-1 rounded-full self-start"
                  style={{ backgroundColor: RED + "15", color: RED }}
                >
                  {v.num}
                </span>
                <h3 className="font-bold font-display text-base text-foreground leading-snug">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              <Download className="w-4 h-4" />
              Voglio iniziare i 7 giorni →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ Gratuita – ◇ Scaricabile subito – ◇ Di Michela e Moreno, Officina.MM
            </p>
          </div>

        </div>
      </section>

      {/* ─── TEACHERS SECTION ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Chi ha creato la guida
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              La guida è di{" "}
              <span className="italic" style={{ color: RED }}>Michela e Moreno</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Due professionisti che lavorano ogni giorno con donne nel post parto e sanno quanto
              sia difficile orientarsi — e quanto faccia differenza avere una guida davvero competente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Michela",
                photo: "https://static.wixstatic.com/media/40e4ee_5975f0a365f8489185bace7f83a0dca2~mv2.jpg/v1/crop/x_0,y_60,w_960,h_1038/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michi.jpg",
                role: "Esperta in Pavimento Pelvico e Core",
                bio: [
                  "Dott.ssa in Educazione Professionale ed Educazione Sessuale.",
                  "Personal Trainer esperta nel movimento in gravidanza e post parto.",
                ],
                desc: "Con passione e delicatezza, Michela guida ogni persona nell'esplorazione del proprio corpo. Sa quanto sia difficile il post parto — e per questo crea uno spazio sicuro, in cui ogni domanda è benvenuta e ogni passo è rispettato.",
              },
              {
                name: "Moreno",
                photo: "https://static.wixstatic.com/media/40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg/v1/crop/x_0,y_204,w_960,h_977/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Mori.jpg",
                role: "Infermiere e specialista in Movimento Funzionale",
                bio: [
                  "Dott. in Infermieristica esperto in Riabilitazione pelvi-perineale.",
                  "CrossTraining Coach esperto in gravidanza e post parto.",
                ],
                desc: "Moreno porta chiarezza e competenza in ogni contenuto. Con un approccio professionale ma accessibile, accompagna negli esercizi pratici con attenzione al dettaglio e rispetto per il corpo.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{ backgroundColor: "hsl(0 0% 100%)", borderColor: "hsl(30 20% 90%)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.photo}
                    alt={`Foto di ${t.name}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground">{t.name}</h3>
                    <p className="text-xs font-semibold font-body uppercase tracking-wide mt-0.5" style={{ color: RED }}>
                      {t.role}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {t.bio.map((line, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                        <span style={{ color: RED }} className="mt-0.5">◇</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p
                    className="text-sm font-body text-muted-foreground leading-relaxed border-t pt-3"
                    style={{ borderColor: "hsl(30 20% 92%)" }}
                  >
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Scarica la loro guida gratuita →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ Gratuita – ◇ Scaricabile subito
            </p>
          </div>

        </div>
      </section>

      {/* ─── FAQ SECTION ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
              Domande{" "}
              <span className="italic" style={{ color: RED }}>frequenti</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Tutto quello che vuoi sapere prima di scaricare. E se hai altre domande, scrivici!
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {[
              {
                q: "È davvero gratuita?",
                a: "Sì, completamente. Non devi inserire nessuna carta di credito e non ci sono costi nascosti. Ti iscrivi con nome e email, e ricevi la guida direttamente nella tua casella.",
              },
              {
                q: "Per chi è questa guida?",
                a: "È pensata per chi è nel post parto — vicino o lontano dal parto — e si sente disconnessa dal proprio corpo, non sa da dove iniziare, o vuole finalmente capire come ritrovare connessione e controllo in modo sicuro.",
              },
              {
                q: "Cosa trovo esattamente? Solo testo o ci sono anche gli esercizi?",
                a: "Ogni giorno ha una scheda scritta con spiegazioni chiare e un video con esercizi guidati da Michela. Non devi solo leggere: puoi seguire le pratiche video direttamente.",
              },
              {
                q: "Da quanti giorni dopo il parto posso iniziare?",
                a: "La guida è pensata per accompagnare il corpo nel post parto, in modo graduale e rispettoso. Puoi iniziarla sia nelle prime settimane dopo il parto, sia molto dopo — non è mai troppo tardi per ripartire dalle basi.",
              },
              {
                q: "Devo avere attrezzatura o esperienza con gli esercizi?",
                a: "No. Gli esercizi sono pensati per ripartire davvero dalle basi, senza attrezzi e senza esperienza previa. Ti basta uno spazio tranquillo e voglia di iniziare.",
              },
              {
                q: "Dopo i 7 giorni, c'è un percorso per continuare?",
                a: (
                  <>
                    Sì. Al termine dei 7 giorni troverai nella guida indicazioni su come continuare con un percorso
                    guidato e progressivo. Puoi anche scriverci a{" "}
                    <a href="mailto:ciao@officinamm.com" style={{ color: RED, textDecoration: "underline" }}>
                      ciao@officinamm.com
                    </a>{" "}
                    per qualsiasi domanda.
                  </>
                ),
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: openFaq === i ? RED + "40" : "hsl(30 20% 90%)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  style={{ backgroundColor: openFaq === i ? RED + "06" : "hsl(30 20% 97%)" }}
                >
                  <span className="font-semibold font-body text-sm text-foreground leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                    style={{ color: RED, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 pt-1 text-sm font-body text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4a4580 0%, #61438C 60%, #52398a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body border border-white/30 text-white/80 mb-8">
              <Download className="w-3 h-3" />
              PDF + video guidati – 100% gratuiti
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-6 leading-tight">
              Il tuo corpo non deve tornare indietro.{" "}
              <span className="italic">Può andare avanti.</span>
            </h2>

            <p className="text-white/80 font-body leading-relaxed mb-4 text-base sm:text-lg">
              7 giorni per ritrovare connessione, controllo e sicurezza nei movimenti —
              ripartendo davvero dalle basi, con la guida di Michela e Moreno di Officina.MM.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-body text-white/70">
              <span>◇ PDF + video gratuiti</span>
              <span className="text-white/30">·</span>
              <span>◇ 7 giorni pratici</span>
              <span className="text-white/30">·</span>
              <span>◇ Di Michela e Moreno</span>
            </div>

            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "#4a4580" }}
            >
              <Download className="w-4 h-4" />
              Voglio la guida gratuita →
            </a>

            <p className="text-white/50 font-body text-xs mt-5">
              ◇ 100% gratuita – ◇ Nessuna carta richiesta – ◇ Di Officina.MM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RitrovareCorpoPostParto;
