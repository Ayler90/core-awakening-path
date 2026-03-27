import { motion } from "framer-motion";
import { Video, MessageCircle, Calendar, Users } from "lucide-react";

const RED = "#bd4033";

const benefits = [
  { icon: <Video className="w-6 h-6" />, text: "14 video guidati in 2 settimane" },
  { icon: <MessageCircle className="w-6 h-6" />, text: "Canale Telegram dedicato" },
  { icon: <Calendar className="w-6 h-6" />, text: "Inizia il 20 aprile" },
  { icon: <Users className="w-6 h-6" />, text: "+300 iscrittə nelle edizioni precedenti" },
];

const HeroBenefits = () => {
  return (
    <section
      className="py-10"
      style={{ background: "linear-gradient(160deg, hsl(38 40% 95%), hsl(20 50% 92%))" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-2 text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: RED + "15", color: RED }}
              >
                {b.icon}
              </div>
              <p className="text-base font-semibold font-body text-foreground leading-snug">
                {b.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBenefits;
