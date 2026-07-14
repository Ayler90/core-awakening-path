import { useEffect, useRef, useState } from "react";
import {
  MessageCircle, Compass, CheckCircle2,
  Users, Heart, Zap, Activity, Eye,
  ChevronDown,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import PageMeta from "@/components/PageMeta";

const RED = "#AF2B43";
const VIOLET = "#61438C";

const sliderItems = [
  "◆ Chiamata gratuita",
  "◇ 30 minuti · Online",
  "◆ Pavimento pelvico · Diastasi · Post parto",
  "◇ Una direzione chiara per il tuo corpo",
  "◆ Con Michela e Moreno",
  "◇ Vita sessuale · Incontinenza · Allenamento",
  "◆ Officina.MM",
  "◇ Non esercizi a caso. Una mappa.",
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
    <div className="w-full overflow-hidden py-4 border-y border-border" style={{ backgroundColor: VIOLET }}>
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

const GratuitaBadge = () => (
  <p className="text-xs font-body text-muted-foreground flex items-center justify-center gap-1.5 mt-1">
    <span className="relative flex h-2 w-2 shrink-0">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: RED }}
      />
      <span
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: RED }}
      />
    </span>
    La call è gratuita
  </p>
);

const faqs = [
  {
    q: "La call è davvero gratuita?",
    a: "Sì, completamente. Non ti chiediamo nessun pagamento per prenotarla o partecipare. È il nostro modo di conoscerti e capire come possiamo aiutarti.",
  },
  {
    q: "Quanto dura?",
    a: "30 minuti. Un tempo sufficiente per raccontare la tua situazione, capire cosa sta succedendo e uscire con una direzione chiara.",
  },
  {
    q: "Come si svolge?",
    a: "Online, via video call. Ti basta un telefono o un computer con connessione internet. Riceverai il link dopo la prenotazione.",
  },
  {
    q: "Chi sarà in call con me?",
    a: "Michela e/o Moreno di Officina.MM, a seconda della tua situazione specifica. Professionisti specializzati nel pavimento pelvico, nella riabilitazione pelvi-perineale e nel movimento post parto.",
  },
  {
    q: "Devo avere già un problema specifico per prenotare?",
    a: "No. Basta avere un dubbio, una sensazione che non sai come interpretare, o semplicemente non sapere da dove partire. Questo spazio esiste esattamente per questo.",
  },
  {
    q: "Cosa succede dopo la call?",
    a: "Ti daremo una direzione chiara: cosa fare, in che ordine e perché. Se ha senso continuare insieme con un percorso, te lo proporremo. Senza pressioni.",
  },
];

const YoutubeFacade = ({ videoId, className = "" }: { videoId: string; className?: string }) => {
  const [active, setActive] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer ${className}`}
      style={{ paddingBottom: "56.25%" }}
      onClick={() => setActive(true)}
    >
      {active ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`}
          title="Video di presentazione"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={thumb}
            alt="Anteprima video"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
              style={{ backgroundColor: RED }}
            >
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


