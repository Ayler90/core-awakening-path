import { motion } from "framer-motion";
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
              style={{
                backgroundColor: "#bd403312",
                borderColor: "#bd403330",
                color: "#bd4033",
              }}
            >
              ◆ Training live su Telegram - inizia il 20 aprile
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3 leading-tight">
              Iscriviti gratis a{" "}
              <span className="italic" style={{ color: "#bd4033" }}>
                CORE 101
              </span>
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              14 video dal vivo su Telegram in 2 settimane - per iniziare a capire
              il tuo corpo e riprendere in mano il tuo benessere. Con Michela e
              Moreno, ogni giorno al tuo fianco.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: <Video className="w-3.5 h-3.5" />, text: "14 video guidati" },
                { icon: <MessageCircle className="w-3.5 h-3.5" />, text: "Canale Telegram dedicato" },
                { icon: <Calendar className="w-3.5 h-3.5" />, text: "Inizia il 20 aprile" },
                { icon: <Users className="w-3.5 h-3.5" />, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                  <span style={{ color: "#bd4033" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div id="iscrizione">
              <MailerLiteForm />
            </div>

            <p className="text-xs text-muted-foreground font-body mt-4">
              ✓ Completamente gratuito - ✓ Nessuna carta richiesta - ✓ Puoi cancellarti quando vuoi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
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
              <p className="text-xs text-muted-foreground font-body">OfficinaMM - Dal vivo su Telegram</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
