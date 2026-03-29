import { Send, Users } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4a4580 0%, #6b5fa6 60%, #5a4f96 100%)",
      }}
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
            <Send className="w-3 h-3" />
            Training live su Telegram - dal 20 aprile - 100% gratuito
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-6 leading-tight">
            È il momento di{" "}
            <span className="italic">prenderti cura di te</span>
          </h2>

          <p className="text-white/80 font-body leading-relaxed mb-4 text-base sm:text-lg">
            14 video gratuiti, dal vivo su Telegram, per iniziare a capire
            cosa succede nel tuo corpo e ritrovare il contatto con il tuo
            core profondo. Con Michela e Moreno, al tuo fianco ogni giorno.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm font-body text-white/70">
            <span className="flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5" />
              Si parte il <strong className="text-white">20 aprile</strong> su Telegram
            </span>
            <span className="text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <strong className="text-white">+300</strong> iscrittə nelle edizioni precedenti
            </span>
          </div>

          <a
            href="#iscrizione"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold font-body text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: "white", color: "#4a4580" }}
          >
            Voglio partecipare →
          </a>

          <p className="text-white/50 font-body text-xs mt-5">
            ◇ 100% Gratuito - ◇ Dal vivo su Telegram - ◇ Con Michela & Moreno
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
