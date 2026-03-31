import { Video, MessageCircle, CalendarDays } from "lucide-react";

const RED = "#bd4033";

const features = [
  {
    icon: <Video className="w-5 h-5" />,
    title: "5 settimane",
    text: "Video guidati da 10 min al giorno, progressivi e mirati",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Supporto quotidiano",
    text: "Gruppo Telegram dedicato con contatto diretto ogni giorno",
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    title: "2 LIVE in diretta",
    text: "Sessioni dal vivo per confrontarti e allenarti insieme",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 97%)" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
            >
              ◆ Bonus speciale per i partecipanti
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-5 leading-tight">
              Dopo CORE 101, si apre{" "}
              <span className="italic" style={{ color: RED }}>Core Foundation</span>
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-7">
              CORE 101 è solo l'inizio. Al termine del training gratuito,
              apriremo le iscrizioni a{" "}
              <strong>CORE FOUNDATION</strong> - il percorso completo per
              allenare il tuo pavimento pelvico e core profondo con esercizi quotidiani guidati.
            </p>

            <div
              className="rounded-xl p-5 mb-8 border"
              style={{ backgroundColor: RED + "08", borderColor: RED + "25" }}
            >
              <p className="font-bold font-display text-sm text-foreground mb-1">
                🎁 Bonus speciale per chi partecipa al training live
              </p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                Chi segue CORE 101 dal vivo su Telegram avrà accesso a un{" "}
                <strong style={{ color: RED }}>bonus esclusivo</strong>{" "}
                riservato solo ai partecipanti del training. I dettagli verranno svelati durante il percorso!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: RED + "15", color: RED }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold font-body text-sm text-foreground">{f.title}</p>
                    <p className="text-xs text-muted-foreground font-body">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://static.wixstatic.com/media/40e4ee_9447390c95e64e6580b911076248d791~mv2.jpg/v1/crop/x_521,y_144,w_3556,h_2639/fill/w_642,h_476,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michi_Percorsi%20online.jpg"
                alt="Michela e Moreno di OfficinaMM"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-4 rounded-xl p-4 shadow-lg border"
              style={{ backgroundColor: "hsl(30 25% 97%)", borderColor: RED + "20" }}
            >
              <p className="font-bold font-display text-sm" style={{ color: RED }}>Michela & Moreno</p>
              <p className="text-xs text-muted-foreground font-body">OfficinaMM</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BonusSection;
