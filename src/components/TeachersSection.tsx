import { motion } from "framer-motion";

const RED = "#bd4033";

const teachers = [
  {
    name: "Michela",
    photo: "https://static.wixstatic.com/media/40e4ee_5975f0a365f8489185bace7f83a0dca2~mv2.jpg/v1/crop/x_0,y_60,w_960,h_1038/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Michi.jpg",
    role: "Esperta in Pavimento Pelvico e Core",
    bio: [
      "Dott.ssa in Educazione Professionale socio-sanitaria ed Educazione Sessuale.",
      "Personal Trainer esperta nel movimento in gravidanza e post parto.",
    ],
    description:
      "Con passione e delicatezza, Michela ti guida nell'esplorazione del tuo corpo. Sa quanto possa essere difficile parlare di certi argomenti - e per questo crea uno spazio sicuro, dove ogni domanda è benvenuta e ogni passo è rispettato.",
  },
  {
    name: "Moreno",
    photo: "https://static.wixstatic.com/media/40e4ee_c1421113ec974ee187a7e6c7198798de~mv2.jpg/v1/crop/x_0,y_204,w_960,h_977/fill/w_746,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foto%20Mori.jpg",
    role: "Specialista in Movimento Funzionale",
    bio: [
      "Dott. Infermiere esperto in Riabilitazione pelvi-perineale.",
      "CrossTraining Coach esperto in gravidanza e post parto.",
    ],
    description:
      "Moreno porta chiarezza e competenza in ogni lezione. Con un approccio professionale ma accessibile, ti accompagna negli esercizi pratici con attenzione al dettaglio e rispetto per il tuo corpo.",
  },
];

const TeachersSection = () => {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "hsl(30 25% 97%)" }}>
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6"
            style={{ backgroundColor: RED + "12", borderColor: RED + "30", color: RED }}
          >
            ◆ Dal vivo su Telegram - dal 20 aprile
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 leading-tight">
            Ecco chi ti guiderà nel{" "}
            <span className="italic" style={{ color: RED }}>training live</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Due professionisti che hanno aiutato centinaia di persone a ritrovare il contatto con il proprio corpo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teachers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
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
                  {t.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#iscrizione"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-body text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: RED }}
          >
            Voglio seguire il training con loro →
          </a>
          <p className="text-xs text-muted-foreground font-body mt-3">
            ◇ Gratuito - ◇ Dal 20 aprile su Telegram
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TeachersSection;