const CallConoscitiva = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="pt-16">
      <PageMeta
        title="Prenota la Tua Chiamata Gratuita di 30 Minuti | OfficinaMM"
        description="Prenota una chiamata gratuita di 30 minuti con Michela e Moreno di OfficinaMM. Parliamo della tua situazione: pavimento pelvico, diastasi, post parto e incontinenza."
      />
      <NavBar showCountdown={false} ctaText="Prenota la call gratuita" ctaHref="#prenota" centerCta />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 pt-10 pb-20 lg:pt-14 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border mb-6"
                style={{ backgroundColor: VIOLET + "18", borderColor: VIOLET + "40", color: VIOLET }}
              >
                ◆ Chiamata gratuita · 30 minuti · Online
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-foreground mb-6">
                Il tuo pavimento pelvico non risponde più come prima?{" "}
                <span className="italic" style={{ color: RED }}>
                  Parliamone, insieme.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
                Non sai se quello che senti è normale, non sai a chi rivolgerti, non sai da dove
                partire, o hai già provato qualcosa ma senza risultati concreti.
              </p>

              <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
                La call conoscitiva è uno spazio di{" "}
                <strong className="text-foreground">30 minuti</strong> con Michela e Moreno in cui
                guardiamo insieme la tua situazione specifica e ti diamo una direzione chiara.
                Non esci con una lista di esercizi a caso. Esci sapendo{" "}
                <strong className="text-foreground">cosa fare, in che ordine e perché.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-2">
                <a
                  href="#prenota"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg text-white font-semibold font-body text-base shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  Prenota la call →
                </a>
                <a
                  href="#come-funziona"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 font-semibold font-body text-base transition-all hover:bg-foreground/5"
                  style={{ borderColor: VIOLET, color: VIOLET }}
                >
                  Come funziona ↓
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-4 font-body">
                ✓ Online · ✓ 30 minuti · ✓ Gratuita · ✓ Con Michela e Moreno di Officina.MM
              </p>
            </div>

            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] flex items-center justify-center"
                style={{ backgroundColor: VIOLET + "10" }}
              >
                <div className="text-center p-8">
                  <MessageCircle className="w-16 h-16 mx-auto mb-3" style={{ color: VIOLET + "60" }} />
                  <p className="text-sm font-body" style={{ color: VIOLET + "80" }}>Immagine call conoscitiva</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border max-w-xs">
                <p className="text-sm font-bold font-display leading-snug" style={{ color: RED }}>
                  Non ti diciamo cosa fare in astratto. Guardiamo la tua situazione specifica.
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">Call conoscitiva · Officina.MM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SliderStrip />


      {/* Video di presentazione */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-2">
              Un messaggio per te da{" "}
              <span className="italic" style={{ color: RED }}>Michela e Moreno</span>
            </h2>
          </div>
          <YoutubeFacade videoId="rh_qr6ija9U" />
        </div>
      </section>
      {/* COME FUNZIONA */}
      <section
        id="come-funziona"
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(20 50% 94%))" }}
      >
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: VIOLET + "12", borderColor: VIOLET + "30", color: VIOLET }}
            >
              ◆ Come funziona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              30 minuti.{" "}
              <span className="italic" style={{ color: RED }}>Una direzione chiara.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Non è una sessione generica. È una conversazione strutturata attorno alla tua situazione specifica.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                icon: <MessageCircle className="w-5 h-5" />,
                title: "Racconti la tua situazione",
                desc: "Nella prima parte raccogliamo la tua storia: i tuoi sintomi, cosa hai già provato, come ti senti nel corpo adesso. Nessun giudizio, nessuna fretta.",
              },
              {
                num: "02",
                icon: <Eye className="w-5 h-5" />,
                title: "Guardiamo insieme",
                desc: "Analizziamo la tua situazione: il punto di partenza, i segnali del corpo, cosa ha senso fare e cosa no. Una lettura chiara, senza giri di parole.",
              },
              {
                num: "03",
                icon: <Compass className="w-5 h-5" />,
                title: "Esci con una mappa",
                desc: "Non con altri esercizi a caso. Esci sapendo cosa fare, in che ordine e perché, pensato per la tua storia specifica e non per un caso generico.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-6 border border-border shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold font-display" style={{ color: VIOLET + "30" }}>
                    {step.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: VIOLET + "15", color: VIOLET }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold font-display text-base text-foreground leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col items-center gap-1">
            <a
              href="#prenota"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Prenota la call →
            </a>
            <GratuitaBadge />
          </div>

        </div>
      </section>

      {/* PER CHI È */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
              >
                ◆ Per chi è pensata
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
                Hai un problema o un dubbio{" "}
                <span className="italic" style={{ color: RED }}>sul tuo corpo?</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
                Questo spazio è per te se ti riconosci in almeno una di queste situazioni.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Non sai se quello che senti è normale",
                    desc: "Hai un sintomo, una sensazione, qualcosa che ti preoccupa. Ma non sai se hai bisogno di una visita, di un percorso, o se è qualcosa che si risolve da solo.",
                  },
                  {
                    title: "Non sai a chi rivolgerti o da dove partire",
                    desc: "Hai cercato informazioni, hai letto, forse hai anche provato qualcosa. Ma non riesci a trovare un punto di partenza chiaro per la tua situazione specifica.",
                  },
                  {
                    title: "Hai già provato qualcosa, ma senza risultati stabili",
                    desc: "Esercizi, programmi, consigli di vario tipo. Qualcosa ha funzionato un po', ma non è durato. Vuoi capire cosa ti manca e come procedere davvero.",
                  },
                  {
                    title: "Hai poco tempo e vuoi usarlo nel modo più efficace",
                    desc: "La tua vita è densa. Non puoi permetterti di andare a tentativi. Vuoi investire le tue energie in modo mirato, sulla cosa giusta per te.",
                  },
                  {
                    title: "Stai aspettando una visita e vuoi sapere cosa fare nel frattempo",
                    desc: "Hai un appuntamento, stai cercando un professionista, stai aspettando. Nel frattempo vuoi capire cosa è utile fare e cosa è meglio evitare.",
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

              <div className="flex flex-col items-center gap-0">
                <a
                  href="#prenota"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all"
                  style={{ backgroundColor: RED }}
                >
                  Prenota la call →
                </a>
                <GratuitaBadge />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl p-6 border border-border"
                style={{ backgroundColor: "hsl(30 20% 97%)" }}
              >
                <h3 className="font-bold font-display text-foreground mb-4 text-lg">Cosa puoi portare in call</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Heart className="w-4 h-4" />, text: "Pavimento pelvico" },
                    { icon: <Activity className="w-4 h-4" />, text: "Diastasi addominale" },
                    { icon: <Zap className="w-4 h-4" />, text: "Incontinenza" },
                    { icon: <Users className="w-4 h-4" />, text: "Vita sessuale" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Post parto" },
                    { icon: <Activity className="w-4 h-4" />, text: "Allenamento" },
                    { icon: <Heart className="w-4 h-4" />, text: "Gravidanza" },
                    { icon: <MessageCircle className="w-4 h-4" />, text: "Qualsiasi dubbio" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border"
                    >
                      <span style={{ color: VIOLET }}>{item.icon}</span>
                      <span className="text-sm font-body text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: VIOLET + "08", borderColor: VIOLET + "25" }}
              >
                <p className="text-foreground font-body font-semibold text-sm mb-2">
                  "Non so se il mio problema è abbastanza importante da meritare una call."
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Se hai un dubbio che ti gira in testa da settimane o mesi, è già abbastanza.
                  Questo spazio esiste esattamente per questo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MICHELA E MORENO */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 97%)" }}>
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Con chi parlerai
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
              La call è con{" "}
              <span className="italic" style={{ color: RED }}>Michela e Moreno</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Professionisti specializzati nel pavimento pelvico, nel movimento in gravidanza e nel
              post parto, e nella salute sessuale.
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
                desc: "Con passione e delicatezza, Michela guida ogni persona nell'esplorazione del proprio corpo. Sa quanto sia difficile il post parto, e per questo crea uno spazio sicuro, in cui ogni domanda è benvenuta e ogni passo è rispettato.",
              },
              {
                name: "Moreno",
                photo: "https://static.wixstatic.com/media/40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg/v1/crop/x_0,y_204,w_960,h_977/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Mori.jpg",
                role: "Infermiere e specialista in Movimento Funzionale",
                bio: [
                  "Dott. in Infermieristica esperto in Riabilitazione pelvi-perineale.",
                  "CrossTraining Coach esperto in gravidanza e post parto.",
                ],
                desc: "Moreno porta chiarezza e competenza in ogni contenuto. Con un approccio professionale ma accessibile, accompagna nelle pratiche con attenzione al dettaglio e rispetto per il corpo.",
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

          <div className="text-center mt-12 flex flex-col items-center gap-1">
            <a
              href="#prenota"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Prenota la call con loro →
            </a>
            <GratuitaBadge />
          </div>

        </div>
      </section>

      {/* VIDEO TESTIMONIANZE */}
      <VideoTestimonialsSection />

      {/* CALENDLY */}
      <section
        id="prenota"
        className="py-20 lg:py-28 relative overflow-hidden"
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
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-body border border-white/30 text-white/80 mb-8">
              ◆ Scegli il tuo orario
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-4 leading-tight">
              Prendiamoci 30 minuti insieme, gratuitamente, e parliamo di te e del tuo corpo.
            </h2>
            <p className="text-white/80 font-body leading-relaxed text-base sm:text-lg">
              Scegli il giorno e l'orario che preferisci. La call dura 30 minuti ed è online.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/iscrizioni-officinamm/30min"
              style={{ minWidth: "320px", height: "950px" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

          <div className="text-center mb-14">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: VIOLET + "12", borderColor: VIOLET + "30", color: VIOLET }}
            >
              ◆ Domande frequenti
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground leading-tight">
              Hai qualche dubbio{" "}
              <span className="italic" style={{ color: RED }}>sulla call?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold font-body text-foreground text-sm sm:text-base">
                  {faq.q}
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: VIOLET }}
                  />
                </summary>
                <p className="px-6 pb-5 text-sm text-muted-foreground font-body leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col items-center gap-1">
            <a
              href="#prenota"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              Prenota la call →
            </a>
            <GratuitaBadge />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CallConoscitiva;
