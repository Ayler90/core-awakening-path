import { useState, useEffect, useRef } from "react";
import {
  Download, BookOpen, Users, ChevronDown,
  FileText, Compass, Heart, AlertCircle, Lightbulb, Target, Shield,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const RED = "#AF2B43";
const VIOLET = "#61438C";

// ─── Infinite Slider ──────────────────────────────────────────────────────────

const sliderItems = [
  "◆ PDF gratuito",
  "◇ Scaricabile subito",
  "◆ Chiarezza nel post parto",
  "◇ 6 capitoli pratici",
  "◆ Nessuna carta richiesta",
  "◇ Per chi non sa da dove iniziare",
  "◆ Di Michela e Moreno",
  "◇ Rimise en forme: i fondamenti",
  "◆ Con Officina.MM",
  "◇ Post parto senza confusione",
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

const FondamentaRimiseForme = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-16">
      <NavBar showCountdown={false} ctaText="Scarica la guida →" ctaHref="#scarica" />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="container mx-auto px-4 sm:px-6 pt-10 pb-20 lg:pt-14 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "18", borderColor: RED + "40", color: RED }}
              >
                ◆ Guida PDF gratuita · Scaricabile subito
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
                Post parto: sai che dovresti fare qualcosa,{" "}
                <br className="hidden sm:block" />
                <span className="italic" style={{ color: RED }}>
                  ma non sai da dove iniziare.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                Hai sentito mille cose — fare i kegel, non fare i kegel, aspettare,
                non aspettare, correre subito, non correre mai. Le informazioni ci sono.
                Ma non tornano. E tu sei lì, smarritə, con un corpo che non riconosci più.
              </p>

              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                <strong className="text-foreground">Le fondamenta della tua rimise en forme</strong> è
                una guida PDF gratuita che ti aiuta a fare ordine: capire da dove partire davvero,
                cosa vale la pena fare adesso, e a chi rivolgerti per essere accompagnatə nel modo giusto.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#scarica"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-white font-semibold font-body text-base shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  <Download className="w-4 h-4" />
                  Scarica la guida gratis →
                </a>
                <a
                  href="#cosa-trovi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 font-semibold font-body text-base transition-all hover:bg-foreground/5"
                  style={{ borderColor: RED, color: RED }}
                >
                  Scopri cosa trovi dentro ↓
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-5 font-body">
                ✓ PDF gratuito · ✓ Scaricabile subito · ✓ Nessuna carta richiesta
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
                  La guida che avresti voluto avere subito dopo il parto.
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">PDF gratuito di Officina.MM</p>
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
              { icon: <Compass className="w-6 h-6" />, text: "Chiarezza su da dove partire" },
              { icon: <Users className="w-6 h-6" />, text: "Sapere a chi rivolgerti" },
              { icon: <BookOpen className="w-6 h-6" />, text: "6 capitoli pratici" },
              { icon: <Shield className="w-6 h-6" />, text: "Miti del post parto sfatati" },
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
                  ◆ Guida PDF gratuita – scaricabile subito
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3 leading-tight">
                  Scarica gratis{" "}
                  <span className="italic">
                    Le fondamenta della tua rimise en forme
                  </span>
                </h2>

                <p className="font-body leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Una guida pratica per chi è nel post parto e non sa da dove iniziare.
                  Ordine, chiarezza e i primi passi concreti per riprendere in mano il tuo benessere.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: <FileText className="w-3.5 h-3.5" />, text: "PDF immediato" },
                    { icon: <BookOpen className="w-3.5 h-3.5" />, text: "6 capitoli pratici" },
                    { icon: <Compass className="w-3.5 h-3.5" />, text: "Orientamento chiaro" },
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
                Non sei solə. Il post parto è uno dei periodi in cui le informazioni disponibili
                sono tantissime — e spesso si contraddicono. È normale sentirsi in mezzo a un caos.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Non sai da dove iniziare",
                    desc: "Senti il bisogno di fare qualcosa per il tuo corpo, ma ogni volta che cerchi una risposta ti trovi di fronte a mille opzioni diverse.",
                  },
                  {
                    title: "Le informazioni si contraddicono",
                    desc: "Qualcuno dice di aspettare, qualcuno di iniziare subito, qualcuno di fare yoga, qualcuno di evitarlo. Non capisci cosa è giusto per te.",
                  },
                  {
                    title: "Senti il tuo corpo diverso e non sai se è normale",
                    desc: "La pancia, il pavimento pelvico, la schiena, la stanchezza. Non sai cosa rientra nella normalità post parto e cosa merita attenzione.",
                  },
                  {
                    title: "Non sai a chi rivolgerti",
                    desc: "Ostetrica, fisioterapista pelvica, personal trainer, nutrizionista… ognuno ti manda in una direzione diversa.",
                  },
                  {
                    title: "Hai paura di fare danni",
                    desc: "Vorresti muoverti, riprendere a sentirti bene. Ma hai paura di sbagliare e peggiorare qualcosa.",
                  },
                  {
                    title: "Ti senti in ritardo o in colpa",
                    desc: "Le altre sembrano già \"tornate in forma\". Tu ancora no. E quel confronto pesa ogni giorno.",
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
                Voglio fare chiarezza →
              </a>
              <p className="text-xs text-muted-foreground font-body mt-3">
                ◇ PDF gratuito – ◇ Scaricabile subito – ◇ Di Michela e Moreno, Officina.MM
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
                <p className="text-white font-semibold font-body text-sm">Fai chiarezza</p>
                <p className="text-white/80 font-body text-xs">da dove iniziare davvero</p>
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
                ◆ Cosa significa davvero
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4 leading-tight">
                La rimise en forme{" "}
                <span className="italic" style={{ color: RED }}>
                  non è tornare a prima
                </span>
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                E capirlo cambia tutto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  La <strong>rimise en forme</strong> nel post parto non significa{" "}
                  <em style={{ color: RED }}>tornare al corpo che avevi prima</em>{" "}
                  nel minor tempo possibile. Significa ritrovare salute, forza e benessere
                  nel corpo che hai adesso — un corpo che ha appena fatto qualcosa di straordinario.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Significa capire come funziona il tuo pavimento pelvico, il tuo core, il tuo diaframma.
                  Significa sapere cosa chiedere ai professionisti giusti e smettere di cercare risposte
                  in mille posti diversi.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
                <p className="text-foreground font-body leading-relaxed text-lg mb-4">
                  Il problema non è che manchi la voglia.
                  Il problema è che nessuno ti ha mai dato un <strong>punto di partenza chiaro</strong>.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Questa guida nasce da anni di lavoro con donne nel post parto: i dubbi più comuni,
                  i miti più diffusi, le domande che in troppo poche hanno il coraggio di fare —
                  e le risposte che avrebbero dovuto ricevere subito.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 lg:p-8 border text-center"
                style={{ backgroundColor: RED + "10", borderColor: RED + "30" }}
              >
                <p className="text-foreground font-display font-bold text-xl mb-2">
                  Vuoi avere finalmente un punto di partenza?
                </p>
                <p className="text-muted-foreground font-body text-sm mb-5">
                  Scarica la guida gratuita di Michela e Moreno – Officina.MM.
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
              Cosa imparerai con{" "}
              <span className="italic" style={{ color: VIOLET }}>questa guida</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Sei capitoli concreti per mettere ordine, capire il tuo corpo
              e sapere finalmente da dove iniziare.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: <Compass className="w-5 h-5" />,
                color: RED,
                title: "Come fare chiarezza nel caos di informazioni",
                text: "Imparerai a distinguere cosa è davvero utile da quello che può aspettare, senza sentirti sopraffatta da mille voci diverse.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                color: VIOLET,
                title: "Quali sono le priorità reali del recupero",
                text: "Non tutto ha la stessa urgenza. Scoprirai cosa vale la pena fare adesso e cosa può aspettare un momento migliore.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                color: RED,
                title: "A chi rivolgerti (e perché questo cambia tutto)",
                text: "Conoscerai le figure professionali del post parto — ostetrica, fisioterapista pelvica, PT specializzata — e capirai quando e perché cercare ognuna di loro.",
              },
              {
                icon: <AlertCircle className="w-5 h-5" />,
                color: VIOLET,
                title: "Riconoscere i segnali del tuo corpo",
                text: "Imparerai a distinguere quello che è normale nel post parto da quello che merita attenzione professionale, senza ansia e senza sottovalutare.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                color: RED,
                title: "Smettere di sentirti in colpa o in ritardo",
                text: "Capirai perché confrontarsi con le altre non ha senso, e come rispettare i tempi del tuo corpo senza sentirti inadeguatə.",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                color: VIOLET,
                title: "I miti sul post parto che ti stanno bloccando",
                text: "Smontare le bugie che circolano sul \"tornare in forma\" ti libererà dall'ansia da prestazione e ti darà spazio per fare le cose davvero bene.",
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
              Scarica gratis la guida →
            </a>
            <p className="text-xs text-muted-foreground font-body mt-3">
              ◇ PDF gratuito – ◇ 6 capitoli pratici – ◇ Di Michela e Moreno, Officina.MM
            </p>
          </div>

        </div>
      </section>

      {/* ─── CURRICULUM SECTION ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-4 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ PDF gratuito – scaricabile subito
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              Cosa trovi{" "}
              <span className="italic" style={{ color: RED }}>dentro la guida</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              6 capitoli, uno per ogni fondamento. Concreti, chiari, scritti da chi lavora
              ogni giorno con donne nel post parto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
            {[
              { num: "01", title: "Dove sei adesso", desc: "Come riconoscere il tuo punto di partenza e capire cosa il tuo corpo sta attraversando in questo momento." },
              { num: "02", title: "Le priorità del recupero", desc: "Cosa vale la pena fare subito, cosa può aspettare, e perché l'ordine conta più della velocità." },
              { num: "03", title: "Chi può aiutarti", desc: "Le figure professionali del post parto: chi sono, cosa fanno e quando è il momento giusto per cercarle." },
              { num: "04", title: "I segnali da non ignorare", desc: "Come distinguere la normale fatica del post parto dai segnali che meritano attenzione professionale." },
              { num: "05", title: "I miti da sfatare", desc: "Le credenze più diffuse sul recupero post parto che ti stanno bloccando — o facendo sbagliare strada." },
              { num: "06", title: "Il primo passo concreto", desc: "Da oggi, cosa puoi fare. Un'azione sola, chiara e sostenibile per iniziare davvero, senza stress." },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col gap-3"
                style={{ borderColor: "hsl(30 20% 90%)", backgroundColor: "hsl(30 20% 97%)" }}
              >
                <span className="text-3xl font-bold font-display" style={{ color: RED + "35" }}>
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
              Voglio la guida gratuita →
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
              ◆ Chi ha scritto la guida
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              La guida è di{" "}
              <span className="italic" style={{ color: RED }}>Michela e Moreno</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Due professionisti che hanno aiutato centinaia di donne a ritrovare il contatto con il proprio corpo nel post parto.
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
                desc: "Con passione e delicatezza, Michela guida ogni persona nell'esplorazione del proprio corpo. Sa quanto sia difficile navigare il post parto, e per questo crea uno spazio sicuro in cui ogni domanda è benvenuta.",
              },
              {
                name: "Moreno",
                photo: "https://static.wixstatic.com/media/40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg/v1/crop/x_0,y_204,w_960,h_977/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Mori.jpg",
                role: "Infermiere e specialista in Movimento Funzionale",
                bio: [
                  "Dott. in Infermieristica esperto in Riabilitazione pelvi-perineale.",
                  "CrossTraining Coach esperto in gravidanza e post parto.",
                ],
                desc: "Moreno porta chiarezza e competenza in ogni contenuto. Con un approccio accessibile ma preciso, aiuta a capire il corpo nel post parto con rispetto e professionalità.",
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
              Tutto quello che vuoi sapere sulla guida. E se hai altre domande, scrivici!
            </p>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {[
              {
                q: "La guida è davvero gratuita?",
                a: "Sì, completamente. Non devi inserire nessuna carta di credito e non ci sono costi nascosti. Ti iscrivi con nome e email, e ricevi il PDF direttamente nella tua casella.",
              },
              {
                q: "Per chi è questa guida?",
                a: "È pensata per chi è nel post parto — vicino o lontano dal parto — e si sente sopraffatta dalle informazioni o non sa da dove iniziare. Non è necessaria nessuna esperienza con il fitness o la fisioterapia.",
              },
              {
                q: "Devo essere nel post parto immediato?",
                a: "No. La guida è utile sia se hai partorito da poche settimane, sia se il parto è passato da mesi o anni. I fondamenti del recupero valgono in qualsiasi momento tu decida di iniziare.",
              },
              {
                q: "Quanto tempo ci vuole per leggerla?",
                a: "È pensata per essere letta in circa 30-40 minuti. Pratica, diretta, senza fronzoli: vai al punto e hai subito quello che ti serve.",
              },
              {
                q: "Dopo la guida, c'è altro?",
                a: "La guida è un punto di partenza. Se dopo la lettura vuoi andare più in profondità, Michela e Moreno propongono percorsi guidati sul core e il pavimento pelvico. Troverai tutte le informazioni nel PDF.",
              },
              {
                q: "Ho una domanda, posso scrivervi?",
                a: (
                  <>
                    Assolutamente sì. Scrivici a{" "}
                    <a href="mailto:ciao@officinamm.com" style={{ color: RED, textDecoration: "underline" }}>
                      ciao@officinamm.com
                    </a>{" "}
                    e risponderemo appena possibile.
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
              PDF gratuito – scaricabile subito
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-6 leading-tight">
              È il momento di{" "}
              <span className="italic">avere un punto di partenza</span>
            </h2>

            <p className="text-white/80 font-body leading-relaxed mb-4 text-base sm:text-lg">
              Smetti di cercare risposte sparse. Scarica la guida gratuita di Michela e Moreno
              e inizia finalmente a capire come prenderti cura di te nel post parto,
              con chiarezza e senza sensi di colpa.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-body text-white/70">
              <span>◇ PDF gratuito</span>
              <span className="text-white/30">·</span>
              <span>◇ 6 capitoli pratici</span>
              <span className="text-white/30">·</span>
              <span>◇ Di Michela e Moreno</span>
            </div>

            <a
              href="#scarica"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "white", color: "#4a4580" }}
            >
              <Download className="w-4 h-4" />
              Scarica la guida gratuita →
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

export default FondamentaRimiseForme;
