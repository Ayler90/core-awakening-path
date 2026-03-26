import { useState } from "react";
import { Users, Calendar, Video, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(30 25% 97%), hsl(38 40% 95%), hsl(20 50% 92%))",
      }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        style={{ backgroundColor: "#bd403314" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        style={{ backgroundColor: "hsl(145 20% 42% / 0.08)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-20 lg:pt-16 lg:pb-28 relative z-10">

        <div className="flex justify-start mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-body border"
            style={{
              backgroundColor: "#bd403318",
              borderColor: "#bd403340",
              color: "#bd4033",
            }}
          >
            ◆ Training live su Telegram · Inizia il 20 aprile
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-foreground mb-6">
              Perdite, pesantezza,{" "}
              <br className="hidden sm:block" />
              pancia che non torna?{" "}
              <span className="italic" style={{ color: "#bd4033" }}>
                Non sei solə.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4">
              Forse senti che qualcosa è cambiato nel tuo corpo — piccole perdite
              quando ridi o starnutisci, una sensazione di pesantezza, la pancia
              che non risponde più. E non sai da dove iniziare.
            </p>

            <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
              <strong className="text-foreground">CORE 101</strong> è un training
              gratuito di{" "}
              <strong className="text-foreground">
                2 settimane, dal vivo su Telegram
              </strong>
              , in cui Michela e Moreno ti guidano giorno dopo giorno a capire cosa
              succede nel tuo corpo — e a iniziare a prendertene cura, con dolcezza
              e senza stress.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: <Video className="w-4 h-4" />, text: "14 video guidati in 2 settimane" },
                { icon: <MessageCircle className="w-4 h-4" />, text: "Canale Telegram dedicato" },
                { icon: <Calendar className="w-4 h-4" />, text: "Inizia il 20 aprile" },
                { icon: <Users className="w-4 h-4" />, text: "+300 iscrittə nelle edizioni precedenti" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-body text-foreground">
                  <span style={{ color: "#bd4033" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {!submitted ? (
              <div className="space-y-4" id="iscrizione">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="La tua email migliore"
                    className="flex-1 px-5 py-3.5 rounded-lg border border-border bg-background/80 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-lg text-white font-semibold font-body shadow-sm hover:opacity-90 transition-all whitespace-nowrap"
                    style={{ backgroundColor: "#bd4033" }}
                  >
                    Voglio iscrivermi →
                  </button>
                </form>
                <div>
                  <a
                    href="#programma"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 font-semibold font-body text-sm transition-all hover:bg-foreground/5"
                    style={{ borderColor: "#bd4033", color: "#bd4033" }}
                  >
                    Scopri il programma ↓
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-5 max-w-lg">
                <p className="text-green-800 font-semibold font-body text-lg">✓ Benvenutə!</p>
                <p className="text-green-700 font-body mt-1 text-sm">
                  Controlla la tua email — ti invieremo il link al canale Telegram prima del 20 aprile.
                </p>
              </div>
            )}

            <p className="text-sm text-muted-foreground mt-4 font-body">
              ✓ Completamente gratuito · ✓ Dal vivo su Telegram · ✓ Nessuna carta richiesta
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://static.wixstatic.com/media/40e4ee_51df092982b84d3cb2b271e3629b6c1b~mv2.jpg/v1/crop/x_0,y_94,w_4500,h_4312/fill/w_860,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bacino%20illustrato%20Pavimento%20pelvico_scritte.jpg"
                alt="Illustrazione del pavimento pelvico"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-border">
              <p className="text-sm font-semibold text-foreground font-body">Con Michela & Moreno</p>
              <p className="text-xs text-muted-foreground font-body">OfficinaMM · Dal vivo su Telegram</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
