import { Calendar, MessageCircle, Users, Video } from "lucide-react";
import MailerLiteForm from "@/components/MailerLiteForm";

const RegistrationSection = () => {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(160deg, hsl(30 25% 97%), hsl(20 50% 94%))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto"
          style={{ backgroundColor: "#bd4033" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                }}
              >
                ◆ Training Gratuito su Telegram - inizia il 20 aprile
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3 leading-tight">
                Iscriviti gratis a{" "}
                <span className="italic">
                  CORE 101
                </span>
              </h2>

              <p className="font-body leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Training gratuito di 2 settimane con 14 video sul pavimento pelvico,
                con assistenza live su Telegram con Michela e Moreno - per iniziare
                a capire il tuo corpo e riprendere in mano il tuo benessere.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Video className="w-3.5 h-3.5" />, text: "14 video giornalieri" },
                  { icon: <MessageCircle className="w-3.5 h-3.5" />, text: "Canale Telegram dedicato" },
                  { icon: <Calendar className="w-3.5 h-3.5" />, text: "Inizia il 20 aprile" },
                  { icon: <Users className="w-3.5 h-3.5" />, text: "100% gratuito" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-body" style={{ color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: "rgba(255,255,255,0.9)" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div id="iscrizione">
                <MailerLiteForm />
              </div>

              <p className="text-xs font-body mt-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                ✓ Completamente gratuito - ✓ Nessuna carta richiesta - ✓ Puoi cancellarti quando vuoi
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                <img
                  src="https://static.wixstatic.com/media/40e4ee_19fed71ae15c4d6d8abe2d1d3ddb5356~mv2.jpg/v1/crop/x_218,y_399,w_1588,h_1521/fill/w_860,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michela%20e%20Moreno%202.jpg"
                  alt="Michela e Moreno di OfficinaMM"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-5 -left-4 rounded-xl p-4 shadow-lg border"
                style={{ backgroundColor: "hsl(30 25% 97%)", borderColor: "#bd403320" }}
              >
                <p className="font-bold font-display text-sm" style={{ color: "#bd4033" }}>Michela & Moreno</p>
                <p className="text-xs text-muted-foreground font-body">Officina.MM - Training Gratuito su Telegram</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
